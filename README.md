# Guia de Uso - Página IA Generativa: Impacto em RH, Finanças e Operações

Este documento fornece instruções detalhadas sobre a estrutura, uso e personalização da página web criada com HTML, CSS e JavaScript puro.

## Estrutura de Arquivos

```
/ia-generativa-html-puro/
├── index.html           # Arquivo HTML principal com todo o conteúdo
├── css/
│   ├── styles.css       # Estilos gerais e layout
│   └── animations.css   # Animações e efeitos visuais
├── js/
│   ├── main.js          # Script principal e inicialização
│   ├── animations.js    # Funções para animações e efeitos
│   └── intersection.js  # Observador de interseção para animações de scroll
├── img/                 # Pasta para imagens (vazia no momento)
└── estrutura.md         # Documentação da estrutura do projeto
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
