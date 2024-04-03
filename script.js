// Função para abrir modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.classList.add("blurBackground");
}

// Função para fechar modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.classList.remove("blurBackground");
}

// Adicionando evento de clique aos botões que abrem os modais
var openModalButtons = document.querySelectorAll(".openModal");
openModalButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var modalId = this.getAttribute("dataModalId");
        openModal(modalId);
    });
});

// Adicionando eventos de clique aos botões de fechar
var closeButtons = document.querySelectorAll(".modal .close");
closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var modalId = this.closest(".modal").id;
        closeModal(modalId);
    });
});

// Adicionando evento de clique fora do modal para fechá-lo
window.addEventListener("click", function(event) {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function(modal) {
        if (event.target == modal) {
            closeModal(modal.id);
        }
    });
});
