
    const toggle = document.getElementById("nanna-toggle-5");
    const container = document.getElementById("nanna-container-5");

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
    window.addEventListener("DOMContentLoaded", opdaterContainer);
