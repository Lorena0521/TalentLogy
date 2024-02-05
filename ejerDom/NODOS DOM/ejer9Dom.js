const images = [
  { src: '../../captura de pantalla/images (4).jpeg', description: 'imagen 1' },
  { src: '../../captura de pantalla/images (5).jpeg', description: 'imagen 2' },
  { src: '../../captura de pantalla/seljalandsfoss-1751463_640.jpg', description: 'imagen 3' }
];

const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
      mainImage.src = images[index].src;
      mainImage.alt = images[index].description;
  });
});