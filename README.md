# DiuferroAdv - Site Institucional de Advocacia Criminal

Site institucional moderno para advogada criminalista, desenvolvido com as tecnologias mais avançadas do mercado.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **next-seo** e **next-sitemap** para SEO
- **JSON-LD** para dados estruturados
- **React Hook Form** e **Zod** para formulários
- **Google Tag Manager** + Analytics
- **Lucide React** para ícones modernos
- **Vercel** para deploy

## 🏗️ Estrutura do Projeto

```
diuferroadv/
├── src/
│   ├── app/                 # App Router (Next.js 14)
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página inicial
│   │   └── globals.css      # Estilos globais
│   └── components/          # Componentes reutilizáveis
│       ├── Header.tsx       # Cabeçalho com navegação
│       └── Footer.tsx       # Rodapé com informações
├── public/                  # Arquivos estáticos
├── next-sitemap.config.js   # Configuração do sitemap
└── tailwind.config.js       # Configuração do TailwindCSS
```

## 🎨 Design Features

- **Design Responsivo**: Totalmente adaptado para desktop, tablet e mobile
- **Tipografia Moderna**: Combinação das fontes Inter e Playfair Display
- **Paleta Profissional**: Cores sóbrias com destaque em âmbar
- **Ícones Modernos**: Lucide React para ícones vetoriais
- **Animações Suaves**: Transições CSS para melhor UX

## 📱 Funcionalidades

- ✅ **Landing Page Completa** com hero section atrativa
- ✅ **Navegação Responsiva** com menu mobile
- ✅ **Seções Profissionais**: Features, áreas de atuação, CTA
- ✅ **SEO Otimizado** com metadados e dados estruturados
- ✅ **Performance Otimizada** com Turbopack
- ✅ **Sitemap Automático** gerado pelo next-sitemap

## 🛠️ Como Executar

### Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

### Build de Produção

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📊 SEO e Analytics

- **Meta Tags** otimizadas para SEO
- **Open Graph** para redes sociais
- **JSON-LD** para dados estruturados
- **Google Tag Manager** para tracking
- **Sitemap** automaticamente gerado
- **Robots.txt** configurado

## 🚀 Deploy

Este projeto está configurado para deploy fácil na **Vercel**:

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente:
   - `SITE_URL`: URL do seu site
   - `GTM_ID`: ID do Google Tag Manager
3. Deploy automático a cada commit

## 📝 Personalização

Para personalizar o site:

1. **Informações da Advogada**: Edite os placeholders `[Nome]` nos arquivos
2. **Contatos**: Atualize telefones e endereços nos componentes
3. **Cores**: Modifique a paleta no `tailwind.config.js`
4. **Conteúdo**: Edite os textos nos componentes conforme necessário

## 🔧 Próximos Passos

- [ ] Criar páginas internas (Sobre, Áreas de Atuação, Contato)
- [ ] Implementar formulário de contato
- [ ] Adicionar blog/artigos jurídicos
- [ ] Integrar WhatsApp Business
- [ ] Implementar sistema de agendamento

## 📄 Licença

Este projeto é privado e desenvolvido especificamente para DiuferroAdv.

---

**DiuferroAdv** - Advocacia Criminal Especializada
