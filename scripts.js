// Sample data - replace with actual paths to your images
const photoData = [
    { date: '2024-10-01', event: 'Diwali', imgSrc: 'photos/2024/VinayagarChadhurthi/Hello2024Ganesha.jpeg' },
    { date: '2024-10-01', event: 'Diwali', imgSrc: 'photos/2024/VinayagarChadhurthi/2024SayonaraToVinayagar.jpeg' },
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
