document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const currentLocation = window.location.href;

    links.forEach(function(link) {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Form submitted successfully!");
        });
    }
});
