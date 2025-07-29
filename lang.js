const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",

    "greeting": "Hi, I'm Erick Vasquez!",

    // About Me
    "about-title": "About Me",
    "about-p1": "Web developer with a passion for technology and programming. I specialize in Front-End development, creating attractive and functional interfaces, and I also have solid knowledge in Back-End. I’m interested in everything related to software development, especially in areas such as artificial intelligence and design.",
  
    // Skills
    "skills-title": "Skills",
    "skills-languages": "Languages",
    "skills-frameworks": "Frameworks",
    "skills-databases": "Databases",
    "skills-tools": "Tools",
    "skills-langs": "Languages",
    "lang-english": "B1 - In training",
    "lang-spanish": "Native",

    // Projects
    "projects-title": "Logic",
    "project-dacky-title": "DACKY",
    "project-dacky-description": "Pet GPS tracking application",
    "project-dacky-link": "View repository",

    // Contact
    "contact-title": "Contact",
    "linkedin-profile": "My LinkedIn Profile",
    "github-profile": "My GitHub Profile",
    "cv-button": "CV",

    // Footer
    "footer-text": "Erick Vasquez 2025 © All rights reserved",

    // Fallback text (optional)
    "video-not-supported": "Your browser does not support HTML5 video.",
    "copy-email": "Copy email",

    typedTexts: [
      "Full Stack Developer",
      "Web Developer",
      "Mobile Developer",
      "Trainee"
    ]

  }
};
const langData = {
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",

    "greeting": "Hola, soy Erick Vasquez!",

    // Sobre mí
    "about-title": "Sobre mí",
    "about-p1": "Desarrollador web con pasión por la tecnología y la programación. Me especializo en el desarrollo Front-End, creando interfaces atractivas y funcionales, y también cuento con conocimientos sólidos en Back-End.  Me interesa todo lo relacionado con el desarrollo de software, especialmente en áreas como la inteligencia artificial y el diseño.",
  
    // Habilidades
    "skills-title": "Habilidades",
    "skills-languages": "Lenguajes",
    "skills-frameworks": "Frameworks",
    "skills-databases": "Bases de datos",
    "skills-tools": "Herramientas",
    "skills-langs": "Idiomas",
    "lang-english": "B2 - En formación",
    "lang-spanish": "Nativo",

    // Proyectos
    "projects-title": "Logica",
    "project-dacky-title": "DACKY",
    "project-dacky-description": "Aplicación de rastreo GPS para mascotas",
    "project-dacky-link": "Ver repositorio",

    // Contacto
    "contact-title": "Contacto",
    "linkedin-profile": "Mi perfil de LinkedIn",
    "github-profile": "Mi perfil de GitHub",
    "cv-button": "CV",

    // Pie de página
    "footer-text": "Erick Vasquez 2025 © Todos los derechos reservados",

    // Texto alternativo (opcional)
    "video-not-supported": "Tu navegador no soporta video HTML5.",
    "copy-email": 'Copiar correo electrónico',
    
    typedTexts: [
      "Desarrollador Full Stack",
      "Desarrollador Web",
      "Desarrollador Móvil",
      "Aprendiz"
    ]

  },
  en: translations.en
};


const toggle = document.getElementById('langToggle');
const elements = document.querySelectorAll('[data-key]');

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (langData[lang][key]) {
      el.textContent = langData[lang][key];
    }
  });

  // Actualiza los textos del efecto de escritura
  if (window.updateTypedText) {
    window.updateTypedText(langData[lang].typedTexts);
  }
}


// Guardar la preferencia en localStorage
toggle.addEventListener('change', function () {
  const lang = this.checked ? 'en' : 'es';
  setLanguage(lang);
  localStorage.setItem('lang', lang);
});

// Cargar preferencia guardada
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'es';
  toggle.checked = savedLang === 'en';
  setLanguage(savedLang);
});