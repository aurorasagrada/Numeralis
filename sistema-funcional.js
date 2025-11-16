// Sistema Funcional - Numeralis Aurora Sagrada
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

function reduzirNumero(numero) {
  if (numerosMestres.includes(numero) || numerosKarmicos.includes(numero)) {
    return numero;
  }
  
  while (numero > 9) {
    let soma = 0;
    while (numero > 0) {
      soma += numero % 10;
      numero = Math.floor(numero / 10);
    }
    numero = soma;
    
    if (numerosMestres.includes(numero) || numerosKarmicos.includes(numero)) {
      return numero;
    }
  }
  
  return numero;
}

// Função para reduzir sempre a números de 1-9 (sem preservar kármicos)
function reduzirNumeroCompleto(numero) {
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

function calcularNumeroNome(nome, tabela = tabelaPitagorica) {
  const nomeNormalizado = normalizarTexto(nome);
  let soma = 0;
  
  for (let char of nomeNormalizado) {
    if (tabela[char]) {
      soma += tabela[char];
    }
  }
  
  // Para cálculos principais, sempre reduzir a 1-9
  return reduzirNumeroCompleto(soma);
}

// ================================================================
//  Funções individuais para Motivação, Impressão, Expressão e Destino
//
//  Estas funções foram extraídas de calcularPerfilNumerologico para uso
//  independente, especialmente na seção de sinastria. Elas permitem
//  calcular separadamente cada número, garantindo compatibilidade com
//  nomes acentuados e diferentes formatos de data.
//
function calcularMotivacao(nome) {
  const nomeNorm = normalizarTexto(nome);
  // Considerar apenas vogais (A,E,I,O,U) para motivação
  const soVogais = nomeNorm.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, '');
  return calcularNumeroNome(soVogais);
}

function calcularImpressao(nome) {
  const nomeNorm = normalizarTexto(nome);
  // Considerar apenas consoantes para impressão
  const soConsoantes = nomeNorm.replace(/[AEIOU]/g, '');
  return calcularNumeroNome(soConsoantes);
}

function calcularExpressao(nome) {
  // A expressão considera todas as letras do nome
  const nomeNorm = normalizarTexto(nome);
  return calcularNumeroNome(nomeNorm);
}

/**
 * Calcula o número de Destino a partir de uma data em formato
 * "AAAA-MM-DD", "DD/MM/AAAA" ou similar. Converte a data em
 * números e retorna a soma reduzida.
 *
 * @param {string} dataStr Data de nascimento no formato ISO (AAAA-MM-DD)
 *                         ou separado por barras/hífens.
 * @returns {number} O número de destino reduzido (incluindo números
 *                   mestres e kármicos se aplicável).
 */
function calcularDestino(dataStr) {
  if (!dataStr) return 0;
  let partes;
  // Separa por barras
  if (dataStr.includes('/')) {
    partes = dataStr.split('/');
    // Se a primeira parte tiver quatro dígitos, assume formato ano/mês/dia
    if (partes[0].length === 4) {
      const ano = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10);
      const dia = parseInt(partes[2], 10);
      return reduzirNumero(dia + mes + ano);
    } else if (partes[2].length === 4) {
      // dd/mm/aaaa
      const dia = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10);
      const ano = parseInt(partes[2], 10);
      return reduzirNumero(dia + mes + ano);
    } else {
      // mm/dd/aa ou outro fallback
      const mes = parseInt(partes[0], 10);
      const dia = parseInt(partes[1], 10);
      const ano = parseInt(partes[2], 10);
      return reduzirNumero(dia + mes + ano);
    }
  } else {
    // Formato AAAA-MM-DD ou DD-MM-AAAA
    partes = dataStr.split('-');
    if (partes[0].length === 4) {
      const ano = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10);
      const dia = parseInt(partes[2], 10);
      return reduzirNumero(dia + mes + ano);
    } else if (partes[2].length === 4) {
      const dia = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10);
      const ano = parseInt(partes[2], 10);
      return reduzirNumero(dia + mes + ano);
    } else {
      // Fallback genérico se o formato não for reconhecido
      const dia = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10);
      const ano = parseInt(partes[2], 10);
      return reduzirNumero(dia + mes + ano);
    }
  }
}

// Função principal para calcular perfil numerológico completo
function calcularPerfilNumerologico(nome, dataNascimento) {
  const nomeNormalizado = normalizarTexto(nome);
  
  // Separar vogais e consoantes
  const vogaisNome = nomeNormalizado.split('').filter(char => vogais.includes(char)).join('');
  const consoantesNome = nomeNormalizado.split('').filter(char => !vogais.includes(char) && char !== '').join('');
  
  // Calcular números principais
  const motivacao = calcularNumeroNome(vogaisNome);
  const impressao = calcularNumeroNome(consoantesNome);
  const expressao = calcularNumeroNome(nomeNormalizado);
  const destino = calcularDestino(dataNascimento);
  
  // Renderizar resultados
  renderResultados(nome, dataNascimento, {
    motivacao,
    impressao,
    expressao,
    destino,
    vogaisNome,
    consoantesNome,
    nomeCompleto: nomeNormalizado
  });
  
  return {
    motivacao,
    impressao,
    expressao,
    destino
  };
}

