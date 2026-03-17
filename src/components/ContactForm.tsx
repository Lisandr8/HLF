import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simular envío de formulario
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Resetear después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="bg-stone-950 py-24 border-b border-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-50 mb-6">Inicie su Consulta</h2>
            <p className="text-stone-400 text-lg mb-10 leading-relaxed">
              Nuestro equipo de expertos está listo para analizar su situación legal. Complete el formulario y nos pondremos en contacto con usted en menos de 24 horas hábiles.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-stone-400">
                <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center border border-stone-800">
                  <span className="text-xs font-bold text-stone-200">01</span>
                </div>
                <p>Confidencialidad absoluta garantizada.</p>
              </div>
              <div className="flex items-center gap-4 text-stone-400">
                <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center border border-stone-800">
                  <span className="text-xs font-bold text-stone-200">02</span>
                </div>
                <p>Primera evaluación estratégica sin compromiso.</p>
              </div>
              <div className="flex items-center gap-4 text-stone-400">
                <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center border border-stone-800">
                  <span className="text-xs font-bold text-stone-200">03</span>
                </div>
                <p>Atención personalizada por especialistas.</p>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 p-8 md:p-10 rounded-3xl border border-stone-800 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif text-stone-50 mb-4">Mensaje Enviado</h3>
                  <p className="text-stone-400">Gracias por contactarnos. Un asesor legal revisará su consulta y le responderá a la brevedad.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-stone-500 hover:text-stone-200 text-sm underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Nombre Completo</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 focus:ring-2 focus:ring-stone-100 outline-none transition-all placeholder:text-stone-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Correo Electrónico</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan@ejemplo.com"
                        className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 focus:ring-2 focus:ring-stone-100 outline-none transition-all placeholder:text-stone-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Asunto de la Consulta</label>
                    <select 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 focus:ring-2 focus:ring-stone-100 outline-none transition-all appearance-none"
                    >
                      <option value="" className="bg-stone-900">Seleccione una opción</option>
                      <option value="corporativo" className="bg-stone-900">Derecho Corporativo</option>
                      <option value="civil" className="bg-stone-900">Litigio Civil</option>
                      <option value="laboral" className="bg-stone-900">Derecho Laboral</option>
                      <option value="otro" className="bg-stone-900">Otros Asuntos</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest">Mensaje / Detalles</label>
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describa brevemente su situación..."
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 focus:ring-2 focus:ring-stone-100 outline-none transition-all resize-none placeholder:text-stone-600"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-stone-100 text-stone-900 py-4 rounded-xl font-bold hover:bg-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin" />
                    ) : (
                      <>
                        Enviar Consulta General
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-[10px] text-stone-600 text-center uppercase tracking-widest">
                    Al enviar, acepta nuestra política de tratamiento de datos.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
