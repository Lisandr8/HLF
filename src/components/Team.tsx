import { Linkedin, Mail, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { LAWYERS } from '../constants';

export default function Team() {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Nuestro Equipo de Expertos</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Contamos con especialistas de primer nivel dedicados a brindar soluciones legales con integridad y excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LAWYERS.map((lawyer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-stone-100">
                <img 
                  src={lawyer.image} 
                  alt={lawyer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-serif mb-1 group-hover:text-stone-600 transition-colors">{lawyer.name}</h3>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-3">{lawyer.role}</p>
              <p className="text-stone-500 text-sm font-medium mb-4">{lawyer.specialty}</p>
              <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 italic">
                "{lawyer.bio}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-stone-50 rounded-3xl border border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-serif mb-2">¿Busca un especialista específico?</h3>
            <p className="text-stone-600">Contamos con una red extendida de consultores en diversas jurisdicciones internacionales.</p>
          </div>
          <button className="bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all flex items-center gap-2 whitespace-nowrap">
            Ver Directorio Completo <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
