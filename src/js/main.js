document.querySelector("#icone-carrinho").addEventListener("click", function() {
    document.querySelector("#carrinho").classList.toggle("aberto");
});

function adicionar(nomeProduto, valorProduto) {
    // Adiciona produto ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `
        <div class="produto">
            <div>
                <h2>${nomeProduto}</h2>
                <span>R$${valorProduto}</span>
            </div>
            <img class="lixo" onclick="limpar(this)" src="./src/img/lixo.png" alt="lixo">
        </div>`;
}

function limpar(elemento) {
    // Remove o elemento pai (o produto) do DOM
    elemento.parentElement.remove();
}