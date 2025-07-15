'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="FILIP 2:10 Logo" className="h-10" />
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-[var(--color-black)] hover:text-[var(--color-primary)] font-medium">
            Inicio
          </Link>
          <Link href="#productos" className="text-[var(--color-black)] hover:text-[var(--color-primary)] font-medium">
            Productos
          </Link>
          <Link href="#caracteristicas" className="text-[var(--color-black)] hover:text-[var(--color-primary)] font-medium">
            Características
          </Link>
          <Link href="#testimonios" className="text-[var(--color-black)] hover:text-[var(--color-primary)] font-medium">
            Testimonios
          </Link>
          <Link href="#contacto" className="text-[var(--color-black)] hover:text-[var(--color-primary)] font-medium">
            Contacto
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-4 py-2 rounded-md font-medium">
            Comprar Ahora
          </button>
          
          <button 
            className="md:hidden text-[var(--color-black)] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-[var(--color-black)] hover:text-[var(--color-primary)] py-2 font-medium">
              Inicio
            </Link>
            <Link href="#productos" className="text-[var(--color-black)] hover:text-[var(--color-primary)] py-2 font-medium">
              Productos
            </Link>
            <Link href="#caracteristicas" className="text-[var(--color-black)] hover:text-[var(--color-primary)] py-2 font-medium">
              Características
            </Link>
            <Link href="#testimonios" className="text-[var(--color-black)] hover:text-[var(--color-primary)] py-2 font-medium">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-[var(--color-black)] hover:text-[var(--color-primary)] py-2 font-medium">
              Contacto
            </Link>
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-4 py-2 rounded-md font-medium text-left">
              Comprar Ahora
            </button>
          </nav>
        </div>
      )}
    </header>
  );
} 