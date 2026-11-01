'use client';

import {useTranslations} from 'next-intl';
import {ArrowUpRight} from 'lucide-react';
import {identity} from '@/lib/data';

export function ContactForm() {
  const t = useTranslations('Contact');
  return <div className="contact-form">
    <div className="form-header"><span className="label-xs">{t('formTitle')}</span><span>↗</span></div>
    <p>{t('emailDescription')}</p>
    <a href={`mailto:${identity.email}`} className="button button-light button-submit">
      {t('emailMe')} <ArrowUpRight size={17}/>
    </a>
  </div>;
}
