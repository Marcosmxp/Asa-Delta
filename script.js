// Suaviza a rolagem para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona classe ativa ao menu conforme rolagem
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Efeito adicional nos cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Verifica se o dispositivo é mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajusta animação do WhatsApp para mobile
if (isMobile()) {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    whatsappBtn.style.animation = 'none';
    whatsappBtn.style.transform = 'scale(1.1)';
}

// Adiciona ano atual no footer
document.querySelector('footer p:first-child').innerHTML = 
    `&copy; ${new Date().getFullYear()} Guincho Belém - Todos os direitos reservados`;
