import React, { useState } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Clock, 
  Star,
  Instagram,
  Maximize2,
  X
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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
    <button className="absolute top-6 right-6 text-white" onClick={onClose}>
      <X size={32} />
    </button>
    <img src={imageUrl} alt="Result" className="max-w-full max-h-full object-contain rounded-lg" />
  </div>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const CTAButton: React.FC<{ label: string; subtext?: string; className?: string }> = ({ label, subtext, className = "" }) => (
  <div className={`flex flex-col items-center gap-3 ${className}`}>
    <a 
      href={WHATSAPP_URL} 
      target="_blank" 
      rel="noopener noreferrer"
      className="cta-button w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-xl flex items-center justify-center gap-3 text-lg text-center leading-tight"
    >
      <MessageCircle size={24} className="fill-white" />
      {label}
    </a>
    {subtext && <span className="text-stone-500 text-sm font-medium italic opacity-80">{subtext}</span>}
  </div>
);

const App: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openImage = (url: string) => setActiveImage(url);
  const closeImage = () => setActiveImage(null);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-stone-100 flex flex-col items-center">
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight mb-8">
            Eu sou a <span className="text-emerald-800 font-bold italic">Dra. Andressa Valim</span>
          </h1>

          <div className="relative w-full max-w-xs md:max-w-sm mx-auto mb-10 px-4">
             <img 
              src={IMAGES.expert_hero} 
              alt="Dra. Andressa Valim" 
              className="w-full h-auto drop-shadow-2xl rounded-3xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full mix-blend-multiply opacity-70 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-stone-200 rounded-full mix-blend-multiply opacity-50"></div>
          </div>

          <p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            Especialista em resgatar sua autoestima através da <span className="font-semibold text-stone-800">Odontologia Real</span>: próteses, implantes e bem-estar total com sedação consciente.
          </p>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src={IMAGES.expert_about} 
              alt="Sobre a Dra. Andressa" 
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800">Cuidado humano e técnica de excelência</h2>
            <p className="text-stone-600 leading-relaxed">
              Sou Protesista e Implantodontista focada em uma odontologia que vai além do consultório. Acredito que o seu sorriso é o seu cartão de visitas, mas a sua saúde é a base de tudo. 
            </p>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                <span><strong className="text-stone-900">Odontologia Real:</strong> Tratamentos honestos focados no seu bem-estar.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                <span><strong className="text-stone-900">Conforto Total:</strong> Uso de sedação com Óxido Nitroso para uma experiência sem medo.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                <span><strong className="text-stone-900">Expertise Técnica:</strong> Especialista em Próteses e Implantodontia.</span>
              </li>
            </ul>

            <CTAButton 
              label="Agendar consulta gratuita no WhatsApp" 
              subtext="*Sem nenhum compromisso"
              className="!items-start"
            />
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section className="bg-stone-50">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">Sorrisos que transformam vidas</h2>
          <p className="text-stone-500 italic max-w-xl mx-auto">Resultados reais de pacientes que confiaram em meu trabalho.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8">
          {IMAGES.results.map((url, index) => (
            <div 
              key={index} 
              className="group relative aspect-square bg-stone-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
              onClick={() => openImage(url)}
            >
              <img src={url} alt={`Resultado ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize2 className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-stone-400 mt-4">*Resultados podem variar de pessoa para pessoa. Cada caso é único.</p>
      </Section>

      {/* 4. POR QUE CONFIAR */}
      <Section className="bg-emerald-900 text-white">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">O diferencial do meu atendimento</h2>
          <p className="text-emerald-100/80">O que você encontra ao entrar no meu consultório.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck size={32} />, title: "Avaliação Honesta", text: "Diagnósticos precisos, sem sugerir tratamentos desnecessários." },
            { icon: <Heart size={32} />, title: "Foco no Bem-estar", text: "Humanização é a palavra de ordem em cada procedimento." },
            { icon: <Star size={32} />, title: "Tecnologia de Ponta", text: "Sedação consciente e materiais de altíssima qualidade." },
            { icon: <Clock size={32} />, title: "Pontualidade", text: "Respeito total ao seu tempo e planejamento." },
            { icon: <MessageCircle size={32} />, title: "Clareza", text: "Explicação detalhada de cada etapa do seu tratamento." },
            { icon: <CheckCircle2 size={32} />, title: "Atendimento comigo", text: "Você será atendido diretamente por mim em todas as etapas." }
          ].map((item, idx) => (
            <div key={idx} className="bg-emerald-800/40 p-8 rounded-2xl border border-emerald-700/50 flex flex-col items-center text-center">
              <div className="text-emerald-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section className="bg-stone-100 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl text-stone-800 italic">"Será que é para mim?"</h2>
          <p className="text-lg text-stone-600">Muitos pacientes chegam com medo ou insegurança. Eu estou aqui para mostrar que cuidar da sua saúde bucal pode ser leve e tranquilo.</p>
          <CTAButton 
            label="Conversar agora no WhatsApp" 
            subtext="Tire suas dúvidas gratuitamente"
          />
        </div>
      </Section>

      {/* 6. COMO FUNCIONA */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800">Sua jornada para o novo sorriso</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Contato Inicial", desc: "Você clica no link e envia uma mensagem para nossa equipe no WhatsApp." },
            { step: "02", title: "Agendamento", desc: "Escolhemos o melhor horário para sua primeira avaliação gratuita." },
            { step: "03", title: "A Consulta", desc: "Realizamos uma avaliação completa e personalizada do seu caso." }
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col items-center text-center">
              <span className="text-6xl font-serif font-bold text-stone-200 absolute -top-4 right-6 leading-none select-none">{item.step}</span>
              <h3 className="text-xl font-bold text-stone-800 mt-4 mb-3">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-emerald-50 p-6 rounded-xl border border-emerald-100 inline-block w-full">
           <p className="text-emerald-800 font-medium">✨ A primeira avaliação é 100% gratuita e sem compromisso!</p>
        </div>
      </Section>

      {/* 7. MAIS PROVAS */}
      <Section className="bg-stone-50 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">Odontopediatria de <span className="text-emerald-600">💚</span></h2>
          <p className="text-stone-500 italic">Cuidando dos pequenos com o mesmo carinho e atenção.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
           {IMAGES.pediatrics.map((url, index) => (
            <div 
              key={index} 
              className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm cursor-pointer group"
              onClick={() => openImage(url)}
            >
              <img src={url} alt={`Odonto Baby ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section className="bg-stone-900 text-white text-center rounded-t-[3rem] md:rounded-t-[6rem] py-24 px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-10">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Chegou a hora de voltar a sorrir com confiança</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            Não deixe para depois o cuidado que você merece hoje. Agende agora sua primeira consulta gratuita.
          </p>
          <div className="pt-4">
             <CTAButton 
              label="Agendar minha consulta gratuita" 
              subtext="Conversar diretamente pelo WhatsApp"
              className="scale-110"
            />
          </div>
        </div>
      </Section>

      {/* 9. RODAPÉ */}
      <footer className="bg-stone-900 text-stone-400 pt-12 pb-16 px-6 text-center border-t border-stone-800/50">
        <div className="space-y-6">
          <p className="font-signature text-5xl text-stone-100">Andressa Valim</p>
          <div className="space-y-1 text-sm">
            <p className="text-stone-100 font-semibold tracking-wide uppercase">Protesista e Implantodontista</p>
            <p>Odontologia Real e Sedação com Óxido Nitroso</p>
          </div>
          <div className="text-xs space-y-1 opacity-60">
            <p>RUA MANECA QUADROS 252 · Bairro Arroio Teixeira</p>
            <p>CEP. 95555-000 · Capão da Canoa - RS</p>
          </div>
          <div className="pt-6 flex justify-center gap-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Instagram size={20} />
              <span>@draandressavalim</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Overlay */}
      {activeImage && <Lightbox imageUrl={activeImage} onClose={closeImage} />}
    </div>
  );
};

export default App;