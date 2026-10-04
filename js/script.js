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


// =========================
// AUTO SELECT EVENT
// =========================

const eventSelect = document.getElementById("event");

if (eventSelect) {

    const params = new URLSearchParams(window.location.search);
    const eventType = params.get("event");

    if (eventType === "tech") {
        eventSelect.value = "Tech Fest 2026";
    }

    if (eventType === "cultural") {
        eventSelect.value = "Cultural Fest";
    }

    if (eventType === "sports") {
        eventSelect.value = "Sports Meet";
    }
}