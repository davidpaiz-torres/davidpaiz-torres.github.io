const cdInput = document.getElementById("cd-Input");
const validDistricts = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const submitButton = document.getElementById("submit");
const introGrafs = document.getElementById("intro_Grafs");
const currentReps = document.getElementById("current_reps");
const graphics = document.getElementById("graphics");
const districts = document.getElementById("districts");
graphics.style.display="none"


function createPopup(message) {
    const popup = document.createElement("div");
    popup.className = 'popup';
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.top = "65%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "10px";
    popup.style.backgroundColor = "cornflowerblue";
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

// Check if all required elements exist
// The exclamation point means they are not present 
if (!cdInput || !submitButton || !introGrafs || !currentReps || !graphics) {
    console.error("Error: One or more required elements not found.");
} else {
    console.log("All required elements found.");
}

// Add event listener for the submit button
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    enterDistrict();
});

function enterDistrict() {
        const userInput = cdInput.value.trim();
        console.log("User input:", userInput);

        // Check if user input is a number
        if (isNaN(userInput)) {
                showPopup("Enter a Valid District! Enter an NYC Congressional District");
                return;
        } 
        const districtNumber = parseInt(userInput);

        // Validate user input against the list of valid districts
        if (validDistricts.includes(districtNumber)) {
                showPopup("Valid District! Processing your request...");

                setTimeout(function() {
                        var popup = document.querySelector('.popup');
                        if (popup) {
                                popup.remove();
                        }
                }, 2850);

                // Hide initial elements/ Style the Graphs
                introGrafs.style.display = "none";
                currentReps.style.display = "none";
                graphics.style.display = "flex";
                graphics.style.flexDirection = "row";
                graphics.style.flexWrap = "wrap";
                graphics.style.width = "100%";
                graphics.style.justifyContent = "center";
                graphics.style.alignItems = "center";
                graphics.style.height ="auto";
                graphics.style.paddingTop = "30px;";



                // Hide all divs
                const allDivs = document.querySelectorAll("[id^='div-']");
                allDivs.forEach(function(div) {
                        div.style.display = "none";
                });

                // Show the div correlated to the user input
                const userDiv = document.getElementById(`div-${districtNumber}`);
                if (userDiv) {
                        console.log(`Element with ID "div-${districtNumber}" exists.`);
                        userDiv.style.display = "flex";
                        userDiv.style.margin="0 auto";
                        userDiv.style.gap = "20px";
                        userDiv.style.width = "100%";
                        userDiv.style.maxWidth = "100%";
                        userDiv.style.paddingTop = "30px";
                        userDiv.classList.add("graphics");
                } else {
                        console.error(`Error: Element with ID "div-${districtNumber}" not found.`);
                }
        } else {
                showPopup("Invalid District! Enter an NYC Congressional District");
        }
}

// Add event listener for the cdButton
const cdButton = document.getElementById("cdButton");
if (cdButton) {
    cdButton.addEventListener("click", function() {
        // Create a pop-up message to let the user know that a popup with an external webpage is incoming
        const loadingPopup = createPopup("Find My Election District Now Loading! A pop-up will soon appear.");

        // Remove the loading pop-up after 3 seconds
        setTimeout(function() {
            loadingPopup.remove();
            // Open the external website in a pop-up window
            window.open("https://findmypollsite.vote.nyc", "_blank", "width=500,height=500");
        }, 1850);
    });
} else {
    console.error("Error: cdButton element not found.");
}
