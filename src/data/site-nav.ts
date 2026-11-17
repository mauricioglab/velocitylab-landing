import { AUTHOR_SITE_URL } from './site';

export type Lang = 'es' | 'en';

export interface NavLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children?: NavLink[];
}

export interface SiteNav {
  brand: { name: string; icon?: string; href: string };
  items: NavLink[];
  contact: { label: string; kind: 'button' | 'link' };
  langSwitch: boolean;
}

const t = (lang: Lang, es: string, en: string) => (lang === 'es' ? es : en);

// Fuente única del header/menú. Los ítems y botones son los mismos en todas las páginas;
// solo cambia cuál está marcado como actual.
export function getSiteNav(lang: Lang = 'es'): SiteNav {
  return {
    brand: { name: 'VeloCityLab', icon: '/logo-vl-icon.svg', href: '/' },
    items: [
      { id: 'servicios', label: t(lang, 'Servicios', 'Services'), href: `/${lang}/servicios/` },
      { id: 'velocity', label: t(lang, 'Quiénes somos', 'About us'), href: `/${lang}/velocity/` },
      { id: 'portfolio', label: 'Portfolio', href: `/${lang}/portfolio/` },
      { id: 'disertaciones', label: t(lang, 'Disertaciones', 'Talks'), href: `/${lang}/disertaciones/` },
      { id: 'autor', label: 'Mauricio González', href: `${AUTHOR_SITE_URL}/`, external: true },
    ],
    contact: { label: t(lang, 'Conversemos', "Let's talk"), kind: 'button' },
    langSwitch: true,
  };
}
