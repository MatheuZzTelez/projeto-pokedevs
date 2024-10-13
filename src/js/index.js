/*
OBJTIVO - quando clicar no pokedev da listagem temos que esconder o cartao do pokedev aberto e mostrar o cartao correspondente ao que foi selecionado na listagem 
    PASSO 1 - precisamos criar uma variavel no js pra trabalhar com a listagem de pokedevs 
    PASSO 2 - Identificar o evento de clique no elemento da listagem 
    PASSO 3 - remover a classe aberto so do cartao que ta aberto 
    PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartao abrir

    PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem 
    PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem
*/
//PASSO 1 - precisamos criar uma variavel no js pra trabalhar com a listagem de pokedevs 
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
//PASSO 2 - Identificar o evento de clique no elemento da listagem 
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto so do cartao que ta aberto
        esconderCartaoPokedev();
        //PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartao abrir
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativarPokedevNaListagem();
        //PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
