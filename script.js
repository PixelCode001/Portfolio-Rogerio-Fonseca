// Seleção dos elementos do DOM
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Função para ativar/desativar o menu no mobile
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');  // Adiciona ou remove a classe 'active' para exibir ou esconder o menu
    menuIcon.classList.toggle('bx-x');  // Troca o ícone do menu (hamburguer para 'X')
});

// Função para monitorar rolagem e ativar a classe 'visible' nas seções
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight; // Calcula a posição do scroll + altura da tela

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 150) { // Ativa a visibilidade quando a seção está perto de aparecer
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Função para navegação suave entre as seções ao clicar no menu
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  // Impede o comportamento padrão de rolagem
        const targetId = e.target.getAttribute('href').substring(1);  // Obtém o id da seção de destino
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajusta a rolagem para considerar o cabeçalho fixo
            behavior: 'smooth'  // Adiciona rolagem suave
        });

        // Fechar o menu após clicar no link, para dispositivos móveis
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});
