import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useSEO } from '@/hooks/useSEO';
import { getOrganizationStructuredData, getBreadcrumbStructuredData } from '@/utils/structuredData';
import { useEffect } from 'react';

const Nosotros = () => {
  // SEO Configuration
  useSEO({
    title: 'Nosotros',
    description: 'Conoce la historia de Café Uribe, empresa familiar colombiana con más de 30 años cultivando café de especialidad en Norte de Santander. Nuestro legado de calidad y tradición.',
    keywords: 'historia café uribe, empresa familiar, café norte de santander, tradición cafetera, café colombiano artesanal, finca cafetera, proceso integral café',
    image: '/images/timeline/1990.jpeg',
    structuredData: {
      ...getOrganizationStructuredData(),
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ragonvalia",
          "addressRegion": "Norte de Santander",
          "addressCountry": "CO"
        }
      }
    }
  });

  // Breadcrumb structured data
  useEffect(() => {
    const breadcrumbs = [
      { name: "Inicio", url: "https://cafeuribe.com" },
      { name: "Nosotros", url: "https://cafeuribe.com/nosotros" }
    ];
    
    const breadcrumbData = getBreadcrumbStructuredData(breadcrumbs);
    
    let scriptTag = document.querySelector('script[data-type="breadcrumb-structured-data"]');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(breadcrumbData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.setAttribute('data-type', 'breadcrumb-structured-data');
      scriptTag.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(scriptTag);
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const timelineEvents = [
    {
      year: "1990",
      title: "Nacimiento de un sueño",
      description:
        "En las montañas de Norte de Santander, la familia Uribe inicia el cultivo de café con una visión clara: producir un café de calidad superior que refleje la riqueza de la tierra colombiana.",
      image: "/images/timeline/1990.jpeg",
    },
    {
      year: "2005",
      title: "Crecimiento y expansión",
      description:
        "La marca se consolida en el mercado local gracias a su compromiso con la calidad y la sostenibilidad. Se amplían las áreas de cultivo y se implementan técnicas de producción más eficientes.",
      image: "/images/timeline/2005.jpeg",
    },
    {
      year: "2015",
      title: "Innovación y tecnología",
      description:
        "Se invierte en tecnología de punta para mejorar los procesos de producción y garantizar la consistencia en cada taza. Se exploran nuevas variedades de café y se perfeccionan los métodos de tostado.",
      image: "/images/timeline/2015.jpeg",
    },
    {
      year: "2024",
      title: "Legado de aroma y sabor",
      description:
        "Café Uribe se posiciona como un referente del café colombiano de especialidad, reconocido por su trazabilidad, calidad y compromiso con el medio ambiente. Un legado que perdura en cada sorbo.",
      image: "/images/timeline/2024.jpeg",
    },
  ];

  const contactInfo = [
    {
      label: "info@cafeuribe.com",
      href: "mailto:info@cafeuribe.com",
      icon: <Mail className="h-5 w-5 text-coffee-orange" />,
    },
    {
      label: "+57 320 373 7502",
      href: "tel:+573203737502",
      icon: <Phone className="h-5 w-5 text-coffee-orange" />,
    },
    {
      label: "Ragonvalia, Norte de Santander",
      href: "https://maps.app.goo.gl/j9XA6mNGJvpwj4T47",
      icon: <MapPin className="h-5 w-5 text-coffee-orange" />,
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/17fEZXoBLy/?mibextid=wwXIfr",
      icon: <Facebook className="h-6 w-6" />,
    },
    {
      href: "https://www.instagram.com/cafeuribe?igsh=MTNpbW9sZ3c0ODRjNQ==&utm_source=qr",
      icon: <Instagram className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-orange-50 min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/foto_29.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Nuestro Legado
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Conoce la historia de Café Uribe, una tradición familiar que
            trasciende generaciones.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Una Historia de Pasión y Dedicación
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full border border-dashed border-gray-400"></div>
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`mb-8 flex justify-between items-center w-full ${
                  index % 2 === 0 ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="w-5/12"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg shadow-md"
                  />
                </motion.div>
                <div className="relative w-5/12">
                  <div className="absolute w-6 h-6 rounded-full bg-coffee-orange border-2 border-white -top-3"></div>
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.year} - {event.title}
                    </h3>
                    <p className="text-gray-700">{event.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 lg:py-24 bg-coffee-brown text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center p-6 rounded-lg shadow-md bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Calidad</h3>
              <p className="text-white/80">
                Nos esforzamos por ofrecer un café de la más alta calidad, desde
                la selección de los granos hasta el proceso de tostado.
              </p>
            </motion.div>

            {/* Value Card 2 */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-center p-6 rounded-lg shadow-md bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Tradición</h3>
              <p className="text-white/80">
                Mantenemos vivas las técnicas ancestrales de cultivo y
                producción, transmitiendo de generación en generación el amor
                por el café.
              </p>
            </motion.div>

            {/* Value Card 3 */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-center p-6 rounded-lg shadow-md bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Sostenibilidad</h3>
              <p className="text-white/80">
                Promovemos prácticas agrícolas responsables con el medio ambiente
                y el bienestar de las comunidades locales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            ¿Tienes alguna pregunta o deseas conocer más sobre nuestro café?
            ¡Estamos aquí para ayudarte!
          </p>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-center space-x-3 hover:text-coffee-orange transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-coffee-orange transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center">
        <p className="text-gray-600 text-sm">
          © 2025 Café Uribe. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Nosotros;
