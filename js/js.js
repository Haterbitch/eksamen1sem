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


document.querySelector('.dropdown-toggle').onclick = function(e) {
    e.stopPropagation();
    document.querySelector('.dropdown').classList.toggle('open');
};

document.body.onclick = function() {
    document.querySelector('.dropdown').classList.remove('open');
};



<!-- Modal funktionalitet -->

    // Åbn modal
    document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('customModal').style.display = 'block';
};
    // Luk modal med X eller LUK-knap
    document.getElementById('closeModalBtn').onclick =
    document.getElementById('closeBtn').onclick = function() {
    document.getElementById('customModal').style.display = 'none';
};
    // Tilføj-knap (tilpas evt. funktionalitet)
    document.getElementById('addBtn').onclick = function() {
    alert('Tilføjet: ' + document.getElementById('inputText').value);
    document.getElementById('customModal').style.display = 'none';
};
    // Luk modal hvis der klikkes uden for modal-indholdet
    window.onclick = function(event) {
    if (event.target == document.getElementById('customModal')) {
    document.getElementById('customModal').style.display = 'none';
}
}


