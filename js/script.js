
/* ==============================
   CampusEvents - JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for same-page links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Registration form validation
    const registrationForm =
        document.getElementById("registrationForm");

    const formMessage =
        document.getElementById("formMessage");

    if (registrationForm && formMessage) {

        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!registrationForm.checkValidity()) {
                registrationForm.reportValidity();
                return;
            }

            formMessage.textContent =
                "Registration submitted successfully! (Demo only)";

            formMessage.style.color = "#3A86FF";
            formMessage.classList.remove("success-animation");
void formMessage.offsetWidth;
formMessage.classList.add("success-animation");

            registrationForm.reset();
            formMessage.textContent =
            "Registeration submitted successfully! (Demo only)";
            formMessage.style.color = "#3A86FF";
        });
    }

    // Highlight the current page in navigation
    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

});
