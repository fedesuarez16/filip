'use client';

import { useState } from 'react';

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToProductShowcase = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleComprarAhora = () => {
    setShowPopup(true);
  };

  const handlePreVenta = () => {
    const message = "Hola, estoy interesado en la pre-venta exclusiva de Filip 2:10";
    const whatsappUrl = `https://wa.me/5493516982735?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowPopup(false);
  };

  return (
    <>
      <section 
        className="relative text-white bg-cover bg-center h-[80vh] flex items-center justify-center" 
        style={{ backgroundImage: 'url("/images/banner.jpeg")' }}
      >
        {/* Overlay oscuro para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6" >
              Descubre la almohadilla ergonómica para la oración
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 text-[var(--color-gray)]">
              Almohadillas ergonómicas
              para apoyo de rodillas
              durante la oración
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleComprarAhora}
                className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] px-8 py-3 rounded-md font-bold text-lg"
              >
                Comprar Ahora
              </button>
              <button 
                onClick={scrollToProductShowcase}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[var(--color-black)] px-8 py-3 rounded-md font-bold text-lg transition-colors"
              >
                Ver Catálogo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-black)]">¡Próximo Lanzamiento!</h3>
            <p className="text-gray-600 mb-6">Lanzamiento Octubre 2025</p>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={handlePreVenta}
                className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] px-6 py-3 rounded-md font-bold"
              >
                Pre-venta Exclusiva
              </button>
              <button 
                onClick={() => setShowPopup(false)}
                className="border border-gray-300 hover:border-[var(--color-primary)] text-gray-600 hover:text-[var(--color-primary)] px-6 py-3 rounded-md font-bold transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 