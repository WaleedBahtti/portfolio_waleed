// Function to validate and submit the contact form
function submitForm() {
    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation: Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
    } else {
        // Simulate form submission and display a thank-you message
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Clear the form fields after submission
        document.getElementById('contactForm').reset();
    }
}

