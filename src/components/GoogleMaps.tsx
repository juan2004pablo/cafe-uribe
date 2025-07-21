
import React from 'react';
import { MapPin } from 'lucide-react';

const GoogleMaps = () => {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h3 className="font-playfair text-2xl font-bold text-coffee-brown mb-4">
                    Nuestras Ubicaciones
                </h3>
                <p className="text-coffee-brown/70">
                    Visítanos en cualquiera de nuestras ubicaciones
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Finca Principal */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-coffee-orange/10 rounded-full flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-coffee-orange" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-coffee-brown">Finca Principal</h4>
                            <p className="text-sm text-coffee-brown/70">Km2 vía Chinácota, Ragonvalia, Norte de Santander</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d63279.10900424417!2d-72.48168!3d7.581041!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzQnNTEuOCJOIDcywrAyOCc1NC4xIlc!5e0!3m2!1ses!2sus!4v1753065483964!5m2!1ses!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Finca Principal - Café Uribe"
                        />
                    </div>
                </div>

                {/* Punto de Venta */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-coffee-orange/10 rounded-full flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-coffee-orange" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-coffee-brown">Punto de Venta</h4>
                            <p className="text-sm text-coffee-brown/70">Cr 11 6-88, Barrio Gramalote, Villa del Rosario</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.606446970677!2d-72.47742328885747!3d7.831409992157077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6646625f0c1ab3%3A0x51a525ffe44b9ef0!2sCra.%2011%20%23%206-88%2C%20Villa%20Del%20Rosario%2C%20Norte%20de%20Santander!5e0!3m2!1ses!2sco!4v1753065374142!5m2!1ses!2sco"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Punto de Venta - Café Uribe"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleMaps;
