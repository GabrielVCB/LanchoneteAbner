// Função para voltar para a página inicial
function goBack() {
    window.location.href = "index.html";
}

// Simula carregamento de mais pedidos no histórico
document.querySelector(".load-more").addEventListener("click", () => {
    alert("Nenhum pedido adicional encontrado no histórico.");
});
