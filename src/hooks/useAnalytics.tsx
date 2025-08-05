
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declarar gtag como una función global
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Reemplazar con el ID real de GA4

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Cargar el script de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Inicializar dataLayer y gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup si es necesario
      const existingScript = document.querySelector(
        `script[src*="${GA_MEASUREMENT_ID}"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Rastrear cambios de página
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location]);

  // Funciones para eventos personalizados
  const trackEvent = (
    eventName: string,
    parameters: { [key: string]: any } = {}
  ) => {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackConversion = (eventName: string, value?: number) => {
    if (window.gtag) {
      window.gtag('event', eventName, {
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

  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      button_location: location,
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
