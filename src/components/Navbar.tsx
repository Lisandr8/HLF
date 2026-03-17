import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Consultar Casos', href: '#consultar' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-stone-950/80 backdrop-blur-md border-b border-stone-800 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-stone-100 text-stone-900 flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform">
            <Scale className="w-6 h-6" />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-stone-50">LexConsult</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-stone-400 hover:text-stone-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-stone-800">
            <a 
              href="#contacto"
              className="bg-stone-100 text-stone-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-all"
            >
              Agendar Cita
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="text-stone-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-stone-900 border-b border-stone-800 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-lg font-medium text-stone-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-stone-100 text-stone-900 py-4 rounded-xl font-medium">
            Agendar Cita
          </button>
        </div>
      )}
    </nav>
  );
}

