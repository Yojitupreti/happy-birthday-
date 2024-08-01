document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animate-text');
    const photos = document.querySelectorAll('.animate-photo');

    setInterval(() => {
        textElement.classList.toggle('change-color');
    }, 2000);

    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add('animate');
        }, index * 1000);
    });
});
