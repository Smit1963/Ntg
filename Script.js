// Play music when page loads
window.onload = function() {
    document.getElementById("bg-music").play();
};

// Reveal message
function revealMessage() {
    document.getElementById("message-box").classList.remove("hidden");
}

// Create falling hearts
function createHearts() {
    const heartContainer = document.querySelector(".hearts-container");
    
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

createHearts();
