// SISTEMA NUMERALIS AURORA SAGRADA - ARQUIVO CONSOLIDADO E FUNCIONAL
// Todas as funções centralizadas em um único arquivo

// Aguardar carregamento de dependências
window.addEventListener("load", function() {
  // Mapear variáveis dos arquivos JS para nomes esperados pelo código
  if (typeof interpretacoesPitagoricasUltraExpandidas !== "undefined") {
    window.interpretacoesPitagoricas = interpretacoesPitagoricasUltraExpandidas;
  }
  console.log('📜 Textos expandidos carregados:', {
    pitagoricas: typeof interpretacoesPitagoricasUltraExpandidas,
    pinaculos: typeof textosPinaculosMelhorados,
    sinastria: typeof sinastria_expandida_completa
  });
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

// Nomes dos Arcanos
const nomesArcanos = {
  0: "O Louco", 1: "O Mago", 2: "A Sacerdotisa", 3: "A Imperatriz", 4: "O Imperador",
  5: "O Papa", 6: "Os Enamorados", 7: "O Carro", 8: "A Força", 9: "O Eremita",
  10: "A Roda da Fortuna", 11: "A Justiça", 12: "O Enforcado", 13: "A Morte",
  14: "A Temperança", 15: "O Diabo", 16: "A Torre", 17: "A Estrela", 18: "A Lua",
  19: "O Sol", 20: "O Julgamento", 21: "O Mundo", 22: "O Louco"
};

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

function reduzirNumero(numero, opcoes = {}) {
  const { preservaMestres = false, preservaKarmicos = false } = opcoes;
  
  if (preservaMestres && numerosMestres.includes(numero)) {
    return numero;
  }
  
  if (preservaKarmicos && numerosKarmicos.includes(numero)) {
    return numero;
  }
  
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

function calcularNumeroNome(nome, tabela, filtroLetras = null) {
  const nomeNormalizado = normalizarTexto(nome);
  let soma = 0;
  
  for (let letra of nomeNormalizado) {
    if (tabela[letra] && (!filtroLetras || filtroLetras.includes(letra))) {
      soma += tabela[letra];
    }
  }
  
  return soma;
}

function obterArcanoRegente(numero) {
  if (numero === 0) return 22; // O Louco
  if (numero > 22) {
    return reduzirNumero(numero);
  }
  return numero;
}

// Função principal para calcular o mapa pitagórico completo
function calcularMapaCompleto() {
  const nome = document.getElementById("nomeCompleto").value.trim();
  const dataNascimento = document.getElementById("dataNascimento").value;
  
  if (!nome || !dataNascimento) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  
  const perfil = calcularPerfilNumerologico(nome, dataNascimento);
  exibirResultadosMapa(perfil, nome, dataNascimento);
}

function calcularPerfilNumerologico(nome, dataNascimento) {
  const vogais = ["A", "E", "I", "O", "U"];
  
  const somaVogais = calcularNumeroNome(nome, tabelaPitagorica, vogais);
  const motivacao = reduzirNumero(somaVogais, { preservaMestres: true });
  
  const consoantes = Object.keys(tabelaPitagorica).filter(letra => !vogais.includes(letra));
  const somaConsoantes = calcularNumeroNome(nome, tabelaPitagorica, consoantes);
  const impressao = reduzirNumero(somaConsoantes, { preservaMestres: true });
  
  const somaTotal = calcularNumeroNome(nome, tabelaPitagorica);
  const expressao = reduzirNumero(somaTotal, { preservaMestres: true });
  
  const [ano, mes, dia] = dataNascimento.split("-").map(Number);
  const somaData = dia + mes + ano;
  const destino = reduzirNumero(somaData, { preservaMestres: true });
  
  const anoAtual = new Date().getFullYear();
  const anoPersonal = reduzirNumero(dia + mes + anoAtual);
  
  const desafioMenor1 = Math.abs(dia - mes);
  const desafioMenor2 = Math.abs(ano - destino);
  const desafioMaior = Math.abs(desafioMenor1 - desafioMenor2);
  const desafioVida = Math.abs(motivacao - destino);
  
  return {
    motivacao,
    impressao,
    expressao,
    destino,
    anoPersonal,
    desafioMenor1,
    desafioMenor2,
    desafioMaior,
    desafioVida,
    arcanoRegente: obterArcanoRegente(destino)
  };
}

function exibirResultadosMapa(perfil, nome, dataNascimento) {
  const resultadosDiv = document.getElementById("resultados-mapa");
  
  if (!resultadosDiv) {
    console.error("Elemento resultados-mapa não encontrado!");
    return;
  }
  
  // Usar aspectos da vida originais
  const aspectosVida = window.obterAspectosVidaPitagorico;
  console.log('📜 Usando aspectos da vida originais:', aspectosVida ? 'CARREGADOS' : 'NÃO ENCONTRADOS');
  
  const html = `
    <div class="resultado-completo">
      <div class="resultado-header">
        <h3>🔮 Mapa Pitagórico Completo de ${nome}</h3>
        <p class="data-nascimento">Nascimento: ${new Date(dataNascimento + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
      </div>
      
      <div class="numeros-principais">
        <div class="numero-card motivacao">
          <div class="numero">${perfil.motivacao}</div>
          <div class="titulo">Motivação Interior</div>
          <p>Seus desejos mais profundos e o que realmente move sua alma.</p>
          ${aspectosVida ? 
            `<div class="aspectos-vida">
              <div class="aspecto-item">
                <strong>🌱 Aprendizado:</strong> ${aspectosVida(perfil.motivacao, 'motivacao').aprendizado}
              </div>
              <div class="aspecto-item">
                <strong>💕 Relacionamentos:</strong> ${aspectosVida(perfil.motivacao, 'motivacao').relacionamentos}
              </div>
              <div class="aspecto-item">
                <strong>💼 Carreira:</strong> ${aspectosVida(perfil.motivacao, 'motivacao').carreira}
              </div>
              <div class="aspecto-item">
                <strong>✨ Crescimento:</strong> ${aspectosVida(perfil.motivacao, 'motivacao').crescimento}
              </div>
            </div>` : ''}
        </div>
        
        <div class="numero-card impressao">
          <div class="numero">${perfil.impressao}</div>
          <div class="titulo">Impressão Causada</div>
          <p>Como as pessoas te veem e a primeira impressão que você causa.</p>
          ${aspectosVida ? 
            `<div class="aspectos-vida">
              <div class="aspecto-item">
                <strong>🌱 Aprendizado:</strong> ${aspectosVida(perfil.impressao, 'impressao').aprendizado}
              </div>
              <div class="aspecto-item">
                <strong>💕 Relacionamentos:</strong> ${aspectosVida(perfil.impressao, 'impressao').relacionamentos}
              </div>
              <div class="aspecto-item">
                <strong>💼 Carreira:</strong> ${aspectosVida(perfil.impressao, 'impressao').carreira}
              </div>
              <div class="aspecto-item">
                <strong>✨ Crescimento:</strong> ${aspectosVida(perfil.impressao, 'impressao').crescimento}
              </div>
            </div>` : ''}
        </div>
        
        <div class="numero-card expressao">
          <div class="numero">${perfil.expressao}</div>
          <div class="titulo">Expressão Pessoal</div>
          <p>Seus talentos naturais e como você se expressa no mundo.</p>
          ${aspectosVida ? 
            `<div class="aspectos-vida">
              <div class="aspecto-item">
                <strong>🌱 Aprendizado:</strong> ${aspectosVida(perfil.expressao, 'expressao').aprendizado}
              </div>
              <div class="aspecto-item">
                <strong>💕 Relacionamentos:</strong> ${aspectosVida(perfil.expressao, 'expressao').relacionamentos}
              </div>
              <div class="aspecto-item">
                <strong>💼 Carreira:</strong> ${aspectosVida(perfil.expressao, 'expressao').carreira}
              </div>
              <div class="aspecto-item">
                <strong>✨ Crescimento:</strong> ${aspectosVida(perfil.expressao, 'expressao').crescimento}
              </div>
            </div>` : ''}
        </div>
        
        <div class="numero-card destino">
          <div class="numero">${perfil.destino}</div>
          <div class="titulo">Destino de Vida</div>
          <p>Sua missão principal nesta encarnação e propósito maior.</p>
          ${aspectosVida ? 
            `<div class="aspectos-vida">
              <div class="aspecto-item">
                <strong>🌱 Aprendizado:</strong> ${aspectosVida(perfil.destino, 'destino').aprendizado}
              </div>
              <div class="aspecto-item">
                <strong>💕 Relacionamentos:</strong> ${aspectosVida(perfil.destino, 'destino').relacionamentos}
              </div>
              <div class="aspecto-item">
                <strong>💼 Carreira:</strong> ${aspectosVida(perfil.destino, 'destino').carreira}
              </div>
              <div class="aspecto-item">
                <strong>✨ Crescimento:</strong> ${aspectosVida(perfil.destino, 'destino').crescimento}
              </div>
            </div>` : ''}
        </div>
      </div>
      
      <div class="arcano-regente">
        <h4>🃏 Arcano Regente: ${nomesArcanos[perfil.arcanoRegente]}</h4>
        <div class="arcano-card">
          <img src="https://raw.githubusercontent.com/aurorasagrada/Numeralis/main/arcanos/${perfil.arcanoRegente}.jpg" 
               alt="${nomesArcanos[perfil.arcanoRegente]}" 
               onerror="this.src='https://via.placeholder.com/200x350/3e0a29/f2eaff?text=${nomesArcanos[perfil.arcanoRegente]}'"
               class="arcano-imagem">
          <div class="arcano-info">
            <h5>${nomesArcanos[perfil.arcanoRegente]}</h5>
            <p>Este arcano rege sua jornada de vida e oferece insights sobre seu caminho evolutivo.</p>
            <a href="https://aurorasagrada.github.io/Numeralis/arcano${perfil.arcanoRegente}.html" 
               target="_blank" class="btn-arcano">📖 Ler Análise Completa</a>
          </div>
        </div>
      </div>
      
      <div class="aspectos-vida">
        <h4>🌟 Aspectos da Vida</h4>
        <div class="aspectos-grid">
          <div class="aspecto-card">
            <div class="aspecto-numero">${perfil.motivacao}</div>
            <div class="aspecto-titulo">Aprendizado</div>
            <p>Área onde você mais evolui e aprende lições importantes.</p>
          </div>
          <div class="aspecto-card">
            <div class="aspecto-numero">${perfil.impressao}</div>
            <div class="aspecto-titulo">Amor</div>
            <p>Como você se relaciona e expressa afeto nos relacionamentos.</p>
          </div>
          <div class="aspecto-card">
            <div class="aspecto-numero">${perfil.expressao}</div>
            <div class="aspecto-titulo">Espiritual</div>
            <p>Sua conexão com o sagrado e desenvolvimento espiritual.</p>
          </div>
          <div class="aspecto-card">
            <div class="aspecto-numero">${perfil.destino}</div>
            <div class="aspecto-titulo">Financeiro</div>
            <p>Sua relação com dinheiro e abundância material.</p>
          </div>
          <div class="aspecto-card">
            <div class="aspecto-numero">${perfil.anoPersonal}</div>
            <div class="aspecto-titulo">Trabalho</div>
            <p>Sua vocação profissional e como você contribui para o mundo.</p>
          </div>
          <div class="aspecto-card">
            <div class="aspecto-numero">${reduzirNumero(perfil.motivacao + perfil.destino)}</div>
            <div class="aspecto-titulo">Família</div>
            <p>Dinâmicas familiares e seu papel no núcleo familiar.</p>
          </div>
        </div>
      </div>
      
      <div class="desafios">
        <h4>⚡ Desafios Numerológicos</h4>
        <div class="desafios-grid">
          <div class="desafio-card">
            <div class="desafio-numero">${perfil.desafioMenor1}</div>
            <div class="desafio-titulo">Desafio Menor 1</div>
            <p>Primeiro obstáculo a superar em sua jornada.</p>
          </div>
          <div class="desafio-card">
            <div class="desafio-numero">${perfil.desafioMenor2}</div>
            <div class="desafio-titulo">Desafio Menor 2</div>
            <p>Segundo obstáculo que requer atenção especial.</p>
          </div>
          <div class="desafio-card">
            <div class="desafio-numero">${perfil.desafioMaior}</div>
            <div class="desafio-titulo">Desafio Maior</div>
            <p>Principal lição a ser aprendida nesta vida.</p>
          </div>
          <div class="desafio-card">
            <div class="desafio-numero">${perfil.desafioVida}</div>
            <div class="desafio-titulo">Desafio da Vida</div>
            <p>Desafio central que permeia toda sua existência.</p>
          </div>
        </div>
      </div>
      
      <div class="ano-pessoal">
        <h4>📅 Ano Pessoal ${new Date().getFullYear()}: ${perfil.anoPersonal}</h4>
        <p>Este é um ano de ${getDescricaoAnoPersonal(perfil.anoPersonal)} para você.</p>
      </div>
    </div>
  `;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

function getDescricaoAnoPersonal(numero) {
  const descricoes = {
    1: "novos começos e iniciativas",
    2: "cooperação e relacionamentos",
    3: "criatividade e expressão",
    4: "trabalho duro e construção",
    5: "mudanças e liberdade",
    6: "responsabilidade e família",
    7: "introspecção e espiritualidade",
    8: "conquistas materiais e poder",
    9: "conclusões e transformações"
  };
  return descricoes[numero] || "energia especial";
}

// Função para calcular a pirâmide completa
function calcularPiramideCompleta() {
  const nome = document.getElementById("nomePiramide").value.trim();
  const idade = parseInt(document.getElementById("idadePiramide").value);
  
  if (!nome || isNaN(idade)) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  
  const piramide = calcularPiramideCabalistica(nome, idade);
  exibirResultadosPiramide(piramide, nome, idade);
}

function calcularPiramideCabalistica(nome, idade) {
  const nomeNormalizado = normalizarTexto(nome);
  const letras = nomeNormalizado.split('');
  
  // Converter letras para números usando tabela cabalística
  let linha1 = letras.map(letra => tabelaCabalistica[letra] || 0);
  
  const piramide = [linha1];
  
  // Calcular linhas subsequentes
  while (piramide[piramide.length - 1].length > 1) {
    const linhaAtual = piramide[piramide.length - 1];
    const novaLinha = [];
    
    for (let i = 0; i < linhaAtual.length - 1; i++) {
      const soma = linhaAtual[i] + linhaAtual[i + 1];
      novaLinha.push(reduzirNumero(soma));
    }
    
    piramide.push(novaLinha);
  }
  
  // Identificar sequências negativas
  const sequenciasNegativas = identificarSequenciasNegativas(piramide);
  
  return {
    piramide,
    sequenciasNegativas,
    numeroApice: piramide[piramide.length - 1][0],
    idadeConsulta: idade
  };
}

function identificarSequenciasNegativas(piramide) {
  const sequencias = [];
  
  for (let linha of piramide) {
    for (let i = 0; i <= linha.length - 3; i++) {
      const seq = linha.slice(i, i + 3);
      if (seq.every(num => num === seq[0])) {
        const valor = parseInt(seq.join(''));
        if ([111, 222, 333, 444, 555, 666, 777, 888, 999].includes(valor)) {
          sequencias.push({
            sequencia: valor,
            posicao: { linha: piramide.indexOf(linha), inicio: i }
          });
        }
      }
    }
  }
  
  return sequencias;
}

function exibirResultadosPiramide(resultado, nome, idade) {
  const resultadosDiv = document.getElementById("resultados-piramide");
  
  if (!resultadosDiv) {
    console.error("Elemento resultados-piramide não encontrado!");
    return;
  }
  
  let html = `
    <div class="resultado-completo">
      <div class="resultado-header">
        <h3>🔺 Pirâmide Cabalística de ${nome}</h3>
        <p class="idade-consulta">Idade da consulta: ${idade} anos</p>
      </div>
      
      <div class="piramide-visual">
  `;
  
  // Renderizar pirâmide
  resultado.piramide.forEach((linha, indiceLinha) => {
    html += `<div class="linha-piramide linha-${indiceLinha}">`;
    
    linha.forEach((numero, indiceNumero) => {
      let classe = "numero-piramide";
      
      // Verificar se faz parte de sequência negativa
      const temSequenciaNegativa = resultado.sequenciasNegativas.some(seq => 
        seq.posicao.linha === indiceLinha && 
        indiceNumero >= seq.posicao.inicio && 
        indiceNumero < seq.posicao.inicio + 3
      );
      
      if (temSequenciaNegativa) {
        classe += " sequencia-negativa";
      }
      
      html += `<span class="${classe}">${numero}</span>`;
    });
    
    html += `</div>`;
  });
  
  html += `
      </div>
      
      <div class="numero-apice">
        <h4>🎯 Número do Ápice: ${resultado.numeroApice}</h4>
        <p>Este é o número que rege sua vida atual e representa sua essência numerológica.</p>
      </div>
  `;
  
  // Exibir sequências negativas se houver
  if (resultado.sequenciasNegativas.length > 0) {
    const sequenciasExpandidas = window.sequenciasNegativasExpandidas;
    html += `
      <div class="sequencias-negativas">
        <h4>⚠️ Sequências Negativas Identificadas</h4>
    `;
    
    resultado.sequenciasNegativas.forEach(seq => {
      const sequenciaInfo = sequenciasExpandidas && sequenciasExpandidas[seq.sequencia.toString()];
      html += `
        <div class="sequencia-card">
          <div class="sequencia-numero">${seq.sequencia}</div>
          <div class="sequencia-info">
            <h5>${sequenciaInfo ? sequenciaInfo.titulo : `Sequência ${seq.sequencia}`}</h5>
            <p>${sequenciaInfo ? sequenciaInfo.significado.substring(0, 300) + '...' : 'Esta sequência indica um padrão energético que requer atenção especial em sua vida.'}</p>
            ${sequenciaInfo ? `
              <button class="btn-expandir" onclick="toggleTextoCompleto(this)">Ver Análise Completa</button>
              <div class="texto-completo hidden">
                <p><strong>Significado Completo:</strong> ${sequenciaInfo.significado}</p>
                <div class="analise-sequencia">
                  <h6>🎯 Setores de Impacto:</h6>
                  <ul>${sequenciaInfo.setoresImpacto.map(setor => `<li>${setor}</li>`).join('')}</ul>
                  
                  <h6>✨ Pontos Positivos a Desenvolver:</h6>
                  <ul>${sequenciaInfo.pontosPositivos.map(ponto => `<li>${ponto}</li>`).join('')}</ul>
                  
                  <h6>⚠️ O que Evitar:</h6>
                  <ul>${sequenciaInfo.oQueEvitar.map(item => `<li>${item}</li>`).join('')}</ul>
                  
                  <h6>🌱 O que Trabalhar:</h6>
                  <ul>${sequenciaInfo.oQueTrabalhar.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });
    
    html += `</div>`;
  }
  
  html += `</div>`;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

// Função para calcular os pináculos
function calcularPinaculosCompletos() {
  const nome = document.getElementById("nomePinaculos").value.trim();
  const dataNascimento = document.getElementById("dataPinaculos").value;
  
  if (!nome || !dataNascimento) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  
  const pinaculos = calcularPinaculos(dataNascimento);
  exibirResultadosPinaculos(pinaculos, nome, dataNascimento);
}

function calcularPinaculos(dataNascimento) {
  const [ano, mes, dia] = dataNascimento.split("-").map(Number);
  
  const diaReduzido = reduzirNumero(dia);
  const mesReduzido = reduzirNumero(mes);
  const anoReduzido = reduzirNumero(ano);
  
  const pinaculo1 = reduzirNumero(diaReduzido + mesReduzido);
  const pinaculo2 = reduzirNumero(diaReduzido + anoReduzido);
  const pinaculo3 = reduzirNumero(pinaculo1 + pinaculo2);
  const pinaculo4 = reduzirNumero(mesReduzido + anoReduzido);
  
  // Calcular idades dos pináculos
  const numeroDestino = reduzirNumero(dia + mes + ano);
  const idadeBase = 36 - numeroDestino;
  
  const idades = {
    pinaculo1: { inicio: 0, fim: idadeBase },
    pinaculo2: { inicio: idadeBase + 1, fim: idadeBase + 9 },
    pinaculo3: { inicio: idadeBase + 10, fim: idadeBase + 18 },
    pinaculo4: { inicio: idadeBase + 19, fim: 99 }
  };
  
  return {
    pinaculos: [pinaculo1, pinaculo2, pinaculo3, pinaculo4],
    idades,
    numeroDestino
  };
}

function exibirResultadosPinaculos(resultado, nome, dataNascimento) {
  const resultadosDiv = document.getElementById("resultados-pinaculos");
  
  if (!resultadosDiv) {
    console.error("Elemento resultados-pinaculos não encontrado!");
    return;
  }
  
  // Obter interpretações expandidas de pináculos
  const interpretacoesPinaculos = window.interpretacoesPinaculosExpandidos || window.textosPinaculosMelhorados;
  console.log('🏔️ Usando interpretações de pináculos:', interpretacoesPinaculos ? 'EXPANDIDAS' : 'BÁSICAS');
  
  const html = `
    <div class="resultado-completo">
      <div class="resultado-header">
        <h3>🏔️ Pináculos da Vida de ${nome}</h3>
        <p class="data-nascimento">Nascimento: ${new Date(dataNascimento + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
      </div>
      
      <div class="pinaculos-grid">
        <div class="pinaculo-card">
          <div class="pinaculo-numero">${resultado.pinaculos[0]}</div>
          <div class="pinaculo-titulo">1º Pináculo</div>
          <div class="pinaculo-idade">${resultado.idades.pinaculo1.inicio} - ${resultado.idades.pinaculo1.fim} anos</div>
          <p>Período de formação e descoberta da personalidade.</p>
          ${interpretacoesPinaculos && interpretacoesPinaculos[resultado.pinaculos[0]] ? 
            `<div class="interpretacao-expandida">
              <h5>${interpretacoesPinaculos[resultado.pinaculos[0]].titulo}</h5>
              <p class="texto-expandido">${interpretacoesPinaculos[resultado.pinaculos[0]].texto.substring(0, 500)}...</p>
              <button class="btn-expandir" onclick="toggleTextoCompleto(this)">Ver Texto Completo</button>
              <div class="texto-completo hidden">${interpretacoesPinaculos[resultado.pinaculos[0]].texto}</div>
            </div>` : ''}
        </div>
        
        <div class="pinaculo-card">
          <div class="pinaculo-numero">${resultado.pinaculos[1]}</div>
          <div class="pinaculo-titulo">2º Pináculo</div>
          <div class="pinaculo-idade">${resultado.idades.pinaculo2.inicio} - ${resultado.idades.pinaculo2.fim} anos</div>
          <p>Fase de desenvolvimento profissional e relacionamentos.</p>
        </div>
        
        <div class="pinaculo-card">
          <div class="pinaculo-numero">${resultado.pinaculos[2]}</div>
          <div class="pinaculo-titulo">3º Pináculo</div>
          <div class="pinaculo-idade">${resultado.idades.pinaculo3.inicio} - ${resultado.idades.pinaculo3.fim} anos</div>
          <p>Período de maturidade e realização pessoal.</p>
        </div>
        
        <div class="pinaculo-card">
          <div class="pinaculo-numero">${resultado.pinaculos[3]}</div>
          <div class="pinaculo-titulo">4º Pináculo</div>
          <div class="pinaculo-idade">${resultado.idades.pinaculo4.inicio}+ anos</div>
          <p>Fase de sabedoria e legado espiritual.</p>
        </div>
      </div>
      
      <div class="destino-info">
        <h4>🎯 Número do Destino: ${resultado.numeroDestino}</h4>
        <p>Seu número do destino determina as idades de transição entre os pináculos.</p>
      </div>
    </div>
  `;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

// Função para calcular sinastria
function calcularSinastria() {
  const nome1 = document.getElementById("nomePessoa1").value.trim();
  const data1 = document.getElementById("dataPessoa1").value;
  const nome2 = document.getElementById("nomePessoa2").value.trim();
  const data2 = document.getElementById("dataPessoa2").value;
  
  if (!nome1 || !data1 || !nome2 || !data2) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  
  const perfil1 = calcularPerfilNumerologico(nome1, data1);
  const perfil2 = calcularPerfilNumerologico(nome2, data2);
  const compatibilidade = calcularCompatibilidade(perfil1, perfil2);
  
  exibirResultadosSinastria(perfil1, perfil2, compatibilidade, nome1, nome2);
}

// Função para calcular compatibilidade entre dois perfis
function calcularCompatibilidade(perfil1, perfil2) {
  const motivacaoComp = Math.abs(perfil1.motivacao - perfil2.motivacao);
  const impressaoComp = Math.abs(perfil1.impressao - perfil2.impressao);
  const expressaoComp = Math.abs(perfil1.expressao - perfil2.expressao);
  const destinoComp = Math.abs(perfil1.destino - perfil2.destino);
  
  const compatibilidadeGeral = (motivacaoComp + impressaoComp + expressaoComp + destinoComp) / 4;
  
  return {
    motivacao: 10 - motivacaoComp,
    impressao: 10 - impressaoComp,
    expressao: 10 - expressaoComp,
    destino: 10 - destinoComp,
    geral: 10 - compatibilidadeGeral
  };
}

function exibirResultadosSinastria(perfil1, perfil2, compatibilidade, nome1, nome2) {
  const resultadosDiv = document.getElementById("resultados-sinastria");
  
  if (!resultadosDiv) {
    console.error("Elemento resultados-sinastria não encontrado!");
    return;
  }
  
  // Calcular número da pareja para sinastria original
  const numeroPareja = reduzirNumero(perfil1.destino + perfil2.destino);
  const aspectosSinastria = window.obterAspectosVidaSinastria;
  console.log('💕 Usando aspectos de sinastria originais:', aspectosSinastria ? 'CARREGADOS' : 'NÃO ENCONTRADOS', 'Número da Pareja:', numeroPareja);
  
  const html = `
    <div class="resultado-completo">
      <div class="resultado-header">
        <h3>💕 Sinastria Numerológica</h3>
        <p class="nomes-casal">${nome1} & ${nome2}</p>
      </div>
      
      <div class="perfis-comparacao">
        <div class="perfil-pessoa">
          <h4>${nome1}</h4>
          <div class="numeros-pessoa">
            <div class="numero-item">
              <span class="numero">${perfil1.motivacao}</span>
              <span class="tipo">Motivação</span>
            </div>
            <div class="numero-item">
              <span class="numero">${perfil1.impressao}</span>
              <span class="tipo">Impressão</span>
            </div>
            <div class="numero-item">
              <span class="numero">${perfil1.expressao}</span>
              <span class="tipo">Expressão</span>
            </div>
            <div class="numero-item">
              <span class="numero">${perfil1.destino}</span>
              <span class="tipo">Destino</span>
            </div>
          </div>
        </div>
        
        <div class="perfil-pessoa">
          <h4>${nome2}</h4>
          <div class="numeros-pessoa">
            <div class="numero-item">
              <span class="numero">${perfil2.motivacao}</span>
              <span class="tipo">Motivação</span>
            </div>
            <div class="numero-item">
              <span class="numero">${perfil2.impressao}</span>
              <span class="tipo">Impressão</span>
            </div>
            <div class="numero-item">
              <span class="numero">${perfil2.expressao}</span>
              <span class="tipo">Expressão</span>
            </div>
            <div class="numero-item">
              <span class="numero">${perfil2.destino}</span>
              <span class="tipo">Destino</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="compatibilidade-scores">
        <h4>📊 Índices de Compatibilidade</h4>
        
        <div class="compatibility-card">
          <div class="compatibility-number">${compatibilidade.motivacao}</div>
          <div class="compatibility-type">Compatibilidade de Motivação</div>
          <p>Harmonia entre os desejos e aspirações mais profundos.</p>
        </div>
        
        <div class="compatibility-card">
          <div class="compatibility-number">${compatibilidade.impressao}</div>
          <div class="compatibility-type">Compatibilidade de Impressão</div>
          <p>Sintonia na forma como vocês se apresentam ao mundo.</p>
        </div>
        
        <div class="compatibility-card">
          <div class="compatibility-number">${compatibilidade.expressao}</div>
          <div class="compatibility-type">Compatibilidade de Expressão</div>
          <p>Harmonia na forma de se expressar e comunicar no relacionamento.</p>
        </div>
        
        <div class="compatibility-card">
          <div class="compatibility-number">${compatibilidade.destino}</div>
          <div class="compatibility-type">Compatibilidade de Destino</div>
          <p>Alinhamento dos propósitos de vida e caminhos evolutivos.</p>
        </div>
      </div>
      
      <div class="interpretation">
        <h4>Análise Geral da Compatibilidade</h4>
        <p>A compatibilidade geral entre ${nome1} e ${nome2} é de ${compatibilidade.geral.toFixed(1)} pontos.</p>
        <p>Quanto menor o número, maior a harmonia entre os perfis numerológicos.</p>
      </div>
      
      ${aspectosSinastria ? 
        `<div class="sinastria-original">
          <h4>💕 Aspectos da Vida em Casal - Número ${numeroPareja}</h4>
          <div class="aspectos-grid">
            <div class="aspecto-card">
              <h5>🌍 Contexto da União</h5>
              <p>${aspectosSinastria(numeroPareja, compatibilidade.geral).contexto}</p>
            </div>
            <div class="aspecto-card">
              <h5>💕 Vida Amorosa</h5>
              <p>${aspectosSinastria(numeroPareja, compatibilidade.geral).amor}</p>
            </div>
            <div class="aspecto-card">
              <h5>🏠 Vida Doméstica</h5>
              <p>${aspectosSinastria(numeroPareja, compatibilidade.geral).domestica}</p>
            </div>
            <div class="aspecto-card">
              <h5>💰 Vida Financeira</h5>
              <p>${aspectosSinastria(numeroPareja, compatibilidade.geral).financas}</p>
            </div>
            <div class="aspecto-card">
              <h5>👥 Vida Social</h5>
              <p>${aspectosSinastria(numeroPareja, compatibilidade.geral).social}</p>
            </div>
            <div class="aspecto-card">
              <h5>🎯 Objetivos</h5>
              <p>${aspectosSinastria(numeroPareja, compatibilidade.geral).objetivos}</p>
            </div>
            <div class="aspecto-card">
              <h5>🌱 Crescimento</h5>
              <p>${aspectosSinastria(numeroPareja, compatibilidade.geral).crescimento}</p>
            </div>
          </div>
        </div>` : ''}
    </div>
  `;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove("hidden");
}

// Funções de exemplo e utilitários
function preencherExemploMapa() {
  document.getElementById("nomeCompleto").value = "Maria Silva Santos";
  document.getElementById("dataNascimento").value = "1990-05-15";
}

function preencherExemploPiramide() {
  document.getElementById("nomePiramide").value = "João Carlos";
  document.getElementById("idadePiramide").value = "35";
}

function preencherExemploPinaculos() {
  document.getElementById("nomePinaculos").value = "Ana Beatriz";
  document.getElementById("dataPinaculos").value = "1985-12-03";
}

function preencherExemploSinastria() {
  document.getElementById("nomePessoa1").value = "Carlos Eduardo";
  document.getElementById("dataPessoa1").value = "1988-07-20";
  document.getElementById("nomePessoa2").value = "Fernanda Lima";
  document.getElementById("dataPessoa2").value = "1992-03-15";
}

// Função para expandir/contrair textos
function toggleTextoCompleto(button) {
  const textoCompleto = button.nextElementSibling;
  const textoExpandido = button.previousElementSibling;
  
  if (textoCompleto.classList.contains('hidden')) {
    textoCompleto.classList.remove('hidden');
    textoExpandido.style.display = 'none';
    button.textContent = 'Ver Resumo';
  } else {
    textoCompleto.classList.add('hidden');
    textoExpandido.style.display = 'block';
    button.textContent = 'Ver Texto Completo';
  }
}

// Funções de limpeza
function limparMapa() {
  document.getElementById("nomeCompleto").value = "";
  document.getElementById("dataNascimento").value = "";
  const resultados = document.getElementById("resultados-mapa");
  if (resultados) {
    resultados.innerHTML = "";
    resultados.classList.add("hidden");
  }
}

function limparCampos() {
  document.getElementById("nomeCompleto").value = "";
  document.getElementById("dataNascimento").value = "";
  const resultados = document.getElementById("resultados-mapa");
  if (resultados) {
    resultados.innerHTML = "";
    resultados.classList.add("hidden");
  }
}

function limparPiramide() {
  document.getElementById("nomePiramide").value = "";
  document.getElementById("idadePiramide").value = "";
  const resultados = document.getElementById("resultados-piramide");
  if (resultados) {
    resultados.innerHTML = "";
    resultados.classList.add("hidden");
  }
}

function limparPinaculos() {
  document.getElementById("nomePinaculos").value = "";
  document.getElementById("dataPinaculos").value = "";
  const resultados = document.getElementById("resultados-pinaculos");
  if (resultados) {
    resultados.innerHTML = "";
    resultados.classList.add("hidden");
  }
}

function limparSinastria() {
  document.getElementById("nomePessoa1").value = "";
  document.getElementById("dataPessoa1").value = "";
  document.getElementById("nomePessoa2").value = "";
  document.getElementById("dataPessoa2").value = "";
  const resultados = document.getElementById("resultados-sinastria");
  if (resultados) {
    resultados.innerHTML = "";
    resultados.classList.add("hidden");
  }
}

// Função de navegação entre abas (CORRIGIDA)
function changeTab(tabName) {
  console.log("🔄 Mudando para aba:", tabName);
  
  // Ocultar todas as seções
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Remover classe active de todas as abas
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Mostrar seção selecionada
  const targetSection = document.getElementById(tabName);
  if (targetSection) {
    targetSection.classList.add('active');
    console.log("✅ Seção ativada:", tabName);
  } else {
    console.error("❌ Seção não encontrada:", tabName);
  }
  
  // Ativar aba correspondente
  const targetTab = document.querySelector(`[onclick*="${tabName}"]`);
  if (targetTab) {
    targetTab.classList.add('active');
    console.log("✅ Aba ativada");
  }
}

// Inicialização do sistema
function inicializarSistema() {
  console.log("🚀 Inicializando Sistema Numeralis...");
  
  try {
    // Configurar primeira aba como ativa
    changeTab('mapa-pitagorico');
    
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

console.log("📜 Sistema Funcional Consolidado carregado!");

// FORÇAR ATUALIZAÇÃO GITHUB PAGES - 2024-11-17 21:40:00 - TEXTOS ORIGINAIS RESGATADOS
