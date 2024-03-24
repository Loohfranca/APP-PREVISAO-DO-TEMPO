
let chave = "df0f08fc6e265dfbce0d4238700d0ee6"

function colocarNaTela(dados){
console.log (dados)

document.querySelector(".cidades").innerHTML=" Tempo em " + dados.name
document.querySelector(".tempo").innerHTML =Math.floor( dados.main.temp ) +
"°C"
document.querySelector(".nuvens").innerHTML = dados.weather[0].description
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
document.querySelector(".umidade").innerHTML =  dados.main.humidity + "%"

}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br"+
    "&units=metric")
    .then(resposta => resposta.json())

    colocarNaTela(dados)
   
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".cidade").value

    buscarCidade(cidade)
}