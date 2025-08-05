
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Globe, Phone, MessageCircle, BarChart3, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CommercialProposal = () => {
  const currentScope = {
    pages: [
      { name: 'Página de Inicio', features: ['Hero dinámico', 'Carrusel de productos', 'Testimonios', 'CTA optimizado'] },
      { name: 'Nosotros', features: ['Historia de la empresa', 'Timeline interactivo', 'Galería de la finca', 'Valores corporativos'] },
      { name: 'Variedades', features: ['Catálogo de productos', 'Información técnica', 'Imágenes de alta calidad', 'Filtros interactivos'] },
      { name: 'Clientes B2B', features: ['Formulario especializado', 'Beneficios comerciales', 'Casos de éxito', 'Propuesta de valor'] },
      { name: 'Contacto', features: ['Formulario optimizado', 'Integración WhatsApp', 'Mapa interactivo', 'Información de tienda física'] }
    ],
    technicalFeatures: [
      'Google Analytics y Tag Manager integrado',
      'SEO completo con structured data',
      'Diseño 100% responsive',
      'Optimización de velocidad de carga',
      'Tracking de conversiones B2B',
      'Integración WhatsApp automática'
    ],
    visualAssets: [
      '80+ imágenes profesionales optimizadas',
      '4 videos del proceso y la finca',
      'Galería interactiva con efectos 3D',
      'Animaciones y microinteracciones',
      'Carruseles y componentes avanzados'
    ]
  };

  const commercialBenefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Presencia Digital Profesional',
      description: 'Diferenciación clara vs competencia local',
      metric: '+300% mejora en presencia online'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Generación de Leads B2B',
      description: 'Sistema automatizado de captura de clientes comerciales',
      metric: '+40% incremento en consultas'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Métricas y Analytics',
      description: 'Tracking completo de comportamiento y conversiones',
      metric: 'ROI medible y optimizable'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Optimización de Procesos',
      description: 'Reducción de tiempo en atención al cliente',
      metric: '-60% tiempo de respuesta'
    }
  ];

  const implementationPhases = [
    {
      phase: 'FASE 1',
      title: 'Presentación del Alcance Actual',
      items: [
        '5 páginas completamente funcionales y optimizadas',
        'Componentes interactivos con animaciones avanzadas',
        'Integración completa de Google Analytics',
        'Diseño responsive para todos los dispositivos'
      ]
    },
    {
      phase: 'FASE 2',
      title: 'Beneficios Comerciales Cuantificables',
      items: [
        'Posicionamiento digital superior vs competencia',
        'Sistema automatizado de generación de leads B2B',
        'Métricas de conversión en tiempo real',
        'SEO optimizado para búsquedas locales'
      ]
    },
    {
      phase: 'FASE 3',
      title: 'Funcionalidades Destacadas',
      items: [
        '80+ imágenes profesionales integradas',
        '4 videos del proceso y la finca',
        'Formularios especializados (general y B2B)',
        'WhatsApp con mensajes pre-configurados'
      ]
    },
    {
      phase: 'FASE 4',
      title: 'ROI y Métricas Esperadas',
      items: [
        '+40% incremento estimado en consultas comerciales',
        '-60% reducción en tiempo de respuesta',
        '+300% mejora en presencia digital',
        'Leads B2B cuantificables y trazables'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-cream via-white to-coffee-cream/30 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/logo_claro.webp" alt="Café Uribe" className="h-16 w-auto" />
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-coffee-brown">
                Propuesta Comercial
              </h1>
              <p className="text-xl text-coffee-brown/80">Sitio Web Café Uribe - Versión Inicial</p>
            </div>
          </div>
          <Badge className="bg-coffee-orange text-white text-lg px-6 py-2">
            Solución Completa - Lista para Producción
          </Badge>
        </motion.div>

        {/* Alcance Actual */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-coffee-brown mb-8 text-center">
            Alcance de la Versión Inicial
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Páginas */}
            <Card className="border-coffee-brown/20">
              <CardHeader>
                <CardTitle className="text-coffee-brown flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Páginas Implementadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentScope.pages.map((page, index) => (
                    <div key={index} className="border-l-2 border-coffee-orange pl-4">
                      <h4 className="font-semibold text-coffee-brown">{page.name}</h4>
                      <ul className="text-sm text-coffee-brown/70 mt-1">
                        {page.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Características Técnicas */}
            <Card className="border-coffee-brown/20">
              <CardHeader>
                <CardTitle className="text-coffee-brown flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Características Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentScope.technicalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-coffee-brown/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assets Visuales */}
          <Card className="border-coffee-brown/20">
            <CardHeader>
              <CardTitle className="text-coffee-brown text-center">Assets Visuales Incluidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentScope.visualAssets.map((asset, index) => (
                  <div key={index} className="text-center p-4 bg-coffee-cream/30 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-coffee-brown font-medium">{asset}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Beneficios Comerciales */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-coffee-brown mb-8 text-center">
            Beneficios Comerciales Cuantificables
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commercialBenefits.map((benefit, index) => (
              <Card key={index} className="border-coffee-brown/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-coffee-orange/10 rounded-lg text-coffee-orange">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-coffee-brown mb-2">{benefit.title}</h3>
                      <p className="text-coffee-brown/70 text-sm mb-3">{benefit.description}</p>
                      <Badge className="bg-green-100 text-green-700">{benefit.metric}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Plan de Implementación */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-coffee-brown mb-8 text-center">
            Plan de Presentación Comercial
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {implementationPhases.map((phase, index) => (
              <Card key={index} className="border-coffee-brown/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-coffee-orange text-white">{phase.phase}</Badge>
                    <CardTitle className="text-coffee-brown">{phase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                        <span className="text-coffee-brown/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Propuesta de Valor Final */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-gradient-to-r from-coffee-brown to-coffee-brown/90 text-white rounded-2xl p-12"
        >
          <h2 className="text-4xl font-playfair font-bold mb-6">Propuesta de Valor</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Solución digital completa que posiciona a Café Uribe como líder en el sector cafetero, 
            con herramientas de medición, optimización y generación de leads B2B integradas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-coffee-orange mb-2">5</div>
              <div className="text-sm opacity-80">Páginas Optimizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coffee-orange mb-2">80+</div>
              <div className="text-sm opacity-80">Assets Visuales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coffee-orange mb-2">100%</div>
              <div className="text-sm opacity-80">Responsive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coffee-orange mb-2">24/7</div>
              <div className="text-sm opacity-80">Disponible</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-coffee-orange hover:bg-coffee-orange/90 text-white px-8"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar Presentación
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-coffee-brown px-8"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Demo
            </Button>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-coffee-brown/60"
        >
          <p className="text-sm">
            Documento generado automáticamente - Café Uribe © 2025
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default CommercialProposal;
