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
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

if (typingText) {
    typeEffect();
}

const orbitBtn = document.getElementById("orbitBtn");

orbitBtn.addEventListener("click", () => {

    document.body.classList.toggle("space-mode");

    if(document.body.classList.contains("space-mode")){

        orbitBtn.innerHTML = "🌍 Return to Earth";

    }else{

        orbitBtn.innerHTML = "🚀 Enter Orbit";

    }

});