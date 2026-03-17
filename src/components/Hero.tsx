import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-900/30 -z-10 hidden lg:block" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-stone-100 text-stone-900 text-xs font-bold tracking-widest uppercase rounded-full mb-8">
            Establecidos en 1998
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-stone-50">
            Justicia <br />
            <span className="italic text-stone-500">con</span> Claridad.
          </h1>
          <p className="text-xl text-stone-400 mb-10 max-w-lg leading-relaxed">
            LexConsult es una firma boutique dedicada a proporcionar asesoría legal estratégica para individuos y empresas que buscan resultados excepcionales.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#consultar"
              className="bg-stone-100 text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-all flex items-center gap-2 group"
            >
              Consultar Expediente
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios"
              className="px-8 py-4 rounded-full font-medium border border-stone-700 text-stone-300 hover:border-stone-100 hover:text-stone-100 transition-all"
            >
              Nuestros Servicios
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-stone-800 pt-8">
            <div>
              <p className="text-3xl font-serif text-stone-50">25+</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider font-bold">Años de Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-stone-50">1.2k</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider font-bold">Casos Éxito</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-stone-50">15</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider font-bold">Especialistas</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-800">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
              alt="Oficina Legal" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-10 -left-10 bg-stone-900 p-6 rounded-2xl shadow-xl border border-stone-800 max-w-xs">
            <p className="text-stone-100 font-serif italic text-lg mb-2">"La integridad es la base de cada victoria legal."</p>
            <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">— Dr. Alejandro Lex, Socio Fundador</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
