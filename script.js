// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar-custom');
//     if (window.scrollY > 50) {
//         navbar.classList.add('navbar-scrolled');
//     } else {
//         navbar.classList.remove('navbar-scrolled');
//     }
// })

// Typed text
const phrases = [
    "I'm a Website Developer . . .",
    "I'm a Fullstack Developer . . .",
    "I'm a Content Creator . . .",
    "I'm a Gamer . . .",
];

const el = document.querySelector('.typed-text');
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let currentText = '';
let delay = 100;

function type() {
    const fullText = phrases[phraseIndex];
    if (isDeleting) {
        currentText = fullText.substring(0, letterIndex--);
    } else {
        currentText = fullText.substring(0, letterIndex++);
    }
    el.textContent = currentText;
    if (!isDeleting && letterIndex > fullText.length) {
        isDeleting = true;
        delay = 1500; // Pause before deleting
    } else if (isDeleting && letterIndex === 2) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 1000; // Pause before typing next phrase
    } else {
        delay = isDeleting ? 50 : 50; // Speed of typing and deleting
    }

    setTimeout(type, delay);
}
document.addEventListener('DOMContentLoaded', function () {
    type();
});

function addCardClassForMobile() {
    const rowDiv = document.querySelector('.text-bio');

    if (window.innerWidth <= 768) {
        rowDiv.classList.add('w-75');
        rowDiv.classList.remove('w-50');
    } else {
        rowDiv.classList.remove('w-75');
        rowDiv.classList.add('w-50');
    }
}

// Jalankan saat halaman dimuat
addCardClassForMobile();

// Jalankan saat layar di-resize
window.addEventListener('resize', addCardClassForMobile);

// Ganti tab, active class dan 
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-group button');
    const tabs = document.querySelectorAll('#profile-tab, #experience-tab, #certificate-tab');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-bs-target');

            // Ubah status aktif tombol
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Sembunyikan semua tab
            tabs.forEach(tab => tab.classList.add('d-none'));

            // Tampilkan tab yang sesuai
            const targetTab = document.getElementById(targetId);
            if (targetTab) {
                targetTab.classList.remove('d-none');
            }
        });
    });
});