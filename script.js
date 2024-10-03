// Sample data - replace with actual paths to your images
const photoData = [
    { date: '2024-09-07', event: 'VinayagarChadhurthi', imgSrc: 'photos/2024/VinayagarChadhurthi/Hello2024Ganesha.jpeg' },
    { date: '2024-09-09', event: 'VinayagarChadhurthi', imgSrc: 'photos/2024/VinayagarChadhurthi/2024SayonaraToVinayagar.jpeg' },
    // Add more photo objects here
];

function loadGallery() {
    const gallery = document.getElementById('gallery');
    photoData.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.imgSrc;
        imgElement.alt = `${photo.event} - ${photo.date}`;
        gallery.appendChild(imgElement);
    });
}

window.onload = loadGallery;
