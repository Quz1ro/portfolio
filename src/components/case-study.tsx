'use client';

import {useTranslations} from 'next-intl';
import {ArrowLeft, ArrowUpRight, Github, Layers3, ScanFace, Sparkles, Shield, Workflow} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {identity,projectTechnologies} from '@/lib/data';
import {SiteHeader} from './site-header';
import {FigureArt} from './figure-art';

export function CaseStudy(){
  const t=useTranslations('Case');
  const features=[{icon:<ScanFace/>,title:t('f1'),text:t('f1desc')},{icon:<Sparkles/>,title:t('f2'),text:t('f2desc')},{icon:<Shield/>,title:t('f3'),text:t('f3desc')},{icon:<Workflow/>,title:t('f4'),text:t('f4desc')}];
  return <><div className="ambient-grid"/><SiteHeader/><main className="case-page container">
    <Link href="/#work" className="case-back"><ArrowLeft size={16}/>{t('back')}</Link>
    <div className="case-head"><span className="section-index">{t('eyebrow')}</span><h1>{t('title')}<span className="hero-title-dot">.</span></h1><p>{t('subtitle')}</p><div className="case-actions"><a href={identity.project} target="_blank" rel="noreferrer" className="button button-light"><Github size={17}/>{t('source')}<ArrowUpRight size={17}/></a><span className="case-offline"><span className="status-indicator"/>{t('offline')}</span></div></div>
    <div className="case-hero-art"><div className="case-art-label"><span>COMPUTER VISION // AI ANALYSIS</span><span>FIG 001 / CONCEPT</span></div><FigureArt compact/><div className="case-art-bottom"><span>POSE ESTIMATION</span><span>IMAGE-BASED EXPLORATION</span></div></div>
    <section className="case-section case-overview"><div><span className="section-index">{t('overview')}</span><h2>{t('overviewTitle')}</h2></div><p>{t('overviewText')}</p></section>
    <section className="case-section"><div className="case-section-head"><span className="section-index">{t('technical')}</span><h2>{t('technicalTitle')}</h2></div><div className="architecture">
      {[t('stage1'),t('stage2'),t('stage3'),t('stage4')].map((step,i)=><div className="architecture-step" key={step}><span>0{i+1}</span><Layers3 size={18}/><strong>{step}</strong>{i!==3&&<span className="architecture-arrow">→</span>}</div>)}
    </div><div className="case-tags"><span className="overline">{t('techTitle')}</span><div className="skill-pills">{projectTechnologies.map(x=><span key={x}>{x}</span>)}</div></div></section>
    <section className="case-section"><div className="case-section-head"><span className="section-index">{t('features')}</span><h2>{t('featuresTitle')}</h2></div><div className="case-features">{features.map((feature,i)=><div className="case-feature" key={feature.title}><div className="case-feature-index">0{i+1} / 04 <span>{feature.icon}</span></div><h3>{feature.title}</h3><p>{feature.text}</p></div>)}</div></section>
    <section className="case-section case-overview"><div><span className="section-index">{t('contribution')}</span><h2>{t('contributionTitle')}</h2></div><p>{t('contributionText')}</p></section>
    <section className="case-section case-overview"><div><span className="section-index">{t('limitations')}</span><h2>{t('limitationsTitle')}</h2></div><div><p>{t('limitationsText')}</p><div className="case-disclaimer">{t('disclaimer')}</div><p className="case-readme">{t('repoReadme')}</p></div></section>
    <div className="case-next"><span>{t('end')}</span><Link href="/#work">{t('back')} <ArrowUpRight size={18}/></Link></div>
  </main><footer className="footer case-footer"><div className="container footer-bottom"><span>© {new Date().getFullYear()} KOVALEVYCH VADYM</span><a href={identity.github} target="_blank" rel="noreferrer">GITHUB ↗</a><span>UA / EN ✳</span></div></footer></>;
}
