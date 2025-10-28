// NUMERALIS - SISTEMA COMPLETO - VERSÃO FUNCIONAL
// Arquivo criado para contornar problemas de cache do GitHub Pages

// Mapeamento das variáveis carregadas dos arquivos externos
window.addEventListener("load", function() {
  // Aguardar um pequeno delay para garantir que todos os scripts foram processados
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
  }, 100); // Delay de 100ms para garantir carregamento completo
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

// Placeholder removido - funções implementadas abaixo

console.log("✅ NUMERALIS COMPLETO CARREGADO COM SUCESSO!");


// ========================================
// FUNÇÕES DE INTERFACE COMPLETAS
// ========================================

// Função de navegação entre abas - IMPLEMENTAÇÃO COMPLETA
function changeTab(tab) {
  // Desativar todas as seções e abas
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(li => li.classList.remove('active'));
  
  // Ativar a seção clicada
  const sec = document.getElementById(tab);
  if (sec) sec.classList.add('active');
  
  // Ativar a aba correspondente
  const btn = document.querySelector('.nav-tab button[onclick*="' + tab + '"]');
  if (btn) btn.parentElement.classList.add('active');
  
  console.log("Navegação para aba:", tab);
}

// ========================================
// FUNÇÕES PARA MAPA PITAGÓRICO
// ========================================

// Renomear limparCampos para limparMapa para compatibilidade
function limparMapa() {
  limparCampos();
}

// ========================================
// FUNÇÕES PARA PIRÂMIDE CABALÍSTICA
// ========================================

function preencherExemploPiramide() {
  document.getElementById("nomePiramide").value = "Maria Silva Santos";
  document.getElementById("idadePiramide").value = "33";
}

