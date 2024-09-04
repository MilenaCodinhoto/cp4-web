let divProdutos = document.querySelector("#produtos");

fetch("produtos.json").then((response)=> {
    response.json().then((produtos) => {
        produtos.roupas.map((roupas)=> {
            console.log(roupas);
        });
        produtos.acessorios.map((acessorios)=> {
            console.log(acessorios);
        });
        produtos.beleza.map((beleza)=> {
            console.log(beleza);
        });
        produtos["cuidados-pessoais"].map((item)=> {
            console.log(item);
        });
        produtos["itens-de-casa"].map((item)=> {
            console.log(item);
        });
        produtos["tech-verde"].map((item)=> {
            console.log(item);
        });
    });
});