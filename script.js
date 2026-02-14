const form = document.getElementById("leadForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Basic Validation
    if (!name || !email || !phone) {
        responseMsg.style.color = "red";
        responseMsg.textContent = "Please fill out all fields!";
        return;
    }

    // Thank You Response
    responseMsg.style.color = "green";
    responseMsg.textContent = "Thanks! We'll contact you soon!";
    
    // Reset Form
    form.reset();
});
