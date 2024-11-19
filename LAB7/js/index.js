// Reference to survey form using the form collection
const form = document.forms["surveyForm"];  // Make sure this matches the form's name in the HTML

// Reference to modal hidden on the page.
const modal = document.getElementById("resultModal");  

// Add a listener to the submit event for the survey form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Check if form is valid
    if (!form.checkValidity()) {
        event.stopPropagation();  
        form.classList.add('was-validated');
        return;
    }

    // Retrieve values from form inputs
    document.getElementById("name").textContent = form['name'].value;
    document.getElementById("email").textContent = form['email'].value;
    document.getElementById("age").textContent = form['age'].value;
    document.getElementById("Satisfaction").textContent = form['Satisfaction'].value;  
    document.getElementById("contactMethod").textContent = form['contactMethod'].value;
    document.getElementById("Comments").textContent = form['comments'].value;

    // Show modal with results
    new bootstrap.Modal(modal).show();

    // Reset the form and validation state after modal is shown
    form.reset();
    form.classList.remove('was-validated');
}); 