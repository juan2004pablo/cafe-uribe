import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Coffee, Users, Award, Leaf, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import B2BSection from '@/components/B2BSection';
import VarietiesSection from '@/components/VarietiesSection';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import HeroCTA from '@/components/HeroCTA';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { useSEO } from '@/hooks/useSEO';
import { getOrganizationStructuredData, getFAQStructuredData } from '@/utils/structuredData';
import { useEffect } from 'react';

const Index = () => {
  // SEO Configuration
  useSEO({
    title: 'Inicio',
    description: 'Café Uribe - Café colombiano de especialidad premium con trazabilidad garantizada. Cultivamos, procesamos y tostamos nuestro propio café desde Norte de Santander. Distribuidor B2B de café de origen.',
    keywords: 'café colombiano, café de especialidad, café premium, Norte de Santander, café de origen, trazabilidad, B2B, distribución café, café artesanal, denominación de origen',
    image: '/images/mejor_calidad_en_tu_taza.jpeg',
    structuredData: getOrganizationStructuredData()
  });

  // Add FAQ structured data
  useEffect(() => {
    const faqs = [
      {
        question: "¿Qué hace especial al café de Café Uribe?",
        answer: "Nuestro café es 100% colombiano con denominación de origen, cultivado en las montañas de Norte de Santander. Controlamos todo el proceso desde el cultivo hasta el empaque, garantizando trazabilidad completa."
      },
      {
        question: "¿Ofrecen servicio para empresas?",
        answer: "Sí, somos distribuidores B2B especializados en cafeterías, restaurantes y empresas. Ofrecemos precios mayoristas y servicio personalizado."
      },
      {
        question: "¿Cómo garantizan la calidad del café?",
        answer: "Tenemos certificaciones Invima, registro de la Federación Nacional de Cafeteros y denominación de origen. Además, controlamos todo el proceso en nuestras propias instalaciones."
      }
    ];

    const faqStructuredData = getFAQStructuredData(faqs);
    
    let scriptTag = document.querySelector('script[data-type="faq-structured-data"]') as HTMLScriptElement;
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(faqStructuredData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.setAttribute('data-type', 'faq-structured-data');
      scriptTag.textContent = JSON.stringify(faqStructuredData);
      document.head.appendChild(scriptTag);
    }
  }, []);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const processSteps = [
    { icon: <Leaf className="w-8 h-8" />, title: "Cultivamos", description: "En nuestras montañas del Norte de Santander" },
    { icon: <Coffee className="w-8 h-8" />, title: "Procesamos", description: "Recolección manual y selectiva" },
    { icon: <Award className="w-8 h-8" />, title: "Tostamos", description: "Proceso profesional con control de calidad" },
    { icon: <Users className="w-8 h-8" />, title: "Empacamos", description: "Directo a tu taza con calidad garantizada" }
  ];

  const testimonials = [
    {
      author: {
        name: "Juan Pérez",
        handle: "Café Central - Bogotá",
      },
      text: "El café de Cafe Uribe es excepcional, se siente la calidad desde la primera taza. Nuestros clientes siempre quedan satisfechos con el aroma y sabor único que ofrecemos.",
    },
    {
      author: {
        name: "Ana López",
        handle: "Tostadora Especializada",
      },
      text: "La trazabilidad del café es impresionante, se nota el cuidado en cada detalle. Como tostadora, valoramos la consistencia y calidad que nos brinda Café Uribe.",
    },
    {
      author: {
        name: "Carlos Mendoza",
        handle: "Restaurante Gourmet",
      },
      text: "Hemos trabajado con Café Uribe por años y siempre nos sorprende la calidad constante. Es el complemento perfecto para nuestros desayunos gourmet.",
    },
    {
      author: {
        name: "María Rodríguez",
        handle: "Café Boutique",
      },
      text: "La variedad de sabores y la frescura del café de Uribe nos permite ofrecer una experiencia única a nuestros clientes. Definitivamente recomendado.",
    }
  ];

  const certificationLogos = [
    { name: "Denominación de Origen", logo: "/images/certificaciones/fnc-logo.jpeg" },
    { name: "ICA", logo: "/images/certificaciones/ica-logo.png" },
    { name: "Invima", logo: "/images/certificaciones/invima-logo.png" },
    { name: "CaféCert", logo: "/images/certificaciones/cafecert-logo.png" },
    { name: "Federación Nacional de Café", logo: "/images/certificaciones/do-cafe-colombia.png" }
  ];

  const handleKnowOurCoffee = () => {
    window.location.href = '/variedades';
  };

  const handleRequestSample = () => {
    window.location.href = '/contacto';
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section - Enhanced */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col">
        {/* Background with subtle overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/heroSection/index.jpeg')",
          }}
        />
        
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

        {/* Main hero content with improved layout */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8 mt-3"
            >
              {/* Main title with better spacing */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Legado de <span className="text-coffee-orange">Aroma</span> y <span className="text-coffee-orange">Sabor</span>
                </h1>
              </div>

              {/* Enhanced description with better readability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                {/* Main description with background for better readability */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 px-8 py-6 max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                    Café de finca con trazabilidad garantizada siempre.
                  </p>
                  <p className="text-base md:text-lg text-white/90 mt-2">
                    De la finca a tu taza con la más alta calidad.
                  </p>
                </div>
              </motion.div>

              {/* CTA Section */}
              <HeroCTA
                onKnowOurCoffee={handleKnowOurCoffee}
                onRequestSample={handleRequestSample}
              />
            </motion.div>
          </div>
        </div>

        {/* Certifications carousel at bottom of hero */}
        <div className="relative z-10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-6"
          >
            <p className="text-white/60 text-sm font-medium tracking-wide uppercase">
              Certificado y Avalado Por
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <InfiniteSlider
              gap={48}
              duration={30}
              durationOnHover={50}
              className="py-4"
            >
              {certificationLogos.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-16 px-4"
                >
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className={`h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 ${cert.name !== "Denominación de Origen" ? "filter brightness-0 invert" : ""
                      }`}
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="120" height="48" xmlns="http://www.w3.org/2000/svg">
                          <rect width="120" height="48" fill="#ffffff" stroke="#cccccc" stroke-width="1" rx="4"/>
                          <text x="60" y="30" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#666666">${cert.name}</text>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>
              ))}
            </InfiniteSlider>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section ref={aboutRef} className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quiénes somos
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Café Uribe es una marca registrada y avalada por Invima,
                lo que garantiza la calidad y sanidad de sus productos.
                Nuestro café cuenta con denominación de origen y el sello
                de la Federación Nacional de Cafeteros, lo que certifica
                su autenticidad y que es 100% colombiano.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-coffee-orange mb-6">
                <p className="text-gray-700 font-semibold mb-2">
                  🏭 Proceso 100% Nuestro
                </p>
                <p className="text-gray-600 text-sm">
                  Cultivamos, procesamos, trillamos, tostamos y empacamos nuestro propio café.
                  No tercerizamos - cada grano tiene historia, nombre y origen real.
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                En Café Uribe, nos dedicamos a ofrecer una experiencia auténtica y de alta calidad a todos nuestros clientes,
                celebrando la riqueza del café colombiano en cada taza.
              </p>
              <Link to="/nosotros">
                <Button className="bg-coffee-orange hover:bg-orange-600">
                  Conoce Más Sobre Nosotros
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/mejor_calidad_en_tu_taza.jpeg"
                alt="Plantación de café"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold text-gray-900">+70.000</p>
                <p className="text-gray-600">Plantas activas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestro Café - Nuevo componente */}
      <VarietiesSection />

      {/* De la Finca a Tu Taza */}
      <section ref={processRef} className="py-20 bg-coffee-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro Proceso Integral
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Controlamos cada paso del proceso para garantizar la máxima calidad.
              Desde el cultivo hasta el empaque, todo se realiza en nuestras instalaciones
              con inventario disponible durante todo el año.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-coffee-orange/50 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <TestimonialsSection
        title="Lo Que Dicen Nuestros Clientes"
        description="Testimonios reales de quienes han probado nuestro café de origen"
        testimonials={[
          {
            author: {
              name: "María González",
              handle: "Café Especializado La Esquina"
            },
            text: "La calidad de Café Uribe es excepcional. Se nota que no tercerizan - cultivar, procesar, trillar, tostar y empacar su propio café garantiza que cada grano tenga historia, nombre y origen real. Nuestros clientes siempre quedan satisfechos."
          },
          {
            author: {
              name: "Carlos Ramírez",
              handle: "Hotel Villa Colonial"
            },
            text: "Trabajamos con Café Uribe porque valoramos la trazabilidad total. Saber que cada grano tiene su propia historia y origen real hace la diferencia en nuestro servicio de desayunos premium."
          },
          {
            author: {
              name: "Ana Sofía López",
              handle: "Distribuidora Norte"
            },
            text: "Lo que más me impresiona es su proceso integral: desde el cultivo hasta el empaque, todo bajo su control. No tercerizan nada, y eso se refleja en la consistencia y calidad excepcional de cada lote."
          },
          {
            author: {
              name: "Diego Hernández",
              handle: "Café Central"
            },
            text: "La diferencia está en los detalles: cada grano tiene nombre, origen y historia. Café Uribe demuestra que cuando no se terceriza y se controla todo el proceso, el resultado es café de verdadera especialidad."
          },
          {
            author: {
              name: "Patricia Vargas",
              handle: "Restaurante Tierra Noble"
            },
            text: "Nuestros comensales notan la diferencia. Café Uribe cultiva, procesa, trilla, tuesta y empaca su propio café. Esa dedicación en cada etapa se traduce en una experiencia única en cada taza."
          }
        ]}
      />

      {/* CTA B2B - Enhanced Section */}
      <B2BSection />

      <Footer />
    </div>
  );
};

export default Index;
