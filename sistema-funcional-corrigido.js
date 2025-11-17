// Sistema Funcional - Numeralis Aurora Sagrada - VERSÃO CORRIGIDA
// Arquivo centralizado com todas as funções do sistema

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
    .replace(/[ÒÓÔÕÖ]/g, 'O')
    .replace(/[ÙÚÛÜ]/g, 'U')
    .replace(/[ÇÇ]/g, 'C')
    .replace(/[ÑÑ]/g, 'N')
    .replace(/[^A-Z]/g, '');
}

// Função para reduzir número a um dígito (VERSÃO ÚNICA E CORRIGIDA)
function reduzirNumero(numero) {
  while (numero > 9) {
    let soma = 0;
    while (numero > 0) {
      soma += numero % 10;
      numero = Math.floor(numero / 10);
    }
    numero = soma;
  }
  return numero;
}

// Funções principais do sistema
function preencherExemploMapa() {
  console.log("🧪 Executando preencherExemploMapa");
  
  const nomeInput = document.getElementById('nomeCompleto');
  const dataInput = document.getElementById('dataNascimento');
  
  if (nomeInput && dataInput) {
    nomeInput.value = 'Maria Silva Santos';
    dataInput.value = '15/08/1990';
    console.log("✅ Campos preenchidos com sucesso");
  } else {
    console.log("❌ Campos não encontrados");
    console.log("nomeCompleto:", nomeInput);
    console.log("dataNascimento:", dataInput);
  }
}

function calcularMapaCompleto() {
  console.log("🧪 Executando calcularMapaCompleto");
  
  const nome = document.getElementById('nomeCompleto')?.value;
  const data = document.getElementById('dataNascimento')?.value;
  
  if (!nome || !data) {
    alert('Por favor, preencha todos os campos');
    return;
  }
  
  console.log("📝 Dados recebidos:", {nome, data});
  
  // Cálculos básicos
  const nomeNormalizado = normalizarTexto(nome);
  const motivacao = calcularMotivacao(nomeNormalizado);
  const impressao = calcularImpressao(nomeNormalizado);
  const expressao = calcularExpressao(nomeNormalizado);
  const destino = calcularDestino(data);
  
  // Exibir resultados
  const resultadosDiv = document.getElementById('resultados-mapa') || criarDivResultados();
  
  resultadosDiv.innerHTML = `
    <div style="background: linear-gradient(135deg, #3e0a29, #0b1836); padding: 30px; border-radius: 15px; margin: 20px 0; color: #f2eaff;">
      <h3 style="color: #f0aa53; text-align: center; margin-bottom: 25px;">🌟 SEU MAPA PITAGÓRICO COMPLETO</h3>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        <div style="background: rgba(178, 209, 177, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #b2d1b1;">
          <h4 style="color: #b2d1b1; margin-bottom: 10px;">💫 MOTIVAÇÃO: ${motivacao}</h4>
          <p style="font-size: 14px; line-height: 1.6;">Sua força interior e desejos mais profundos que movem sua alma.</p>
        </div>
        
        <div style="background: rgba(240, 170, 83, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #f0aa53;">
          <h4 style="color: #f0aa53; margin-bottom: 10px;">👁️ IMPRESSÃO: ${impressao}</h4>
          <p style="font-size: 14px; line-height: 1.6;">Como os outros te veem e a primeira impressão que você causa.</p>
        </div>
        
        <div style="background: rgba(62, 10, 41, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #3e0a29;">
          <h4 style="color: #3e0a29; margin-bottom: 10px;">🎭 EXPRESSÃO: ${expressao}</h4>
          <p style="font-size: 14px; line-height: 1.6;">Seus talentos naturais e como você se expressa no mundo.</p>
        </div>
        
        <div style="background: rgba(11, 24, 54, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #0b1836;">
          <h4 style="color: #0b1836; margin-bottom: 10px;">🎯 DESTINO: ${destino}</h4>
          <p style="font-size: 14px; line-height: 1.6;">Sua missão de vida e o caminho que veio percorrer nesta encarnação.</p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 25px;">
        <button onclick="gerarRelatorioCompleto()" style="background: linear-gradient(45deg, #f0aa53, #b2d1b1); color: #0b1836; border: none; padding: 12px 25px; border-radius: 25px; font-weight: bold; cursor: pointer;">
          📖 GERAR RELATÓRIO COMPLETO
        </button>
      </div>
    </div>
  `;
  
  console.log("✅ Resultados exibidos com sucesso");
}

