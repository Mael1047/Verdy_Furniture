document.querySelectorAll('.two').forEach(function(container) {
    var caption = container.querySelector('.caption');
    container.addEventListener('mouseenter', function() {
        caption.classList.add('show');
    });
    container.addEventListener('mouseleave', function() {
        caption.classList.remove('show');
    });
});