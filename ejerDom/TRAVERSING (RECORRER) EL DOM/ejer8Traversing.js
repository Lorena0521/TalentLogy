let ImagenIndex = 0;
        const images = document.querySelectorAll('.image');

        function showImage(index) {
            if (index < 0) {
                ImagenIndex = images.length - 1;
            } else if (index >= images.length) {
                ImagenIndex = 0;
            }

            images.forEach(image => {
                image.style.display = 'none';
            });
            images[ImagenIndex].style.display = 'block';
        }

        function prevImage() {
            ImagenIndex--;
            showImage(ImagenIndex);
        }

        function nextImage() {
            ImagenIndex++;
            showImage(ImagenIndex);
        }

        showImage(ImagenIndex);