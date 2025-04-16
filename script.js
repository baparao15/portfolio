document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form submission if invalid

        const name = document.getElementById("name").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const email = document.getElementById("email").value.trim();
        const query = document.getElementById("query").value.trim();

        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameRegex.test(name)) {
            alert("Enter a valid name (letters and spaces only).");
            return;
        }

        if (!phoneRegex.test(mobile)) {
            alert("Enter a valid 10-digit Indian phone number.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Enter a valid email address.");
            return;
        }

        if (query.length < 10) {
            alert("Your message must be at least 10 characters long.");
            return;
        }

        alert("Form submitted successfully!");
        form.submit(); // Submit if everything is valid
    });
});
