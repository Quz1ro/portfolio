import {NextResponse} from 'next/server';

export const runtime='nodejs';

const targetEmail=process.env.CONTACT_TO_EMAIL || 'kovalevich.vadimm@gmail.com';
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request:Request){
  try {
    // Reject requests from a clearly foreign browser origin.
    const origin=request.headers.get('origin');
    const host=request.headers.get('host');
    if(origin && host && new URL(origin).host!==host){
      return NextResponse.json({error:'Origin not allowed'},{status:403});
    }
    const raw=await request.text();
    if(raw.length>12_000) return NextResponse.json({error:'Request too large'},{status:413});
    const body=JSON.parse(raw) as Record<string,unknown>;
    const name=typeof body.name==='string'?body.name.trim():'';
    const email=typeof body.email==='string'?body.email.trim():'';
    const message=typeof body.message==='string'?body.message.trim():'';
    if(body.website){return NextResponse.json({ok:true});} // Honeypot: silently ignore bots.
    if(name.length<2||name.length>100||!emailPattern.test(email)||email.length>250||message.length<10||message.length>4000){
      return NextResponse.json({error:'Invalid input'},{status:400});
    }
    // Web3Forms is the simplest no-domain path: get a key linked to your email.
    const web3formsKey=process.env.WEB3FORMS_ACCESS_KEY;
    if(web3formsKey){
      const forwarded=await fetch('https://api.web3forms.com/submit',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({access_key:web3formsKey,name,email,message,
          subject:`Portfolio message from ${name.replace(/[\r\n]/g,' ')}`,from_name:'Kovalevych Portfolio',botcheck:''}),
        cache:'no-store'
      });
      const result=await forwarded.json().catch(()=>null) as {success?:boolean}|null;
      if(!forwarded.ok || !result?.success){
        console.error('Contact provider rejected the request',forwarded.status);
        return NextResponse.json({error:'Email provider unavailable'},{status:502});
      }
      return NextResponse.json({ok:true});
    }
    const apiKey=process.env.RESEND_API_KEY;
    const from=process.env.RESEND_FROM_EMAIL;
    if(!apiKey||!from){return NextResponse.json({error:'Email service not configured'},{status:503});}

    const response=await fetch('https://api.resend.com/emails',{
      method:'POST',
      headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},
      body:JSON.stringify({from,to:[targetEmail],reply_to:email,subject:`Portfolio message from ${name.replace(/[\r\n]/g,' ')}`,
        text:`Name: ${name}\nEmail: ${email}\n\n${message}`}),
      cache:'no-store'
    });
    if(!response.ok){
      console.error('Contact email provider rejected submission',response.status);
      return NextResponse.json({error:'Provider rejected the message'},{status:502});
    }
    return NextResponse.json({ok:true});
  }catch{
    return NextResponse.json({error:'Could not process message'},{status:400});
  }
}
