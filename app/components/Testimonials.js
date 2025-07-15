export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana López",
      role: "Cliente Verificado",
      image: "https://placehold.co/100x100/EEE/31343C?text=AL",
      quote: "Este producto ha cambiado completamente mi rutina diaria. La calidad es excepcional y el servicio al cliente es de primera clase. No puedo imaginar mi vida sin él.",
      rating: 5
    },
    {
      name: "Roberto Sánchez",
      role: "Cliente Premium",
      image: "https://placehold.co/100x100/EEE/31343C?text=RS",
      quote: "Después de probar varias alternativas, puedo decir con seguridad que este es el mejor producto del mercado. Vale cada centavo invertido.",
      rating: 5
    },
    {
      name: "Elena Martín",
      role: "Cliente Habitual",
      image: "https://placehold.co/100x100/EEE/31343C?text=EM",
      quote: "Excelente relación calidad-precio. Lo he recomendado a todos mis amigos y familiares. La entrega fue rápida y el producto superó mis expectativas.",
      rating: 4
    }
  ];

  return (
    <section id="testimonios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-black)]">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes están encantados con nuestros productos y servicios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[var(--color-black)]">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-[var(--color-primary)]' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-8 py-3 rounded-md font-bold text-lg transition-colors">
            Ver Más Opiniones
          </button>
        </div>
      </div>
    </section>
  );
} 