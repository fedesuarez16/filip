export default function Hero() {
  return (
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
            <button className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] px-8 py-3 rounded-md font-bold text-lg">
              Comprar Ahora
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[var(--color-black)] px-8 py-3 rounded-md font-bold text-lg transition-colors">
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 