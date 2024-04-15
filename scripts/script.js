const validDistricts = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const yesButton = document.getElementById("Yes");

// Add event listener to the "Yes" button
yesButton.addEventListener("click", function() {
    promptForDistrict();
});

function promptForDistrict() {
    const userInput = prompt("Please Enter an NYC Congressional District");
    console.log(userInput); // Log the inputted data to the console

    if (userInput) {
// Check if user input is a number (will need to rethink this if this ever expands to districts outside of NY)
        if (isNaN(userInput)) {
            alert("Please Enter an NYC Congressional District!");
            // Retrigger the prompt 
            promptForDistrict();
            return;
        }

// Check if user input is a valid district
        if (!validDistricts.includes(parseInt(userInput))) {
            alert("Invalid District! Enter an NYC Congressional District");
            // Retrigger the prompt 
            promptForDistrict();
            return;
        }

// Create a pop-up so the user knows the district is loading.
        const popup = document.createElement("div");
        popup.textContent = "Loading District Information";
        popup.style.position = "fixed";
        popup.style.top = "26%"; // Set the pop up slightly above the capitol 
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.padding = "10px";
        popup.style.backgroundColor = "cornflowerblue";
        popup.style.border = "1px solid black";
        popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        popup.style.zIndex = "9999";
        
        document.body.appendChild(popup);

        // Remove the pop-up after 3 seconds
        setTimeout(function() {
            popup.remove();
            launchNewPage(userInput);
        }, 3000);
    }
}

function launchNewPage(districtNumber) {
    // Define the URL of the new HTML page based on the district number
    const url = `district_${districtNumber}.html`;

    // Navigate to the new page
    window.location.href = url;
}

