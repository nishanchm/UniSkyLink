/* Simple helper to copy title attributes into data-tooltip for instant tooltips */
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('[title]');
    elements.forEach(function (el) {
        var title = el.getAttribute('title');
        if (title) {
            el.setAttribute('data-tooltip', title);
            el.removeAttribute('title');
        }
    });
});