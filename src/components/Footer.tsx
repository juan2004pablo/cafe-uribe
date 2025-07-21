
const Footer = () => {
  return (
    <footer className="bg-coffee-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-coffee-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CU</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Café Uribe</h3>
                <p className="text-sm text-gray-400">100% Colombiano</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Café de finca con trazabilidad garantizada. De las montañas del Eje Cafetero 
              a tu taza con la más alta calidad.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/nosotros" className="hover:text-coffee-orange">Nosotros</a></li>
              <li><a href="/variedades" className="hover:text-coffee-orange">Variedades</a></li>
              <li><a href="/clientes-b2b" className="hover:text-coffee-orange">Clientes B2B</a></li>
              <li><a href="/contacto" className="hover:text-coffee-orange">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>+57 320 373 7502</p>
              <p>Eje Cafetero, Colombia</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Café Uribe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
