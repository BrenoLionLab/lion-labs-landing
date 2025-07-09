# INSTRUÇÕES PARA MENU ROLANTE (STICKY)

## 🎯 OBJETIVO
Criar um menu que fica fixo no topo da tela quando o usuário rola a página, com efeito de transparência e blur.

## 📍 ONDE MODIFICAR
Arquivo: `src/App.jsx` - Seção do Header

## 🔧 PASSO 1: ENCONTRAR O HEADER ATUAL
Procure por esta seção no App.jsx:
```jsx
{/* Header */}
<header className="relative z-10 p-6">
  <div className="container mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-cyan-400">Lion Labs</h1>
    </div>
  </div>
</header>
```

## 🔧 PASSO 2: SUBSTITUIR PELO CÓDIGO ABAIXO

```jsx
{/* Header Rolante */}
<motion.header
  className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
  animate={{
    backgroundColor: scrollY > 100 ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0)",
    backdropFilter: scrollY > 100 ? "blur(10px)" : "blur(0px)"
  }}
  style={{
    borderBottom: scrollY > 100 ? "1px solid rgba(93, 224, 230, 0.2)" : "1px solid transparent"
  }}
>
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-cyan-400">Lion Labs</h1>
      </motion.div>

      {/* Menu de Navegação */}
      <nav className="hidden md:flex items-center space-x-8">
        <motion.a
          href="#sobre"
          className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sobre
        </motion.a>
        <motion.a
          href="#jornada"
          className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Jornada
        </motion.a>
        <motion.a
          href="#modulos"
          className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Módulos
        </motion.a>
        <motion.button
          className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(93, 224, 230, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Começar Agora
        </motion.button>
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              className="w-6 h-0.5 bg-white block transition-all duration-300"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 6 : 0
              }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1
              }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -6 : 0
              }}
            />
          </div>
        </motion.button>
      </div>
    </div>

    {/* Menu Mobile Expandido */}
    <motion.div
      className="md:hidden overflow-hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: mobileMenuOpen ? "auto" : 0,
        opacity: mobileMenuOpen ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="py-4 space-y-4">
        <a href="#sobre" className="block text-white hover:text-cyan-400 transition-colors duration-300">
          Sobre
        </a>
        <a href="#jornada" className="block text-white hover:text-cyan-400 transition-colors duration-300">
          Jornada
        </a>
        <a href="#modulos" className="block text-white hover:text-cyan-400 transition-colors duration-300">
          Módulos
        </a>
        <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-6 py-2 rounded-full font-bold">
          Começar Agora
        </button>
      </div>
    </motion.div>
  </div>
</motion.header>
```

## 🔧 PASSO 3: ADICIONAR ESTADOS NO INÍCIO DO COMPONENTE APP

Encontre esta linha no início da função App:
```jsx
function App() {
  return (
```

E substitua por:
```jsx
function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
```

## 🔧 PASSO 4: ADICIONAR IDs NAS SEÇÕES

Para os links funcionarem, adicione IDs nas seções:

### Seção "O que é Lion Labs":
```jsx
<AnimatedSection className="py-20" id="sobre">
```

### Seção da Timeline:
```jsx
<AnimatedSection className="py-20 gradient-section" id="jornada">
```

### Seção dos Módulos:
```jsx
<AnimatedSection className="py-20 gradient-section" id="modulos">
```

## 🔧 PASSO 5: AJUSTAR ESPAÇAMENTO DO HERO

Para compensar o header fixo, modifique a seção Hero:
```jsx
{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center gradient-hero pt-20">
```

## 🎨 FUNCIONALIDADES DO MENU

### ✅ **EFEITOS INCLUÍDOS:**
- **Transparente** quando no topo
- **Fundo escuro + blur** quando rola
- **Animações hover** nos links
- **Menu mobile** responsivo
- **Scroll suave** para seções
- **Borda ciano** quando ativo

### ✅ **RESPONSIVO:**
- **Desktop**: Menu horizontal completo
- **Mobile**: Hamburger menu animado
- **Transições suaves** em todos os tamanhos

## ⚠️ IMPORTANTE
- Mantenha todos os imports existentes
- O menu usa `useState` e `useEffect` (já importados)
- Funciona com Framer Motion (já instalado)

## 🎯 RESULTADO
Menu profissional que:
- Fica fixo no topo
- Muda aparência ao rolar
- Navega suavemente pelas seções
- Funciona perfeitamente no mobile

