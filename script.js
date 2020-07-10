document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('p.example span').forEach(function (el){
        el.addEventListener('mouseover', function (el) {
            el.target.classList.add('highlight');
            var typeEl = document.querySelector('p.types span[data-type=' + el.target.dataset.type + ']');
            typeEl.classList.add('highlight');
        });
        el.addEventListener('mouseleave', function (el) {
            el.target.classList.remove('highlight');
            var typeEl = document.querySelector('p.types span[data-type=' + el.target.dataset.type + ']');
            typeEl.classList.remove('highlight');
        });
    })
});
