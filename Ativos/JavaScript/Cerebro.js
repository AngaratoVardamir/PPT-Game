let Nomes = ["Papel","Tesoura","Pedra"]
let random = Math.floor(Math.random()*3)

console.log(Nomes[random]);
// restaurador
const Rest = document.getElementById("Tudo");
const restaurador = Rest.innerHTML
// restaura scripts
const Cerebro = document.getElementById("script");
//Importação da Janela Modal
const Janela_Modal = document.querySelector(".Janela_Fexivel");
//Importação de vida
const Play_Vidas = document.querySelector(".Jogador_Vidas");
const IA_Vidas = document.querySelector(".Robo_Vidas");
//Importação de Imagem
const IMG_PC = document.querySelector(".Quadro_PC");
const IMG_Play = document.querySelector(".Quadro_Play");

// Botões
const Botões = [...document.querySelectorAll(".Evento")];

Botões.map((Bto,p)=>{
    Bto.addEventListener("click",()=>{
        console.log(Bto.innerHTML);
        // se jogador for papel
        if (Bto.innerHTML == 'Papel'){
            // se robo for papel
            if (Nomes[random] == 'Papel'){
                console.log("Empante")
            }
            // se robo for tesoura
            else if (Nomes[random] == 'Tesoura'){
                console.log("Jogador perdeu");
                Play_Vidas.firstElementChild.remove()
            }
            // se robo for Pedra
            else {
                console.log("Jogador Venceu");
                IA_Vidas.firstElementChild.remove()
            }

        }
        // se jogador for Tesoura
        else if (Bto.innerHTML == 'Tesoura'){
            // se robo for papel
            if (Nomes[random] == 'Papel'){
                console.log("Jogador Venceu");
                IA_Vidas.firstElementChild.remove()
            }
            // se robo for tesoura
            else if (Nomes[random] == 'Tesoura'){
                console.log("Empante")
            }
            // se robo for Pedra
            else {
                console.log("Jogador perdeu");
                Play_Vidas.firstElementChild.remove()
            }

        }
        // se jogador for Pedra
        else if (Bto.innerHTML == 'Pedra'){
            // se robo for papel
            if (Nomes[random] == 'Papel'){
                console.log("Jogador perdeu");
                Play_Vidas.firstElementChild.remove()
            }
            // se robo for tesoura
            else if (Nomes[random] == 'Tesoura'){
                console.log("Jogador Venceu");
                IA_Vidas.firstElementChild.remove()
            }
            // se robo for Pedra
            else {
                console.log("Empante")
            }

        }
        //Imagens
        IMG_PC.src = (`Ativos/Imgs/IMG-${random}.png`);
        IMG_Play.src = (`Ativos/Imgs/IMG-${p}.png`);
        //Atualizar o Aleantorio
        random = Math.floor(Math.random()*3);
        
        //se a Vida do Jogador for zero
        if (Play_Vidas.children.length == 0){
            Janela_Modal.innerHTML = ("        <h1>Jogador Venceu</h1>");
            console.log("Jogador Perdeu");
            Janela_Modal.firstElementChild.innerHTML=("Jogador Perdeu");
            Janela_Modal.className = ("Janela_Modal");
            // Restaura Tudo
            setTimeout(()=>{
                Rest.innerHTML = restaurador
                Cerebro.src = ("Ativos/JavaScript/Cerebro-0_2.Js");
            },2000)
        }
        //se a Vida do Robo for zero
        if (IA_Vidas.children.length == 0){
            Janela_Modal.innerHTML = ("        <h1>Jogador Venceu</h1>");
            console.log("Computador Perdeu");
            Janela_Modal.className = ("Janela_Modal");
            // Restaura Tudo
            setTimeout(()=>{
                Rest.innerHTML = restaurador
                Cerebro.src = ("Ativos/JavaScript/Cerebro-0_2.Js");
            },2000)
        }
    })
})