import React, { useState } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Star,
  Instagram,
  Maximize2,
  X,
  Stethoscope,
  Smile,
  Shield,
  Sparkles,
  MapPin,
  Calendar
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5551994020836";
const INSTAGRAM_URL = "https://instagram.com/draandressavalim/";

const IMAGES = {
  expert_hero: "https://i.imgur.com/2Vb1GmZ.png",
  expert_about: "https://i.imgur.com/q1oIVhK.png",
  results: [
    "https://i.imgur.com/LfCRjOA.jpeg",
    "https://i.imgur.com/DYjAkZa.png",
    "https://i.imgur.com/jYSw2xE.png",
    "https://i.imgur.com/EOXfr9y.jpeg",
    "https://i.imgur.com/ci2Tcd2.jpeg",
    "https://i.imgur.com/V54dcsm.jpeg"
  ],
  pediatrics: [
    "https://i.imgur.com/xcrvgAz.png",
    "https://i.imgur.com/tFH1s2m.png",
    "https://i.imgur.com/xCZCtpC.png",
    "https://i.imgur.com/JIbIuaA.png",
    "https://i.imgur.com/MxWzYU7.png",
    "https://i.imgur.com/esRZy6T.png"
  ]
};

// --- Components ---

const Lightbox: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm" onClick={onClose}>
    <button className="absolute top-6 right-6 text-white hover:text-stone-300 transition-colors" onClick={onClose}>
      <X size={32} />
    </button>
    <img src={imageUrl} alt="Resultado" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
  </div>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 px-6 md:py-24 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const CTAButton: React.FC<{ label: string; subtext?: string; className?: string }> = ({ label, subtext, className = "" }) => (
  <div className={`flex flex-col items-center gap-2 ${className}`}>
    <a 
      href={WHATSAPP_URL} 
      target="_blank" 
      rel="noopener noreferrer"
      className="cta-button w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold py-5 px-10 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3 text-lg text-center leading-tight uppercase tracking-wide"
    >
      <MessageCircle size={24} className="fill-white" />
      {label}
    </a>
    {subtext && <span className="text-stone-500 text-sm font-medium italic opacity-70">{subtext}</span>}
  </div>
);

