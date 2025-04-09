function createPopup(message) {
    const popup = document.createElement("div");
    popup.className = 'popup';
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.top = "25%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "10px";
    popup.style.backgroundColor = "#2171b5";
    popup.style.border = "1px solid black";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    popup.style.zIndex = "9999";
    document.body.appendChild(popup);
    return popup;
}

function showPopup(message) {
    const popup = createPopup(message);
    // Remove the pop-up after 3 seconds
    setTimeout(function() {
        popup.remove();
    }, 2850);
}


document.addEventListener('DOMContentLoaded', function() {
    // Use absolute URLs for external pages and root-relative for internal ones.
    const buttonActions = {
        github: 'https://github.com/davidpaiz-torres',
        linkedIn: 'https://www.linkedin.com/in/david-paiz-torres-494b3614a/',
        bsky: 'https://bsky.app/profile/davidpaiz-torres.bsky.social',
        roosevelt: 'https://david-mia-asad-capstone.github.io/',
        
    };

    const projectLinks = {
        roosevelt: 'https://david-mia-asad-capstone.github.io/',
        // toh: 'https://davidpaiz-torres.github.io/vis_story/index.html',
        // home: 'https://david.paiz-torres.github.io/index.html',
        // congress_tracker: 'davidpaiz-torres.github.io/q1-congressional-activity.index.html'
    };
  

    // Set href attributes for project links
    Object.entries(projectLinks).forEach(([id, url]) => {
        const el = document.getElementById(id);
        if (el) {
            el.setAttribute('href', url);
        }
    });

    // Attach click event listeners to navigation buttons
    Object.keys(buttonActions).forEach(function(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function() {
                showPopup("Processing your request... You will be redirected to another page... ");
                setTimeout(function() {
                    const popup = document.querySelector('.popup');
                    if (popup) {
                        popup.remove();
                    }
                    window.location.href = buttonActions[buttonId];
                }, 3850);
            });
        }
    });
});

// Drop Down Menu
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown if clicking outside
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        const myDropdown = document.getElementById("myDropdown");
        if (myDropdown && myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href && href.trim() !== "#") {
                // If it's an absolute URL (starts with "http"), use it as is,
                // otherwise, assume it's a relative URL.
                let url = href.startsWith("http") ? href : href;
                showPopup("Processing your request... You will be redirected to another page...");
                setTimeout(function () {
                    window.location.href = url;
                }, 3850);
            } else {
                showPopup("This link is not available yet. Please check back later!");
            }
        });
    });
});
