# GenAI Impact - Impacto da IA Generativa em RH, Finanças e Operações

Site educativo que explora o impacto transformador das tecnologias de IA Generativa nas áreas de RH, Finanças e Operações de negócios.

## Estrutura de Arquivos

```
/ia-generativa-html-puro/
├── index.html           # Página inicial do site
├── fundamentos.html     # Página sobre fundamentos da IA Generativa
├── rh.html              # Página sobre impacto em RH
├── financas.html        # Página sobre impacto em Finanças
├── operacoes.html       # Página sobre impacto em Operações
├── casos-uso.html       # Página com casos de uso práticos
├── contato.html         # Página de formulário de contato
├── referencias.html     # Página com fontes e referências
├── glossario.html       # Glossário de termos técnicos
├── newsletter.html      # Página para cadastro na newsletter
├── css/
│   ├── styles.css       # Estilos gerais e layout
│   └── animations.css   # Animações e efeitos visuais
├── js/
│   ├── main.js          # Script principal e inicialização
│   ├── animations.js    # Funções para animações e efeitos
│   └── intersection.js  # Observador de interseção para animações de scroll
├── img/                 # Pasta contendo imagens e ilustrações
│   ├── hero/            # Imagens para cabeçalhos
│   ├── icons/           # Ícones SVG
│   └── illustrations/   # Ilustrações SVG para as páginas
└── estrutura.md         # Documentação inicial da estrutura do projeto
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica para melhor acessibilidade e SEO
- **CSS3**: Variáveis CSS, Flexbox, Grid, Media Queries para responsividade
- **JavaScript**: Vanilla JS (sem frameworks), utilizando APIs modernas como Intersection Observer

## Características Principais

1. **Design Responsivo**: Adaptação para dispositivos móveis, tablets e desktops
2. **Animações Baseadas em Scroll**: Elementos animam quando entram na viewport
3. **Efeitos Visuais**: Fades, slides, gradientes animados, efeito de digitação
4. **Estilo Notion**: Callouts com ícones para destacar informações importantes
5. **Cards Interativos**: Efeitos de hover e elevação
6. **Navegação Suave**: Rolagem suave para links internos

## Como Usar

1. Descompacte o arquivo `ia-generativa-html-puro.zip`
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Para publicar online, basta fazer upload de toda a pasta para qualquer servidor web

## Como Executar o Site

### Método 1: Script de Servidor Integrado
O projeto inclui um script para iniciar rapidamente um servidor local:

1. Abra um terminal na pasta raiz do projeto
2. Execute o comando:
   ```bash
   ./start-server.sh
   ```
3. Por padrão, o servidor iniciará na porta 8000. Para especificar outra porta, adicione-a como argumento:
   ```bash
   ./start-server.sh 9000
   ```
4. Acesse o site no navegador em `http://localhost:8000` (ou na porta especificada)

### Método 2: Usando Python
Se o script não funcionar, você pode iniciar manualmente um servidor Python:

Para Python 3:
```bash
python3 -m http.server
```

Para Python 2:
```bash
python -m SimpleHTTPServer
```

### Método 3: Usando Live Server no VS Code
Se você estiver usando o Visual Studio Code:

1. Instale a extensão "Live Server"
2. Clique com o botão direito em `index.html`
3. Selecione "Open with Live Server"

## Personalização

### Alterando Cores

O projeto utiliza variáveis CSS que facilitam a personalização. No arquivo `css/styles.css`, localize a seção `:root` no início:

```css
:root {
  /* Cores principais */
  --color-bg-primary: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-accent-teal: #2dd4bf;
  --color-accent-cyan: #22d3ee;
  --color-accent-emerald: #34d399;
  /* ... outras variáveis ... */
}
```

Modifique estas variáveis para alterar o esquema de cores de toda a página.

### Adicionando Novas Seções

Para adicionar uma nova seção:

1. No arquivo `index.html`, copie a estrutura de uma seção existente:

```html
<section id="nova-secao" class="section">
  <div class="container">
    <h2 class="section-title slide-in-left">Título da Nova Seção</h2>
    
    <!-- Conteúdo da seção -->
    
  </div>
</section>
```

2. Adicione o conteúdo desejado dentro da div `container`
3. Aplique as classes de animação conforme necessário (fade-in, slide-in-left, etc.)

### Adicionando Imagens

1. Coloque suas imagens na pasta `img/`
2. Referencie-as no HTML:

```html
<img src="img/nome-da-imagem.jpg" alt="Descrição da imagem" class="responsive-image">
```

### Modificando Animações

As animações são definidas no arquivo `css/animations.css`. Para modificar:

1. Localize a animação desejada (por exemplo, `@keyframes fadeIn`)
2. Ajuste os parâmetros conforme necessário
3. Para criar uma nova animação, siga o mesmo padrão e adicione uma nova classe correspondente

## Estrutura de Conteúdo

O site é organizado nas seguintes seções principais:

1. **Página Inicial** - Visão geral do impacto da IA Generativa nos negócios
2. **Fundamentos** - Conceitos básicos e tecnologias de IA Generativa
3. **Páginas Específicas** - Impacto detalhado em cada área:
   - RH (Recursos Humanos)
   - Finanças
   - Operações
4. **Casos de Uso** - Exemplos práticos e estudos de caso
5. **Glossário** - Termos técnicos relacionados à IA Generativa
6. **Newsletter** - Cadastro para atualizações
7. **Contato** - Formulário para comunicação
8. **Referências** - Fontes e materiais adicionais

## Compatibilidade

A página foi desenvolvida para funcionar em navegadores modernos:
- Chrome (versão 60+)
- Firefox (versão 55+)
- Safari (versão 12.1+)
- Edge (versão 79+)

## Otimização

Para melhorar o desempenho em produção:
1. Minifique os arquivos CSS e JavaScript
2. Otimize as imagens
3. Considere adicionar lazy loading para imagens

## Suporte e Contato

Para dúvidas ou suporte adicional, entre em contato através do Manus.

---

© 2025 Manus | IA Generativa Impactando Negócios
