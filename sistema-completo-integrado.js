// Sistema Numeralis Completo com Interpretações Integradas
// Versão final com textos expandidos funcionais

// Interpretações Expandidas Integradas
const interpretacoesPitagoricasUltraExpandidas = {
  motivacao: {
    1: {
      titulo: "Motivação 1 - Liderança e Pioneirismo",
      texto: "Sua motivação mais profunda nasce de uma necessidade fundamental de ser pioneiro e líder em tudo que faz. Você sente um impulso irresistível de abrir novos caminhos, de ser o primeiro a explorar territórios desconhecidos e de demonstrar que é possível superar qualquer obstáculo através da força de vontade e determinação. Esta energia o impulsiona a buscar constantemente situações onde possa exercer sua liderança natural, tomar decisões importantes de forma independente e influenciar positivamente o curso dos eventos.\n\nVocê se sente verdadeiramente vivo quando está criando algo completamente novo, quando está iniciando projetos que nunca existiram antes ou quando está demonstrando possibilidades que outros nem imaginavam ser possíveis. Sua alma se alimenta da energia pura da criação e da inovação, e você encontra profunda satisfação em ser reconhecido como alguém que não apenas sonha com mudanças, mas que realmente as torna realidade através de ação concreta e determinada."
    },
    2: {
      titulo: "Motivação 2 - Harmonia e Cooperação", 
      texto: "Sua motivação mais profunda emerge da busca constante por harmonia, equilíbrio e cooperação genuína em todas as áreas da vida. Você sente uma necessidade visceral de criar pontes entre pessoas, ideias e situações que parecem opostas ou incompatíveis, encontrando sempre formas de unir diferenças em uma síntese harmoniosa e produtiva. Esta energia o impulsiona a buscar situações onde possa exercer sua capacidade natural de mediação, diplomacia e criação de consenso.\n\nVocê se sente verdadeiramente realizado quando consegue transformar conflitos em oportunidades de crescimento mútuo, quando facilita comunicação efetiva entre pessoas com perspectivas diferentes, ou quando cria ambientes onde todos se sentem ouvidos, compreendidos e valorizados."
    }
    // Adicionar mais números conforme necessário
  },
  impressao: {
    1: {
      titulo: "Impressão 1 - Liderança Natural",
      texto: "As pessoas percebem você como alguém naturalmente confiante, independente e capaz de liderar. Sua presença transmite autoridade e originalidade, e outros frequentemente o veem como alguém que pode tomar decisões difíceis e abrir novos caminhos. Você projeta uma energia pioneira que inspira confiança e respeito."
    },
    2: {
      titulo: "Impressão 2 - Diplomacia e Sensibilidade",
      texto: "As pessoas percebem você como alguém diplomático, sensível e naturalmente cooperativo. Sua presença transmite harmonia e compreensão, e outros frequentemente procuram você quando precisam de mediação ou apoio emocional. Você projeta uma energia acolhedora que faz com que as pessoas se sintam seguras e compreendidas."
    }
  }
};