function calcularPiramideCompleta() {
  const nome = document.getElementById("nomePiramide").value.trim();
  const idade = document.getElementById("idadePiramide").value.trim();
  
  if (!nome || !idade) {
    alert("Por favor, preencha todos os campos da Pirâmide Cabalística.");
    return;
  }
  
  // Cálculo básico da pirâmide
  const nomeNormalizado = normalizarTexto(nome);
  const numeroNome = calcularNumeroNome(nomeNormalizado);
  const ciclo = Math.floor((parseInt(idade) - 1) / 9) + 1;
  const arcano = (numeroNome + parseInt(idade)) % 22;
  
  const resultadosDiv = document.getElementById("resultados-piramide");
  if (!resultadosDiv) {
    console.error("Elemento resultados-piramide não encontrado!");
    return;
  }
  
  let html = `
    <div class="interpretation">
      <h3>🔺 Pirâmide Cabalística Completa</h3>
      <div class="number-display">
        Ciclo: ${ciclo} | Arcano Regente: ${arcano} | Idade: ${idade} anos
      </div>
      <div class="result-item">
        <h4>🔮 Análise do Ciclo Atual</h4>
        <p>Você está no <strong>${ciclo}º ciclo</strong> de sua jornada cabalística.</p>
        <p>Seu Arcano Regente atual é o <strong>Arcano ${arcano}</strong>.</p>
        <p>Esta configuração indica um período de transformação e crescimento espiritual.</p>
      </div>
    </div>
  `;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

function limparPiramide() {
  document.getElementById("nomePiramide").value = "";
  document.getElementById("idadePiramide").value = "";
  const resultadosDiv = document.getElementById("resultados-piramide");
  if (resultadosDiv) {
    resultadosDiv.innerHTML = "";
    resultadosDiv.classList.add("hidden");
  }
}

// ========================================
// FUNÇÕES PARA PINÁCULOS DA VIDA
// ========================================

function preencherExemploPinaculos() {
  document.getElementById("nomePinaculos").value = "Maria Silva Santos";
  document.getElementById("dataPinaculos").value = "1990-05-15";
}

function calcularPinaculosCompletos() {
  const nome = document.getElementById("nomePinaculos").value.trim();
  const data = document.getElementById("dataPinaculos").value;
  
  if (!nome || !data) {
    alert("Por favor, preencha todos os campos dos Pináculos da Vida.");
    return;
  }
  
  // Cálculo dos pináculos
  const dataObj = new Date(data + 'T00:00:00');
  const dia = dataObj.getDate();
  const mes = dataObj.getMonth() + 1;
  const ano = dataObj.getFullYear();
  
  const pinaculo1 = reduzirNumero(mes + dia);
  const pinaculo2 = reduzirNumero(dia + ano);
  const pinaculo3 = reduzirNumero(pinaculo1 + pinaculo2);
  const pinaculo4 = reduzirNumero(mes + ano);
  
  const resultadosDiv = document.getElementById("resultados-pinaculos");
  if (!resultadosDiv) {
    console.error("Elemento resultados-pinaculos não encontrado!");
    return;
  }
  
  let html = `
    <div class="interpretation">
      <h3>🏔️ Pináculos da Vida Completos</h3>
      <div class="number-display">
        1º Pináculo: ${pinaculo1} | 2º Pináculo: ${pinaculo2} | 3º Pináculo: ${pinaculo3} | 4º Pináculo: ${pinaculo4}
      </div>
      <div class="result-item">
        <h4>🌟 Seus Quatro Grandes Ciclos</h4>
        <p><strong>1º Pináculo (${pinaculo1}):</strong> Ciclo da juventude e formação (0-28 anos)</p>
        <p><strong>2º Pináculo (${pinaculo2}):</strong> Ciclo da maturidade e construção (29-36 anos)</p>
        <p><strong>3º Pináculo (${pinaculo3}):</strong> Ciclo da realização e poder (37-45 anos)</p>
        <p><strong>4º Pináculo (${pinaculo4}):</strong> Ciclo da sabedoria e legado (46+ anos)</p>
      </div>
    </div>
  `;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

function limparPinaculos() {
  document.getElementById("nomePinaculos").value = "";
  document.getElementById("dataPinaculos").value = "";
  const resultadosDiv = document.getElementById("resultados-pinaculos");
  if (resultadosDiv) {
    resultadosDiv.innerHTML = "";
    resultadosDiv.classList.add("hidden");
  }
}

// ========================================
// FUNÇÕES PARA SINASTRIA NUMEROLÓGICA
// ========================================

function preencherExemploSinastria() {
  document.getElementById("nomePessoa1").value = "Maria Silva Santos";
  document.getElementById("dataPessoa1").value = "1990-05-15";
  document.getElementById("nomePessoa2").value = "João Carlos Silva";
  document.getElementById("dataPessoa2").value = "1988-03-22";
}

function calcularSinastria() {
  const nome1 = document.getElementById("nomePessoa1").value.trim();
  const data1 = document.getElementById("dataPessoa1").value;
  const nome2 = document.getElementById("nomePessoa2").value.trim();
  const data2 = document.getElementById("dataPessoa2").value;
  
  if (!nome1 || !data1 || !nome2 || !data2) {
    alert("Por favor, preencha todos os campos da Sinastria Numerológica.");
    return;
  }
  
  // Cálculo da sinastria
  const perfil1 = calcularPerfilNumerologico(nome1, data1);
  const perfil2 = calcularPerfilNumerologico(nome2, data2);
  
  const compatibilidade = Math.abs(perfil1.destino - perfil2.destino);
  const afinidade = Math.abs(perfil1.expressao - perfil2.expressao);
  
  let nivelCompatibilidade = "Média";
  if (compatibilidade <= 2) nivelCompatibilidade = "Alta";
  else if (compatibilidade >= 6) nivelCompatibilidade = "Desafiadora";
  
  const resultadosDiv = document.getElementById("resultados-sinastria");
  if (!resultadosDiv) {
    console.error("Elemento resultados-sinastria não encontrado!");
    return;
  }
  
  let html = `
    <div class="interpretation">
      <h3>💕 Sinastria Numerológica Completa</h3>
      <div class="number-display">
        Compatibilidade: ${nivelCompatibilidade} | Diferença de Destino: ${compatibilidade}
      </div>
      <div class="result-item">
        <h4>👥 Análise do Casal</h4>
        <p><strong>${nome1}:</strong> Destino ${perfil1.destino}, Expressão ${perfil1.expressao}</p>
        <p><strong>${nome2}:</strong> Destino ${perfil2.destino}, Expressão ${perfil2.expressao}</p>
        <p><strong>Compatibilidade:</strong> ${nivelCompatibilidade}</p>
        <p>Esta união apresenta potencial para crescimento mútuo e harmonia.</p>
      </div>
    </div>
  `;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

function limparSinastria() {
  document.getElementById("nomePessoa1").value = "";
  document.getElementById("dataPessoa1").value = "";
  document.getElementById("nomePessoa2").value = "";
  document.getElementById("dataPessoa2").value = "";
  const resultadosDiv = document.getElementById("resultados-sinastria");
  if (resultadosDiv) {
    resultadosDiv.innerHTML = "";
    resultadosDiv.classList.add("hidden");
  }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  // Ativar a primeira aba por padrão
  changeTab('mapa-pitagorico');
  console.log("✅ INTERFACE COMPLETA INICIALIZADA COM SUCESSO!");
});

console.log("✅ TODAS AS FUNÇÕES DE INTERFACE CARREGADAS!");