function criarDivResultados() {
  const div = document.createElement('div');
  div.id = 'resultados-mapa';
  
  // Inserir após o formulário do mapa pitagórico
  const formulario = document.querySelector('.mapa-pitagorico') || document.body;
  formulario.appendChild(div);
  
  return div;
}

function calcularMotivacao(nome) {
  let soma = 0;
  for (let letra of nome) {
    if (vogais.includes(letra)) {
      soma += tabelaPitagorica[letra] || 0;
    }
  }
  return reduzirNumero(soma);
}

function calcularImpressao(nome) {
  let soma = 0;
  for (let letra of nome) {
    if (!vogais.includes(letra)) {
      soma += tabelaPitagorica[letra] || 0;
    }
  }
  return reduzirNumero(soma);
}

function calcularExpressao(nome) {
  let soma = 0;
  for (let letra of nome) {
    soma += tabelaPitagorica[letra] || 0;
  }
  return reduzirNumero(soma);
}

function calcularDestino(data) {
  const numeros = data.replace(/[^0-9]/g, '');
  let soma = 0;
  for (let digito of numeros) {
    soma += parseInt(digito);
  }
  return reduzirNumero(soma);
}

function changeTab(tabName) {
  console.log("🧪 Executando changeTab:", tabName);
  
  // Ocultar todas as seções
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => {
    secao.style.display = 'none';
  });
  
  // Remover classe ativa de todas as abas
  const abas = document.querySelectorAll('.tab-button');
  abas.forEach(aba => {
    aba.classList.remove('active');
  });
  
  // Mostrar seção selecionada
  const secaoSelecionada = document.getElementById(tabName);
  if (secaoSelecionada) {
    secaoSelecionada.style.display = 'block';
    console.log("✅ Seção exibida:", tabName);
  } else {
    console.log("❌ Seção não encontrada:", tabName);
  }
  
  // Ativar aba selecionada
  const abaSelecionada = document.querySelector(`[onclick*="${tabName}"]`);
  if (abaSelecionada) {
    abaSelecionada.classList.add('active');
    console.log("✅ Aba ativada");
  }
}

function limparCampos() {
  console.log("🧪 Executando limparCampos");
  
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
  });
  
  // Limpar resultados
  const resultados = document.getElementById('resultados-mapa');
  if (resultados) {
    resultados.innerHTML = '';
  }
  
  console.log("✅ Campos limpos");
}

function gerarRelatorioCompleto() {
  alert('Relatório completo em desenvolvimento! Em breve você terá acesso a uma análise ainda mais detalhada.');
}

// Inicialização do sistema
function inicializarSistema() {
  console.log("🚀 Inicializando Sistema Numeralis...");
  
  try {
    // Configurar primeira aba como ativa
    changeTab('mapa-pitagorico');
    
    // Adicionar event listeners se necessário
    const botaoExemplo = document.querySelector('[onclick*="preencherExemploMapa"]');
    if (botaoExemplo) {
      console.log("✅ Botão exemplo encontrado");
    }
    
    console.log("✅ Sistema Numeralis inicializado com sucesso!");
    
  } catch (error) {
    console.error("❌ Erro na inicialização:", error);
  }
}

// Executar inicialização quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarSistema);
} else {
  inicializarSistema();
}

// Também executar imediatamente para garantir
setTimeout(inicializarSistema, 100);

console.log("📜 Sistema Funcional Corrigido carregado!");
