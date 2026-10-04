// College Event Management Website

console.log("CampusEvents website loaded successfully!");

// =========================
// REGISTRATION FORM
// =========================

const registrationForm = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const selectedEvent = document.getElementById("event").value;

        successMessage.innerHTML = `
            <div class="success-box">
                <h3>Registration Successful! 🎉</h3>
                <p>
                    Thank you, ${name}.
                    You are registered for ${selectedEvent}.
                </p>
            </div>
        `;

        registrationForm.reset();

    });

}