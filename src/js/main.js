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

// ////////////////////////
document.getElementById('filtrar-categoria').addEventListener('change', function() {
    const categoriaSelecionada = this.value;
    const produtos = document.querySelectorAll('.container-produtos');

    produtos.forEach(function(produto) {
        const categoriaProduto = produto.getAttribute('data-categoria');

        // Se a categoria for "todos", mostrar todos os produtos
        if (categoriaSelecionada === 'todos') {
            produto.classList.remove('ocultar');
        } 
        // Se for uma categoria específica, mostrar apenas os produtos dessa categoria
        else if (categoriaSelecionada === categoriaProduto) {
            produto.classList.remove('ocultar'); // Mostra produtos da categoria selecionada
        } else {
            produto.classList.add('ocultar'); // Oculta produtos de outras categorias
        }
    });
});

// Função para simular o pagamento
function finalizarCompra() {
    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (produtos.length === 0) {
        alert("O carrinho está vazio!");
        return;
    }
    
    // Simula a validação do pagamento
    let pagamentoAprovado = simularPagamento();
    
    if (pagamentoAprovado) {
        // Se o pagamento for aprovado, salva o status no localStorage
        localStorage.setItem('statusPagamento', 'aprovado');
        alert("Pagamento aprovado! Obrigado pela compra.");
        
        // Limpa o carrinho
        localStorage.removeItem('carrinho');
        carregarCarrinho();
    } else {
        // Se o pagamento for recusado
        localStorage.setItem('statusPagamento', 'recusado');
        alert("Pagamento recusado. Tente novamente.");
    }
}

// Função que simula a validação de pagamento (pode ser substituída por uma API real)
function simularPagamento() {
    // Simulação: 80% de chance de aprovação
    return Math.random() < 0.8;
}

// Função para verificar o status de pagamento ao carregar a página
function verificarStatusPagamento() {
    let status = localStorage.getItem('statusPagamento');
    
    if (status === 'aprovado') {
        alert("Seu pagamento foi aprovado! Aproveite seus produtos.");
    } else if (status === 'recusado') {
        alert("Seu pagamento foi recusado. Por favor, tente novamente.");
    }
}

// Chama a função de verificação ao carregar a página
window.onload = function() {
    carregarCarrinho();
    verificarStatusPagamento();
};

// Adiciona o evento de clique ao botão de finalizar compra
document.querySelector('.btn-finalizar').addEventListener('click', finalizarCompra);


