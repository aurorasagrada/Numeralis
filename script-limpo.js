// Script limpo para teste
console.log("Script limpo carregado!");

function preencherExemploMapa() {
    console.log("Preenchendo exemplo...");
    
    // Debug: verificar se os elementos existem
    var nomeField = document.getElementById("nomeCompleto");
    var dataField = document.getElementById("dataNascimento");
    
    console.log("Campo nome:", nomeField);
    console.log("Campo data:", dataField);
    
    if (nomeField) {
        nomeField.value = "Maria Silva Santos";
        console.log("Nome preenchido!");
    } else {
        console.log("ERRO: Campo nome nao encontrado!");
    }
    
    if (dataField) {
        dataField.value = "1990-05-15";
        console.log("Data preenchida!");
    } else {
        console.log("ERRO: Campo data nao encontrado!");
    }
    
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
