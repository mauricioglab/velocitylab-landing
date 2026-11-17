/**
 * Constantes globales del sitio de la empresa (VeloCityLab).
 */

export const SITE_CONFIG = {
  // Identificador del sitio en la base compartida (columna `site` de disertaciones).
  siteId: 'velocity',

  // Contacto
  email: 'mauriciogcode@gmail.com',
  // Formspree endpoint para el formulario de contacto
  formspreeEndpoint: 'https://formspree.io/f/xlgbvgek',
  // Agendar reunión
  calendly: 'https://calendly.com/mauricioglab',

  // Idiomas
  defaultLang: 'es' as const,
  supportedLangs: ['es', 'en'] as const,
} as const;

export type SupportedLang = typeof SITE_CONFIG.supportedLangs[number];
