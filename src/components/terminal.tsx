'use client';

import {useEffect, useMemo, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {TerminalSquare} from 'lucide-react';

type Line={command: string; answer: string};

export function TerminalPanel() {
  const t=useTranslations('Hero');
  const locale=useLocale();
  const script=useMemo<Line[]>(()=>[
    {command:t('term1command'),answer:t('term1answer')},
    {command:t('term2command'),answer:t('term2answer')},
    {command:t('term3command'),answer:t('term3answer')}
  // Rebuild the script only when the language changes.
  ],[locale]);
  const [finished,setFinished]=useState<Line[]>([]);
  const [typed,setTyped]=useState('');
  const [step,setStep]=useState(0);
  const [ready,setReady]=useState(false);
  const [reduced,setReduced]=useState(false);

  useEffect(()=>{
    const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduced(prefersReduced); setFinished([]); setTyped(''); setStep(0); setReady(true);
  },[script]);

  useEffect(()=>{
    if(!ready || reduced || step>=script.length) return;
    const line=script[step];
    const typing=typed.length<line.command.length;
    const delay=typing?54:step===0?470:620;
    const timeout=window.setTimeout(()=>{
      if(typing) setTyped(line.command.slice(0,typed.length+1));
      else {setFinished(prev=>[...prev,line]);setTyped('');setStep(prev=>prev+1);}
    },delay);
    return ()=>window.clearTimeout(timeout);
  },[ready,reduced,step,typed,script]);

  const rows=reduced?script:finished;
  return <div className="terminal-panel" aria-label="Animated developer terminal">
    <div className="terminal-bar">
      <div className="window-dots" aria-hidden="true"><i/><i/><i/></div>
      <span>{t('termTitle')}</span>
      <TerminalSquare size={15} aria-hidden="true"/>
    </div>
    <div className="terminal-body" aria-live="off">
      <div className="terminal-comment">// identity initialized</div>
      {rows.map((row,i)=><div className="term-block" key={`${row.command}-${i}`}>
        <div className="term-command"><span className="terminal-prompt">❯</span> {row.command}</div>
        <div className="term-response">{row.answer}</div>
      </div>)}
      {!reduced && step<script.length&&<div className="term-command"><span className="terminal-prompt">❯</span> {typed}<span className="terminal-cursor"/></div>}
      {(reduced || step>=script.length)&&<div className="term-command"><span className="terminal-prompt">❯</span> <span className="terminal-cursor"/></div>}
    </div>
    <div className="terminal-bottom"><span className="online-led"/> {t('termHint')} <span className="terminal-version">v1.0.0</span></div>
  </div>;
}
