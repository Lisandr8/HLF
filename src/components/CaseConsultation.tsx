import React, { useState } from 'react';
import { Search, FileText, Clock, CheckCircle2, AlertCircle, ChevronRight, User, ArrowRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCaseSearch } from '../hooks/useCaseSearch';
import { LAWYERS } from '../constants';

export default function CaseConsultation() {
  const [searchId, setSearchId] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const { data: result, loading, error, searchByNuc, searchBySolicitud, clearSearch } = useCaseSearch();

  // Logic to suggest a lawyer based on case data
  const getSuggestedLawyer = (caseTitle: string, caseDesc: string) => {
    const text = (caseTitle + ' ' + caseDesc).toLowerCase();
    
    if (text.includes('corporativo') || text.includes('fusión') || text.includes('empresa')) {
      return LAWYERS.find(l => l.name === 'Dr. Alejandro Lex');
    }
    if (text.includes('intelectual') || text.includes('marca') || text.includes('autor')) {
      return LAWYERS.find(l => l.name === 'Dra. Elena Martínez');
    }
    if (text.includes('laboral') || text.includes('trabajo') || text.includes('empleo')) {
      return LAWYERS.find(l => l.name === 'Dra. Sofía Castro');
    }
    if (text.includes('civil') || text.includes('mercantil') || text.includes('litigio')) {
      return LAWYERS.find(l => l.name === 'Lic. Roberto Sanz');
    }
    
    // Default to a senior partner if no clear match
    return LAWYERS[0];
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine search type based on input format
    // If it starts with 'SOL' or has a specific pattern, use searchBySolicitud
    // Otherwise, assume it's a NUC
    if (searchId.toUpperCase().startsWith('SOL')) {
      searchBySolicitud(searchId.toUpperCase());
    } else {
      searchByNuc(searchId.toUpperCase());
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'en_proceso': return 'text-blue-600 bg-blue-50 border-blue-100';
      case 'completado': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'pendiente': return 'text-amber-600 bg-amber-50 border-amber-100';
      default: return 'text-stone-600 bg-stone-50 border-stone-100';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'en_proceso': return 'En Proceso';
      case 'completado': return 'Finalizado';
      case 'pendiente': return 'Pendiente de Revisión';
      default: return status;
    }
  };

  return (
    <section id="consultar" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Consulta de Expedientes</h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            Ingrese su NUC o Número de Solicitud para conocer el estado actual de su trámite o proceso legal en el Poder Judicial.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm mb-12">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="text"
                placeholder="NUC (Ej: 123-2024-00456) o Solicitud (Ej: SOL-2024-001)"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                <button
                  type="button"
                  onMouseEnter={() => setShowHelp(true)}
                  onMouseLeave={() => setShowHelp(false)}
                  onClick={() => setShowHelp(!showHelp)}
                  className="text-stone-400 hover:text-stone-600 transition-colors p-1"
                  aria-label="Ayuda sobre NUC y Solicitud"
                >
                  <HelpCircle className="w-5 h-5" />
                </button>
                
                <AnimatePresence>
                  {showHelp && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full right-0 mb-4 w-72 bg-white border border-stone-200 p-4 rounded-xl shadow-2xl z-50 text-left"
                    >
                      <div className="space-y-3">
                        <div>
                          <p className="text-stone-900 text-xs font-bold uppercase tracking-wider mb-1">NUC</p>
                          <p className="text-stone-600 text-[11px] leading-relaxed">
                            Número Único de Caso: Identificador oficial de expedientes judiciales para seguimiento de todo el proceso.
                          </p>
                        </div>
                        <div>
                          <p className="text-stone-900 text-xs font-bold uppercase tracking-wider mb-1">Solicitud</p>
                          <p className="text-stone-600 text-[11px] leading-relaxed">
                            Folio asignado a trámites iniciales o peticiones antes de formalizarse como un expediente judicial.
                          </p>
                        </div>
                        <div className="pt-2 border-t border-stone-100">
                          <p className="text-stone-400 text-[10px] italic">
                            Estos códigos garantizan la transparencia y el acceso rápido a la información verídica de su caso.
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-stone-200" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-stone-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-stone-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Consultar Estado'
              )}
            </button>
          </form>
          <p className="mt-4 text-xs text-stone-400 text-center">
            Pruebe con un NUC o número de solicitud oficial.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-4"
            >
              <AlertCircle className="text-red-600 w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-bold text-red-900">Error en la consulta</h4>
                <p className="text-red-600 text-sm">{error}</p>
                <button 
                  onClick={clearSearch}
                  className="mt-2 text-xs text-red-700 underline font-medium"
                >
                  Limpiar búsqueda
                </button>
              </div>
            </motion.div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-bold text-stone-400">{result.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(result.status)}`}>
                        {getStatusLabel(result.status)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif">{result.title}</h3>
                    <p className="text-stone-500 text-sm mt-1">Cliente/Partes: {result.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-stone-400 uppercase tracking-wider font-bold">Última actualización</p>
                    <p className="text-stone-900 font-medium">{result.lastUpdate}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">Descripción</h4>
                  <p className="text-stone-600 leading-relaxed">{result.description}</p>
                </div>

                {result.steps && result.steps.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-6">Línea de Tiempo del Proceso</h4>
                    <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-stone-100">
                      {result.steps.map((step, idx) => (
                        <div key={idx} className="relative pl-10">
                          <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white z-10 ${
                            step.completed ? 'border-emerald-500 bg-emerald-50' : 'border-stone-200'
                          }`}>
                            {step.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Clock className="w-4 h-4 text-stone-300" />
                            )}
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                            <span className={`font-medium ${step.completed ? 'text-stone-900' : 'text-stone-400'}`}>
                              {step.title}
                            </span>
                            {step.date && (
                              <span className="text-xs text-stone-400 font-mono">{step.date}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Specialist Suggestion Section */}
              {(() => {
                const lawyer = getSuggestedLawyer(result.title, result.description);
                if (!lawyer) return null;
                
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-stone-900 rounded-2xl p-8 text-white shadow-xl overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <User className="w-4 h-4" />
                        Especialista Recomendado
                      </div>
                      
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                          <img 
                            src={lawyer.image} 
                            alt={lawyer.name} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-xl font-serif mb-1">{lawyer.name}</h4>
                          <p className="text-stone-400 text-sm mb-4">{lawyer.specialty}</p>
                          <p className="text-stone-300 text-sm leading-relaxed mb-6 italic">
                            "{lawyer.bio}"
                          </p>
                          <button className="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all">
                            Contactar con el especialista <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}

              <div className="flex justify-center gap-4">
                <button 
                  onClick={clearSearch}
                  className="text-stone-400 hover:text-stone-900 text-sm font-medium transition-colors"
                >
                  Nueva consulta
                </button>
                <button className="text-stone-400 hover:text-stone-900 text-sm font-medium flex items-center gap-1 transition-colors">
                  Descargar reporte completo (PDF) <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

