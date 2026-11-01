import Link from 'next/link';
export default function NotFound() {
  return <main style={{minHeight:'100vh',display:'grid',placeContent:'center',textAlign:'center',background:'#090a0b',color:'#fff',gap:18,padding:20}}>
    <p style={{letterSpacing:5,color:'#898d93'}}>ERROR / 404</p><h1 style={{fontSize:72,margin:0}}>Lost in the void.</h1>
    <Link href="/en" style={{color:'#fff',textDecoration:'underline'}}>Return to portfolio →</Link>
  </main>;
}
