document.querySelector("#icone-carrinho").addEventListener("click", function() {
    document.querySelector("#carrinho").classList.toggle("aberto");
});

// Função para salvar os produtos no localStorage
function salvarCarrinho(produtos) {
    localStorage.setItem('carrinho', JSON.stringify(produtos));
}

// Função para carregar o carrinho do localStorage
function carregarCarrinho() {
    let carrinho = document.getElementById('lista-produtos');
    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    carrinho.innerHTML = '';  // Limpa o carrinho antes de carregar os itens
    produtos.forEach(produto => {
        carrinho.innerHTML += `
            <div class="produto">
                <div>
                    <h2>${produto.nome}</h2>
                    <span>R$${produto.valor}</span>
                </div>
                <img class="lixo" onclick="limpar(this, '${produto.nome}')" src="./src/img/lixo.png" alt="lixo">
            </div>`;
    });
}

// Função para adicionar produto ao carrinho
function adicionar(nomeProduto, valorProduto) {
    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Adiciona o novo produto ao array
    produtos.push({ nome: nomeProduto, valor: valorProduto });
    
    // Atualiza o localStorage
    salvarCarrinho(produtos);
    
    // Atualiza a exibição do carrinho
    carregarCarrinho();
}

// Função para limpar produto do carrinho
function limpar(elemento, nomeProduto) {
    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Remove o produto do array
    produtos = produtos.filter(produto => produto.nome !== nomeProduto);
    
    // Atualiza o localStorage e a exibição
    salvarCarrinho(produtos);
    carregarCarrinho();
}

// Carrega o carrinho quando a página é recarregada
window.onload = function() {
    carregarCarrinho();
};
