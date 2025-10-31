// NUMERALIS - SISTEMA FUNCIONAL - VERSÃO DEFINITIVA
// Arquivo criado para resolver problema de cache persistente do GitHub Pages

// Mapeamento das variáveis carregadas dos arquivos externos
window.addEventListener("load", function() {
  setTimeout(function() {
    // Mapear variáveis dos arquivos JS para nomes esperados pelo código
    if (typeof interpretacoesPitagoricasUltraExpandidas !== "undefined") {
      window.interpretacoesPitagoricas = interpretacoesPitagoricasUltraExpandidas;
      console.log("✅ Interpretações Pitagóricas mapeadas");
    }
    if (typeof interpretacoesPinaculosExpandidos !== "undefined") {
      window.interpretacoesPinaculos = interpretacoesPinaculosExpandidos;
      console.log("✅ Interpretações Pináculos mapeadas");
    }
    if (typeof sinastria_expandida !== "undefined") {
      window.sinastria_expandida = sinastria_expandida;
      console.log("✅ Sinastria expandida mapeada");
    }
    
    // Inicializar sistema após mapeamento
    console.log("🚀 SISTEMA NUMERALIS INICIALIZADO COM SUCESSO!");
  }, 100);
});

// Tabelas numerológicas
const tabelaPitagorica = {
  "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9,
  "J": 1, "K": 2, "L": 3, "M": 4, "N": 5, "O": 6, "P": 7, "Q": 8, "R": 9,
  "S": 1, "T": 2, "U": 3, "V": 4, "W": 5, "X": 6, "Y": 7, "Z": 8
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

// FUNÇÃO PRINCIPAL - EXEMPLO
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

// Função para renderizar resultados COM INTERPRETAÇÕES EXPANDIDAS
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
  
  // Adicionar interpretações expandidas se disponíveis
  if (typeof interpretacoesPitagoricasUltraExpandidas !== 'undefined') {
    const interpretacoes = interpretacoesPitagoricasUltraExpandidas;
    
    if (interpretacoes.motivacao && interpretacoes.motivacao[perfil.motivacao]) {
      const motiv = interpretacoes.motivacao[perfil.motivacao];
      html += `
        <div class="result-item">
          <h4>💫 Motivação ${perfil.motivacao}</h4>
          <p><strong>${motiv.titulo}</strong></p>
          <p>${motiv.texto}</p>
        </div>
      `;
    }
    
    if (interpretacoes.impressao && interpretacoes.impressao[perfil.impressao]) {
      const impr = interpretacoes.impressao[perfil.impressao];
      html += `
        <div class="result-item">
          <h4>✨ Impressão ${perfil.impressao}</h4>
          <p><strong>${impr.titulo}</strong></p>
          <p>${impr.texto}</p>
        </div>
      `;
    }
  } else {
    html += `
      <div class="result-item">
        <p><em>Interpretações expandidas carregando...</em></p>
      </div>
    `;
  }
  
  html += `</div>`;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

// Função para limpar campos
function limparMapa() {
  document.getElementById("nomeCompleto").value = "";
  document.getElementById("dataNascimento").value = "";
  const resultadosDiv = document.getElementById("resultados-mapa");
  if (resultadosDiv) {
    resultadosDiv.innerHTML = "";
    resultadosDiv.classList.add("hidden");
  }
}

// Função de navegação entre abas
function changeTab(tab) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(li => li.classList.remove('active'));
  
  const sec = document.getElementById(tab);
  if (sec) sec.classList.add('active');
  
  const btn = document.querySelector('.nav-tab button[onclick*="' + tab + '"]');
  if (btn) btn.parentElement.classList.add('active');
  
  console.log("Navegação para aba:", tab);
}

// Funções para outras seções (placeholders funcionais)
function preencherExemploPiramide() {
  document.getElementById("nomePiramide").value = "Maria Silva Santos";
  document.getElementById("idadePiramide").value = "33";
}

function calcularPiramideCompleta() {
  alert("Função Pirâmide Cabalística em desenvolvimento");
}

function limparPiramide() {
  document.getElementById("nomePiramide").value = "";
  document.getElementById("idadePiramide").value = "";
}

function preencherExemploPinaculos() {
  document.getElementById("nomePinaculos").value = "Maria Silva Santos";
  document.getElementById("dataPinaculos").value = "1990-05-15";
}

function calcularPinaculosCompletos() {
  alert("Função Pináculos da Vida em desenvolvimento");
}

function limparPinaculos() {
  document.getElementById("nomePinaculos").value = "";
  document.getElementById("dataPinaculos").value = "";
}

function preencherExemploSinastria() {
  document.getElementById("nomePessoa1").value = "Maria Silva Santos";
  document.getElementById("dataPessoa1").value = "1990-05-15";
  document.getElementById("nomePessoa2").value = "João Carlos Oliveira";
  document.getElementById("dataPessoa2").value = "1988-03-20";
}

function calcularSinastria() {
  alert("Função Sinastria Numerológica em desenvolvimento");
}

function limparSinastria() {
  document.getElementById("nomePessoa1").value = "";
  document.getElementById("dataPessoa1").value = "";
  document.getElementById("nomePessoa2").value = "";
  document.getElementById("dataPessoa2").value = "";
}

console.log("✅ SISTEMA FUNCIONAL CARREGADO COM SUCESSO!");