// Funções de Cálculo Numerológico
function calcularNumeroReducao(numero) {
  while (numero > 9 && numero !== 11 && numero !== 22 && numero !== 33) {
    numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return numero;
}

function calcularMotivacao(nome) {
  const vogais = 'AEIOU';
  let soma = 0;
  
  for (let char of nome.toUpperCase()) {
    if (vogais.includes(char)) {
      soma += char.charCodeAt(0) - 64;
    }
  }
  
  return calcularNumeroReducao(soma);
}

function calcularImpressao(nome) {
  const consoantes = 'BCDFGHJKLMNPQRSTVWXYZ';
  let soma = 0;
  
  for (let char of nome.toUpperCase()) {
    if (consoantes.includes(char)) {
      soma += char.charCodeAt(0) - 64;
    }
  }
  
  return calcularNumeroReducao(soma);
}

function calcularExpressao(nome) {
  let soma = 0;
  
  for (let char of nome.toUpperCase()) {
    if (char.match(/[A-Z]/)) {
      soma += char.charCodeAt(0) - 64;
    }
  }
  
  return calcularNumeroReducao(soma);
}

function calcularDestino(dataNascimento) {
  const [ano, mes, dia] = dataNascimento.split('-').map(Number);
  const soma = ano + mes + dia;
  return calcularNumeroReducao(soma);
}

// Função Principal de Cálculo
function calcularMapaCompleto() {
  const nome = document.getElementById('nome-mapa')?.value || document.querySelector('input[placeholder*="nome"]')?.value;
  const data = document.getElementById('data-mapa')?.value || document.querySelector('input[type="date"]')?.value || document.querySelector('input[placeholder*="data"]')?.value;
  
  if (!nome || !data) {
    alert('Por favor, preencha nome e data de nascimento');
    return;
  }
  
  // Calcular números
  const motivacao = calcularMotivacao(nome);
  const impressao = calcularImpressao(nome);
  const expressao = calcularExpressao(nome);
  const destino = calcularDestino(data);
  
  // Exibir resultados
  exibirResultadosExpandidos(nome, data, motivacao, impressao, expressao, destino);
}

// Função de Exibição com Textos Expandidos
function exibirResultadosExpandidos(nome, data, motivacao, impressao, expressao, destino) {
  let resultadosDiv = document.getElementById('resultados-mapa');
  
  if (!resultadosDiv) {
    resultadosDiv = document.createElement('div');
    resultadosDiv.id = 'resultados-mapa';
    resultadosDiv.className = 'results';
    document.querySelector('.section.active').appendChild(resultadosDiv);
  }
  
  const motivacaoData = interpretacoesPitagoricasUltraExpandidas.motivacao[motivacao];
  const impressaoData = interpretacoesPitagoricasUltraExpandidas.impressao[impressao];
  
  resultadosDiv.innerHTML = `
    <h3>🌟 Mapa Pitagórico Completo de ${nome}</h3>
    <p><strong>Nascimento:</strong> ${data}</p>
    
    <div class="fundamental-numbers-section">
      <h4 class="fundamental-title">Números Fundamentais</h4>
      <div class="fundamental-grid">
        <div class="fundamental-card">
          <div class="fundamental-symbol">🎯</div>
          <div class="fundamental-label">Motivação Interior</div>
          <div class="fundamental-number">${motivacao}</div>
          <div class="fundamental-desc">Seus desejos mais profundos</div>
        </div>
        <div class="fundamental-card">
          <div class="fundamental-symbol">👁️</div>
          <div class="fundamental-label">Impressão Causada</div>
          <div class="fundamental-number">${impressao}</div>
          <div class="fundamental-desc">Como as pessoas te veem</div>
        </div>
        <div class="fundamental-card">
          <div class="fundamental-symbol">🎭</div>
          <div class="fundamental-label">Expressão Pessoal</div>
          <div class="fundamental-number">${expressao}</div>
          <div class="fundamental-desc">Seus talentos naturais</div>
        </div>
        <div class="fundamental-card">
          <div class="fundamental-symbol">🌟</div>
          <div class="fundamental-label">Destino de Vida</div>
          <div class="fundamental-number">${destino}</div>
          <div class="fundamental-desc">Sua missão principal</div>
        </div>
      </div>
    </div>
    
    <div class="result-item">
      <h4>🎯 Motivação Interior</h4>
      ${motivacaoData ? `
        <h5 style="color: #b2d1b1; margin-bottom: 10px;">${motivacaoData.titulo}</h5>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 15px;">${motivacaoData.texto.substring(0, 200)}...</p>
        <button onclick="toggleTextoCompleto(this)" class="btn-expandir">VER TEXTO COMPLETO</button>
        <div class="hidden" style="margin-top: 15px; padding: 15px; background: rgba(178, 209, 177, 0.1); border-radius: 8px; font-size: 14px; line-height: 1.6;">${motivacaoData.texto}</div>
      ` : `<p>Interpretação para o número ${motivacao} em desenvolvimento.</p>`}
    </div>
    
    <div class="result-item">
      <h4>👁️ Impressão Causada</h4>
      ${impressaoData ? `
        <h5 style="color: #f0aa53; margin-bottom: 10px;">${impressaoData.titulo}</h5>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 15px;">${impressaoData.texto.substring(0, 200)}...</p>
        <button onclick="toggleTextoCompleto(this)" class="btn-expandir">VER TEXTO COMPLETO</button>
        <div class="hidden" style="margin-top: 15px; padding: 15px; background: rgba(240, 170, 83, 0.1); border-radius: 8px; font-size: 14px; line-height: 1.6;">${impressaoData.texto}</div>
      ` : `<p>Interpretação para o número ${impressao} em desenvolvimento.</p>`}
    </div>
  `;
  
  resultadosDiv.scrollIntoView({ behavior: 'smooth' });
}

// Função Toggle para Expandir Textos
function toggleTextoCompleto(botao) {
  const textoCompleto = botao.nextElementSibling;
  
  if (textoCompleto.classList.contains('hidden')) {
    textoCompleto.classList.remove('hidden');
    botao.textContent = 'OCULTAR TEXTO';
    botao.style.backgroundColor = '#3e0a29';
    botao.style.color = '#f2eaff';
  } else {
    textoCompleto.classList.add('hidden');
    botao.textContent = 'VER TEXTO COMPLETO';
    botao.style.backgroundColor = '#f0aa53';
    botao.style.color = '#0b1836';
  }
}

// Função de Exemplo
function preencherExemploMapa() {
  const nomeInput = document.querySelector('input[placeholder*="nome"]');
  const dataInput = document.querySelector('input[type="date"]') || document.querySelector('input[placeholder*="data"]');
  
  if (nomeInput) nomeInput.value = 'Maria Silva Santos';
  if (dataInput) dataInput.value = '1990-05-15';
}

// Função de Limpeza
function limparMapa() {
  const inputs = document.querySelectorAll('#mapa-pitagorico input');
  inputs.forEach(input => input.value = '');
  
  const resultados = document.getElementById('resultados-mapa');
  if (resultados) resultados.remove();
}

// CSS para botões e elementos
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
  
  .fundamental-numbers-section {
    background: linear-gradient(135deg, rgba(62,10,41,0.4) 0%, rgba(11,24,54,0.4) 100%);
    border: 2px solid #f0aa53;
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    text-align: center;
  }
  
  .fundamental-title {
    font-family: "Cinzel", serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: #f0aa53;
    margin-bottom: 2rem;
  }
  
  .fundamental-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .fundamental-card {
    background: rgba(242,234,255,0.1);
    border: 1px solid rgba(240,170,83,0.4);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .fundamental-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(240,170,83,0.2);
  }
  
  .fundamental-symbol {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .fundamental-label {
    font-family: "Cinzel", serif;
    font-size: 1.1rem;
    color: #b2d1b1;
    margin-bottom: 0.5rem;
  }
  
  .fundamental-number {
    font-size: 3rem;
    font-weight: bold;
    color: #f0aa53;
    margin: 0.5rem 0;
  }
  
  .fundamental-desc {
    font-style: italic;
    color: #f2eaff;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;
document.head.appendChild(style);

// Disponibilizar funções globalmente
window.calcularMapaCompleto = calcularMapaCompleto;
window.preencherExemploMapa = preencherExemploMapa;
window.limparMapa = limparMapa;
window.toggleTextoCompleto = toggleTextoCompleto;

console.log("🎉 Sistema Numeralis Completo Integrado carregado com sucesso!");
