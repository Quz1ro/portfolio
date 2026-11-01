'use client';

import {useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {ArrowUpRight, Menu, X} from 'lucide-react';
import {Link, usePathname, useRouter} from '@/i18n/navigation';
import {identity} from '@/lib/data';

const links = [
  ['about','about'], ['expertise','expertise'], ['work','work'], ['journey','journey'], ['contact','contact']
] as const;

export function SiteHeader() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  const switchLocale = () => {router.replace(pathname, {locale: locale === 'en' ? 'uk' : 'en'}); setOpened(false);};
  return <header className="site-header">
    <div className="container nav-shell">
      <Link href="/" className="brand" aria-label="Kovalevych Vadym — home" onClick={()=>setOpened(false)}>
        <span className="brand-box">VK<span className="brand-dot">.</span></span>
        <span className="brand-name">KOVALEVYCH<span className="brand-muted">/DEV</span></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([id,key])=><Link key={id} href={`/#${id}`} className="nav-link">{t(key)}</Link>)}
      </nav>
      <div className="nav-actions">
        <button type="button" className="locale-switch" onClick={switchLocale} aria-label={locale === 'en' ? 'Switch to Ukrainian' : 'Switch to English'}>
          <span className={locale==='en'?'locale-active':''}>EN</span><span className="locale-sep">/</span><span className={locale==='uk'?'locale-active':''}>UA</span>
        </button>
        <a href={identity.github} target="_blank" rel="noreferrer" className="nav-github" aria-label="GitHub profile"><ArrowUpRight size={17}/></a>
        <button type="button" className="mobile-menu-trigger" aria-expanded={opened} aria-label={opened?t('close'):t('menu')} onClick={()=>setOpened(x=>!x)}>{opened?<X size={23}/>:<Menu size={23}/>}</button>
      </div>
    </div>
    {opened && <nav className="mobile-nav" aria-label="Mobile navigation">
      {links.map(([id,key])=><Link key={id} href={`/#${id}`} onClick={()=>setOpened(false)}>{t(key)} <span>↗</span></Link>)}
    </nav>}
  </header>;
}
