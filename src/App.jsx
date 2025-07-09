import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, Play, Star, Zap, Brain, Rocket, Shield, Users, Target, Award, CheckCircle } from 'lucide-react';
import './App.css';

// Componente de partículas de fundo
const Particles = () => {
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 8,
  }));

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Componente de animação de digitação
const TypingAnimation = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Componente de seção animada
const AnimatedSection = ({ children, className = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Componente de accordion para módulos
const ModuleAccordion = ({ modules }) => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <div key={index} className="glass-card rounded-lg overflow-hidden hover-lift">
          <button
            onClick={() => toggleModule(index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
              <p className="text-gray-300 text-sm">{module.stage}</p>
            </div>
            {openModule === index ? (
              <ChevronUp className="text-cyan-400 w-6 h-6" />
            ) : (
              <ChevronDown className="text-cyan-400 w-6 h-6" />
            )}
          </button>
          <div className={`accordion-content ${openModule === index ? 'open' : ''}`}>
            <div className="px-6 pb-6">
              <ul className="space-y-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Dados dos módulos - ARRAY COMPLETO
const courseModules = [
  {
    stage: "ESTÁGIO NOOBIE",
    title: "Módulo 1 - Introdução à Inteligência Artificial",
    lessons: [
      "O que é IA? História, conceitos e tipos",
      "Onde a IA está presente no dia a dia",
      "Como funciona uma IA na prática",
      "Os Data Centers: O Coração Físico da Inteligência Artificial"
    ]
  },
  {
    stage: "ESTÁGIO NOOBIE",
    title: "Módulo 2 - Engenharia de Prompts e Comunicação com IA",
    lessons: [
      "O que é um Prompt?",
      "ChatGPT, Gemini e Claude: Diferenças e Como Usar",
      "Escrevendo como um Profissional com a Ajuda da IA",
      "Salvando e organizando seus melhores prompts – Usando o Notion"
    ]
  },
  {
    stage: "ESTÁGIO ASPIRANTE",
    title: "Módulo 3 - Imagens",
    lessons: [
      "Fundamentos críticos para geração e imagens profissionais",
      "Leonardo AI - Imagens State Flow - Treinamento de Modelos - Videos",
      "MidJourney - Review Completo e melhores praticas",
      "Chat GPT - Diferenciais e Reviews",
      "Kontext Flux - Gerando Imagens com consistencia para gerar videos continuos"
    ]
  },
  {
    stage: "ESTÁGIO ASPIRANTE",
    title: "Módulo 4 - Videos",
    lessons: [
      "Fundamentos para gera videos profissionais",
      "Heygen PRO - Criando Avatares realistas para automatizar videos reais",
      "Veo3 PRO - Criando videos realistas com consistencia entre personagens",
      "RunWayMl e HiggsField - Estilizando seus Videos profissionalmente",
      "Kling 2.1 - Imagem para videos - Motion Video - Video para Audio"
    ]
  },
  {
    stage: "ESTÁGIO ASPIRANTE",
    title: "Módulo 5 - Agentes de IA",
    lessons: [
      "Fundamentos e tipos de Agentes",
      "Criando GPTS Personalizados e Integrados com Plugins",
      "Agentes para Automações",
      "Agentes Web e Manus",
      "Gemini CLI - Construindo um Site utilizando seu terminal"
    ]
  },
  {
    stage: "ESTÁGIO MASTERFUCK",
    title: "Módulo 6 - Automações",
    lessons: [
      "Fundamentos de automações e workflows",
      "Fundamentos avançados e conceitos (JSON, Variaveis, Interator, Agregattor, HTTP get, WorkFlows Complexos, Bundles)",
      "Fundamentos Make.com e Agentes Make",
      "Criando Fluxos para automatizar sua vida e melhorar sua performance no trabalho",
      "Criando Fluxos para automatizar posts no Instagram TikTok e escalar",
      "Criando Fluxos para geração de vídeos no VEO3, HeyGEN, Kling AI",
      "Criando FLuxos para Geração analise de imagens",
      "Conectando seus agentes nas automações",
      "Explorando templates e comunidades"
    ]
  },
  {
    stage: "ESTÁGIO MASTERFUCK",
    title: "Módulo 7 - Aplicação para negócios",
    lessons: [
      "Montando um sistema de IA para automatizar sua vida pessoal",
      "Casos de Uso para aumentar sua performance no seu nicho de trabalho",
      "Criando seu Negócio com IAs",
      "Crie um negócio e contrate agentes para fazer o trabalho repetitivo e use seu tempo para escala-lo"
    ]
  },
  {
    stage: "ESTÁGIO HIGHLANDER",
    title: "Módulo 8 - Conectando Sistemas Dentro do Seu Computador",
    lessons: [
      "Fundamentos COnfyUI e troubleshooting",
      "Instalando ConfyUI Localmente no seu computador",
      "Fluxos de Imagens e Videos rodando gratuitamente no seu computador com privacidade, gratuito e ilimitado",
      "Suna AI - Conectando Agentes para rodar locais e executar trabalhos de dentro do seu computador",
      "Gemini CLI - Como rodar o gemini dentro do seu computador te ajudar a desenvolver projetos complexos",
      "Criando APIs e conectando seus Agentes e GPTs conectado com seu backend local"
    ]
  },
  {
    stage: "ESTÁGIO HIGHLANDER",
    title: "Módulo 9 - REVIEWS - Paguei a ferramenta e testei para você não precisar pagar",
    lessons: [
      "Uma Serie de reviews de cada ferramenta feitas com plano pago para você ter certeza de que precisa ou Não destas ferramentas"
    ]
  }
];

// COMPONENTE PRINCIPAL APP
function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative gradient-hero text-white overflow-x-hidden">
      <Particles />
      <Particles />
      {/* Header */}
      <header className="relative z-50 px-4 py-1 glass-card hover-lift mx-auto rounded-full max-w-4xl mt-4">
        <div className="container mx-auto flex items-center justify-between space-x-8">
          {/* Logo */}
          <img src="/LION LAB LOGO (3).png" alt="Lion Labs Logo" className="h-12" />
          {/* Menu Items */}
          <nav className="flex space-x-8">
            <a href="#sobre" className="text-white text-lg font-bold hover:text-cyan-400 transition-colors duration-300">Sobre</a>
            <a href="#jornada" className="text-white text-lg font-bold hover:text-cyan-400 transition-colors duration-300">Jornada</a>
            <a href="#destaques" className="text-white text-lg font-bold hover:text-cyan-400 transition-colors duration-300">Destaques</a>
            <a href="#modulos" className="text-white text-lg font-bold hover:text-cyan-400 transition-colors duration-300">Módulos</a>
          </nav>
          {/* Prices */}
          <a href="#precos" className="glass-card gradient-cta text-white font-bold px-6 py-3 rounded-full animate-pulse-glow hover-lift">Preços</a>
        </div>
      </header>

      {/* Version Tag */}
      <div className="relative z-10 mx-auto mt-16 glass-card gradient-cta text-white font-bold px-4 py-2 rounded-full animate-pulse-glow hover-lift text-sm w-fit">
        v1.1.3 Lançado
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center mt-16">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto text-center">
              Aprendam a criar sistemas automatizado.<br />Aprenda a <span className="text-cyan-400">criar</span>, automatizar e <span className="text-cyan-400">escalar</span> — do zero ao topo.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              O único treinamento de IA que te entrega domínio total das ferramentas, automações e agentes, na prática e sem enrolação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VSL Section */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative glass-card rounded-2xl p-8 hover-lift">
              <div className="aspect-video gradient-card rounded-lg flex items-center justify-center mb-6">
                <button className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center hover-glow transition-all duration-300">
                  <Play className="w-8 h-8 text-black ml-1" />
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* O que é Lion Labs */}
      <AnimatedSection id="sobre" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            O que é <span className="text-cyan-400">Lion Labs</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-xl hover-lift text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Conhecimento Puro</h3>
              <p className="text-gray-300">Sem enrolação. Direto ao ponto com o que realmente importa.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover-lift text-center">
              <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Ferramentas do Futuro</h3>
              <p className="text-gray-300">Acesso a VEO3, Kling, agentes customizados e muito mais.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover-lift text-center">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Resultados Reais</h3>
              <p className="text-gray-300">Você sai pronto para aplicar IA no mundo real.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Jornada - Timeline */}
      <AnimatedSection id="jornada" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            A Jornada - Do <span className="text-cyan-400">Noobie</span> ao <span className="text-cyan-400">Highlander</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"></div>
              {[
                { stage: "Noobie", description: "Fundamentos e primeiros passos na IA", icon: Users },
                { stage: "Aspirante", description: "Criação de conteúdo e agentes básicos", icon: Zap },
                { stage: "Masterfuck", description: "Automações avançadas e negócios", icon: Star },
                { stage: "Highlander", description: "Sistemas locais e desenvolvimento", icon: Award }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center mb-16">
                  <div className="flex-1 text-right pr-8">
                    {index % 2 === 0 && (
                      <div className="glass-card p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{item.stage}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="timeline-dot w-16 h-16 rounded-full flex items-center justify-center relative z-10">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pl-8">
                    {index % 2 === 1 && (
                      <div className="glass-card p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{item.stage}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Agentes Conectados - Nova Seção */}
<AnimatedSection className="py-20">
  <div className="container mx-auto px-6">
    
    
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      APRENDA A CRIAR <span className="text-cyan-400">AGENTES</span> E AUTOMATIZAR SUA VIDA E MELHORAR SUA PERFORMANCE NO SEU <span className="text-cyan-400">NEGOCIO</span>
    </h2>
    <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
      Com o Lion Labs, você domina as ferramentas para otimizar processos, gerar resultados e escalar seu potencial.
    </p>
    
    {/* Container da Animação */}
    <div className="relative max-w-6xl mx-auto h-96 flex items-center justify-center">
      {/* SVG para as linhas */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5de0e6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3666b2" stopOpacity="1" />
            <stop offset="100%" stopColor="#5de0e6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Linhas conectoras animadas */}
        <motion.line
          x1="400" y1="200" x2="117" y2="125"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="683" y2="125"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="67" y2="275"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="733" y2="275"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="17" y2="200"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="783" y2="200"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
      </svg>
      
      {/* Robô Central - Agora um Card 3D */}
      <motion.div
        className="relative z-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(93, 224, 230, 0.5), 0 0 60px rgba(93, 224, 230, 0.3)',
          transformStyle: 'preserve-3d', // Habilita transformações 3D para os filhos
          transform: 'rotateX(15deg) rotateY(-15deg) translateZ(20px)', // Inclinação 3D inicial
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
          rotateX: [15, 10, 15], // Animação sutil de inclinação
          rotateY: [-15, -10, -15], // Animação sutil de inclinação
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-black/20 rounded-2xl" style={{ transform: 'translateZ(-10px)' }}></div> {/* Face traseira para profundidade */}
        <Brain className="w-16 h-16 text-white relative z-20" />
      </motion.div>
      
      {/* Ícones Periféricos */}
      <motion.div
        className="absolute w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-cyan-400/30"
        style={{ left: '12.5%', top: '25%' }}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      >
        <Zap className="w-6 h-6 text-cyan-400" />
      </motion.div>
      
      <motion.div
        className="absolute w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-cyan-400/30"
        style={{ right: '12.5%', top: '25%' }}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Rocket className="w-6 h-6 text-cyan-400" />
      </motion.div>
      
      <motion.div
        className="absolute w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-cyan-400/30"
        style={{ left: '6.25%', bottom: '25%' }}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Target className="w-6 h-6 text-cyan-400" />
      </motion.div>
      
      <motion.div
        className="absolute w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-cyan-400/30"
        style={{ right: '6.25%', bottom: '25%' }}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <Shield className="w-6 h-6 text-cyan-400" />
      </motion.div>
      
      <motion.div
        className="absolute w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-cyan-400/30"
        style={{ left: '0%', top: '50%', transform: 'translateY(-50%)' }}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Users className="w-6 h-6 text-cyan-400" />
      </motion.div>
      
      <motion.div
        className="absolute w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-cyan-400/30"
        style={{ right: '0%', top: '50%', transform: 'translateY(-50%)' }}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      >
        <Award className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </div>
  </div>
</AnimatedSection>

{/* Destaques do Curso - Seção Original */}
<AnimatedSection id="destaques" className="py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      Destaques do <span className="text-cyan-400">Curso</span>
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="glass-card p-8 rounded-xl hover-lift">
        <div className="w-16 h-16 gradient-cta rounded-lg flex items-center justify-center mb-6">
          <Play className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-bold mb-4">VEO3</h3>
        <p className="text-gray-300">Crie vídeos realistas e automáticos com IA – o que só os mais avançados do mundo estão fazendo agora.</p>
      </div>
      <div className="glass-card p-8 rounded-xl hover-lift">
        <div className="w-16 h-16 gradient-cta rounded-lg flex items-center justify-center mb-6">
          <Zap className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-bold mb-4">Agentes & Automações</h3>
        <p className="text-gray-300">Construa GPTs customizados, crie robôs digitais, escale seu negócio.</p>
      </div>
      <div className="glass-card p-8 rounded-xl hover-lift">
        <div className="w-16 h-16 gradient-cta rounded-lg flex items-center justify-center mb-6">
          <Shield className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-xl font-bold mb-4">Integrações</h3>
        <p className="text-gray-300">Da web ao seu computador – conecte tudo, automatize tudo.</p>
      </div>
    </div>
  </div>
</AnimatedSection>

      {/* Módulos do Curso */}
      <AnimatedSection id="modulos" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Módulos do <span className="text-cyan-400">Curso</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <ModuleAccordion modules={courseModules} />
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Principal */}
      <AnimatedSection id="precos" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pronto para <span className="text-cyan-400">Dominar a IA</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas carreiras e negócios com o poder da Inteligência Artificial.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-cta text-black font-bold text-xl px-12 py-6 rounded-full animate-pulse-glow hover:shadow-2xl transition-all duration-300"
          >
            Quero Dominar a IA Agora
          </motion.button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Lion Labs</h3>
          <p className="text-gray-400">© 2025 Lion Labs. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

