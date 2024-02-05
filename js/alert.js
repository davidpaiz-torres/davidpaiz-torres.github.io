document.addEventListener('DOMContentLoaded', function() {
    ['resume', 'github'].forEach(function(buttonId) {
        document.getElementById(buttonId).addEventListener('click', function(event) {
            var confirmLeave = window.confirm("You are about to leave to another page. Are you sure?");
            if (!confirmLeave) {
                event.preventDefault();
            }
        });
    });
   
});
