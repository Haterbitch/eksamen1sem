<script>
    const toggle = document.getElementById("nanna-toggle");
    const container = document.getElementById("nanna-2");

    // Funktion der skifter mellem klasser
    function skiftBaggrund() {
    if (toggle.checked) {
    container.classList.remove("nanna-inaktiv");
    container.classList.add("nanna-aktiv");
} else {
    container.classList.remove("nanna-aktiv");
    container.classList.add("nanna-inaktiv");
}
}

    // Kør når toggle ændres + når siden loader
    toggle.addEventListener("change", skiftBaggrund);
    window.addEventListener("DOMContentLoaded", skiftBaggrund);
</script>
