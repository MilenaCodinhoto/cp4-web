# EcoTrend - E-commerce de Produtos Sustentáveis
## Integrantes

- Milena  RM554682
- Evellyn RM557929
- Carolina RM86833

Bem-vindo ao **EcoTrend**, um e-commerce focado em oferecer produtos sustentáveis, que vão desde roupas ecológicas até acessórios e itens de cuidado pessoal. Este projeto é uma interface de compras online com um carrinho de compras funcional e categorias de produtos filtráveis.

## Funcionalidades

- **Carrinho de compras**: Adicione e remova produtos no carrinho, que é armazenado no `localStorage`.
- **Filtro de categorias**: Visualize produtos por categorias como roupas, acessórios, itens de beleza, entre outros.
- **Finalização de compra**: Simulação de um processo de compra com validação de pagamento fictício.

## Estrutura do Projeto

### 1. **HTML** 
- Estrutura principal do site, com as seguintes seções:
  - **Cabeçalho**: Contém a logo e o menu de navegação.
  - **Seção de Produtos**: Listagem de produtos com categorias.
  - **Carrinho de Compras**: Carrinho que exibe os itens selecionados e possibilita a finalização da compra.
  - **Rodapé**: Links para redes sociais da empresa.
  
### 2. **CSS** 
- Arquivos de estilo para a interface da página:
  - `comum.css`: Estilos gerais aplicados em toda a página.
  - `menu.css`: Estilos aplicados no menu de navegação e carrinho de compras.

### 3. **JavaScript** 
- Arquivos de lógica para a interação com o usuário:
  - `main.js`: Controle do carrinho de compras, adição de produtos, simulação de pagamento e filtro de categorias.
  - `data.js`: Dados de produtos (mockados) para simular o funcionamento de um backend.

## Como Executar o Projeto

1. **Baixe o projeto** ou clone o repositório.
2. **Estrutura de diretórios**: 
   - Coloque o arquivo HTML na raiz do projeto.
   - Certifique-se de que os arquivos CSS estejam na pasta `src/css/` e os scripts JavaScript na pasta `src/js/`.
   - As imagens dos produtos e ícones devem estar na pasta `src/img/`.
3. **Abra o arquivo `index.html`** em seu navegador para visualizar o site funcionando.

## Como Usar

1. **Carrinho de compras**:
   - Clique no ícone de carrinho no canto superior direito para abrir o carrinho.
   - Produtos podem ser adicionados ao carrinho com o botão "Comprar" abaixo de cada item.
   - No carrinho, você pode finalizar a compra ou remover produtos.

2. **Filtro por categoria**:
   - Utilize o seletor de categorias para filtrar os produtos listados na página principal.

3. **Finalização de compra**:
   - Ao clicar em "Finalizar Compra", uma simulação de pagamento será feita, com chances aleatórias de ser aprovada ou recusada.

## Tecnologias Utilizadas

- **HTML5** para a estruturação da página.
- **CSS3** para estilização e layout responsivo.
- **JavaScript** para interação dinâmica com o usuário e manipulação do carrinho de compras.
- **LocalStorage** para persistência dos dados do carrinho de compras no navegador.

## Melhorias Futuras

- Integração com um backend real para persistência de dados e gerenciamento de usuários.
- Implementação de um sistema de autenticação de usuários.
- Melhorar a lógica de pagamento com uma API de pagamento real.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ao projeto. Para isso, basta clonar o repositório, realizar as modificações e enviar um pull request.

---

**EcoTrend** - Um futuro sustentável, um clique de cada vez.
