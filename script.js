// Sample fleet data (can be fetched from a server)
const fleetData = [
    { type: "Coach", capacity: 50 },
    { type: "Minibus", capacity: 20 },
    { type: "Double Decker", capacity: 80 }
];

// Function to display fleet data
function displayFleet() {
    const fleetList = document.getElementById('fleet-list');
    fleetList.innerHTML = '';
    fleetData.forEach(bus => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<p>${bus.type} - Capacity: ${bus.capacity}</p>`;
        fleetList.appendChild(listItem);
    });
}

// Call function to display fleet on page load
window.onload = displayFleet;

// Handling form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const formData = new FormData(this); // Create a FormData object from the form
    // Example: Sending the form data to the server (you would replace this with actual backend code)
    for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
    }
    alert('Form submitted successfully!');
    this.reset(); // Reset the form fields
});
