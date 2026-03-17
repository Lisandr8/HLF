import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import CaseConsultation from './components/CaseConsultation';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Team />
        <CaseConsultation />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