function renderResultados(nome, dataNascimento, numeros) {
  const resultadosDiv = document.getElementById("resultados-mapa");
  if (!resultadosDiv) {
    console.error("Elemento resultados-mapa não encontrado!");
    return;
  }

  // Buscar interpretações expandidas
  let interpretacaoMotivacao = "Interpretação em desenvolvimento.";
  let interpretacaoImpressao = "Interpretação em desenvolvimento.";
  let interpretacaoExpressao = "Interpretação em desenvolvimento.";
  let interpretacaoDestino = "Interpretação em desenvolvimento.";

  if (window.interpretacoesPitagoricas) {
    // Função para buscar interpretação, com fallback para número reduzido
    const buscarInterpretacao = (categoria, numero) => {
      // Primeiro tenta buscar interpretação do número original
      let interpretacao = window.interpretacoesPitagoricas[categoria]?.[numero]?.texto;
      
      // Se não encontrar e o número for > 9, tenta com número reduzido
      if (!interpretacao && numero > 9) {
        const numeroReduzido = reduzirNumeroForcado(numero);
        interpretacao = window.interpretacoesPitagoricas[categoria]?.[numeroReduzido]?.texto;
      }
      
      return interpretacao;
    };
    
    interpretacaoMotivacao = buscarInterpretacao('motivacao', numeros.motivacao) || interpretacaoMotivacao;
    interpretacaoImpressao = buscarInterpretacao('impressao', numeros.impressao) || interpretacaoImpressao;
    interpretacaoExpressao = buscarInterpretacao('expressao', numeros.expressao) || interpretacaoExpressao;
    interpretacaoDestino = buscarInterpretacao('destino', numeros.destino) || interpretacaoDestino;
  }
  
  // Função auxiliar para forçar redução (ignora números mestres/kármicos para busca de interpretação)
  function reduzirNumeroForcado(numero) {
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

  resultadosDiv.innerHTML = `
    <div class="resultado-header">
      <h3>🌟 Mapa Pitagórico Completo</h3>
      <div class="numeros-resumo">
        Motivação: ${numeros.motivacao} | Impressão: ${numeros.impressao} | Expressão: ${numeros.expressao} | Destino: ${numeros.destino}
      </div>
    </div>
    <div class="interpretacao-container">
      <div class="numero-secao">
        <h4>💫 Motivação (${numeros.motivacao})</h4>
        <p class="vogais-info">Vogais: ${numeros.vogaisNome}</p>
        <div class="interpretacao-texto">${interpretacaoMotivacao}</div>
      </div>
      
      <div class="numero-secao">
        <h4>👁️ Impressão (${numeros.impressao})</h4>
        <p class="consoantes-info">Consoantes: ${numeros.consoantesNome}</p>
        <div class="interpretacao-texto">${interpretacaoImpressao}</div>
      </div>
      
      <div class="numero-secao">
        <h4>🎭 Expressão (${numeros.expressao})</h4>
        <p class="nome-info">Nome completo: ${numeros.nomeCompleto}</p>
        <div class="interpretacao-texto">${interpretacaoExpressao}</div>
      </div>
      
      <div class="numero-secao">
        <h4>🎯 Destino (${numeros.destino})</h4>
        <p class="data-info">Data: ${dataNascimento}</p>
        <div class="interpretacao-texto">${interpretacaoDestino}</div>
      </div>
    </div>
  `;
  
  resultadosDiv.classList.remove("hidden");
  resultadosDiv.scrollIntoView({ behavior: "smooth" });
}

// Funções de exemplo e limpeza para Mapa Pitagórico
function preencherExemploMapa() {
  document.getElementById("nomeCompleto").value = "Maria Silva Santos";
  document.getElementById("dataNascimento").value = "1990-05-15";
}

function limparMapa() {
  document.getElementById("nomeCompleto").value = "";
  document.getElementById("dataNascimento").value = "";
  document.getElementById("resultados-mapa").innerHTML = "";
  document.getElementById("resultados-mapa").classList.add("hidden");
}

function calcularMapaCompleto() {
  const nome = document.getElementById("nomeCompleto").value.trim();
  const data = document.getElementById("dataNascimento").value;
  
  if (!nome || !data) {
    alert("Por favor, preencha todos os campos!");
    return;
  }
  
  calcularPerfilNumerologico(nome, data);
}

// Funções da Pirâmide Cabalística
function preencherExemploPiramide() {
  document.getElementById("nomePiramide").value = "Maria Silva Santos";
  document.getElementById("idadePiramide").value = "33";
}

function limparPiramide() {
  document.getElementById("nomePiramide").value = "";
  document.getElementById("idadePiramide").value = "";
  document.getElementById("resultados-piramide").innerHTML = "";
  document.getElementById("resultados-piramide").classList.add("hidden");
}

function calcularPiramideCompleta() {
  const nome = document.getElementById("nomePiramide").value.trim();
  const idade = document.getElementById("idadePiramide").value.trim();
  
  if (!nome || !idade) {
    alert("Por favor, preencha o nome e a idade.");
    return;
  }
  
  // Navegar automaticamente para a seção da pirâmide
  mostrarSecao('piramide-cabalistica');
  
  renderPiramideCompleta(nome, parseInt(idade));
}

// Função completa da Pirâmide Cabalística com todos os elementos
function renderPiramideCompleta(nome, idade) {
  const resultadosDiv = document.getElementById("resultados-piramide");
  
  // Calcular pirâmide numerológica
  const piramide = calcularPiramideNumerologica(nome);
  const arcanoRegente = calcularArcanoRegente(idade);
  const sequenciasNegativas = detectarSequenciasNegativas(piramide);
  const desafiosCarmicos = calcularDesafiosCarmicos(nome);
  
  let html = `
    <div class="resultado-card" style="background: linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%); border: 2px solid #9D4EDD; margin-bottom: 30px;">
      <h3 style="color: #DDA0DD; text-align: center; margin-bottom: 10px; font-size: 24px;">🔺 SUA PIRÂMIDE CABALÍSTICA COMPLETA</h3>
      <h4 style="color: #FFD700; text-align: center; margin-bottom: 20px; font-size: 20px;">${nome.toUpperCase()}, ${idade} ANOS</h4>
      <p style="color: #E6E6FA; text-align: center; margin-bottom: 30px; font-style: italic;">Descubra os mistérios de sua jornada através da sabedoria cabalística ancestral</p>
    </div>
  `;
  
  // Arcano Regente Atual
  html += `
    <div class="resultado-card" style="background: linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%); border: 2px solid #FFD700; margin-bottom: 30px;">
      <h3 style="color: #FFD700; text-align: center; margin-bottom: 20px;">✨ SEU ARCANO REGENTE ATUAL</h3>
      <div style="text-align: center; padding: 20px;">
        <h2 style="color: #DDA0DD; margin-bottom: 15px; font-size: 28px;">${arcanoRegente.nome}</h2>
        <p style="color: #E6E6FA; font-size: 16px; margin-bottom: 10px;">Significado: "${arcanoRegente.significado}"</p>
        <div style="background: rgba(221, 160, 221, 0.1); padding: 15px; border-radius: 10px; margin-top: 20px;">
          <h4 style="color: #DDA0DD; margin-bottom: 10px;">Influência Atual:</h4>
          <p style="color: #E6E6FA; font-size: 14px; line-height: 1.6;">${arcanoRegente.influencia}</p>
        </div>
      </div>
    </div>
  `;
  
  // Pirâmide Visual
  html += `
    <div class="resultado-card" style="background: linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%); border: 2px solid #9D4EDD; margin-bottom: 30px;">
      <h3 style="color: #DDA0DD; text-align: center; margin-bottom: 20px;">PIRÂMIDE CABALÍSTICA - CICLO DE 90 ANOS</h3>
      <div style="font-family: monospace; text-align: center; color: #E6E6FA; font-size: 14px; line-height: 1.8; background: rgba(157, 78, 221, 0.1); padding: 20px; border-radius: 10px;">
        ${formatarPiramideVisual(piramide)}
      </div>
    </div>
  `;
  
  // IDADES DOS ARCANOS NO CICLO DE 90 ANOS
  html += `
    <div class="resultado-card" style="background: linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%); border: 2px solid #9D4EDD; margin-top: 30px;">
      <h3 style="color: #DDA0DD; text-align: center; margin-bottom: 30px;">🔮 IDADES DOS ARCANOS NO CICLO DE 90 ANOS</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
        ${gerarCardsArcanos()}
      </div>
    </div>
  `;
  
  // Sequências Negativas Expandidas
  if (sequenciasNegativas.length > 0) {
    html += `
      <div class="resultado-card" style="background: linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%); border: 2px solid #FF6B6B; margin-top: 30px;">
        <h3 style="color: #FF6B6B; text-align: center; margin-bottom: 20px;">⚠️ SEQUÊNCIAS NEGATIVAS DETECTADAS NA PIRÂMIDE</h3>
        <p style="color: #E6E6FA; text-align: center; margin-bottom: 30px; font-style: italic;">Padrões que requerem atenção especial e transformação consciente</p>
        ${sequenciasNegativas.map(seq => gerarSequenciaNegativaExpandida(seq)).join('')}
      </div>
    `;
  }
  
  // Desafios Cármicos Expandidos
  if (desafiosCarmicos.length > 0) {
    html += `
      <div class="resultado-card" style="background: linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%); border: 2px solid #FFD700; margin-top: 30px;">
        <h3 style="color: #FFD700; text-align: center; margin-bottom: 20px;">🔥 DESAFIOS CÁRMICOS IDENTIFICADOS</h3>
        <p style="color: #E6E6FA; text-align: center; margin-bottom: 30px; font-style: italic;">Lições de vida que sua alma escolheu desenvolver nesta encarnação</p>
        ${desafiosCarmicos.map((desafio, index) => gerarDesafioCarmico(desafio, index + 1)).join('')}
      </div>
    `;
  }
  
  // Correspondências Cabalísticas
  html += `
    <div class="resultado-card" style="background: linear-gradient(135deg, #2D1B69 0%, #1A0B3D 100%); border: 2px solid #9D4EDD; margin-top: 30px;">
      <h3 style="color: #DDA0DD; text-align: center; margin-bottom: 20px;">🔮 CORRESPONDÊNCIAS CABALÍSTICAS</h3>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
        <div style="background: rgba(157, 78, 221, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #FFD700;">
          <h4 style="color: #FFD700; margin-bottom: 10px;">🌙 INFLUÊNCIA LUNAR</h4>
          <p style="color: #E6E6FA; font-size: 14px; line-height: 1.6;">Sua pirâmide revela conexões profundas com os ciclos lunares e as energias femininas do universo.</p>
        </div>
        <div style="background: rgba(157, 78, 221, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #FFD700;">
          <h4 style="color: #FFD700; margin-bottom: 10px;">☀️ INFLUÊNCIA SOLAR</h4>
          <p style="color: #E6E6FA; font-size: 14px; line-height: 1.6;">Os números dominantes conectam você com as energias solares de manifestação e liderança.</p>
        </div>
      </div>
      
      <div style="background: rgba(221, 160, 221, 0.1); padding: 20px; border-radius: 10px; border: 1px solid #DDA0DD;">
        <h4 style="color: #DDA0DD; text-align: center; margin-bottom: 15px;">🌌 SÍNTESE FINAL</h4>
        <p style="color: #E6E6FA; font-size: 14px; line-height: 1.8; text-align: center;">Sua jornada numerológica revela um caminho único de evolução espiritual. Cada número em sua pirâmide representa uma faceta de sua alma em desenvolvimento, guiando-o em direção à realização de seu propósito maior. Esta análise cabalística oferece um mapa sagrado para sua transformação consciente e ascensão espiritual.</p>
      </div>
    </div>
  `;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
  resultadosDiv.scrollIntoView({ behavior: "smooth" });
}

// Funções auxiliares para a Pirâmide Cabalística
function calcularPiramideNumerologica(nome) {
  // Implementação simplificada da pirâmide
  const numeros = nome.toUpperCase().split('').map(letra => {
    const codigo = letra.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
      return ((codigo - 65) % 9) + 1;
    }
    return 0;
  }).filter(n => n > 0);
  
  return numeros;
}

