import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="w-8 h-8 bg-white text-stone-900 flex items-center justify-center rounded">
                <span className="font-serif font-bold">L</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">LexConsult</span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Comprometidos con la excelencia legal y la defensa íntegra de sus derechos. Más de dos décadas de trayectoria impecable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios Legales</a></li>
              <li><a href="#consultar" className="hover:text-white transition-colors">Consulta de Casos</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">Nuestro Equipo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog Jurídico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-stone-500" />
                <span>contacto@lexconsult.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-stone-500" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
                <span>Calle de la Justicia 12, Planta 4<br />28001 Madrid, España</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Horario</h4>
            <ul className="space-y-4 text-sm">
              <li>Lunes - Jueves: 9:00 - 18:00</li>
              <li>Viernes: 9:00 - 15:00</li>
              <li className="text-stone-500 italic">Sábados y Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <p>© 2024 LexConsult Consultoría Jurídica. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
