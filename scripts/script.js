const validDistricts = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const cdInput = document.getElementById("cd-Input");
const submitButton = document.getElementById("submit");

// Add event listener to the submit button
        submitButton.addEventListener("click", function(event) {
                event.preventDefault(); 
                enterDistrict();
        });
        function enterDistrict() {
                const userInput = cdInput.value;
                console.log(userInput); // Log the inputted data to the console
                if (userInput) {

                        // Check if user input is a number (reconsider if this ever expands to districts outside of NY)
                        if (isNaN(userInput)) {
                                showPopup("Invalid District! Enter a number");
                                return; 
                        }

                        // Check if user enters a valid district
                        if (!validDistricts.includes(parseInt(userInput))) {
                                showPopup("Invalid District! Enter an NYC Congressional District");
                                return;
                        }
// REMEMBER TO ADJUST THE FUNCTION BELOW SO IT OPENS THE RESULTS FOR THAT DISTRICT
                       // Create a pop-up so the user knows the results are loading.
                        const popup = createPopup("Loading District Information");

                        // Remove the pop-up after 3 seconds
                        setTimeout(function() {
                                popup.remove();
                                launchNewPage(userInput);
                        }, 3000);
                }
}
        function createPopup(message) {
                const popup = document.createElement("div");
                popup.textContent = message;
                popup.style.position = "fixed";
                popup.style.top = "26%";
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

// Remove the pop-up after 3 seconds (To avoid an instant pop-up and make it look like it's actually loading).
                setTimeout(function() {
                        popup.remove();
                }, 3000);
        }
//     

        
cdButton.addEventListener("click", function() {
// Create a pop-up message to let the user know, that a popup with an external webpage is incoming
        const loadingPopup = document.createElement("div");
        loadingPopup.textContent = "Find My Election District Now Loading! A pop-up will soon appear.";
        loadingPopup.style.position = "fixed";
        loadingPopup.style.top = "26%"; 
        loadingPopup.style.left = "50%";
        loadingPopup.style.transform = "translate(-50%, -50%)";
        loadingPopup.style.padding = "10px";
        loadingPopup.style.backgroundColor = "cornflowerblue";
        loadingPopup.style.border = "1px solid black";
        loadingPopup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        loadingPopup.style.zIndex = "9999";
                        
        document.body.appendChild(loadingPopup);

// Remove the loading pop-up after 3 seconds
        setTimeout(function() {
                loadingPopup.remove();
// Open the external website in a pop-up window
                const popup = window.open("https://findmypollsite.vote.nyc", "_blank", "width=500,height=500");
        }, 3000);
});

                          