function calcularArcanoRegente(idade) {
  const arcanos = {
    0: { nome: "O Louco", significado: "Novos começos, espontaneidade", influencia: "Momento de liberdade e novas possibilidades" },
    1: { nome: "O Mago", significado: "Manifestação, poder pessoal", influencia: "Período de realização e concretização de projetos" },
    2: { nome: "A Sacerdotisa", significado: "Intuição, mistério", influencia: "Fase de desenvolvimento da sabedoria interior" },
    3: { nome: "A Imperatriz", significado: "Criatividade, abundância", influencia: "Tempo de fertilidade e crescimento criativo" },
    4: { nome: "O Imperador", significado: "Estrutura, autoridade", influencia: "Período de estabelecimento de bases sólidas" },
    5: { nome: "O Papa", significado: "Tradição, ensino", influencia: "Fase de aprendizado e transmissão de conhecimento" },
    6: { nome: "Os Enamorados", significado: "Escolhas, relacionamentos", influencia: "Momento de decisões importantes sobre parcerias" },
    7: { nome: "O Carro", significado: "Vitória, determinação", influencia: "Período de conquistas através da força de vontade" },
    8: { nome: "A Justiça", significado: "Equilíbrio, karma", influencia: "Fase de ajustes e busca por equilíbrio" },
    9: { nome: "O Eremita", significado: "Sabedoria, introspecção", influencia: "Tempo de reflexão e busca interior" },
    10: { nome: "A Roda da Fortuna", significado: "Ciclos, destino, mudanças", influencia: "Momento de grandes mudanças e novos ciclos" },
    11: { nome: "A Força", significado: "Coragem, domínio interior", influencia: "Período de desenvolvimento da força interior" },
    12: { nome: "O Enforcado", significado: "Sacrifício, nova perspectiva", influencia: "Fase de pausa e mudança de perspectiva" },
    13: { nome: "A Morte", significado: "Transformação, renascimento", influencia: "Momento de grandes transformações" },
    14: { nome: "A Temperança", significado: "Moderação, cura", influencia: "Período de harmonização e cura" },
    15: { nome: "O Diabo", significado: "Tentação, materialismo", influencia: "Fase de confronto com limitações" },
    16: { nome: "A Torre", significado: "Ruptura, revelação", influencia: "Momento de mudanças súbitas e revelações" },
    17: { nome: "A Estrela", significado: "Esperança, inspiração", influencia: "Período de renovação e esperança" },
    18: { nome: "A Lua", significado: "Ilusão, inconsciente", influencia: "Fase de exploração do mundo interior" },
    19: { nome: "O Sol", significado: "Alegria, sucesso", influencia: "Momento de realização e alegria" },
    20: { nome: "O Julgamento", significado: "Renascimento, chamado", influencia: "Período de despertar espiritual" },
    21: { nome: "O Mundo", significado: "Completude, realização", influencia: "Fase de conclusão e realização plena" }
  };
  
  const numeroArcano = idade % 22;
  return arcanos[numeroArcano] || arcanos[0];
}

