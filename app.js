function criarCartao(categoria, pergunta, resposta) {
    //console.log (categoria, pergunta, resposta);

    let cartao = document.createElement("article");
    cartao.className = "cartao";
    cartao.innerHTML = `
                <div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${resposta}</p>
                    </div>
                </div>
`
    let container = document.getElementById('container');
    container.appendChild(cartao);

    let respostaEstaVisivel = false; //=true;

    function virarCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', virarCartao);

}