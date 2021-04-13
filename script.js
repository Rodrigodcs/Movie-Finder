
pegarListaFilmes()

function pegarListaFilmes(){
  const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes")
  console.log(promessa)
  promessa.then(verLista)
}
function verLista(lista){
  console.log(lista);
  colocarNaTela(lista.data)
}
function colocarNaTela(filmes){
  console.log(filmes)
  document.querySelector(".movies").innerHTML ="";
  for(let i=0;i<filmes.length;i++){
    document.querySelector(".movies").innerHTML +=
    `<div class="movie">
      <img src=${filmes[i].imagem}>
      <div class="title">${filmes[i].titulo}</div>
      <button onclick="comprarAssento()">Comprar<ion-icon name="cart-outline"></ion-icon></button>
    </div>`
  }
}

function comprarAssento() {
  const nome = prompt("Qual seu nome?");
  const quantidadeDeAssentos= prompt("Quantos assentos quer comprar?");
  const compra = {
    nome: nome,
    quantidade: quantidadeDeAssentos
  }
  const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/ID_DO_FILME/ingresso",compra);
  promessa.then(compraEfetuada);
  promessa.catch(falhou);
}
function compraEfetuada(resposta){
  alert(resposta.data.mensagem);
}
function falhou(){
  alert("Os ingressos para este filme estão esgotados!");
}       