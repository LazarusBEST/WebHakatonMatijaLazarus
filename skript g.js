function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');
    
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        btn.innerText = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.innerText = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Selektujemo elemente
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close-modal");

// Prolazimo kroz sve slike u galeriji i dodajemo event listener
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const overlayText = item.querySelector('.overlay span').innerText;
        
        modal.style.display = "flex";
        modalImg.src = img.src; // Uzima izvor male slike i stavlja u veliku
        captionText.innerHTML = overlayText; // Uzima tekst iz overlay-a
    });
});

// Zatvaranje na X
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Zatvaranje klikom bilo gde van slike
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// Sve slike
const items = document.querySelectorAll('.gallery-item');

let currentIndex = 0;

// Klik na sliku
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        openImage();
    });
});

// Funkcija za otvaranje slike
function openImage() {
    const item = items[currentIndex];
    const img = item.querySelector('img');
    const text = item.querySelector('.overlay span').innerText;

    modal.style.display = "flex";
    modalImg.src = img.src;
    captionText.innerHTML = text;
}

// Strelice
document.querySelector('.left').onclick = () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = items.length - 1;
    openImage();
};

document.querySelector('.right').onclick = () => {
    currentIndex++;
    if (currentIndex >= items.length) currentIndex = 0;
    openImage();
};


document.addEventListener('keydown', (e) => {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") {
            document.querySelector('.left').click();
        }
        if (e.key === "ArrowRight") {
            document.querySelector('.right').click();
        }
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    }
});