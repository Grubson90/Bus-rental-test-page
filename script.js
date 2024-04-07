// Function to fetch fleet data from an external source (JSON file, API, etc.)
async function fetchFleetData() {
    try {
        const response = await fetch('fleet.json'); // Replace 'fleet.json' with the URL of your fleet data source
        if (!response.ok) {
            throw new Error('Failed to fetch fleet data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Function to display fleet data
async function displayFleet() {
    const fleetList = document.getElementById('fleet-list');
    fleetList.innerHTML = '';
    const fleetData = await fetchFleetData();
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
