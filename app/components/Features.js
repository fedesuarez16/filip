export default function Features() {
  // URL de WhatsApp con mensaje predefinido
  const whatsappUrl = "https://wa.me/5491112345678?text=Hola,%20me%20interesan%20las%20almohadillas%20para%20oración.";
  
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-black)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Almohadillas ergonómicas",
      description: "Para apoyo de rodillas durante la oración, diseñadas para adaptarse perfectamente a tu postura."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-black)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Espuma de alta densidad",
      description: "Almohadillas de espuma especial para máximo confort durante el rezo arrodillado por períodos prolongados."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-black)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Textura antideslizante",
      description: "Sustrato con textura especial que evita deslizamientos en cualquier tipo de superficie durante la oración."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-black)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Personalización disponible",
      description: "Almohadillas personalizables. Colocá tu logo o texto para congregaciones, mezquitas o uso personal."
    }
  ];

  return (
    <section id="caracteristicas" className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Columna de características - En móvil aparece debajo */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[var(--color-primary)] group hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col"
                >
                  <div className="mb-3 sm:mb-4 bg-gray-100 p-2 rounded-full inline-block group-hover:bg-red-50 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[var(--color-black)]">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{feature.description}</p>
                  
                  {/* Botón de WhatsApp con flecha */}
                  <div className="mt-auto">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors group"
                    >
                      Consultar por WhatsApp
                      <span className="ml-1 bg-[var(--color-primary)] text-white rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Columna de título e imagen - En móvil aparece arriba */}
          <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-[var(--color-black)]">
                <span className="inline-block border-b-2 border-[var(--color-primary)] pb-2">Características Exclusivas</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Diseñado con atención al detalle para ofrecerte una experiencia premium en cada uso.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-2 rounded-lg"></div>
              <div className="relative p-2 rounded-2xl ">
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl"></div>
                <img 
                  src="/images/product.png" 
                  alt="Producto FILIP 2:10" 
                  className="relative w-full max-w-full h-auto mx-auto lg:max-w-md"
                />
              </div>
              
              {/* Botón de WhatsApp principal */}
              <div className="mt-6 text-center">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M20.636 3.363C18.399 1.193 15.382 0 12.161 0 5.495 0 .079 5.416.079 12.082c0 2.131.547 4.211 1.588 6.047L.019 24l6.062-1.588c1.775.969 3.775 1.478 5.82 1.478h.005c6.665 0 12.08-5.416 12.08-12.082 0-3.222-1.192-6.239-3.35-8.445zm-8.475 18.56h-.004c-1.8 0-3.569-.484-5.104-1.399l-.366-.217-3.794 1.002.995-3.648-.238-.379c-1.007-1.6-1.537-3.44-1.537-5.334 0-5.528 4.499-10.027 10.032-10.027 2.679 0 5.193 1.043 7.084 2.938 1.891 1.894 2.93 4.408 2.929 7.087 0 5.53-4.499 10.029-10.032 10.029z" fillRule="evenodd"/>
                  </svg>
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 