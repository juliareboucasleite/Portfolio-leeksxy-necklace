// Navegação suave
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona scroll suave para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animação de fade-in para elementos ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplica animação aos elementos principais
    const animatedElements = document.querySelectorAll(
        '.expertise-section, .hobbies-section, .company-intro, .role-at-company, .project-description, .project-process, .project-output, .testimonial-section'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Adiciona efeito hover melhorado nos cards
    const cards = document.querySelectorAll('.role-card, .expertise-item, .breakdown-item, .info-section');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Adiciona loading state para imagens (quando forem adicionadas)
    const imagePlaceholders = document.querySelectorAll(
        '.expertise-image-placeholder, .hobby-image-placeholder, .company-image-placeholder, .role-image-placeholder, .project-image-placeholder, .process-image-placeholder, .prototype-image-placeholder, .output-image-placeholder, .concept-image-placeholder, .testimonial-image-placeholder'
    );

    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // Adiciona funcionalidade para quando imagens reais forem adicionadas
            console.log('Placeholder clicado - adicione uma imagem aqui');
        });
    });

    // Adiciona efeito parallax sutil na seção intro
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                introSection.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    // Adiciona indicador de scroll na navegação
    const nav = document.querySelector('.main-nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Adiciona tooltip para links sociais
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.title = `Visite meu ${this.textContent}`;
        });
    });

    // Melhora a acessibilidade com foco visível
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--secondary-color)';
            this.style.outlineOffset = '2px';
        });
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Adiciona animação de digitação no título da intro (opcional)
    const introName = document.querySelector('.intro-name');
    if (introName && !introName.textContent.includes('Seu Nome')) {
        // Só executa se o nome já foi personalizado
        // Animação de digitação desabilitada - texto permanece visível
        // Para ativar, descomente as linhas abaixo e comente a linha de retorno
        /*
        const text = introName.textContent;
        introName.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                introName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
        */
    }

    // Console log para debug (remover em produção)
    console.log('Portfolio Leeksxy carregado com sucesso!');
});
