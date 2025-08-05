
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Coffee, Shield, Truck, Mail, Building2, User, Phone, Leaf, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '@/hooks/useAnalytics';
import DisplayCards from '@/components/ui/display-cards';

// Form validation schema
const formSchema = z.object({
  businessName: z.string().min(2, 'El nombre del negocio debe tener al menos 2 caracteres'),
  contactName: z.string().min(2, 'El nombre de contacto debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

const ModernContactForm = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { trackFormSubmission, trackButtonClick, trackB2BLead } = useAnalytics();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Cards for mobile/tablet (3 cards)
  const mobileCards = [
    {
      icon: <Coffee className="size-4 text-coffee-orange" />,
      title: "Calidad Premium",
      description: "100% Café Colombiano",
      date: "Certificado",
      iconClassName: "text-coffee-orange",
      titleClassName: "text-coffee-brown",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Shield className="size-4 text-coffee-orange" />,
      title: "Garantía Total",
      description: "Satisfacción asegurada",
      date: "Respaldado",
      iconClassName: "text-coffee-orange",
      titleClassName: "text-coffee-brown",
      className: "[grid-area:stack] translate-x-6 sm:translate-x-8 md:translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Truck className="size-4 text-coffee-orange" />,
      title: "Logística Eficaz",
      description: "Entregas puntuales",
      date: "Garantizado",
      iconClassName: "text-coffee-orange",
      titleClassName: "text-coffee-brown",
      className: "[grid-area:stack] translate-x-12 sm:translate-x-16 md:translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ];

  // Cards for desktop (5 cards)
  const desktopCards = [
    ...mobileCards,
    {
      icon: <Leaf className="size-4 text-coffee-orange" />,
      title: "Sostenibilidad",
      description: "Cultivo responsable",
      date: "Eco Friendly",
      iconClassName: "text-coffee-orange",
      titleClassName: "text-coffee-brown",
      className: "[grid-area:stack] translate-x-6 sm:translate-x-8 md:translate-x-36 translate-y-32 hover:translate-y-20 transition-transform duration-700",
    },
    {
      icon: <Users className="size-4 text-coffee-orange" />,
      title: "Relaciones Directas",
      description: "Apoyo al caficultor",
      date: "Comercio Justo",
      iconClassName: "text-coffee-orange",
      titleClassName: "text-coffee-brown",
      className: "[grid-area:stack] translate-x-24 sm:translate-x-32 md:translate-x-48 translate-y-44 hover:translate-y-28 transition-transform duration-700",
    },
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', data);
      
      // Track form submission
      trackFormSubmission('modern_contact_form');
      trackB2BLead('alliance_request');
      
      toast({
        title: "Solicitud enviada exitosamente",
        description: "Nos pondremos en contacto contigo muy pronto.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error al enviar la solicitud",
        description: "Por favor intenta nuevamente más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactRedirect = () => {
    trackButtonClick('contact_page_redirect', 'modern_contact_form');
    navigate('/contacto');
  };

  return (
    <section id="comencemos-alianza" ref={ref} className="py-20 bg-coffee-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
            Comencemos una Alianza
          </h2>
          <p className="text-lg text-coffee-brown/70 max-w-2xl mx-auto">
            Déjanos tus datos y te contactaremos para explorar oportunidades de negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-36 items-center">
          {/* Left side - Display Cards - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center self-center"
          >
            <div className="flex min-h-[400px] w-full items-center justify-center py-5 overflow-hidden">
              <div className="w-full max-w-3xl px-4">
                <DisplayCards cards={desktopCards} />
              </div>
            </div>
          </motion.div>

          {/* Right side - Simple Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-coffee-cream order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-bold text-coffee-brown mb-2">
                  Solicita Información
                </h3>
                <p className="text-coffee-brown/60">
                  Formulario rápido para comenzar
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-coffee-brown text-sm font-medium flex items-center">
                    <Building2 className="w-4 h-4 mr-2 text-coffee-orange" />
                    Nombre del Negocio
                  </label>
                  <Input 
                    {...register('businessName')}
                    placeholder="Tu empresa" 
                    className="border-coffee-cream/60 focus:border-coffee-orange"
                  />
                  {errors.businessName && (
                    <p className="text-sm text-red-500">{errors.businessName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-coffee-brown text-sm font-medium flex items-center">
                    <User className="w-4 h-4 mr-2 text-coffee-orange" />
                    Nombre de Contacto
                  </label>
                  <Input 
                    {...register('contactName')}
                    placeholder="Tu nombre" 
                    className="border-coffee-cream/60 focus:border-coffee-orange"
                  />
                  {errors.contactName && (
                    <p className="text-sm text-red-500">{errors.contactName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-coffee-brown text-sm font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-coffee-orange" />
                    Email
                  </label>
                  <Input 
                    {...register('email')}
                    type="email" 
                    placeholder="tu@email.com" 
                    className="border-coffee-cream/60 focus:border-coffee-orange"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-coffee-brown text-sm font-medium flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-coffee-orange" />
                    Teléfono
                  </label>
                  <Input 
                    {...register('phone')}
                    placeholder="+57 300 123 4567" 
                    className="border-coffee-cream/60 focus:border-coffee-orange"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-4 pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-coffee-orange hover:bg-coffee-orange/90 text-white"
                    disabled={isSubmitting}
                    onClick={() => trackButtonClick('submit_alliance_form', 'modern_contact_form')}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-sm text-coffee-brown/60 mb-2">¿Prefieres contactarnos directamente?</p>
                    <Button 
                      type="button"
                      variant="outline" 
                      className="text-coffee-brown border-coffee-brown hover:bg-coffee-brown hover:text-white"
                      onClick={handleContactRedirect}
                    >
                      Ir a Página de Contacto
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernContactForm;
