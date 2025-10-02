document.addEventListener('DOMContentLoaded', function() {
    inicializarMenu();
    inicializarAnimacoesScroll();
    inicializarHeaderScroll();
    inicializarNavegacaoAtiva();
});

function inicializarMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInside && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function inicializarAnimacoesScroll() {
    const elementos = document.querySelectorAll('.produto-card, .diferencial-item, .sobre-texto, .sobre-imagem');
    
    elementos.forEach(elemento => {
        elemento.classList.add('fade-in');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
}

function inicializarHeaderScroll() {
    const header = document.querySelector('.header');
    let ultimaPosicao = window.pageYOffset;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.pageYOffset;

        if (posicaoAtual > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        ultimaPosicao = posicaoAtual;
    });
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

function inicializarNavegacaoAtiva() {
    const secoes = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function atualizarLinkAtivo() {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition + windowHeight >= documentHeight - 50) {
            navLinks.forEach(link => link.classList.remove('active'));
            const linkContato = document.querySelector('.nav-link[href="#contato"]');
            if (linkContato) {
                linkContato.classList.add('active');
            }
            return;
        }

        if (scrollPosition < 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            const linkInicio = document.querySelector('.nav-link[href="#inicio"]');
            if (linkInicio) {
                linkInicio.classList.add('active');
            }
            return;
        }

        let secaoAtual = '';
        const offset = 200;

        secoes.forEach(secao => {
            const secaoTop = secao.offsetTop - offset;
            const secaoId = secao.getAttribute('id');

            if (scrollPosition >= secaoTop) {
                secaoAtual = secaoId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${secaoAtual}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', atualizarLinkAtivo);
    atualizarLinkAtivo();
}

