# Estrutura da Página HTML/CSS/JS Puro: Impacto da IA Generativa em RH, Finanças e Operações

## Estrutura de Arquivos

```
/ia-generativa-html-puro/
├── index.html           # Arquivo HTML principal
├── css/
│   ├── styles.css       # Estilos gerais
│   └── animations.css   # Animações e efeitos visuais
├── js/
│   ├── main.js          # Lógica principal e inicialização
│   ├── animations.js    # Funções para animações e efeitos
│   └── intersection.js  # Observador de interseção para animações de scroll
└── img/                 # Pasta para imagens (se necessário)
```

## Estrutura HTML

O arquivo `index.html` terá a seguinte estrutura:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IA Generativa: Impacto em RH, Finanças e Operações</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/animations.css">
</head>
<body>
    <!-- Header/Hero Section -->
    <header class="hero">
        <!-- Conteúdo do hero -->
    </header>

    <!-- Seção RH -->
    <section id="rh" class="section">
        <!-- Conteúdo da seção RH -->
    </section>

    <!-- Seção Finanças -->
    <section id="financas" class="section alt-bg">
        <!-- Conteúdo da seção Finanças -->
    </section>

    <!-- Seção Operações -->
    <section id="operacoes" class="section">
        <!-- Conteúdo da seção Operações -->
    </section>

    <!-- Seção Conclusão -->
    <section id="conclusao" class="section alt-bg">
        <!-- Conteúdo da seção Conclusão -->
    </section>

    <!-- Seção Referências -->
    <section id="referencias" class="section">
        <!-- Conteúdo da seção Referências -->
    </section>

    <!-- Footer -->
    <footer>
        <!-- Conteúdo do footer -->
    </footer>

    <script src="js/intersection.js"></script>
    <script src="js/animations.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

## Abordagem CSS

### Estilos Gerais (styles.css)

- Definição de variáveis CSS para cores, fontes e espaçamentos
- Reset CSS básico
- Estilos para layout responsivo usando flexbox e grid
- Estilos para componentes reutilizáveis (cards, callouts, botões)
- Media queries para responsividade

### Animações (animations.css)

- Definição de keyframes para animações
- Classes para efeitos de fade-in, slide-in
- Transições para hover e interações
- Utilitários para animações baseadas em scroll

## Abordagem JavaScript

### Intersection Observer (intersection.js)

Implementação do Intersection Observer API para detectar quando elementos entram na viewport e acionar animações:

```javascript
// Exemplo simplificado
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.1});

// Função para observar elementos
function observeElements(selector) {
  document.querySelectorAll(selector).forEach(el => {
    observer.observe(el);
  });
}
```

### Animações (animations.js)

Funções para manipular classes CSS e criar efeitos visuais:

```javascript
// Exemplo simplificado
function setupHoverEffects() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('card-hover');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('card-hover');
    });
  });
}
```

### Main (main.js)

Inicialização e lógica principal:

```javascript
// Exemplo simplificado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar observadores para animações de scroll
  observeElements('.fade-in');
  observeElements('.slide-in');
  
  // Configurar efeitos de hover
  setupHoverEffects();
  
  // Outras inicializações
});
```

## Efeitos Visuais a Implementar

1. **Fade-in em Scroll**: Elementos aparecem gradualmente quando o usuário rola a página
2. **Parallax Sutil**: Efeito de profundidade no hero e entre seções
3. **Cards Interativos**: Elevação e destaque ao passar o mouse
4. **Callout Blocks**: Estilo Notion para destacar informações importantes
5. **Gradientes Animados**: Fundo sutil animado para o hero
6. **Botão com Efeito de Pressionar**: Feedback visual ao clicar
7. **Navegação Suave**: Rolagem suave ao clicar em links internos
8. **Efeito de Digitação**: Texto que aparece como se estivesse sendo digitado na conclusão

## Conteúdo

O conteúdo será o mesmo da versão Next.js, mantendo:

1. **Introdução**: A Revolução da IA Generativa
2. **RH**: Impacto em recrutamento, desenvolvimento e gestão de desempenho
3. **Finanças**: Automação, análise preditiva e gestão de riscos
4. **Operações**: Otimização da cadeia de suprimentos, manufatura e desenvolvimento de produtos
5. **Conclusão**: O futuro é generativo
6. **Referências**: Materiais consultados

## Responsividade

- **Mobile First**: Design pensado primeiro para dispositivos móveis
- **Breakpoints**: Principais breakpoints em 480px, 768px, 1024px e 1280px
- **Layout Flexível**: Uso de unidades relativas (rem, %, vh/vw) em vez de pixels fixos
- **Grid Responsivo**: Alteração do número de colunas conforme o tamanho da tela
- **Imagens Responsivas**: Uso de max-width: 100% para imagens