function detectarSequenciasNegativas(piramide) {
  // Detectar sequências repetitivas
  const sequencias = [];
  const numeroStr = piramide.join('');
  
  // Procurar por sequências de 3 números iguais
  for (let i = 0; i <= numeroStr.length - 3; i++) {
    const seq = numeroStr.substr(i, 3);
    if (seq[0] === seq[1] && seq[1] === seq[2]) {
      sequencias.push(seq);
    }
  }
  
  return [...new Set(sequencias)];
}

function calcularDesafiosCarmicos(nome) {
  const numerosPresentes = new Set();
  nome.toUpperCase().split('').forEach(letra => {
    const codigo = letra.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
      numerosPresentes.add(((codigo - 65) % 9) + 1);
    }
  });
  
  const desafios = [];
  for (let i = 1; i <= 9; i++) {
    if (!numerosPresentes.has(i)) {
      desafios.push(i);
    }
  }
  
  return desafios;
}

function formatarPiramideVisual(numeros) {
  // Criar uma pirâmide visual simples
  let piramide = '';
  const maxWidth = 15;
  
  for (let i = 0; i < Math.min(numeros.length, maxWidth); i++) {
    const espacos = ' '.repeat(Math.max(0, maxWidth - i));
    const linha = numeros.slice(0, i + 1).join('   ');
    piramide += espacos + linha + '\n';
  }
  
  return piramide;
}

function gerarCardsArcanos() {
  const arcanos = [
    { numero: 1, nome: "O Mago", idades: "0-4, 45-49, 90-94", emoji: "🎩" },
    { numero: 2, nome: "A Sacerdotisa", idades: "5-8, 50-53, 95-98", emoji: "🌙" },
    { numero: 3, nome: "A Imperatriz", idades: "9-12, 54-57", emoji: "👑" },
    { numero: 4, nome: "O Imperador", idades: "13-16, 58-61", emoji: "⚡" },
    { numero: 5, nome: "O Papa", idades: "17-20, 62-65", emoji: "📿" },
    { numero: 6, nome: "Os Enamorados", idades: "21-24, 66-69", emoji: "💕" },
    { numero: 7, nome: "O Carro", idades: "25-28, 70-73", emoji: "🏆" },
    { numero: 8, nome: "A Justiça", idades: "29-32, 74-77", emoji: "⚖️" },
    { numero: 9, nome: "O Eremita", idades: "33-36, 78-81", emoji: "🕯️" },
    { numero: 10, nome: "A Roda da Fortuna", idades: "37-40, 82-85", emoji: "🎡" },
    { numero: 11, nome: "A Força", idades: "41-44, 86-89", emoji: "🦁" },
    { numero: 12, nome: "O Enforcado", idades: "45-48, 90-93", emoji: "🙃" },
    { numero: 13, nome: "A Morte", idades: "49-52, 94-97", emoji: "💀" },
    { numero: 14, nome: "A Temperança", idades: "53-56, 98-101", emoji: "🏺" },
    { numero: 15, nome: "O Diabo", idades: "57-60, 102-105", emoji: "😈" },
    { numero: 16, nome: "A Torre", idades: "61-64, 106-109", emoji: "🗼" },
    { numero: 17, nome: "A Estrela", idades: "65-68, 110-113", emoji: "⭐" },
    { numero: 18, nome: "A Lua", idades: "69-72, 114-117", emoji: "🌕" },
    { numero: 19, nome: "O Sol", idades: "73-76, 118-121", emoji: "☀️" },
    { numero: 20, nome: "O Julgamento", idades: "77-80, 122-125", emoji: "📯" },
    { numero: 21, nome: "O Mundo", idades: "81-84, 126-129", emoji: "🌍" },
    { numero: 0, nome: "O Louco", idades: "85-88, 130-133", emoji: "🃏" }
  ];

  return arcanos.map(arcano => `
    <div style="background: rgba(157, 78, 221, 0.15); border: 1px solid #9D4EDD; border-radius: 15px; padding: 20px; text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease;" 
         onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(157, 78, 221, 0.3)';" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
      
      <div style="margin-bottom: 15px;">
        <img src="${arcano.imagem}" alt="${arcano.nome}" style="width: 80px; height: 120px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
      </div>
      
      <h4 style="color: #FFD700; margin-bottom: 10px; font-size: 18px;">Arcano ${arcano.numero}</h4>
      <h3 style="color: #DDA0DD; margin-bottom: 15px; font-size: 20px;">${arcano.nome}</h3>
      
      <div style="background: rgba(255, 215, 0, 0.1); padding: 10px; border-radius: 8px; margin-bottom: 15px;">
        <p style="color: #E6E6FA; font-size: 14px; margin: 0;">Idades ${arcano.idades}</p>
      </div>
      
      <button onclick="alert('Funcionalidade em desenvolvimento: Página individual do ${arcano.nome}')" 
              style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); color: #1A0B3D; border: none; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;"
              onmouseover="this.style.transform='scale(1.05)';" 
              onmouseout="this.style.transform='scale(1)';">
        📖 VER MAIS SOBRE ESTE ARCANO
      </button>
    </div>
  `).join('');
}

