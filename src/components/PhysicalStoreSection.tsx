
import { Clock, MapPin } from "lucide-react";

const PhysicalStoreSection = () => {
  return (
    <section className="relative w-full min-h-[700px] bg-[#3B1F13] text-white font-sans px-4 py-10 overflow-hidden">
      {/* Título por fuera del fondo */}
      <h2 className="relative z-20 text-center text-4xl mt-6 md:text-5xl font-semibold uppercase tracking-wide mb-5">
        Punto de venta físico
      </h2>

      {/* Contenedor de la imagen con margen */}
      <div className="relative z-10 mx-2">
        {/* Imagen de fondo */}
        <div
          className="bg-cover bg-center min-h-[600px] w-full"
          style={{ backgroundImage: "url('/images/foto_tienda_4.jpeg')" }}
        />

        {/* Card flotante */}
        <div className="absolute inset-0 flex  justify-end pb-8">
          <div className="m-4 w-full sm:w-[80%] md:w-[45%] lg:w-[40%] h-[100%] bg-white/10 backdrop-blur-md p-6 shadow-xl flex flex-col justify-between">
            {/* Contenido alineado al fondo */}
            <div className="mt-auto space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
                  Horarios de atención
                </h3>

                {/* Horarios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg md:text-xl text-white/90">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 mt-1 text-white/70" />
                    <div>
                      <p className="font-bold">Martes a Sábado</p>
                      <p className="text-white/80">07:00 am – 07:00 pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 mt-1 text-white/70" />
                    <div>
                      <p className="font-bold">Domingo</p>
                      <p className="text-white/80">07:00 am – 12:00 pm</p>
                    </div>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start gap-3 text-lg md:text-xl text-white/90">
                  <MapPin className="w-6 h-6 mt-1 text-white/70" />
                  <div>
                    <p className="font-bold">Dirección</p>
                    <p className="text-white/80">Cr 11 #6-88, Barrio Gramalote, Villa del Rosario</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/90">
                Te invitamos a visitarnos para descubrir la belleza y la calidad que ofrecemos.
                <br /><br />
                Aquí, cada cliente vive una experiencia de compra personalizada, mientras descubre la historia detrás de nuestros productos y el cuidado artesanal con el que cultivamos y producimos en nuestras fincas.             
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysicalStoreSection;
