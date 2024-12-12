document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("formMessage").textContent = `Thank you, ${name}! I'll get back to you soon.`;
        document.getElementById("formMessage").style.color = "green";
        this.reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill out all fields.";
        document.getElementById("formMessage").style.color = "red";
    }
});
