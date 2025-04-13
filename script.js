const imagens = document.getElementById("Icone_perfil");

function iniciarRotacao() {
  imagens.classList.add('girando');
}

function pararRotacao() {
  imagens.classList.remove('girando');
}

function claro(){
    
document.getElementById("claro").addEventListener("click", () => {
    document.body.classList.remove("escuro");
    document.body.classList.add("claro");
  });
}
function escuro(){
    document.getElementById("escuro").addEventListener("click", () => {
        document.body.classList.remove("claro");
        document.body.classList.add("escuro");
      });
}
  