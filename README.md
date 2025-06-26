# TONTON Shipyard - Website Corporativo

Website institucional da TONTON Shipyard, especializada em serviços navais no Espírito Santo.

## 🚀 Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance**: Carregamento rápido com Next.js 14
- **SEO Otimizado**: Meta tags, Schema.org e sitemap
- **Acessibilidade**: Conformidade WCAG 2.1 AA
- **Animações**: Transições suaves com Framer Motion

## 🛠️ Tecnologias

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn/ui Components
- Lucide React Icons

## 📊 Dados Financeiros Integrados

- Escalada de custos de atracação (2024-2025)
- Benchmark competitivo de preços
- Projeções de ROI e payback
- Estrutura de investimentos detalhada

## 🎨 Design System

### Cores
- **Azul Marinho**: #0B3C5D (Primary)
- **Turquesa**: #16B4C6 (Accent)
- **Cinza Claro**: #F5F7FA (Background)

### Tipografia
- **Títulos**: Poppins (300-700)
- **Texto**: Roboto (300-700)

## 📱 Deploy no Netlify

### Passo a Passo

1. **Preparação do Projeto**
   \`\`\`bash
   npm install
   npm run build
   \`\`\`

2. **Deploy via Netlify CLI**
   \`\`\`bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=out
   \`\`\`

3. **Deploy via Interface Web**
   - Acesse [netlify.com](https://netlify.com)
   - Conecte seu repositório GitHub
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `out`

4. **Configurações Adicionais**
   - Configure domínio personalizado
   - Ative HTTPS automático
   - Configure redirects se necessário

### Variáveis de Ambiente (Opcional)

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://tontonshipyard.com.br
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_TRACKING_ID
\`\`\`

## 📧 Integração de Formulários

O formulário de contato está preparado para integração com:
- Netlify Forms (recomendado)
- EmailJS
- SendGrid
- Gmail API

## 🔧 Customização

### Atualizar Dados Financeiros
Edite os valores em `app/page.tsx` nas seções:
- Escalada de custos
- Tabela de benchmark
- Projeções financeiras

### Adicionar Política de Juros e Multa
Complete os placeholders marcados com "A definir" quando as informações estiverem disponíveis.

### Personalizar Conteúdo
- Textos: Edite diretamente nos componentes
- Imagens: Substitua arquivos em `/public/images/`
- Cores: Modifique variáveis CSS em `globals.css`

## 📈 Analytics e Monitoramento

Recomendado configurar:
- Google Analytics 4
- Google Search Console
- Hotjar ou similar para heatmaps
- Uptime monitoring

## 🔒 Segurança

- Headers de segurança configurados
- Sanitização de inputs
- Validação de formulários
- HTTPS obrigatório

## 📞 Suporte

Para dúvidas técnicas ou customizações, entre em contato com a equipe de desenvolvimento.

---

**TONTON Shipyard** - Excelência em Serviços Navais
