'use client';

import {useState, type FormEvent} from 'react';
import {useTranslations} from 'next-intl';
import {ArrowUpRight, LoaderCircle} from 'lucide-react';
import {identity} from '@/lib/data';

export function ContactForm(){
  const t=useTranslations('Contact');
  const [status,setStatus]=useState<'idle'|'loading'|'success'|'error'|'config'>('idle');
  const onSubmit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const form=event.currentTarget;
    const data=new FormData(form);
    setStatus('loading');
    try {
      const response=await fetch('/api/contact',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name:data.get('name'),email:data.get('email'),message:data.get('message'),website:data.get('website')})
      });
      if(response.ok){setStatus('success');form.reset();}
      else setStatus(response.status===503?'config':'error');
    } catch {setStatus('error');}
  };
  return <form className="contact-form" onSubmit={onSubmit}>
    <div className="form-header"><span className="label-xs">{t('formTitle')}</span><span>↗</span></div>
    <div className="form-row">
      <label>{t('name')}<input name="name" autoComplete="name" placeholder={t('namePlaceholder')} maxLength={100} required/></label>
      <label>{t('email')}<input name="email" type="email" autoComplete="email" placeholder={t('emailPlaceholder')} maxLength={250} required/></label>
    </div>
    <label>{t('message')}<textarea name="message" placeholder={t('messagePlaceholder')} rows={5} minLength={10} maxLength={4000} required/></label>
    <label className="honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off"/></label>
    <button type="submit" className="button button-light button-submit" disabled={status==='loading'}>
      {status==='loading'?<><LoaderCircle className="spin" size={17}/>{t('sending')}</>:<>{t('send')}<ArrowUpRight size={17}/></>}
    </button>
    {status!=='idle'&&status!=='loading'&&<p className={`form-feedback ${status==='success'?'form-success':'form-failure'}`} role="status">
      {t(status)} {status!=='success'&&<a href={`mailto:${identity.email}`}>{t('emailMe')} ↗</a>}
    </p>}
    <p className="form-privacy">{t('privacy')}</p>
  </form>;
}
