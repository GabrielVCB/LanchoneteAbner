function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}

const cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(`${item} foi adicionado ao carrinho.`);
}
