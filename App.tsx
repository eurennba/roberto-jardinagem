
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight,
  Menu,
  X,
  Leaf,
  Sun,
  Moon,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  User
} from 'lucide-react';
import { BENEFITS, TESTIMONIALS, FAQS, WHATSAPP_LINK } from './constants';
import BenefitCard from './components/BenefitCard';
import FAQAccordion from './components/FAQAccordion';
import GardenAssistant from './components/GardenAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300 selection:bg-green-200 dark:selection:bg-green-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 dark:bg-stone-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-stone-100 dark:border-stone-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative">
              <div className="absolute -inset-2 bg-green-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-green-700 p-2.5 rounded-2xl text-white shadow-xl transform group-hover:rotate-12 transition-all duration-300">
                <Leaf size={28} fill="white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none text-stone-900 dark:text-white">ROBERTO</span>
              <span className="text-[10px] font-black tracking-[0.3em] text-green-600 dark:text-green-500 uppercase mt-1">Jardinagem Profissional</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 font-bold">
            <div className="flex gap-8 text-sm">
              <a href="#servicos" className="hover:text-green-600 transition-colors relative group">
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#depoimentos" className="hover:text-green-600 transition-colors relative group">
                Clientes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#faq" className="hover:text-green-600 transition-colors relative group">
                Dúvidas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
              </a>
            </div>
            
            <div className="flex items-center gap-4 border-l border-stone-200 dark:border-stone-800 pl-8">
              <button 
                onClick={toggleTheme}
                className="p-3 rounded-2xl bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-amber-400 hover:scale-110 transition-all shadow-inner active:scale-95"
                aria-label="Alternar tema"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-600/20 active:scale-95 text-sm font-black uppercase tracking-wider"
              >
                Orçamento Grátis
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-amber-400 shadow-sm">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2.5 text-stone-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 border-t flex flex-col gap-2 p-8 transition-all duration-500 ease-in-out transform origin-top ${isMenuOpen ? 'opacity-100 scale-y-100 shadow-2xl' : 'opacity-0 scale-y-0 pointer-events-none'} bg-white dark:bg-stone-900 border-stone-100 dark:border-stone-800`}>
          <a href="#servicos" onClick={closeMenu} className="text-xl font-bold py-4 border-b dark:border-stone-800 flex justify-between items-center text-stone-900 dark:text-white">Serviços <ArrowRight size={18} /></a>
          <a href="#depoimentos" onClick={closeMenu} className="text-xl font-bold py-4 border-b dark:border-stone-800 flex justify-between items-center text-stone-900 dark:text-white">Clientes <ArrowRight size={18} /></a>
          <a href="#faq" onClick={closeMenu} className="text-xl font-bold py-4 border-b dark:border-stone-800 flex justify-between items-center text-stone-900 dark:text-white">Dúvidas <ArrowRight size={18} /></a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="bg-green-600 text-white text-center py-5 rounded-2xl font-black mt-6 shadow-xl active:scale-95 transition-transform uppercase tracking-widest">Solicitar Orçamento</a>
        </div>
      </nav>

      {/* Hero Section - Minimalist & Typographic */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-green-50 to-stone-50 dark:from-stone-950 dark:to-green-950/20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest mb-10 bg-white/90 dark:bg-stone-800/90 backdrop-blur-md text-green-700 dark:text-green-400 shadow-xl border border-green-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Atendimento em Hortolândia, Sumaré e Campinas</span>
            </div>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-[0.9] mb-10 text-stone-900 dark:text-white tracking-tighter">
              Seu terreno <span className="text-green-600 inline-block transform -rotate-1 italic">Impecável</span> sem complicação.
            </h1>
            <p className="text-xl md:text-3xl mb-14 leading-relaxed text-stone-700 dark:text-stone-300 font-medium max-w-2xl mx-auto">
              Especialista em <span className="text-green-700 dark:text-green-500 font-black">roçagem técnica</span>, limpeza de terrenos e <span className="text-green-700 dark:text-green-500 font-black">plantio de grama</span> profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-green-600 text-white px-14 py-7 rounded-[32px] text-2xl font-black hover:bg-green-700 transition-all shadow-3xl shadow-green-600/40 group active:scale-95 w-full sm:w-auto"
              >
                Orçamento no WhatsApp <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="mt-20 flex flex-wrap justify-center items-center gap-12 text-stone-400 dark:text-stone-600 font-black uppercase tracking-[0.2em] text-[10px]">
              <div className="flex items-center gap-2"><CheckCircle size={16} /> Serviço Rápido</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} /> Preço Justo</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} /> Equipamento Próprio</div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="py-16 border-y border-stone-100 dark:border-stone-900 bg-white dark:bg-stone-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <Clock className="text-green-600" size={32} />
              <p className="font-black text-stone-900 dark:text-white uppercase tracking-tighter text-sm">Agendamento Ágil</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck className="text-green-600" size={32} />
              <p className="font-black text-stone-900 dark:text-white uppercase tracking-tighter text-sm">Garantia de Qualidade</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <MapPin className="text-green-600" size={32} />
              <p className="font-black text-stone-900 dark:text-white uppercase tracking-tighter text-sm">Especialista Local</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Star className="text-green-600" size={32} />
              <p className="font-black text-stone-900 dark:text-white uppercase tracking-tighter text-sm">Nota 5.0 no Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 bg-white dark:bg-stone-950 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24 text-center mx-auto">
            <span className="text-green-600 font-black tracking-[0.4em] uppercase text-sm block mb-6">Nossas Soluções</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-stone-900 dark:text-white leading-none">O que resolvemos hoje?</h2>
            <div className="w-32 h-2.5 bg-green-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {BENEFITS.map(benefit => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Style */}
      <section id="depoimentos" className="py-32 bg-stone-100 dark:bg-stone-900 transition-colors">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-green-600 font-black tracking-[0.4em] uppercase text-sm block mb-6">Satisfação Garantida</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-stone-900 dark:text-white">O que dizem os clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="p-12 rounded-[50px] bg-white dark:bg-stone-800 shadow-2xl border border-stone-200 dark:border-stone-700 relative group transition-all duration-500">
                <div className="absolute -top-6 left-12 bg-green-600 text-white p-4 rounded-3xl shadow-xl">
                  <Star size={24} fill="white" />
                </div>
                <p className="text-xl font-bold leading-relaxed mb-10 text-stone-700 dark:text-stone-200 italic">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-stone-100 dark:border-stone-700">
                  <div className="w-12 h-12 bg-stone-100 dark:bg-stone-700 rounded-full flex items-center justify-center text-stone-400">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-black text-xl text-stone-900 dark:text-white leading-none">{t.name}</p>
                    <p className="text-xs font-black text-green-600 uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-white dark:bg-stone-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-900 dark:text-white">Dúvidas Frequentes</h2>
          </div>
          <FAQAccordion items={FAQS} theme={theme} />
        </div>
      </section>

      {/* CTA Section Final */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-stone-900 dark:bg-green-900/20 rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 relative z-10 leading-none tracking-tighter">Pronto para transformar seu terreno?</h2>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-green-600 text-white px-16 py-8 rounded-full text-3xl font-black hover:bg-green-700 transition-all shadow-3xl active:scale-95 relative z-10"
            >
              CHAMAR O ROBERTO <ArrowRight size={36} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-16 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
        <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col items-center mb-16">
                <div className="bg-green-600 p-5 rounded-3xl text-white shadow-2xl mb-8 transform hover:rotate-12 transition-transform">
                  <Leaf size={40} fill="white" />
                </div>
                <h3 className="text-4xl font-black tracking-tighter mb-4 text-stone-900 dark:text-white">Roberto Jardinagem</h3>
                <p className="text-stone-500 dark:text-stone-400 text-xl font-bold max-w-md">Excelência em roçagem técnica e infraestrutura verde na região metropolitana de Campinas.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12 mb-20 text-stone-800 dark:text-stone-200 font-black uppercase tracking-widest text-sm">
                <a href="#servicos" className="hover:text-green-600 transition-colors">Serviços</a>
                <a href="#depoimentos" className="hover:text-green-600 transition-colors">Clientes</a>
                <a href="#faq" className="hover:text-green-600 transition-colors">Dúvidas</a>
                <a href={WHATSAPP_LINK} className="text-green-600 hover:scale-105 transition-transform">(19) 97122-4392</a>
            </div>
          <div className="text-center text-stone-400 font-bold text-xs border-t border-stone-100 dark:border-stone-800 pt-16">
            <p>© {new Date().getFullYear()} - Roberto Jardinagem Profissional. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Fixo */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group flex flex-col items-end"
        aria-label="Falar com Roberto no WhatsApp"
      >
        <span className="mb-3 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 px-4 py-2 rounded-xl font-black shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-stone-100 dark:border-stone-700 pointer-events-none text-xs whitespace-nowrap">
          Orçamento Grátis 👋
        </span>
        <div className="relative">
            <div className="absolute -inset-3 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-50 animate-pulse transition-opacity duration-1000"></div>
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-3.5 rounded-2xl shadow-2xl whatsapp-pulse active:scale-90 transition-all hover:scale-110 relative z-10 flex items-center justify-center">
              <MessageCircle size={24} fill="white" strokeWidth={1.5} />
              
              <span className="absolute -top-1 -right-1 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600 items-center justify-center text-[9px] font-black text-white border-2 border-white dark:border-stone-900">
                  1
                </span>
              </span>
            </div>
        </div>
      </a>

      <GardenAssistant currentTheme={theme} />
    </div>
  );
};

export default App;