const App: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO SECTION (Primeira Dobra) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-stone-100 to-white pt-16">
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block text-emerald-800 font-bold tracking-[0.2em] uppercase text-xs mb-4">Bem-vindo à Odontologia Real</span>
          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[1.1] mb-6">
            Eu sou a <br/>
            <span className="text-emerald-900 italic font-medium">Dra. Andressa Valim</span>
          </h1>

          <div className="relative w-full max-w-xs md:max-w-sm mx-auto mb-10 mt-8 group">
             <div className="absolute inset-0 bg-emerald-200 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10 opacity-30"></div>
             <img 
              src={IMAGES.expert_hero} 
              alt="Dra. Andressa Valim" 
              className="w-full h-auto drop-shadow-2xl rounded-[3rem] relative z-10 grayscale-[10%] hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <p className="text-xl md:text-2xl text-stone-600 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Especialista em resgatar sua autoestima através de uma <span className="font-semibold text-stone-800">odontologia humana</span>, segura e centrada no seu bem-estar.
          </p>

          <CTAButton 
            label="Agendar consulta gratuita" 
            subtext="sem compromisso"
          />
        </div>
      </section>

      {/* 2. QUEM SOU EU (Autoridade) */}
      <Section className="bg-white border-y border-stone-100">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-5/12">
            <div className="relative">
              <img 
                src={IMAGES.expert_about} 
                alt="Dra. Andressa Valim em atendimento" 
                className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-emerald-900 font-bold text-2xl">Arroio Teixeira</p>
                <p className="text-stone-500 text-sm">Capão da Canoa - RS</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 space-y-8">
            <h2 className="font-serif text-4xl text-stone-900">Transformando vidas através do sorriso</h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Sou Protesista e Implantodontista, e minha missão é oferecer uma <span className="text-stone-900 font-medium italic">Odontologia Real</span>. Aquela que não foca apenas na técnica, mas na pessoa por trás do sorriso.
              </p>
              <p>
                Acredito que o tratamento odontológico não precisa ser traumático. Por isso, utilizo a <span className="text-emerald-800 font-semibold underline decoration-emerald-200 underline-offset-4">Sedação com Óxido Nitroso</span> para garantir que você tenha uma experiência tranquila e livre de medo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Atendimento Personalizado",
                "Clareza em cada etapa",
                "Conforto e Segurança",
                "Foco em Saúde e Bem-estar"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-stone-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section className="bg-stone-50">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Resultados Reais</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">A prova de que a dedicação e a técnica correta podem devolver a vontade de sorrir.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {IMAGES.results.map((url, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-white shadow-md hover:shadow-2xl transition-all"
              onClick={() => setActiveImage(url)}
            >
              <img 
                src={url} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Maximize2 className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-stone-400 text-sm mt-10 italic">Aviso: Os resultados podem variar de pessoa para pessoa.</p>
      </Section>

      {/* 4. POR QUE CONFIAR EM MIM */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Por que confiar em mim?</h2>
          <p className="text-stone-600">Diferenciais que tornam o meu atendimento exclusivo.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck size={32} />, title: "Avaliação Honesta", desc: "Nada de tratamentos desnecessários. Clareza total sobre o que você realmente precisa." },
            { icon: <Smile size={32} />, title: "Sedação Consciente", desc: "Tecnologia com Óxido Nitroso para quem tem medo de dentista. Conforto absoluto." },
            { icon: <Stethoscope size={32} />, title: "Atendimento Comigo", desc: "Você será atendido(a) diretamente por mim em todas as etapas decisivas." },
            { icon: <Sparkles size={32} />, title: "Materiais Premium", desc: "Uso exclusivo de materiais de alta durabilidade e estética superior." },
            { icon: <MapPin size={32} />, title: "Fácil Acesso", desc: "Consultório localizado em Arroio Teixeira, planejado para seu bem-estar." },
            { icon: <Calendar size={32} />, title: "Pontualidade", desc: "Respeitamos seu tempo com agendamentos precisos e sem esperas longas." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col p-8 bg-stone-50 rounded-[2rem] border border-stone-100 hover:border-emerald-200 transition-colors">
              <div className="text-emerald-700 mb-6 bg-emerald-100 w-16 h-16 flex items-center justify-center rounded-2xl">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl text-stone-800 mb-3">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <div className="bg-emerald-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-emerald-900 mb-6 italic">Ainda tem dúvidas se este é o momento certo?</h2>
          <p className="text-stone-600 text-lg mb-8 leading-relaxed">
            A primeira avaliação é o momento de conversarmos sem pressa. Vamos entender suas necessidades e traçar o melhor caminho juntos.
          </p>
          <CTAButton label="Conversar no WhatsApp agora" className="items-center" />
        </div>
      </div>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Como funciona?</h2>
          <p className="text-stone-600">3 passos simples para transformar sua saúde bucal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-stone-100 -z-10"></div>
          {[
            { step: "01", title: "Contato", desc: "Clique no botão e nos envie uma mensagem rápida pelo WhatsApp." },
            { step: "02", title: "Agendamento", desc: "Escolha o melhor dia e horário para sua consulta gratuita." },
            { step: "03", title: "Avaliação", desc: "Venha até o consultório para uma conversa e diagnóstico completo." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 text-center relative hover:shadow-xl transition-shadow">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {item.step}
              </span>
              <h3 className="font-serif text-2xl text-stone-800 mb-4 mt-2">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-emerald-900 font-bold text-xl mb-4 italic">Reiteramos: gratuito e sem compromisso.</p>
        </div>
      </Section>

      {/* 7. MAIS PROVAS (Odontopediatria & Bastidores) */}
      <Section className="bg-stone-50">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Odontopediatria de 💚</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Porque cuidar do sorriso começa cedo, com carinho e paciência.</p>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-8 snap-x no-scrollbar">
          {IMAGES.pediatrics.map((url, index) => (
            <div key={index} className="flex-none w-72 h-48 rounded-2xl overflow-hidden snap-center shadow-md">
              <img src={url} alt="Odontopediatria" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center flex items-center justify-center gap-4 text-stone-500 italic">
          <Heart size={20} className="text-emerald-600" />
          <span>Ambiente lúdico e atendimento especializado para os pequenos.</span>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <section className="bg-stone-900 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Vamos devolver o seu prazer de sorrir?</h2>
          <p className="text-stone-400 text-xl mb-12 font-light">
            Não adie mais o seu bem-estar. Estou aqui para te ajudar com profissionalismo e humanidade.
          </p>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-12">
            <p className="text-emerald-400 font-bold text-lg mb-2 uppercase tracking-widest">Sua oportunidade hoje</p>
            <p className="text-3xl font-serif">Primeira consulta 100% gratuita</p>
          </div>
          <CTAButton 
            label="Quero agendar meu atendimento" 
            className="items-center"
          />
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-stone-50 py-16 px-6 border-t border-stone-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <p className="font-signature text-5xl text-emerald-950 mb-4">Andressa Valim</p>
            <p className="text-stone-800 font-bold">Protesista e Implantodontista</p>
            <p className="text-stone-500 text-sm max-w-xs mt-2 leading-relaxed">
              Rua Maneca Quadros, 252 · Arroio Teixeira <br/>
              Capão da Canoa · RS · CEP 95555-000
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-stone-700 hover:text-emerald-800 transition-colors font-medium bg-white px-6 py-3 rounded-full shadow-sm"
            >
              <Instagram size={20} />
              <span>@draandressavalim</span>
            </a>
            <div className="text-stone-400 text-xs text-center md:text-right">
              <p>© 2024 · Dra. Andressa Valim · Odontologia Real</p>
              <p className="mt-1">Desenvolvido para alta performance e cuidado humano.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Lightbox */}
      {activeImage && <Lightbox imageUrl={activeImage} onClose={() => setActiveImage(null)} />}
    </div>
  );
};

export default App;