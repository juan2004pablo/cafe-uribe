import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './ui/whatsAppIcon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Variedades', href: '/variedades' },
    { name: 'Aliados Comerciales', href: '/clientes-b2b' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const handleCall = () => {
    window.open('tel:+573203737502', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/573203737502?text=Hola, me interesa conocer más sobre Café Uribe', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
                src={isScrolled ? "/logo_claro.webp" : "/logo_oscuro.webp"} 
                alt="Montemar Logo" 
                className="h-20 md:h-24 w-auto"
              />
            <div className="flex flex-col">
              <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                isScrolled ? 'text-coffee-brown' : 'text-white'
              }`}>Café Uribe</span>
              <span className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-coffee-brown/60' : 'text-white/80'
              }`}>100% Colombiano</span>
            </div>
          </Link>

          {/* Desktop Navigation - Better spacing for medium screens */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === item.href
                    ? `text-coffee-orange border-b-2 border-coffee-orange pb-1`
                    : `transition-colors duration-300 hover:text-coffee-orange ${
                        isScrolled ? 'text-coffee-brown' : 'text-white'
                      }`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons - Better responsive sizing */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCall}
              className={`transition-all duration-300 text-xs xl:text-sm px-3 xl:px-4 ${
                isScrolled
                  ? 'border-coffee-orange text-coffee-orange hover:bg-coffee-orange hover:text-white'
                  : 'border-white text-coffee-orange hover:bg-white/90 hover:text-coffee-orange'
              }`}
            >
              <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              Llamar
            </Button>
            <Button
              size="sm"
              onClick={handleWhatsApp}
              className="bg-coffee-orange hover:bg-coffee-orange/90 text-white text-xs xl:text-sm px-3 xl:px-4"
            >
              <WhatsAppIcon className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 hover:text-coffee-orange ${
              isScrolled ? 'text-coffee-brown' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    location.pathname === item.href
                      ? 'text-coffee-orange'
                      : 'text-coffee-brown hover:text-coffee-orange'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  onClick={handleCall}
                  className="w-full border-coffee-orange text-coffee-orange hover:bg-coffee-orange hover:text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-coffee-orange hover:bg-coffee-orange/90 text-white"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2"/>
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
