document.addEventListener("DOMContentLoaded", function () {
    // Liste over id'er
    const pairs = [
        { toggle: "nanna-toggle-5", container: "nanna-container-5" },
        { toggle: "nanna-toggle-4", container: "nanna-container-4" },
        { toggle: "nanna-toggle-3", container: "nanna-container-3" }
    ];

    pairs.forEach(pair => {
        const toggle = document.getElementById(pair.toggle);
        const container = document.getElementById(pair.container);

        function opdaterContainer() {
            if (toggle.checked) {
                container.classList.remove("nanna-inaktiv");
                container.classList.add("nanna-aktiv");
            } else {
                container.classList.remove("nanna-aktiv");
                container.classList.add("nanna-inaktiv");
            }
        }

        toggle.addEventListener("change", opdaterContainer);
        opdaterContainer(); // Kør én gang ved load
    });
});





