
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/logo.avif" 
                alt="Montemar Logo" 
                className="h-28 w-auto mr-3"
              />
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl">Café Uribe</span>
                <span className="text-sm text-white/70">100% Colombiano</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Legado de aroma y sabor. Café de finca con trazabilidad garantizada siempre, 
              de la finca a tu taza con la más alta calidad colombiana.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/17fEZXoBLy/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coffee-orange transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/cafeuribe?igsh=MTNpbW9sZ3c0ODRjNQ==&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coffee-orange transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-6">Navegación</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-coffee-orange transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="text-white/80 hover:text-coffee-orange transition-colors">Nosotros</Link></li>
              <li><Link to="/variedades" className="text-white/80 hover:text-coffee-orange transition-colors">Variedades</Link></li>
              <li><Link to="/clientes-b2b" className="text-white/80 hover:text-coffee-orange transition-colors">Clientes B2B</Link></li>
              <li><Link to="/contacto" className="text-white/80 hover:text-coffee-orange transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-coffee-orange" />
                <a 
                  href="mailto:info@cafeuribe.com"
                  className="text-white/80 hover:text-coffee-orange transition-colors"
                >
                  info@cafeuribe.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-coffee-orange" />
                <a 
                  href="tel:+573203737502"
                  className="text-white/80 hover:text-coffee-orange transition-colors"
                >
                  +57 320 373 7502
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-coffee-orange mt-0.5" />
                <span className="text-white/80">
                  Ragonvalia, Norte de Santander<br />
                  Villa del Rosario - Cr 11 6-88
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Café Uribe. Todos los derechos reservados.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Legado de aroma y sabor - 100% Colombiano
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;