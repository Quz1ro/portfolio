'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'motion/react';
import {ArrowDown, ArrowRight, ArrowUpRight, Braces, CircleDot, Code2, Database, Github, Layers3, Mail, Sparkles} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {identity} from '@/lib/data';
import {SiteHeader} from './site-header';
import {TerminalPanel} from './terminal';
import {FigureArt} from './figure-art';
import {ContactForm} from './contact-form';

function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}) {
  return <motion.div className={className} initial={{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.7,delay,ease:[.2,.75,.2,1]}}>{children}</motion.div>;
}
function SectionTitle({eyebrow,children}:{eyebrow:string;children:React.ReactNode}){
  return <div className="section-heading"><span className="section-index">{eyebrow}</span><h2>{children}</h2></div>;
}
function SectionTop(){return <div className="section-ruler"><span>+</span><span>+</span></div>;}

export function Landing(){
  const h=useTranslations('Hero'), s=useTranslations('Stats'), a=useTranslations('About'), sk=useTranslations('Skills'), w=useTranslations('Work'), j=useTranslations('Journey'), c=useTranslations('Contact'), f=useTranslations('Footer');
  const interests=[a('i1'),a('i2'),a('i3'),a('i4')];
  const skillGroups=[
    {number:'01',icon:<Code2 size={20}/>,title:sk('cat1'),subtitle:sk('cat1sub'),items:['HTML','CSS','JavaScript','DOM']},
    {number:'02',icon:<Braces size={20}/>,title:sk('cat2'),subtitle:sk('cat2sub'),items:['C','C++','C#','OOP']},
    {number:'03',icon:<Database size={20}/>,title:sk('cat3'),subtitle:sk('cat3sub'),items:['MySQL','PostgreSQL',sk('dbDesc')]},
    {number:'04',icon:<Layers3 size={20}/>,title:sk('cat4'),subtitle:sk('cat4sub'),items:[sk('gitDesc'),sk('testDesc')]}
  ];
  const journey=[
    {no:'01',title:j('step1'),text:j('step1desc')},
    {no:'02',title:j('step2'),text:j('step2desc')},
    {no:'03',title:j('step3'),text:j('step3desc')},
    {no:'04',title:j('step4'),text:j('step4desc')}
  ];
  return <>
    <div className="ambient-grid" aria-hidden="true"/>
    <SiteHeader/>
    <main id="top">
      <section className="hero-section container" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line"/>{h('eyebrow')}</div>
          <h1 id="hero-title" className="hero-title"><span className="hero-intro">{h('greeting')}</span><br/><strong>{h('name')}</strong><span className="hero-title-dot">_</span></h1>
          <div className="hero-role">{h('role')}</div>
          <p className="hero-description">{h('description')}</p>
          <div className="hero-buttons"><Link href="/#work" className="button button-light">{h('explore')} <ArrowUpRight size={18}/></Link><a className="button button-outline" href={identity.github} target="_blank" rel="noreferrer"><Github size={18}/>{h('github')}<ArrowUpRight size={15}/></a></div>
          <div className="hero-footnote"><CircleDot size={14}/>{h('online')}</div>
        </div>
        <div className="hero-right"><div className="hero-right-meta"><span>01 / TERMINAL.EXE</span><span>● LIVE OUTPUT</span></div><TerminalPanel/><div className="hero-right-foot"><span>SYS/USER/VADYM</span><span>001—2026</span></div></div>
        <div className="hero-scroll"><span>{h('scroll')}</span><ArrowDown size={15}/></div>
      </section>

      <section className="stats-band" aria-label="Quick facts"><div className="container stats-row">
        <div className="stat"><strong>{s('oneVal')}</strong><span>{s('one')}</span></div>
        <div className="stat"><strong>{s('twoVal')}</strong><span>{s('two')}</span></div>
        <div className="stat"><strong>{s('threeVal')}</strong><span>{s('three')}</span></div>
        <div className="stat"><strong className="stat-words">{s('fourVal')}</strong><span>{s('four')}</span></div>
      </div></section>

      <section className="section container" id="about"><SectionTop/><Reveal><SectionTitle eyebrow={a('index')}>{a('titleStart')} <em>{a('titleEm')}</em></SectionTitle></Reveal>
        <div className="about-grid">
          <Reveal className="about-large"><div className="overline">{a('label')}</div><p>{a('p1')}</p><p>{a('p2')}</p><div className="small-caption">{a('foot')}</div></Reveal>
          <Reveal className="about-panel" delay={.08}><div className="panel-corner">✳</div><span className="overline">{a('interestTitle')}</span><div className="interest-list">{interests.map((val,i)=><div key={i}><span>0{i+1}</span><strong>{val}</strong><ArrowUpRight size={15}/></div>)}</div></Reveal>
        </div>
      </section>

      <section className="section container" id="expertise"><SectionTop/><Reveal><SectionTitle eyebrow={sk('index')}>{sk('title')}</SectionTitle><p className="section-intro">{sk('intro')}</p></Reveal>
        <div className="skills-grid">{skillGroups.map((item,i)=><Reveal className="skill-card" key={item.number} delay={i*.07}><div className="skill-card-top"><span>{item.number} / 04</span>{item.icon}</div><h3>{item.title}</h3><p>{item.subtitle}</p><div className="skill-pills">{item.items.map(x=><span key={x}>{x}</span>)}</div></Reveal>)}</div>
        <div className="skills-footline"><span>{sk('foot')}</span><span>↗</span></div>
      </section>

      <section className="section container" id="work"><SectionTop/><Reveal><SectionTitle eyebrow={w('index')}>{w('title')}</SectionTitle><p className="section-intro">{w('intro')}</p></Reveal>
        <Reveal className="project-showcase"><div className="project-visual">
          <div className="project-visual-top"><span>AI / BODY ANALYZER</span><span>FIG.01</span></div>
          <FigureArt/>
          <div className="project-visual-btm"><span>CV / MEDIAPIPE</span><span>{w('preview')}</span></div>
          <div className="project-float project-float-one"><span>LANDMARKS</span><strong>33</strong><i>● MAPPED</i></div>
          <div className="project-float project-float-two"><span>MODEL STATUS</span><strong>POSE DETECTION</strong><i>PROJECT CONCEPT</i></div>
        </div><div className="project-info"><div className="eyebrow project-eyebrow"><span className="eyebrow-line"/>{w('featured')}</div><h3>{w('titleProject')}</h3><div className="project-tagline">{w('tag')}</div><p className="project-description">{w('description')}</p><div className="project-contribution"><span className="overline">{w('role')}</span><p>{w('roleText')}</p></div><div className="project-tags">{['Next.js','FastAPI','MediaPipe','PostgreSQL','Gemini'].map(x=><span key={x}>{x}</span>)}</div><div className="project-status"><span className="status-indicator"/>{w('status')}</div><div className="project-actions"><Link href="/projects/ai-body-analyzer" className="button button-light">{w('case')} <ArrowUpRight size={17}/></Link><a href={identity.project} target="_blank" rel="noreferrer" className="text-link">{w('code')}<ArrowUpRight size={16}/></a></div></div></Reveal>
        <Reveal className="more-work"><div><Sparkles size={21}/><h3>{w('more')}</h3><p>{w('moreDesc')}</p></div><a href={identity.github} rel="noreferrer" target="_blank" className="circle-arrow" aria-label={w('viewGit')}><ArrowUpRight size={22}/></a></Reveal>
      </section>

      <section className="section container" id="journey"><SectionTop/><Reveal><SectionTitle eyebrow={j('index')}>{j('title')}</SectionTitle><p className="section-intro">{j('intro')}</p></Reveal>
        <div className="journey-list">{journey.map((item,i)=><Reveal className="journey-row" key={item.no} delay={i*.04}><span className="journey-number">{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight size={19}/></Reveal>)}</div><div className="journey-end"><span className="online-led"/> {j('now')}</div>
      </section>

      <section className="section container contact-section" id="contact"><SectionTop/><Reveal><SectionTitle eyebrow={c('index')}>{c('title')}<br/><em>{c('titleTwo')}</em></SectionTitle></Reveal>
        <div className="contact-grid"><Reveal className="contact-copy"><p>{c('intro')}</p><div className="overline">{c('direct')}</div><a className="big-mail" href={`mailto:${identity.email}`}>{identity.email} <ArrowUpRight size={25}/></a><div className="contact-social"><span className="overline">{c('other')}</span><a href={identity.github} rel="noreferrer" target="_blank"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a><a href={`mailto:${identity.email}`}><Mail size={17}/> Email <ArrowUpRight size={15}/></a></div></Reveal><Reveal delay={.08}><ContactForm/></Reveal></div>
      </section>
    </main>
    <footer className="footer"><div className="container footer-top"><div><div className="footer-logo">VK<span>.</span></div><p>{f('tag')}</p></div><a className="back-top" href="#top">{f('up')} ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} KOVALEVYCH VADYM</span><span>{f('rights')}</span><span>UA / EN <span className="footer-star">✳</span></span></div></footer>
  </>;
}
