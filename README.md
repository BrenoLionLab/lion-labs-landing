# Lion Labs - Landing Page

Uma landing page futurista para o curso Lion Labs, desenvolvida com React + Vite.

## 🚀 Características

- **Design Futurista**: Degradês animados, partículas flutuantes, efeitos glassmorphism
- **Animações Avançadas**: Digitação automática, hover effects, scroll animations
- **Accordion Interativo**: 9 módulos do curso com expansão suave
- **Timeline da Jornada**: Visualização da evolução Noobie → Highlander
- **Totalmente Responsivo**: Funciona perfeitamente em desktop e mobile

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações avançadas
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🎨 Paleta de Cores

- **Preto**: #000000 (Background principal)
- **Branco**: #f5f5f4 (Textos principais)
- **Azul Principal**: #3666b2 (Elementos de destaque)
- **Azul Escuro**: #004aad (Backgrounds secundários)
- **Ciano**: #5de0e6 (Acentos e CTAs)
- **Azul Marinho**: #00243f (Backgrounds profundos)

## 📁 Estrutura do Projeto

```
src/
├── App.jsx          # Componente principal
├── App.css          # Estilos customizados
├── index.css        # Estilos base
└── main.jsx         # Ponto de entrada
```

## 🔧 Componentes Principais

- **Particles**: Sistema de partículas de fundo
- **TypingAnimation**: Animação de digitação
- **AnimatedSection**: Seções com animação de scroll
- **ModuleAccordion**: Accordion dos módulos do curso

## 📱 Seções da Landing Page

1. **Header** - Logo Lion Labs
2. **Hero** - Frase de impacto com animação de digitação
3. **VSL** - Player de vídeo com glassmorphism
4. **Sobre** - O que é Lion Labs (3 cards)
5. **Jornada** - Timeline dos 4 estágios
6. **Destaques** - VEO3, Agentes, Integrações
7. **Módulos** - Accordion com 9 módulos
8. **CTA** - Botão principal com animação
9. **Footer** - Informações finais

## 🚀 Deploy

Este projeto está configurado para deploy automático no Vercel:

1. Conecte seu repositório GitHub ao Vercel
2. O deploy acontece automaticamente a cada push
3. Site fica disponível em: `https://seusite.vercel.app`

## 🔄 Manutenção

Para fazer alterações:

1. Edite os arquivos necessários
2. Commit e push para o GitHub
3. Deploy automático acontece em 1-2 minutos

## 📞 Suporte

Para dúvidas ou alterações, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Lion Labs**

---

## ↩️ Plano de Rollback (Animação do Robô)

Caso a implementação da animação do robô em `src/App.jsx` cause problemas, siga estes passos para reverter as alterações:

1.  **Restaurar `src/App.jsx`:** Substitua o conteúdo atual de `src/App.jsx` pelo backup original do arquivo.
2.  **Remover Imports (se adicionados):** Verifique se algum import relacionado à animação do robô (ex: novos ícones ou componentes) foi adicionado no topo de `src/App.jsx` e remova-o.

## Changelog

### 09/07/2025
- **Modified**: Changed the main title from "Pare de Só Consumir IA." to "Aprendam a criar sistemas automatizado.".
- **Reverted**: Removed the gear icon from the "Módulos" menu item in the header.