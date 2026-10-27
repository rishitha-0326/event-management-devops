function register(eventName) {
    let registrations =
        JSON.parse(localStorage.getItem("registrations")) || [];

    if (!registrations.includes(eventName)) {
        registrations.push(eventName);
        localStorage.setItem(
            "registrations",
            JSON.stringify(registrations)
        );

        alert("Successfully registered for " + eventName);
    } else {
        alert("You are already registered for this event.");
    }
}

function displayRegistrations() {
    const container =
        document.getElementById("registrationList");

    if (!container) return;

    const registrations =
        JSON.parse(localStorage.getItem("registrations")) || [];

    if (registrations.length === 0) {
        container.innerHTML =
            "<p>No registrations yet.</p>";
        return;
    }

    container.innerHTML = registrations.map(event => `
        <div class="registration">
            <h3>${event}</h3>
            <p>✅ Registration confirmed</p>
        </div>
    `).join("");
}

displayRegistrations();