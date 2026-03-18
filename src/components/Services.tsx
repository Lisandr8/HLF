import { Scale, ShieldCheck, Gavel, Users, Building2, Landmark } from 'lucide-react';

const SERVICES = [
  {
    icon: Scale,
    title: 'Derecho Corporativo',
    description: 'Asesoría integral para empresas, desde la constitución hasta fusiones y adquisiciones complejas.'
  },
  {
    icon: ShieldCheck,
    title: 'Propiedad Intelectual',
    description: 'Protección de marcas, patentes y derechos de autor en un entorno digital globalizado.'
  },
  {
    icon: Gavel,
    title: 'Litigio Civil y Mercantil',
    description: 'Representación estratégica en disputas judiciales con un enfoque en la resolución eficiente.'
  },
  {
    icon: Users,
    title: 'Derecho Laboral',
    description: 'Gestión de relaciones laborales, contratos y cumplimiento normativo para empleadores.'
  },
  {
    icon: Building2,
    title: 'Derecho Inmobiliario',
    description: 'Asesoría en transacciones de bienes raíces, arrendamientos y desarrollos urbanísticos.'
  },
  {
    icon: Landmark,
    title: 'Derecho Administrativo',
    description: 'Gestión de trámites ante organismos públicos y defensa en procesos sancionadores.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Excelencia Jurídica a su Servicio</h2>
            <p className="text-stone-600 text-lg">
              Ofrecemos soluciones legales personalizadas con un equipo de especialistas dedicados a proteger sus intereses y asegurar el cumplimiento normativo.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-stone-400 font-mono text-sm uppercase tracking-widest">Nuestras Áreas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-stone-200 hover:border-stone-400 transition-all group"
            >
              <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-stone-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