function gerarSequenciaNegativaExpandida(sequencia) {
  return `
    <div style="background: rgba(255, 107, 107, 0.1); border: 1px solid #FF6B6B; border-radius: 15px; padding: 25px; margin-bottom: 30px;">
      <h4 style="color: #FFD700; text-align: center; margin-bottom: 20px; font-size: 22px;">Sequência ${sequencia}</h4>
      
      <div style="background: rgba(157, 78, 221, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #FF6B6B;">
        <h5 style="color: #FF6B6B; margin-bottom: 15px; font-size: 18px;">📜 SIGNIFICADO PROFUNDO</h5>
        <p style="color: #E6E6FA; font-size: 14px; line-height: 1.8; text-align: justify;">Esta sequência de números repetidos indica um padrão energético que precisa ser trabalhado conscientemente. Representa uma lição cármica importante em sua jornada espiritual, conectada aos mistérios da árvore da vida cabalística.</p>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
        <div style="background: rgba(178, 209, 177, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #B2D1B1;">
          <h5 style="color: #B2D1B1; margin-bottom: 10px;">✅ PONTOS POSITIVOS</h5>
          <ul style="color: #E6E6FA; font-size: 14px; line-height: 1.6; padding-left: 20px;">
            <li>Oportunidade de crescimento espiritual acelerado</li>
            <li>Desenvolvimento da consciência superior</li>
            <li>Fortalecimento do caráter através dos desafios</li>
            <li>Conexão com energias ancestrais de cura</li>
          </ul>
        </div>
        <div style="background: rgba(255, 107, 107, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #FF6B6B;">
          <h5 style="color: #FF6B6B; margin-bottom: 10px;">⚠️ PONTOS NEGATIVOS</h5>
          <ul style="color: #E6E6FA; font-size: 14px; line-height: 1.6; padding-left: 20px;">
            <li>Tendência à repetição de padrões limitantes</li>
            <li>Resistência à mudança e transformação</li>
            <li>Bloqueios energéticos nos chakras superiores</li>
            <li>Dificuldade em integrar lições cármicas</li>
          </ul>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
        <div style="background: rgba(255, 107, 107, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #FF6B6B;">
          <h5 style="color: #FF6B6B; margin-bottom: 10px;">🚫 O QUE EVITAR</h5>
          <ul style="color: #E6E6FA; font-size: 14px; line-height: 1.6; padding-left: 20px;">
            <li>Ignorar os sinais do universo</li>
            <li>Manter-se em zona de conforto</li>
            <li>Negar a necessidade de mudança</li>
            <li>Culpar circunstâncias externas</li>
          </ul>
        </div>
        <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #FFD700;">
          <h5 style="color: #FFD700; margin-bottom: 10px;">🛠️ O QUE TRABALHAR</h5>
          <ul style="color: #E6E6FA; font-size: 14px; line-height: 1.6; padding-left: 20px;">
            <li>Meditação e introspecção diária</li>
            <li>Terapias de cura energética</li>
            <li>Estudo da numerologia sagrada</li>
            <li>Práticas de perdão e libertação</li>
          </ul>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
        <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #FFD700;">
          <h5 style="color: #FFD700; margin-bottom: 10px;">🌟 COMO SUPERAR</h5>
          <ul style="color: #E6E6FA; font-size: 14px; line-height: 1.6; padding-left: 20px;">
            <li>Aceitar conscientemente os desafios como oportunidades</li>
            <li>Buscar orientação espiritual qualificada</li>
            <li>Praticar gratidão pelas lições recebidas</li>
            <li>Desenvolver paciência e perseverança</li>
          </ul>
        </div>
        <div style="background: rgba(221, 160, 221, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #DDA0DD;">
          <h5 style="color: #DDA0DD; margin-bottom: 10px;">✨ TRANSFORMAÇÃO ESPERADA</h5>
          <p style="color: #E6E6FA; font-size: 14px; line-height: 1.6;">Através do trabalho consciente com esta sequência, você desenvolverá maior equilíbrio espiritual, sabedoria interior e capacidade de navegar pelos desafios da vida com graça e propósito. Esta é uma oportunidade única de acelerar sua evolução espiritual.</p>
        </div>
      </div>
    </div>
  `;
}

