document.querySelector("#icone-carrinho").addEventListener("click", function() {
    document.querySelector("#carrinho").classList.toggle("aberto");
});

function adicionar(nomeProduto, valorProduto) {
    // Adiciona produto ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `
        <div class="produto">
            <img src="./src/img/produto-generico.jpg" alt="img-produto">
            <div>
                <h2>${nomeProduto}</h2>
                <span>R$${valorProduto}</span>
            </div>
            <img src="./src/img/lixo.png" alt="lixo">
        </div>`;
}

function filtrarProdutos(){

}
    // Lógica para filtrar produtos (a implementar)