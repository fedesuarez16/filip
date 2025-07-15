'use client';

import { useState } from 'react';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const showcaseImages = [
    '/images/showcase/1.png',
    '/images/showcase/2.png',
    '/images/showcase/3.png',
  ];
  
  const productDetails = [
    {
      title: "Descripción",
      content: (
        <div>
          <p className="mb-4">
            Nuestro producto estrella está diseñado para ofrecer una experiencia incomparable. Fabricado con materiales de primera calidad, este producto combina elegancia, durabilidad y funcionalidad en un solo paquete.
          </p>
          <p className="mb-4">
            Su diseño ergonómico garantiza comodidad durante su uso, mientras que su tecnología avanzada lo convierte en una opción superior a cualquier alternativa en el mercado.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Material premium resistente a golpes y rayones</li>
            <li>Tecnología de última generación</li>
            <li>Diseño elegante que se adapta a cualquier entorno</li>
            <li>Funciones intuitivas para una experiencia de usuario óptima</li>
          </ul>
        </div>
      )
    },
    {
      title: "Especificaciones",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-[var(--color-black)]">Dimensiones</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Altura: 15 cm</li>
              <li>Ancho: 10 cm</li>
              <li>Profundidad: 5 cm</li>
              <li>Peso: 250 g</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-[var(--color-black)]">Materiales</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Carcasa: Aluminio de grado aeroespacial</li>
              <li>Pantalla: Cristal reforzado</li>
              <li>Interior: Componentes de alta precisión</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-[var(--color-black)]">Tecnología</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Procesador de última generación</li>
              <li>Conectividad avanzada</li>
              <li>Batería de larga duración (hasta 48 horas)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-[var(--color-black)]">Contenido del paquete</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Producto principal</li>
              <li>Cable de carga</li>
              <li>Manual de usuario</li>
              <li>Tarjeta de garantía</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Opiniones",
      content: (
        <div className="space-y-6">
          <div className="border-b pb-4">
            <div className="flex items-center mb-2">
              <div className="flex text-[var(--color-primary)]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="ml-2 font-semibold text-[var(--color-black)]">María García</span>
            </div>
            <p className="text-gray-600">
              "Increíble producto. Superó todas mis expectativas. La calidad es excepcional y el servicio al cliente fue excelente. Lo recomiendo totalmente."
            </p>
          </div>
          
          <div className="border-b pb-4">
            <div className="flex items-center mb-2">
              <div className="flex text-[var(--color-primary)]">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <span className="ml-2 font-semibold text-[var(--color-black)]">Carlos Rodríguez</span>
            </div>
            <p className="text-gray-600">
              "Muy buen producto, aunque la entrega tardó un poco más de lo esperado. La calidad es muy buena y cumple con lo prometido."
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <div className="flex text-[var(--color-primary)]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="ml-2 font-semibold text-[var(--color-black)]">Laura Martínez</span>
            </div>
            <p className="text-gray-600">
              "Absolutamente impresionante. El mejor producto que he comprado en años. La atención al detalle es excepcional y el rendimiento es superior."
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="productos" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-black)]">Nuestro Producto Destacado</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestro producto es la elección preferida de miles de clientes satisfechos.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <img 
                src={showcaseImages[selectedImage]} 
                alt="Producto Premium" 
                className="rounded-md shadow-lg max-w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {showcaseImages.map((image, i) => (
                <div 
                  key={i} 
                  className={`${selectedImage === i ? 'border-2 border-[var(--color-primary)]' : 'border border-gray-200'} bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200`}
                  onClick={() => setSelectedImage(i)}
                >
                  <img 
                    src={image} 
                    alt={`Vista ${i+1}`} 
                    className="rounded w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-2 text-[var(--color-black)]">Filip 2:10 - almohadilla ergonómica para la oración</h3>
            
            
            <p className="text-3xl font-bold text-[var(--color-primary)] mb-4"></p>
            <p className="text-gray-600 mb-6">
              El producto premium que revolucionará tu día a día. Con características únicas y un diseño elegante, es la elección perfecta para quienes buscan calidad y rendimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-3 rounded-md font-bold text-lg flex-1">
                Comprar Ahora
              </button>
              <button className="border border-gray-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] px-8 py-3 rounded-md font-bold text-lg flex-1 transition-colors">
                Añadir al Carrito
              </button>
            </div>
            
            <div className="border-t pt-6">
              <div className="flex border-b">
                {productDetails.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 font-medium ${
                      activeTab === index
                        ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]'
                        : 'text-gray-600 hover:text-[var(--color-primary)]'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              
              <div className="py-4">
                {productDetails[activeTab].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 