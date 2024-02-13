window.addEventListener('scroll', function () {
    const container = document.getElementById('container');
    let scrollPosition = window.pageYOffset;

    container.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
});
