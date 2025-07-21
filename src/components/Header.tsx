
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Clientes B2B', href: '/clientes-b2b' },
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
        isScrolled ? 'bg-white backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">CU</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>Café Uribe</span>
              <span className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>100% Colombiano</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? `text-primary border-b-2 border-primary pb-1`
                    : `transition-colors duration-300 hover:text-primary ${
                        isScrolled ? 'text-foreground' : 'text-white'
                      }`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCall}
              className={`text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2 transition-all duration-300 ${
                isScrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  : 'border-white text-white hover:bg-white hover:text-foreground'
              }`}
            >
              <Phone className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Llamar</span>
            </Button>
            <Button
              size="sm"
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2"
            >
              <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 hover:text-primary ${
              isScrolled ? 'text-foreground' : 'text-white'
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  onClick={handleCall}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
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
