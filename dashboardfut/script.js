

const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme-toggler');

// Função para salvar o tema no localStorage
function saveTheme(themeName) {
    localStorage.setItem('theme', themeName);
}

// Função para carregar o tema do localStorage
function loadTheme() {
    const selectedTheme = localStorage.getItem('theme');
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-theme-variables');
        if (themeToggler) {
            themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
            themeToggler.querySelector('span:nth-child(2)').classList.add('active');
        }
    } else {
        document.body.classList.remove('dark-theme-variables');
        if (themeToggler) {
            themeToggler.querySelector('span:nth-child(1)').classList.add('active');
            themeToggler.querySelector('span:nth-child(2)').classList.remove('active');
        }
    }
}

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = "block";
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = "none";
    });
}

if (themeToggler) {
    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');
        if (themeToggler) {
            themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
            themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
        }

        // Salva o tema atual no localStorage
        if (document.body.classList.contains('dark-theme-variables')) {
            saveTheme('dark');
        } else {
            saveTheme('light');
        }
    });
}

// Carrega o tema salvo ao carregar a página
loadTheme();

// **CÓDIGO DO POP-UP**
const sairLink = document.getElementById('sair-link');
const overlay = document.getElementById('overlay');
const exitPopup = document.getElementById('exit-popup');
const confirmExitBtn = document.getElementById('confirm-exit');
const cancelExitBtn = document.getElementById('cancel-exit');

if (sairLink) {
    sairLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (overlay && exitPopup) {
            overlay.style.display = 'block';
            exitPopup.style.display = 'block';
        }
    });
}

if (cancelExitBtn) {
    cancelExitBtn.addEventListener('click', function() {
        if (overlay && exitPopup) {
            overlay.style.display = 'none';
            exitPopup.style.display = 'none';
        }
    });
}

if (confirmExitBtn) {
    confirmExitBtn.addEventListener('click', function() {
        window.location.href = 'sair.html';
    });
}