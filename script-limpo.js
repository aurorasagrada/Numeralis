// Script limpo para teste
console.log("Script limpo carregado!");

function preencherExemploMapa() {
    console.log("Preenchendo exemplo...");
    document.getElementById("nomeCompleto").value = "Maria Silva Santos";
    document.getElementById("dataNascimento").value = "1990-05-15";
    alert("Exemplo preenchido!");
}

function calcularMapaCompleto() {
    console.log("Calculando mapa...");
    alert("Calculando mapa pitagorico!");
}

// Teste de carregamento
window.addEventListener('load', function() {
    console.log("Pagina carregada completamente!");
});
