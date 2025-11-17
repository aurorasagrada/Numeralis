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
  
  // Usar interpretações expandidas
  console.log('🔍 Verificando interpretações:', {
    expandidas: typeof window.interpretacoesPitagoricasUltraExpandidas,
    basicas: typeof window.interpretacoesPitagoricas
  });
  
  const interpretacoes = window.interpretacoesPitagoricasUltraExpandidas || window.interpretacoesPitagoricas;
  
  console.log('📊 Interpretações selecionadas:', interpretacoes ? 'Carregadas' : 'Não encontradas');
  
  let htmlMotivacao = '';
  let htmlImpressao = '';
  let htmlExpressao = '';
  let htmlDestino = '';
  
  if (interpretacoes) {
    const motivacaoData = interpretacoes.motivacao?.[motivacao];
    const impressaoData = interpretacoes.impressao?.[impressao];
    const expressaoData = interpretacoes.expressao?.[expressao];
    const destinoData = interpretacoes.destino?.[destino];
    
    if (motivacaoData) {
      htmlMotivacao = `
        <h4 style="color: #b2d1b1; margin-bottom: 10px;">${motivacaoData.titulo}</h4>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 15px;">${motivacaoData.texto.substring(0, 200)}...</p>
        <button onclick="toggleTextoCompleto(this)" style="background: #f0aa53; color: #0b1836; border: none; padding: 8px 15px; border-radius: 15px; font-size: 12px; cursor: pointer; font-weight: bold;">VER TEXTO COMPLETO</button>
        <div class="hidden" style="margin-top: 15px; padding: 15px; background: rgba(178, 209, 177, 0.1); border-radius: 8px; font-size: 14px; line-height: 1.6;">${motivacaoData.texto}</div>
      `;
    }
    
    if (impressaoData) {
      htmlImpressao = `
        <h4 style="color: #f0aa53; margin-bottom: 10px;">${impressaoData.titulo}</h4>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 15px;">${impressaoData.texto.substring(0, 200)}...</p>
        <button onclick="toggleTextoCompleto(this)" style="background: #f0aa53; color: #0b1836; border: none; padding: 8px 15px; border-radius: 15px; font-size: 12px; cursor: pointer; font-weight: bold;">VER TEXTO COMPLETO</button>
        <div class="hidden" style="margin-top: 15px; padding: 15px; background: rgba(240, 170, 83, 0.1); border-radius: 8px; font-size: 14px; line-height: 1.6;">${impressaoData.texto}</div>
      `;
    }
    
    if (expressaoData) {
      htmlExpressao = `
        <h4 style="color: #3e0a29; margin-bottom: 10px;">${expressaoData.titulo}</h4>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 15px;">${expressaoData.texto.substring(0, 200)}...</p>
        <button onclick="toggleTextoCompleto(this)" style="background: #f0aa53; color: #0b1836; border: none; padding: 8px 15px; border-radius: 15px; font-size: 12px; cursor: pointer; font-weight: bold;">VER TEXTO COMPLETO</button>
        <div class="hidden" style="margin-top: 15px; padding: 15px; background: rgba(62, 10, 41, 0.1); border-radius: 8px; font-size: 14px; line-height: 1.6;">${expressaoData.texto}</div>
      `;
    }
    
    if (destinoData) {
      htmlDestino = `
        <h4 style="color: #0b1836; margin-bottom: 10px;">${destinoData.titulo}</h4>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 15px;">${destinoData.texto.substring(0, 200)}...</p>
        <button onclick="toggleTextoCompleto(this)" style="background: #f0aa53; color: #0b1836; border: none; padding: 8px 15px; border-radius: 15px; font-size: 12px; cursor: pointer; font-weight: bold;">VER TEXTO COMPLETO</button>
        <div class="hidden" style="margin-top: 15px; padding: 15px; background: rgba(11, 24, 54, 0.1); border-radius: 8px; font-size: 14px; line-height: 1.6;">${destinoData.texto}</div>
      `;
    }
  }
  
  // Fallback para textos básicos se não houver interpretações expandidas
  if (!htmlMotivacao) {
    htmlMotivacao = `
      <h4 style="color: #b2d1b1; margin-bottom: 10px;">💫 MOTIVAÇÃO: ${motivacao}</h4>
      <p style="font-size: 14px; line-height: 1.6;">Sua força interior e desejos mais profundos que movem sua alma.</p>
    `;
  }
  
  if (!htmlImpressao) {
    htmlImpressao = `
      <h4 style="color: #f0aa53; margin-bottom: 10px;">👁️ IMPRESSÃO: ${impressao}</h4>
      <p style="font-size: 14px; line-height: 1.6;">Como os outros te veem e a primeira impressão que você causa.</p>
    `;
  }
  
  if (!htmlExpressao) {
    htmlExpressao = `
      <h4 style="color: #3e0a29; margin-bottom: 10px;">🎭 EXPRESSÃO: ${expressao}</h4>
      <p style="font-size: 14px; line-height: 1.6;">Seus talentos naturais e como você se expressa no mundo.</p>
    `;
  }
  
  if (!htmlDestino) {
    htmlDestino = `
      <h4 style="color: #0b1836; margin-bottom: 10px;">🎯 DESTINO: ${destino}</h4>
      <p style="font-size: 14px; line-height: 1.6;">Sua missão de vida e o caminho que veio percorrer nesta encarnação.</p>
    `;
  }
  
  resultadosDiv.innerHTML = `
    <div style="background: linear-gradient(135deg, #3e0a29, #0b1836); padding: 30px; border-radius: 15px; margin: 20px 0; color: #f2eaff;">
      <h3 style="color: #f0aa53; text-align: center; margin-bottom: 25px;">🌟 SEU MAPA PITAGÓRICO COMPLETO</h3>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        <div style="background: rgba(178, 209, 177, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #b2d1b1;">
          ${htmlMotivacao}
        </div>
        
        <div style="background: rgba(240, 170, 83, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #f0aa53;">
          ${htmlImpressao}
        </div>
        
        <div style="background: rgba(62, 10, 41, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #3e0a29;">
          ${htmlExpressao}
        </div>
        
        <div style="background: rgba(11, 24, 54, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #0b1836;">
          ${htmlDestino}
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 25px;">
        <button onclick="gerarRelatorioCompleto()" style="background: linear-gradient(45deg, #f0aa53, #b2d1b1); color: #0b1836; border: none; padding: 12px 25px; border-radius: 25px; font-weight: bold; cursor: pointer;">
          📜 GERAR RELATÓRIO COMPLETO
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

// Função para expandir/contrair textos longos
function toggleTextoCompleto(botao) {
  const textoCompleto = botao.nextElementSibling;
  const isHidden = textoCompleto.classList.contains('hidden');
  
  if (isHidden) {
    textoCompleto.classList.remove('hidden');
    botao.textContent = 'Ocultar Texto';
    botao.style.backgroundColor = '#3e0a29';
  } else {
    textoCompleto.classList.add('hidden');
    botao.textContent = 'VER TEXTO COMPLETO';
    botao.style.backgroundColor = '#f0aa53';
  }
}

// Função para expandir análises completas
function toggleAnaliseCompleta(botao) {
  const analiseCompleta = botao.nextElementSibling;
  const isHidden = analiseCompleta.classList.contains('hidden');
  
  if (isHidden) {
    analiseCompleta.classList.remove('hidden');
    botao.textContent = 'Ocultar Análise';
    botao.style.backgroundColor = '#3e0a29';
  } else {
    analiseCompleta.classList.add('hidden');
    botao.textContent = 'VER ANÁLISE COMPLETA';
    botao.style.backgroundColor = '#f0aa53';
  }
}

// Adicionar CSS para classe hidden
const style = document.createElement('style');
style.textContent = `
  .hidden {
    display: none !important;
  }
  
  .btn-expandir {
    background: #f0aa53;
    color: #0b1836;
    border: none;
    padding: 8px 15px;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  .btn-expandir:hover {
    background: #3e0a29;
    color: #f2eaff;
    transform: translateY(-2px);
  }
`;
document.head.appendChild(style);

// Carregar interpretações expandidas diretamente
if (!window.interpretacoesPitagoricasUltraExpandidas) {
  // Carregar interpretações via fetch como fallback
  fetch('./interpretacoes_pitagoricas_ultra_expandidas.js')
    .then(response => response.text())
    .then(scriptText => {
      eval(scriptText);
      console.log('✅ Interpretações carregadas via fetch!');
    })
    .catch(error => {
      console.log('❌ Erro ao carregar interpretações:', error);
    });
}

// Disponibilizar globalmente
window.toggleTextoCompleto = toggleTextoCompleto;
window.toggleAnaliseCompleta = toggleAnaliseCompleta;

console.log("📜 Sistema Funcional Consolidado carregado!");