function gerarDesafioCarmico(numeroDesafio, indice) {
  const desafios = {
    1: {
      titulo: "A Lição da Liderança Consciente e Independência Saudável",
      significado: "O desafio cármico do número 1 representa uma das lições mais fundamentais da evolução espiritual humana: aprender a equilibrar a necessidade natural de liderança e independência com a sabedoria da colaboração e humildade. Pessoas com este desafio frequentemente chegam a esta vida carregando memórias inconscientes de experiências passadas onde o poder foi mal utilizado, onde a liderança se transformou em dominação, ou onde a independência genuína não significou rejeição de toda forma de apoio ou colaboração, mas sim a capacidade de escolher conscientemente quando liderar e quando seguir, quando agir sozinho e quando buscar parceria.",
      licoes: [
        "**Liderança Servidora**: Aprender que verdadeiro poder serve ao bem coletivo, não a interesses pessoais",
        "**Humildade Ativa**: Desenvolver capacidade de reconhecer limitações sem diminuir autoconfiança",
        "**Colaboração Consciente**: Equilibrar independência com capacidade de trabalhar harmoniosamente com outros",
        "**Autoridade Inspiradora**: Transformar tendências autoritárias em capacidade de motivar e inspirar"
      ],
      sinais: [
        "Necessidade compulsiva de sempre ter razão ou estar no controle de situações",
        "Dificuldade em aceitar feedback construtivo ou reconhecer erros e limitações",
        "Tendência a criar conflitos desnecessários para estabelecer dominância",
        "Isolamento social causado por comportamentos autoritários ou individualismo excessivo"
      ],
      estrategias: [
        "Praticar escuta ativa e genuína interesse pelas perspectivas de outras pessoas",
        "Desenvolver projetos colaborativos onde o sucesso depende do trabalho em equipe",
        "Cultivar humildade através de práticas de gratidão e reconhecimento das contribuições alheias",
        "Buscar mentoria ou coaching para desenvolver habilidades de liderança consciente"
      ]
    },
    7: {
      titulo: "A Jornada da Sabedoria Interior e Conexão Espiritual",
      significado: "O desafio cármico do número 7 representa a necessidade de desenvolver uma conexão profunda com a sabedoria interior e os mistérios espirituais da existência. Este desafio surge quando a alma precisa aprender a equilibrar o mundo material com as dimensões mais sutis da realidade, desenvolvendo intuição, discernimento espiritual e a capacidade de encontrar significado profundo nas experiências da vida. Frequentemente, pessoas com este desafio chegam a esta encarnação com uma tendência a se perder em superficialidades ou a rejeitar completamente o aspecto espiritual da existência, necessitando aprender a integrar ambas as dimensões de forma harmoniosa.",
      licoes: [
        "**Desenvolvimento da Intuição**: Aprender a confiar na sabedoria interior e nos insights espirituais",
        "**Busca por Significado**: Desenvolver capacidade de encontrar propósito profundo nas experiências cotidianas",
        "**Discernimento Espiritual**: Cultivar habilidade de distinguir entre verdade espiritual e ilusão",
        "**Integração Sagrado-Profano**: Equilibrar necessidades materiais com crescimento espiritual"
      ],
      sinais: [
        "Sensação persistente de vazio ou falta de propósito mesmo quando objetivos materiais são alcançados",
        "Dificuldade em confiar na intuição ou tendência a ignorar sinais e sincronicidades",
        "Ceticismo excessivo em relação a questões espirituais ou, inversamente, credulidade extrema",
        "Isolamento emocional causado por dificuldade em encontrar pessoas com interesses similares"
      ],
      estrategias: [
        "Desenvolver práticas meditativas regulares e técnicas de introspecção profunda",
        "Estudar filosofias espirituais, psicologia transpessoal ou tradições místicas autênticas",
        "Cultivar relacionamentos com pessoas que compartilham interesses em crescimento espiritual",
        "Praticar journaling e análise de sonhos para desenvolver conexão com o inconsciente"
      ]
    },
    8: {
      titulo: "O Domínio do Poder Material e Abundância Consciente",
      significado: "O desafio cármico do número 8 envolve aprender a navegar conscientemente pelo mundo do poder material, abundância financeira e autoridade terrena sem perder a integridade espiritual ou se tornar escravo das ambições materiais. Este desafio surge quando a alma precisa desenvolver uma relação saudável com dinheiro, sucesso e poder, aprendendo que a verdadeira abundância vem do equilíbrio entre prosperidade material e riqueza espiritual. Frequentemente, pessoas com este desafio oscilam entre extremos: ou rejeitam completamente o mundo material por considerá-lo 'não-espiritual', ou se tornam obcecadas por acumulação material perdendo de vista valores mais elevados.",
      licoes: [
        "**Abundância Consciente**: Desenvolver capacidade de criar prosperidade material de forma ética e sustentável",
        "**Poder Responsável**: Aprender a usar autoridade e influência para benefício coletivo, não apenas pessoal",
        "**Equilíbrio Material-Espiritual**: Integrar sucesso mundano com valores espirituais autênticos",
        "**Generosidade Sábia**: Cultivar capacidade de compartilhar recursos de forma que empodere outros"
      ],
      sinais: [
        "Relacionamento disfuncional com dinheiro: ou escassez crônica ou acumulação compulsiva",
        "Tendência a medir valor próprio e alheio principalmente através de conquistas materiais",
        "Dificuldade em delegar responsabilidades ou confiar em outros com questões importantes",
        "Conflitos recorrentes entre ambições pessoais e considerações éticas ou espirituais"
      ],
      estrategias: [
        "Desenvolver educação financeira consciente e práticas de investimento ético",
        "Cultivar generosidade através de doações regulares e trabalho voluntário significativo",
        "Buscar mentoria de pessoas que conseguiram equilibrar sucesso material com integridade espiritual",
        "Praticar gratidão diária e reconhecimento da abundância já presente na vida"
      ]
    }
  };

  const desafio = desafios[numeroDesafio] || {
    titulo: `A Lição do Número ${numeroDesafio}`,
    significado: `O desafio cármico do número ${numeroDesafio} representa lições específicas que sua alma escolheu desenvolver nesta encarnação.`,
    licoes: ["Desenvolvimento das qualidades associadas ao número"],
    sinais: ["Padrões que indicam a necessidade de trabalhar este aspecto"],
    estrategias: ["Práticas para desenvolver as qualidades necessárias"]
  };

  return `
    <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid #FFD700; border-radius: 15px; padding: 25px; margin-bottom: 30px;">
      <h4 style="color: #FFD700; text-align: center; margin-bottom: 20px; font-size: 22px;">Desafio Cármico ${indice} - ${desafio.titulo}</h4>
      
      <div style="background: rgba(157, 78, 221, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #FF6B6B;">
        <h5 style="color: #FF6B6B; margin-bottom: 15px; font-size: 18px;">🌟 SIGNIFICADO DO DESAFIO</h5>
        <p style="color: #E6E6FA; font-size: 14px; line-height: 1.8; text-align: justify;">${desafio.significado}</p>
      </div>
      
      <div style="background: rgba(221, 160, 221, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #DDA0DD;">
        <h5 style="color: #DDA0DD; margin-bottom: 15px; font-size: 18px;">✨ LIÇÕES PRINCIPAIS</h5>
        <ul style="color: #E6E6FA; font-size: 14px; line-height: 1.6; padding-left: 20px;">
          ${desafio.licoes.map(licao => `<li style="margin-bottom: 8px;">${licao}</li>`).join('')}
        </ul>
      </div>
      
      <div style="background: rgba(255, 107, 107, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #FF6B6B;">
        <h5 style="color: #FF6B6B; margin-bottom: 15px; font-size: 18px;">⚠️ SINAIS DE MANIFESTAÇÃO</h5>
        <ul style="color: #E6E6FA; font-size: 14px; line-height: 1.6; padding-left: 20px;">
          ${desafio.sinais.map(sinal => `<li style="margin-bottom: 8px;">${sinal}</li>`).join('')}
        </ul>
      </div>
      
      <div style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #FFD700;">
        <h5 style="color: #FFD700; margin-bottom: 15px; font-size: 18px;">🛠️ ESTRATÉGIAS DE TRANSFORMAÇÃO</h5>
        <ul style="color: #E6E6FA; font-size: 14px; line-height: 1.6; padding-left: 20px;">
          ${desafio.estrategias.map(estrategia => `<li style="margin-bottom: 8px;">${estrategia}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Funções dos Pináculos da Vida
function preencherExemploPinaculos() {
  document.getElementById("nomePinaculos").value = "Maria Silva Santos";
  document.getElementById("dataPinaculos").value = "1990-05-15";
}

function limparPinaculos() {
  document.getElementById("nomePinaculos").value = "";
  document.getElementById("dataPinaculos").value = "";
  document.getElementById("resultados-pinaculos").innerHTML = "";
  document.getElementById("resultados-pinaculos").classList.add("hidden");
}

function calcularPinaculosCompletos() {
  const nome = document.getElementById("nomePinaculos").value.trim();
  const data = document.getElementById("dataPinaculos").value;
  
  if (!nome || !data) {
    alert("Por favor, preencha todos os campos!");
    return;
  }
  
  const [ano, mes, dia] = data.split('-').map(Number);
  
  // Calcular os 4 pináculos
  const pináculo1 = reduzirNumero(mes + dia);
  const pináculo2 = reduzirNumero(dia + ano);
  const pináculo3 = reduzirNumero(pináculo1 + pináculo2);
  const pináculo4 = reduzirNumero(mes + ano);
  
  // Calcular idades dos ciclos
  const destino = calcularDestino(data);
  const idade1 = 36 - destino;
  const idade2 = idade1 + 9;
  const idade3 = idade2 + 9;
  
  const resultadosDiv = document.getElementById("resultados-pinaculos");
  
  // Função para buscar interpretação dos pináculos - SOLUÇÃO DEFINITIVA
  const buscarInterpretacaoPinaculo = (numero) => {
    // Forçar uso das interpretações pitagóricas que sabemos que funcionam
    if (window.interpretacoesPitagoricas && window.interpretacoesPitagoricas.motivacao && window.interpretacoesPitagoricas.motivacao[numero]) {
      const dados = window.interpretacoesPitagoricas.motivacao[numero];
      if (dados && dados.texto) {
        return dados.texto;
      }
    }
    
    // Fallback para interpretações básicas por número
    const interpretacoesBasicas = {
      1: "Período de despertar da individualidade e liderança pioneira. Momento de aprender a ser um líder natural que inspira outros através do exemplo pessoal de coragem e determinação.",
      2: "Fase de cultivo da diplomacia sagrada e cooperação harmoniosa. Desenvolvimento das artes refinadas da diplomacia consciente e sensibilidade emocional elevada.",
      3: "Período de expressão criativa autêntica e comunicação inspiradora. Momento de desenvolver talentos artísticos e capacidade de inspirar outros.",
      4: "Fase de construção metódica e organização sistemática. Desenvolvimento de disciplina, persistência e capacidade de criar estruturas sólidas.",
      5: "Período de liberdade expansiva e aventura transformadora. Momento de explorar novos horizontes e abracar mudanças com coragem.",
      6: "Fase de responsabilidade amorosa e serviço compassivo. Desenvolvimento do cuidado com família, comunidade e responsabilidades sociais.",
      7: "Período de busca espiritual profunda e sabedoria interior. Momento de introspecção, estudo e desenvolvimento da consciência espiritual.",
      8: "Fase de conquista material e liderança executiva. Desenvolvimento de habilidades de gestão, negócios e realização material.",
      9: "Período de serviço universal e sabedoria humanitária. Momento de compartilhar conhecimento e servir a humanidade com compaixao."
    };
    
    return interpretacoesBasicas[numero] || "Interpretação em desenvolvimento.";
  };
  
  // Buscar interpretações para cada pináculo
  const interpretacao1 = buscarInterpretacaoPinaculo(pináculo1);
  const interpretacao2 = buscarInterpretacaoPinaculo(pináculo2);
  const interpretacao3 = buscarInterpretacaoPinaculo(pináculo3);
  const interpretacao4 = buscarInterpretacaoPinaculo(pináculo4);
  
  resultadosDiv.innerHTML = `
    <div class="resultado-header">
      <h3>🏔️ Pináculos da Vida Completos</h3>
      <div class="numeros-resumo">${nome} - ${data}</div>
    </div>
    <div class="interpretacao-container">
      <h4>🌟 Seus Quatro Grandes Ciclos</h4>
      
      <div class="pináculo-secao">
        <h5>1º Pináculo (${pináculo1}) - 0 a ${idade1} anos</h5>
        <div class="interpretacao-texto">${interpretacao1}</div>
      </div>
      
      <div class="pináculo-secao">
        <h5>2º Pináculo (${pináculo2}) - ${idade1 + 1} a ${idade2} anos</h5>
        <div class="interpretacao-texto">${interpretacao2}</div>
      </div>
      
      <div class="pináculo-secao">
        <h5>3º Pináculo (${pináculo3}) - ${idade2 + 1} a ${idade3} anos</h5>
        <div class="interpretacao-texto">${interpretacao3}</div>
      </div>
      
      <div class="pináculo-secao">
        <h5>4º Pináculo (${pináculo4}) - ${idade3 + 1}+ anos</h5>
        <div class="interpretacao-texto">${interpretacao4}</div>
      </div>
    </div>
  `;
  
  resultadosDiv.classList.remove("hidden");
  resultadosDiv.scrollIntoView({ behavior: "smooth" });
}

// Funções da Sinastria Numerológica
function preencherExemploSinastria() {
  document.getElementById("nomePessoa1").value = "Maria Silva Santos";
  document.getElementById("dataPessoa1").value = "1990-05-15";
  document.getElementById("nomePessoa2").value = "João Carlos Oliveira";
  document.getElementById("dataPessoa2").value = "1988-12-03";
}

function calcularSinastria() {
  const nome1 = document.getElementById("nomePessoa1").value.trim();
  const data1 = document.getElementById("dataPessoa1").value;
  const nome2 = document.getElementById("nomePessoa2").value.trim();
  const data2 = document.getElementById("dataPessoa2").value;

  if (!nome1 || !data1 || !nome2 || !data2) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Obter perfis completos para cada pessoa
  const perfil1 = calcularPerfilNumerologico(nome1, data1);
  const perfil2 = calcularPerfilNumerologico(nome2, data2);

  const motivacao1 = perfil1.motivacao;
  const impressao1 = perfil1.impressao;
  const expressao1 = perfil1.expressao;
  const destino1 = perfil1.destino;

  const motivacao2 = perfil2.motivacao;
  const impressao2 = perfil2.impressao;
  const expressao2 = perfil2.expressao;
  const destino2 = perfil2.destino;

  // Calcular percentuais de compatibilidade
  const compatMotiv = calcularCompatibilidade(motivacao1, motivacao2);
  const compatImpressao = calcularCompatibilidade(impressao1, impressao2);
  const compatExpressao = calcularCompatibilidade(expressao1, expressao2);
  const compatDestino = calcularCompatibilidade(destino1, destino2);

  const compatibilidadeGeral = Math.round((compatMotiv + compatImpressao + compatExpressao + compatDestino) / 4);

  // Determinar número para análise expandida usando a soma dos destinos
  const numeroAnalise = reduzirNumero(destino1 + destino2);

  // Formatar análise expandida, se disponível
  let analiseHTML = '';
  if (window.sinastria_expandida && window.sinastria_expandida[numeroAnalise]) {
    const analise = window.sinastria_expandida[numeroAnalise];
    // Montar HTML com campos principais
    if (analise.significado) {
      analiseHTML += `<p><strong>Significado:</strong> ${analise.significado}</p>`;
    }
    if (analise.descricao) {
      analiseHTML += `<p>${analise.descricao}</p>`;
    }
    const camposLista = ['pontos_positivos','pontos_negativos','o_que_aproveitar','o_que_evitar','cotidiano','financeiro','pessoal','espiritual','crencas_valores'];
    camposLista.forEach(chave => {
      const valor = analise[chave];
      if (valor) {
        const titulo = chave.replace(/_/g, ' ');
        if (Array.isArray(valor)) {
          analiseHTML += `<p><strong>${titulo.charAt(0).toUpperCase() + titulo.slice(1)}:</strong> ${valor.join(', ')}</p>`;
        } else {
          analiseHTML += `<p><strong>${titulo.charAt(0).toUpperCase() + titulo.slice(1)}:</strong> ${valor}</p>`;
        }
      }
    });
  } else {
    analiseHTML = `<p>Interpretação detalhada para o número ${numeroAnalise} em desenvolvimento.</p>`;
  }

  // Exibir resultados
  const resultado = document.getElementById("resultados-sinastria");
  if (!resultado) {
    console.error("Elemento resultados-sinastria não encontrado!");
    return;
  }

  resultado.innerHTML = `
    <div class="resultado-header">
      <h3>💕 Sinastria Numerológica</h3>
      <div class="numeros-resumo">Compatibilidade Geral: ${compatibilidadeGeral}%</div>
    </div>
    <div class="interpretacao-container">
      <div class="sinastria-pessoas">
        <div class="pessoa">
          <h4>👤 ${nome1}</h4>
          <p>Motivação: ${motivacao1} | Impressão: ${impressao1} | Expressão: ${expressao1} | Destino: ${destino1}</p>
        </div>
        <div class="pessoa">
          <h4>👤 ${nome2}</h4>
          <p>Motivação: ${motivacao2} | Impressão: ${impressao2} | Expressão: ${expressao2} | Destino: ${destino2}</p>
        </div>
      </div>
      
      <div class="compatibilidade-detalhes">
        <h4>💖 Análise de Compatibilidade</h4>
        <div class="compatibilidade-item">
          <strong>Motivação (${motivacao1} ↔ ${motivacao2}):</strong> ${compatMotiv}%
          <p>Compatibilidade dos desejos internos e motivações profundas.</p>
        </div>
        <div class="compatibilidade-item">
          <strong>Impressão (${impressao1} ↔ ${impressao2}):</strong> ${compatImpressao}%
          <p>Compatibilidade da primeira impressão e energia externa.</p>
        </div>
        <div class="compatibilidade-item">
          <strong>Expressão (${expressao1} ↔ ${expressao2}):</strong> ${compatExpressao}%
          <p>Compatibilidade dos talentos naturais e forma de expressão.</p>
        </div>
        <div class="compatibilidade-item">
          <strong>Destino (${destino1} ↔ ${destino2}):</strong> ${compatDestino}%
          <p>Compatibilidade dos caminhos de vida e propósitos.</p>
        </div>
        
        <div class="interpretacao-geral">
          <h4>🔮 Análise Expandida do Relacionamento</h4>
          ${analiseHTML}
        </div>
      </div>
    </div>
  `;
  
  resultado.classList.remove("hidden");
  resultado.scrollIntoView({ behavior: "smooth" });
}

// Função auxiliar para calcular compatibilidade entre dois números
function calcularCompatibilidade(num1, num2) {
  const diferenca = Math.abs(num1 - num2);
  if (diferenca === 0) return 100;
  if (diferenca === 1) return 85;
  if (diferenca === 2) return 70;
  if (diferenca === 3) return 60;
  if (diferenca === 4) return 50;
  if (diferenca === 5) return 45;
  if (diferenca === 6) return 40;
  if (diferenca === 7) return 35;
  if (diferenca === 8) return 30;
  return 25;
}

function limparSinastria() {
  document.getElementById("nomePessoa1").value = "";
  document.getElementById("dataPessoa1").value = "";
  document.getElementById("nomePessoa2").value = "";
  document.getElementById("dataPessoa2").value = "";
  document.getElementById("resultados-sinastria").innerHTML = "";
  document.getElementById("resultados-sinastria").classList.add("hidden");
}

// Funções de navegação entre seções
function changeTab(secaoId) {
  // Ocultar todas as seções
  const secoes = document.querySelectorAll('.section');
  secoes.forEach(secao => secao.classList.remove('active'));
  
  // Remover classe active de todos os botões de navegação
  const botoes = document.querySelectorAll('.nav-tab');
  botoes.forEach(botao => botao.classList.remove('active'));
  
  // Mostrar seção selecionada
  const secaoSelecionada = document.getElementById(secaoId);
  if (secaoSelecionada) {
    secaoSelecionada.classList.add('active');
  }
  
  // Ativar botão correspondente
  const botaoAtivo = document.querySelector(`[onclick="changeTab('${secaoId}')"]`);
  if (botaoAtivo) {
    botaoAtivo.parentElement.classList.add('active');
  }
}

function mostrarSecao(secaoId) {
  // Ocultar todas as seções
  const secoes = document.querySelectorAll('.section');
  secoes.forEach(secao => secao.classList.remove('active'));
  
  // Remover classe active de todos os botões
  const botoes = document.querySelectorAll('.nav-button');
  botoes.forEach(botao => botao.classList.remove('active'));
  
  // Mostrar seção selecionada
  const secaoSelecionada = document.getElementById(secaoId);
  if (secaoSelecionada) {
    secaoSelecionada.classList.add('active');
  }
  
  // Ativar botão correspondente
  const botaoAtivo = document.querySelector(`[onclick="mostrarSecao('${secaoId}')"]`);
  if (botaoAtivo) {
    botaoAtivo.classList.add('active');
  }
}

// Inicialização do sistema
document.addEventListener('DOMContentLoaded', function() {
  // Mostrar primeira seção por padrão
  changeTab('mapa-pitagorico');
  
  console.log("✅ SISTEMA FUNCIONAL CARREGADO COM SUCESSO!");
});
