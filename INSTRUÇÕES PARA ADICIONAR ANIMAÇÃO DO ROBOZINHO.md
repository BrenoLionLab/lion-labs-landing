# INSTRUÇÕES PARA ADICIONAR ANIMAÇÃO DO ROBOZINHO

## 🎯 OBJETIVO
Adicionar uma animação de robô central conectado por linhas animadas, igual ao site arOS.

## 📍 ONDE ADICIONAR
Substitua a seção "Destaques do Curso" no arquivo `src/App.jsx`

## 🔧 PASSO 1: ENCONTRAR A SEÇÃO
Procure por esta linha no App.jsx:
```jsx
{/* Destaques do Curso */}
<AnimatedSection className="py-20">
```

## 🔧 PASSO 2: SUBSTITUIR PELO CÓDIGO ABAIXO

```jsx
{/* Agentes Conectados - Nova Seção */}
<AnimatedSection className="py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      Agentes Prontos Para Usar Turbinados Com a <span className="text-cyan-400">Tecnologia Zero Prompt™</span>
    </h2>
    <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
      Crie campanhas, criativos e conteúdos que convertem sem digitar um prompt. É quase como ter uma agência particular disponível todo dia.
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
          x1="400" y1="200" x2="200" y2="100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0.3, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="600" y2="100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0.3, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="150" y2="300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0.3, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="650" y2="300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0.3, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="100" y2="200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0.3, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.line
          x1="400" y1="200" x2="700" y2="200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0.3, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
      </svg>
      
      {/* Robô Central */}
      <motion.div
        className="relative z-10 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(93, 224, 230, 0.5), 0 0 60px rgba(93, 224, 230, 0.3)'
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Brain className="w-12 h-12 text-white" />
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
<AnimatedSection className="py-20 gradient-section">
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
```

## ✅ RESULTADO
- Robô central com glow effect
- 6 ícones periféricos animados
- Linhas conectoras com animação sequencial
- Efeito de pulso e movimento
- Cores da paleta Lion Labs

## 🎯 INSTRUÇÕES PARA LLM
1. Abra o arquivo `src/App.jsx`
2. Encontre a seção "Destaques do Curso"
3. Substitua pelo código acima
4. Salve o arquivo
5. A animação aparecerá automaticamente

## ⚠️ IMPORTANTE
- NÃO remova os imports do topo do arquivo
- Mantenha a estrutura do componente App
- O código usa os mesmos ícones já importados (Brain, Zap, Rocket, etc.)

