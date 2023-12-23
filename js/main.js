document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resume_button').addEventListener('click', function(event) {
        var confirmLeave = window.confirm("You are about to leave to another page. Are you sure?");
        if (!confirmLeave) {
            event.preventDefault();
        }
    });
    if (/iPhone|iPod/.test(navigator.userAgent)) {
        return;
    }
    
    var image = document.getElementById('adams_event');
    var caption = document.querySelector('.images figcaption');
    var charts = document.querySelector('.charts');
    var map = document.querySelector('.map');
    var screenHeight = window.innerHeight;

    window.addEventListener('scroll', function() {
        var imageMiddle = image ? image.getBoundingClientRect().top + image.offsetHeight / 2 : 0;
        var captionMiddle = caption ? caption.getBoundingClientRect().top + caption.offsetHeight / 2 : 0;
        var chartsMiddle = charts ? charts.getBoundingClientRect().top + charts.offsetHeight / 2 : 0;
        var mapMiddle = map ? map.getBoundingClientRect().top + map.offsetHeight / 2 : 0;
        image.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(screenHeight / 2 - imageMiddle) / (screenHeight / 3)));
        caption.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(screenHeight / 2 - captionMiddle) / (screenHeight / 3)));
        charts.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(screenHeight / 2 - chartsMiddle) / (screenHeight / 3)));
        map.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(screenHeight / 2 - mapMiddle) / (screenHeight / 3)));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resume_button').addEventListener('click', function(event) {
        var confirmLeave = window.confirm("You are about to leave to another page. Are you sure?");
        if (!confirmLeave) {
            event.preventDefault();
        }
    });

    var image = document.getElementById('adams_event');
    var caption = document.querySelector('.images figcaption');
    var charts = document.querySelector('.charts');
    var map = document.querySelector('.map');
    var screenHeight = window.innerHeight;

    function updateOpacity() {
        var imageMiddle = image ? image.getBoundingClientRect().top + image.offsetHeight / 2 : 0;
        var captionMiddle = caption ? caption.getBoundingClientRect().top + caption.offsetHeight / 2 : 0;
        var chartsMiddle = charts ? charts.getBoundingClientRect().top + charts.offsetHeight / 2 : 0;
        var mapMiddle = map ? map.getBoundingClientRect().top + map.offsetHeight / 2 : 0;

        image.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(screenHeight / 2 - imageMiddle) / (screenHeight / 3)));
        caption.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(screenHeight / 2 - captionMiddle) / (screenHeight / 3)));
        charts.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(screenHeight / 2 - chartsMiddle) / (screenHeight / 3)));
        map.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(screenHeight / 2 - mapMiddle) / (screenHeight / 3)));

        requestAnimationFrame(updateOpacity);
    }

    updateOpacity();
});
