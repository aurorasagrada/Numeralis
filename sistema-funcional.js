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

function calcularNumeroNome(nome, tabela = tabelaPitagorica) {
  const nomeNormalizado = normalizarTexto(nome);
  let soma = 0;
  
  for (let char of nomeNormalizado) {
    if (tabela[char]) {
      soma += tabela[char];
    }
  }
  
  return reduzirNumero(soma);
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
    interpretacaoMotivacao = window.interpretacoesPitagoricas[numeros.motivacao]?.motivacao || interpretacaoMotivacao;
    interpretacaoImpressao = window.interpretacoesPitagoricas[numeros.impressao]?.impressao || interpretacaoImpressao;
    interpretacaoExpressao = window.interpretacoesPitagoricas[numeros.expressao]?.expressao || interpretacaoExpressao;
    interpretacaoDestino = window.interpretacoesPitagoricas[numeros.destino]?.destino || interpretacaoDestino;
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
  const idade = document.getElementById("idadePiramide").value;
  
  if (!nome || !idade) {
    alert("Por favor, preencha todos os campos!");
    return;
  }
  
  // Verificar se a função da pirâmide cabalística está disponível
  if (typeof renderResultadosPiramideCompleta_Corrigida === 'function') {
    renderResultadosPiramideCompleta_Corrigida(nome, parseInt(idade));
  } else {
    // Fallback se a função não estiver carregada
    const resultadosDiv = document.getElementById("resultados-piramide");
    resultadosDiv.innerHTML = `
      <div class="resultado-header">
        <h3>🔺 Pirâmide Cabalística</h3>
        <div class="numeros-resumo">${nome}, ${idade} anos</div>
      </div>
      <div class="interpretacao-container">
        <p>Sistema da Pirâmide Cabalística em carregamento. Verifique se todos os scripts foram carregados corretamente.</p>
      </div>
    `;
    resultadosDiv.classList.remove("hidden");
  }
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
  
  // Buscar interpretações expandidas se disponíveis
  let interpretacoes = {};
  if (window.interpretacoesPinaculos) {
    interpretacoes = {
      1: window.interpretacoesPinaculos[pináculo1] || "Interpretação em desenvolvimento.",
      2: window.interpretacoesPinaculos[pináculo2] || "Interpretação em desenvolvimento.",
      3: window.interpretacoesPinaculos[pináculo3] || "Interpretação em desenvolvimento.",
      4: window.interpretacoesPinaculos[pináculo4] || "Interpretação em desenvolvimento."
    };
  } else {
    interpretacoes = {
      1: "Interpretação em desenvolvimento.",
      2: "Interpretação em desenvolvimento.",
      3: "Interpretação em desenvolvimento.",
      4: "Interpretação em desenvolvimento."
    };
  }
  
  resultadosDiv.innerHTML = `
    <div class="resultado-header">
      <h3>🏔️ Pináculos da Vida Completos</h3>
      <div class="numeros-resumo">${nome} - ${data}</div>
    </div>
    <div class="interpretacao-container">
      <h4>🌟 Seus Quatro Grandes Ciclos</h4>
      
      <div class="pináculo-secao">
        <h5>1º Pináculo (${pináculo1}) - 0 a ${idade1} anos</h5>
        <div class="interpretacao-texto">${interpretacoes[1]}</div>
      </div>
      
      <div class="pináculo-secao">
        <h5>2º Pináculo (${pináculo2}) - ${idade1 + 1} a ${idade2} anos</h5>
        <div class="interpretacao-texto">${interpretacoes[2]}</div>
      </div>
      
      <div class="pináculo-secao">
        <h5>3º Pináculo (${pináculo3}) - ${idade2 + 1} a ${idade3} anos</h5>
        <div class="interpretacao-texto">${interpretacoes[3]}</div>
      </div>
      
      <div class="pináculo-secao">
        <h5>4º Pináculo (${pináculo4}) - ${idade3 + 1}+ anos</h5>
        <div class="interpretacao-texto">${interpretacoes[4]}</div>
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
  mostrarSecao('mapa-pitagorico');
  
  console.log("✅ SISTEMA FUNCIONAL CARREGADO COM SUCESSO!");
});
