
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declarar dataLayer como una función global para GTM
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GTM_ID = 'GTM-MLGBGB9R';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Inicializar dataLayer si no existe
    window.dataLayer = window.dataLayer || [];
  }, []);

  // Rastrear cambios de página
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location]);

  // Funciones para eventos personalizados usando GTM
  const trackEvent = (
    eventName: string,
    parameters: { [key: string]: any } = {}
  ) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }
  };

  const trackConversion = (eventName: string, value?: number) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        event_category: 'conversion',
        value: value,
        currency: 'COP',
      });
    }
  };

  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', {
      form_name: formName,
      event_category: 'engagement',
    });
  };

  const trackButtonClick = (buttonName: string, buttonLocation: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
      event_category: 'engagement',
    });
  };

  const trackVideoPlay = (videoName: string) => {
    trackEvent('video_play', {
      video_title: videoName,
      event_category: 'engagement',
    });
  };

  const trackB2BLead = (leadType: string) => {
    trackEvent('generate_lead', {
      lead_type: leadType,
      event_category: 'conversion',
      value: 1,
    });
  };

  return {
    trackEvent,
    trackConversion,
    trackFormSubmission,
    trackButtonClick,
    trackVideoPlay,
    trackB2BLead,
  };
};
