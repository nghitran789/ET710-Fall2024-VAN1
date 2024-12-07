// Array of dynamic text
const messages = [
    "Welcome to our website!",
    "Explore the lastest updates.",
    "Contact us for more information.",
    "Thank you for visiting!",
    "Have a great day!",
    "Discover our upcoming events!",
    "See you again!"
];

// Get the container element
const container = document.getElementById("text-container");

// Loop through the array and creat HTML elements
for (let index =0; index < messages.length; index++) {
    setTimeout(function() {
        // Create a new <p> element
        const paragraph = document.createElement("p");

        // Add text and class to the <p> element
        paragraph.textContent = messages[index];
        paragraph.className = "dynamic-text";

        appendElement(paragraph);

    }, index * 1000);
}

function appendElement(para) {
    // Append the <p> element to the container
    container.appendChild(para);
}