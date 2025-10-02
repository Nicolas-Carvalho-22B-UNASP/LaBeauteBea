# La Beaute Bea - Landing Page

Landing page moderna e elegante para loja de maquiagem La Beaute Bea.

## 📋 Descrição

Landing page responsiva desenvolvida com foco em estética e usabilidade, apresentando os produtos e diferenciais da loja de maquiagem La Beaute Bea.

## 🎨 Características

- **Design Moderno**: Interface limpa e elegante com paleta rosa e branca
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos de scroll e hover para melhor experiência
- **Performance**: Código otimizado e leve
- **Acessibilidade**: Estrutura semântica e navegação por teclado

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com animações e gradientes
- **JavaScript**: Interatividade e animações de scroll
- **Font Awesome 6.5.1**: Biblioteca de ícones profissionais

## 🎨 Paleta de Cores

- **Rosa Primário**: #FF69B4
- **Rosa Secundário**: #FFC0CB
- **Rosa Claro**: #FFB6C1
- **Rosa Suave**: #FFE4E9
- **Branco**: #FFFFFF
- **Off-White**: #F8F8F8
- **Texto Escuro**: #333333

## 📂 Estrutura de Arquivos

```
LaBeauteBea/
├── index.html                      # Página principal
├── README.md                       # Documentação
├── css/
│   ├── styles.css                  # Estilos globais e animações
│   └── produtos.css                # Estilos específicos de produtos
├── js/
│   └── script.js                   # Interatividade e funcionalidades
├── pages/
│   └── produtos-batons.html        # Página de catálogo de batons
└── assets/
    └── images/
        └── batons/                 # Imagens de produtos de batons
```

## 🔧 Como Usar

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html` em seu navegador
3. Personalize o conteúdo conforme necessário

## 📱 Seções e Páginas

### Página Principal (index.html)
1. **Hero**: Apresentação principal com call-to-action
2. **Sobre**: Informações sobre a loja
3. **Produtos**: Grid com principais categorias de produtos (com link para batons)
4. **Diferenciais**: Por que escolher a La Beaute Bea
5. **Contato**: Redes sociais e formas de contato
6. **Footer**: Informações de copyright

### Página de Batons (produtos-batons.html)
1. **Breadcrumb**: Navegação hierárquica
2. **Cabeçalho**: Título e descrição da categoria
3. **Filtros**: Por tipo (Todos, Matte, Glossy, Líquido)
4. **Catálogo**: Grid com 9 produtos de batons
5. **Detalhes do Produto**: Imagens de alta qualidade, cores disponíveis, preço e botão de compra
6. **Botão Voltar**: Retorno para página principal

## ✨ Funcionalidades

### Página Principal
- Menu responsivo com animação hamburger
- Navegação inteligente com links ativos por seção
- Scroll suave entre seções
- Animações de entrada ao fazer scroll
- Efeito parallax no hero
- Animações de ondas e pulsação na seção Sobre
- Cards de produtos com efeitos hover
- Links de redes sociais estilizados

### Página de Batons
- Sistema de filtros por categoria (Matte, Glossy, Líquido)
- Imagens de alta qualidade dos produtos (via Unsplash)
- Cards de produtos com hover effects
- Exibição de cores disponíveis para cada produto
- Badges de destaque (Bestseller, Novo, Lançamento)
- Animações de entrada escalonadas
- Breadcrumb para navegação
- Botões de compra interativos

### Geral
- Responsividade completa (Desktop, Tablet, Mobile)
- Design consistente em todas as páginas
- Otimização de performance com lazy loading de imagens

## 🔄 Customização

### Alterar Cores

Edite as variáveis CSS no arquivo `css/styles.css`:

```css
:root {
    --rosa-primario: #FF69B4;
    --rosa-secundario: #FFC0CB;
    /* ... outras cores */
}
```

### Adicionar Produtos na Página Principal

Adicione novos cards no arquivo `index.html` dentro da seção `.produtos-grid`:

```html
<article class="produto-card">
    <div class="produto-icone">
        <i class="fa-solid fa-icone-desejado"></i>
    </div>
    <h3 class="produto-titulo">Nome do Produto</h3>
    <p class="produto-descricao">Descrição do produto</p>
</article>
```

### Adicionar Produtos de Batons

Adicione novos produtos no arquivo `pages/produtos-batons.html` dentro da seção `.produtos-catalogo`:

```html
<article class="produto-item fade-in-up" data-categoria="matte">
    <div class="produto-imagem-container">
        <img src="URL_DA_IMAGEM" alt="Nome do Produto" class="produto-imagem" loading="lazy">
        <span class="produto-badge">Badge</span>
    </div>
    <div class="produto-info">
        <span class="produto-categoria">Categoria</span>
        <h3 class="produto-nome">Nome do Produto</h3>
        <p class="produto-detalhes">Descrição detalhada</p>
        <div class="produto-cores">
            <p class="cores-titulo">Cores disponíveis:</p>
            <div class="cores-lista">
                <span class="cor-circulo" style="background: #COR;" title="Nome"></span>
            </div>
        </div>
        <div class="produto-preco-container">
            <span class="produto-preco">R$ XX,XX</span>
            <button class="btn-comprar">
                <i class="fa-solid fa-cart-shopping"></i>
                Comprar
            </button>
        </div>
    </div>
</article>
```

### Configurar Redes Sociais

Edite os links no arquivo `index.html` e `pages/produtos-batons.html` na seção de contato:

```html
<a href="https://instagram.com/seu-perfil" class="rede-social-link">
    <!-- ... -->
</a>
```

## 📱 Responsividade

A página é totalmente responsiva com breakpoints em:
- **768px**: Tablets
- **480px**: Smartphones

## 🌐 Navegadores Suportados

- Chrome (recomendado)
- Firefox
- Safari
- Edge
- Opera

## 📝 Notas de Desenvolvimento

- Código em português seguindo as convenções do projeto
- Sem uso de emojis na interface (usa Font Awesome Icons)
- Animações otimizadas para performance
- Estrutura modular e organizada em pastas
- Navegação com detecção automática de seção ativa
- Design responsivo testado em múltiplos dispositivos
- Imagens de alta qualidade via Unsplash CDN
- Lazy loading para otimização de carregamento
- Sistema de filtros funcional na página de produtos
- Breadcrumb para melhor navegação entre páginas

## 📅 Versão

**1.0.0** - Outubro 2025

## 👤 Desenvolvido para

La Beaute Bea - Maquiagem & Beleza

---

Desenvolvido com dedicação e atenção aos detalhes.

