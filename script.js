const typingText = document.getElementById("typing-text");

const titles = [
    "Front-End Developer",
    "Software Developer",
    "App Builder",
    "Chrome Extension Developer",
    "Python Developer"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) {
        return;
    }

    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentTitle.substring(0, charIndex);

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;

        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
    }

    const typingSpeed = isDeleting ? 60 : 100;

    setTimeout(typeEffect, typingSpeed);
}

if (typingText) {
    typeEffect();
}


/* =========================
   ORBIT MODE
========================= */

const orbitBtn = document.getElementById("orbitBtn");

if (orbitBtn) {
    orbitBtn.addEventListener("click", () => {
        document.body.classList.toggle("space-mode");

        const isSpaceMode =
            document.body.classList.contains("space-mode");

        orbitBtn.textContent = isSpaceMode
            ? "🌍 Return to Earth"
            : "🚀 Enter Orbit";
    });
}