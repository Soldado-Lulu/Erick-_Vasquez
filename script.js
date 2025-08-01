document.addEventListener('DOMContentLoaded', () => {
  const sakura = new Sakura('body');
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);
  }, 3000); // Espera 3 segundos antes de ocultar el preloader
});

//funcion para los petalos aleatoreos

  function launchPetalBurst() {
    const container = document.getElementById('petal-container');

    for (let i = 0; i < 30; i++) {
      const petal = document.createElement('div');
      petal.classList.add('petal');

      const angle = Math.random() * 2 * Math.PI; // dirección aleatoria
      const distance = Math.random() * 150 + 50; // distancia aleatoria
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      petal.style.transform = `translate(0, 0)`;
      container.appendChild(petal);

      setTimeout(() => {
        petal.style.transition = 'transform 1.5s ease-out, opacity 1.5s ease';
        petal.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
        petal.style.opacity = '0';
      }, 50);

      // Elimina el pétalo luego de la animación
      setTimeout(() => {
        petal.remove();
      }, 2000);
    }
  }

  // Lanza los pétalos al cargar la página
  window.addEventListener('load', () => {
    setTimeout(() => {
      launchPetalBurst();
    }, 1000); // después de 1 segundo de cargar
  });

// Animación tipo máquina de escribir
let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextSpan = document.getElementById("typed-text");
let typedTexts = []; // Este arreglo se actualizará dinámicamente

function typeWriterEffect() {
  if (typedTexts.length === 0) return;

  const current = typedTexts[currentTextIndex];

  if (!isDeleting) {
    typedTextSpan.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, 1500);
      return;
    }
  } else {
    typedTextSpan.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % typedTexts.length;
    }
  }

  setTimeout(typeWriterEffect, isDeleting ? 50 : 100);
}

// Esta función será llamada desde lang.js
window.updateTypedText = function (newTexts) {
  typedTexts = newTexts;
  currentTextIndex = 0;
  charIndex = 0;
  isDeleting = false;
};


// Espera a que el DOM esté cargado antes de iniciar
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('lang') || 'es';
  window.updateTypedText(langData[savedLang].typedTexts); // Carga el idioma correcto
  typeWriterEffect();
});




// funciones adicionales
function copyToClipboard(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
        showToast("¡Copiado!");
    }).catch(err => {
        console.error("Error al copiar: ", err);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000); // Desaparece luego de 2 segundos
}

function copyEmail() {
    const email = "Vasquez.Castro.Andres@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showToast("¡Correo copiado!");
    }).catch(err => {
        console.error("Error al copiar el correo: ", err);
    });
}


