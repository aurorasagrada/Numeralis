// NUMERALIS - SISTEMA COMPLETO - VERSÃO FUNCIONAL
// Arquivo criado para contornar problemas de cache do GitHub Pages

// Mapeamento das variáveis carregadas dos arquivos externos
window.addEventListener("load", function() {
  // Mapear variáveis dos arquivos JS para nomes esperados pelo código
  if (typeof interpretacoesPitagoricasUltraExpandidas !== "undefined") {
    window.interpretacoesPitagoricas = interpretacoesPitagoricasUltraExpandidas;
  }
  if (typeof interpretacoesPinaculosExpandidos !== "undefined") {
    window.interpretacoesPinaculos = interpretacoesPinaculosExpandidos;
  }
  if (typeof sinastria_expandida !== "undefined") {
    window.sinastria_expandida = sinastria_expandida;
  }
});

// Tabelas numerológicas
const tabelaPitagorica = {
  "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9,
  "J": 1, "K": 2, "L": 3, "M": 4, "N": 5, "O": 6, "P": 7, "Q": 8, "R": 9,
  "S": 1, "T": 2, "U": 3, "V": 4, "W": 5, "X": 6, "Y": 7, "Z": 8
};

const tabelaCabalistica = {
  "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8,
  "I": 1, "J": 2, "K": 3, "L": 4, "M": 5, "N": 6, "O": 7, "P": 8,
  "Q": 1, "R": 2, "S": 3, "T": 4, "U": 5, "V": 6, "W": 7, "X": 8,
  "Y": 1, "Z": 2
};

const vogais = ["A", "E", "I", "O", "U"];
const numerosMestres = [11, 22, 33];
const numerosKarmicos = [13, 14, 16, 19];

// Funções auxiliares
function normalizarTexto(texto) {
  return texto.toUpperCase()
    .replace(/[ÀÁÂÃÄÅ]/g, 'A')
    .replace(/[ÈÉÊË]/g, 'E')
    .replace(/[ÌÍÎÏ]/g, 'I')
    .replace(/[ÒÓÔÕÖØ]/g, 'O')
    .replace(/[ÙÚÛÜ]/g, 'U')
    .replace(/[ÇÇ]/g, 'C')
    .replace(/[ÑÑ]/g, 'N')
    .replace(/[^A-Z\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function reduzirNumero(numero) {
  if (numerosMestres.includes(numero) || numerosKarmicos.includes(numero)) {
    return numero;
  }
  
  while (numero > 9) {
    let soma = 0;
    let temp = numero;
    while (temp > 0) {
      soma += temp % 10;
      temp = Math.floor(temp / 10);
    }
    numero = soma;
    
    if (numerosMestres.includes(numero) || numerosKarmicos.includes(numero)) {
      break;
    }
  }
  
  return numero;
}

function calcularNumeroNome(nome, tabela = tabelaPitagorica) {
  const nomeNormalizado = normalizarTexto(nome);
  let soma = 0;
  
  for (let char of nomeNormalizado) {
    if (char !== ' ' && tabela[char]) {
      soma += tabela[char];
    }
  }
  
  return reduzirNumero(soma);
}

function calcularPerfilNumerologico(nomeCompleto, dataNascimento) {
  const nomeNormalizado = normalizarTexto(nomeCompleto);
  const data = new Date(dataNascimento + 'T00:00:00');
  
  // Cálculos básicos
  const motivacao = calcularNumeroNome(nomeNormalizado.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, ''));
  const impressao = calcularNumeroNome(nomeNormalizado.replace(/[AEIOU]/g, ''));
  const expressao = calcularNumeroNome(nomeCompleto);
  
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  
  const destino = reduzirNumero(dia + mes + ano);
  
  return {
    motivacao,
    impressao,
    expressao,
    destino,
    nomeCompleto,
    dataNascimento
  };
}

// FUNÇÃO PRINCIPAL QUE ESTAVA FALTANDO!
function preencherExemploMapa() {
  document.getElementById("nomeCompleto").value = "Maria Silva Santos";
  document.getElementById("dataNascimento").value = "1990-05-15";
}

// Função para calcular mapa completo
function calcularMapaCompleto() {
  const nomeCompleto = document.getElementById("nomeCompleto").value.trim();
  const dataNascimento = document.getElementById("dataNascimento").value;
  
  if (!nomeCompleto || !dataNascimento) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  
  const perfil = calcularPerfilNumerologico(nomeCompleto, dataNascimento);
  renderResultadosMapa(perfil);
}

// Função para renderizar resultados
function renderResultadosMapa(perfil) {
  const resultadosDiv = document.getElementById("resultados-mapa");
  
  if (!resultadosDiv) {
    console.error("Elemento resultados-mapa não encontrado!");
    return;
  }
  
  let html = `
    <div class="interpretation">
      <h3>🌟 Mapa Pitagórico Completo</h3>
      <div class="number-display">
        Motivação: ${perfil.motivacao} | Impressão: ${perfil.impressao} | 
        Expressão: ${perfil.expressao} | Destino: ${perfil.destino}
      </div>
  `;
  
  // Adicionar interpretações se disponíveis
  if (typeof interpretacoesPitagoricas !== 'undefined' && interpretacoesPitagoricas[perfil.motivacao]) {
    html += `
      <div class="result-item">
        <h4>💫 Motivação ${perfil.motivacao}</h4>
        <p><strong>${interpretacoesPitagoricas[perfil.motivacao].motivacao.titulo}</strong></p>
        <p>${interpretacoesPitagoricas[perfil.motivacao].motivacao.texto}</p>
      </div>
    `;
  }
  
  html += `</div>`;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

// Função para limpar campos
function limparCampos() {
  document.getElementById("nomeCompleto").value = "";
  document.getElementById("dataNascimento").value = "";
  const resultadosDiv = document.getElementById("resultados-mapa");
  if (resultadosDiv) {
    resultadosDiv.innerHTML = "";
    resultadosDiv.classList.add("hidden");
  }
}

// Funções para outras seções (placeholder)
function changeTab(tab) {
  console.log("Mudando para aba:", tab);
}

function calcularSinastria() {
  console.log("Calculando sinastria...");
}

console.log("✅ NUMERALIS COMPLETO CARREGADO COM SUCESSO!");
