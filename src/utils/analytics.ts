
// Configuración de Google Analytics para Café Uribe

// ID de medición de GA4 - DEBE SER REEMPLAZADO CON EL ID REAL
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Eventos personalizados para el negocio de café
export const ANALYTICS_EVENTS = {
  // Eventos de conversión B2B
  B2B_FORM_SUBMIT: 'b2b_form_submit',
  ALLIANCE_REQUEST: 'alliance_request',
  SAMPLE_REQUEST: 'sample_request',
  WHOLESALE_INQUIRY: 'wholesale_inquiry',
  
  // Eventos de engagement
  VARIETY_VIEW: 'variety_view',
  GALLERY_INTERACTION: 'gallery_interaction',
  VIDEO_PLAY: 'video_play',
  TESTIMONIAL_VIEW: 'testimonial_view',
  
  // Eventos de navegación
  CONTACT_INFO_VIEW: 'contact_info_view',
  SOCIAL_MEDIA_CLICK: 'social_media_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  
  // Eventos de contenido
  FARM_STORY_READ: 'farm_story_read',
  PROCESS_EXPLORE: 'process_explore',
  CERTIFICATION_VIEW: 'certification_view',
} as const;

// Configuración de conversiones personalizadas
export const CONVERSION_VALUES = {
  B2B_LEAD: 50000, // Valor estimado en COP de un lead B2B
  SAMPLE_REQUEST: 10000, // Valor de una muestra solicitada
  CONTACT_FORM: 5000, // Valor de contacto general
} as const;

// Configuración de audiencias personalizadas
export const CUSTOM_AUDIENCES = {
  B2B_PROSPECTS: 'b2b_prospects',
  COFFEE_ENTHUSIASTS: 'coffee_enthusiasts',
  RETURN_VISITORS: 'return_visitors',
  HIGH_ENGAGEMENT: 'high_engagement',
} as const;
