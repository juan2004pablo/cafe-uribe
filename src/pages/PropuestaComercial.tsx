
import { useSEO } from '@/hooks/useSEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useEffect } from 'react';
import CommercialProposal from '@/components/CommercialProposal';

const PropuestaComercial = () => {
  const { trackEvent } = useAnalytics();

  useSEO({
    title: 'Propuesta Comercial - Sitio Web',
    description: 'Propuesta comercial detallada del sitio web de Café Uribe. Alcance, beneficios, métricas y plan de implementación.',
    keywords: 'propuesta comercial, sitio web, café uribe, desarrollo web, marketing digital',
    type: 'article'
  });

  useEffect(() => {
    trackEvent('commercial_proposal_view', {
      page: 'propuesta-comercial',
      timestamp: new Date().toISOString()
    });
  }, [trackEvent]);

  return <CommercialProposal />;
};

export default PropuestaComercial;
