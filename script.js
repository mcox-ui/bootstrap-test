document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault(); // evitar que recargue
        const button = document.getElementById("modeDropdown");
        button.innerHTML = this.innerHTML; // copia ícono + texto
    });
});
