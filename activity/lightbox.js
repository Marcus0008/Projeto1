let currentImageIndex = 0;
const imageSources = [
    "arvore.jfif", "arvores.jfif", "porco.jfif", "coelho.jfif", "flores.jfif"
];

function openImage(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    currentImageIndex = imageSources.indexOf(src);
    
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSources[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSources[currentImageIndex];
}
