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
    if (typeof arcanosImagens !== "undefined") {
      window.arcanosImagens = arcanosImagens;
      console.log("✅ Arcanos Imagens mapeados");
    }
    if (typeof arcanosLinks !== "undefined") {
      window.arcanosLinks = arcanosLinks;
      console.log("✅ Arcanos Links mapeados");
    }
    if (typeof sinastria_expandida !== "undefined") {
      window.sinastria_expandida = sinastria_expandida;
      console.log("✅ Sinastria expandida mapeada");
    }
    // Mapear sequências negativas expandidas para uso global, se disponíveis
    if (typeof sequenciasNegativasExpandidas !== "undefined") {
      window.sequenciasNegativasExpandidas = sequenciasNegativasExpandidas;
      console.log("✅ Sequências Negativas mapeadas");
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
  
  // Cálculos básicos existentes
  const motivacao = calcularNumeroNome(nomeNormalizado.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, ''));
  const impressao = calcularNumeroNome(nomeNormalizado.replace(/[AEIOU]/g, ''));
  const expressao = calcularNumeroNome(nomeCompleto);
  
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  
  const destino = reduzirNumero(dia + mes + ano);
  
  // NOVAS CATEGORIAS NUMEROLÓGICAS
  
  // 1. Primeiro Nome (personalidade íntima)
  const primeiroNome = nomeCompleto.split(' ')[0];
  const numeroprimeiroNome = calcularNumeroNome(primeiroNome);
  
  // 2. Sobrenome (herança familiar)
  const partesNome = nomeCompleto.split(' ');
  const sobrenome = partesNome[partesNome.length - 1];
  const numeroSobrenome = calcularNumeroNome(sobrenome);
  
  // 3. Número de Maturidade (Expressão + Destino)
  const maturidade = reduzirNumero(expressao + destino);
  
  // 4. Ponte/Equilíbrio (diferença entre Expressão e Destino)
  const ponte = Math.abs(expressao - destino);
  
  // 5. Ano Pessoal atual
  const anoAtual = new Date().getFullYear();
  const anoPessoal = reduzirNumero(dia + mes + anoAtual);
  
  // 6. Lições Cármicas (números ausentes no nome)
  const licoescarmicas = calcularLicoesCarmicas(nomeCompleto);
  
  // 7. Números de Intensidade (frequência de cada número)
  const intensidade = calcularIntensidade(nomeCompleto);
  
  // 8. Desafios Pessoais (4 desafios baseados na data)
  const desafios = calcularDesafiosPessoais(dia, mes, ano);
  
  return {
    // Categorias originais
    motivacao,
    impressao,
    expressao,
    destino,
    nomeCompleto,
    dataNascimento,
    
    // Novas categorias
    primeiroNome: numeroprimeiroNome,
    sobrenome: numeroSobrenome,
    maturidade,
    ponte,
    anoPessoal,
    licoescarmicas,
    intensidade,
    desafios,
    
    // Ciclos e Períodos
    ciclosVida: calcularCiclosVida(dia, mes, ano),
    periodosAprendizado: calcularPeriodosAprendizado(dia, mes, ano),
    
    // Novas categorias numerológicas detalhadas
    numeroMissao: reduzirNumero(motivacao + destino),
    euInterior: reduzirNumero(motivacao + impressao),
    herancaFamiliar: calcularHerancaFamiliar(nomeCompleto, dia, mes, ano),
    destinoFinal: reduzirNumero(motivacao + expressao + destino)
  };
}

// FUNÇÕES AUXILIARES PARA NOVAS CATEGORIAS

// Calcular Lições Cármicas (números ausentes)
function calcularLicoesCarmicas(nomeCompleto) {
  const nomeNormalizado = normalizarTexto(nomeCompleto);
  const numerosPresentes = new Set();
  
  for (let char of nomeNormalizado) {
    if (char !== ' ' && tabelaPitagorica[char]) {
      numerosPresentes.add(tabelaPitagorica[char]);
    }
  }
  
  const licoes = [];
  for (let i = 1; i <= 9; i++) {
    if (!numerosPresentes.has(i)) {
      licoes.push(i);
    }
  }
  
  return licoes;
}

// Calcular Intensidade (frequência dos números)
function calcularIntensidade(nomeCompleto) {
  const nomeNormalizado = normalizarTexto(nomeCompleto);
  const contagem = {};
  
  for (let i = 1; i <= 9; i++) {
    contagem[i] = 0;
  }
  
  for (let char of nomeNormalizado) {
    if (char !== ' ' && tabelaPitagorica[char]) {
      contagem[tabelaPitagorica[char]]++;
    }
  }
  
  return contagem;
}

// Calcular Desafios Pessoais
function calcularDesafiosPessoais(dia, mes, ano) {
  const diaReduzido = reduzirNumero(dia);
  const mesReduzido = reduzirNumero(mes);
  const anoReduzido = reduzirNumero(ano);
  
  const desafio1 = Math.abs(diaReduzido - mesReduzido);
  const desafio2 = Math.abs(diaReduzido - anoReduzido);
  const desafio3 = Math.abs(desafio1 - desafio2);
  const desafio4 = Math.abs(mesReduzido - anoReduzido);
  
  return {
    primeiro: desafio1,
    segundo: desafio2,
    terceiro: desafio3,
    quarto: desafio4
  };
}

// Calcular Ciclos de Vida (3 grandes ciclos baseados na data de nascimento)
function calcularCiclosVida(dia, mes, ano) {
  const diaReduzido = reduzirNumero(dia);
  const mesReduzido = reduzirNumero(mes);
  const anoReduzido = reduzirNumero(ano);
  
  // Ciclo 1: Baseado no mês de nascimento
  const ciclo1 = mesReduzido;
  
  // Ciclo 2: Baseado no dia de nascimento  
  const ciclo2 = diaReduzido;
  
  // Ciclo 3: Baseado no ano de nascimento
  const ciclo3 = anoReduzido;
  
  // Calcular idades de transição
  const idade1 = 36 - reduzirNumero(dia + mes + ano);
  const idade2 = idade1 + 27;
  
  return {
    ciclo1: {
      numero: ciclo1,
      periodo: `Nascimento - ${idade1} anos`,
      fase: "Formação e Descoberta"
    },
    ciclo2: {
      numero: ciclo2,
      periodo: `${idade1 + 1} - ${idade2} anos`,
      fase: "Produtividade e Realização"
    },
    ciclo3: {
      numero: ciclo3,
      periodo: `${idade2 + 1}+ anos`,
      fase: "Sabedoria e Legado"
    },
    transicoes: {
      primeira: idade1,
      segunda: idade2
    }
  };
}

// Calcular Períodos de Aprendizado e Entrega
function calcularPeriodosAprendizado(dia, mes, ano) {
  const destino = reduzirNumero(dia + mes + ano);
  const idadeAtual = new Date().getFullYear() - ano;
  
  // Período de Aprendizado: primeiros 36 anos
  const periodoAprendizado = {
    numero: reduzirNumero(mes + ano),
    periodo: "0 - 36 anos",
    fase: "Aprendizado e Preparação",
    ativo: idadeAtual <= 36
  };
  
  // Período de Entrega: após 36 anos
  const periodoEntrega = {
    numero: reduzirNumero(dia + destino),
    periodo: "37+ anos",
    fase: "Entrega e Serviço",
    ativo: idadeAtual > 36
  };
  
  return {
    aprendizado: periodoAprendizado,
    entrega: periodoEntrega,
    idadeAtual: idadeAtual,
    faseAtual: idadeAtual <= 36 ? "Aprendizado" : "Entrega"
  };
}

// Calcular Herança Familiar (padrões herdados e carmas familiares)
function calcularHerancaFamiliar(nomeCompleto, dia, mes, ano) {
  const nomeNormalizado = normalizarTexto(nomeCompleto);
  
  // Analisar padrões numéricos no nome
  const contagem = {};
  for (let i = 1; i <= 9; i++) {
    contagem[i] = 0;
  }
  
  for (let char of nomeNormalizado) {
    if (char !== ' ' && tabelaPitagorica[char]) {
      contagem[tabelaPitagorica[char]]++;
    }
  }
  
  // Encontrar número mais repetido (herança dominante)
  let numeroMaisRepetido = 1;
  let maiorFrequencia = contagem[1];
  
  for (let i = 2; i <= 9; i++) {
    if (contagem[i] > maiorFrequencia) {
      maiorFrequencia = contagem[i];
      numeroMaisRepetido = i;
    }
  }
  
  // Se não há repetições significativas, usar combinação nome + nascimento
  if (maiorFrequencia <= 1) {
    const somaTotal = calcularNumeroNome(nomeCompleto) + dia + mes + ano;
    numeroMaisRepetido = reduzirNumero(somaTotal);
  }
  
  return {
    numero: numeroMaisRepetido,
    frequencia: maiorFrequencia,
    padrao: maiorFrequencia > 2 ? 'Forte' : maiorFrequencia > 1 ? 'Moderado' : 'Sutil'
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
      <h3>🌟 Mapa Pitagórico Completo Expandido</h3>
      
      <!-- SEÇÃO ESPECIAL DOS NÚMEROS FUNDAMENTAIS -->
      <div class="fundamental-numbers-section">
        <h2 class="fundamental-title">✦ Números Fundamentais da Sua Alma ✦</h2>
        <div class="explanation-text">
          <p>Estes são os quatro pilares da sua personalidade numerológica. Cada um revela um aspecto essencial de quem você é e como você se relaciona com o mundo. Juntos, eles formam o retrato completo da sua essência e do seu propósito de vida.</p>
        </div>
        
        <div class="fundamental-grid">
          <div class="fundamental-card destino">
              <div class="fundamental-card">
          <div class="fundamental-symbol">☀️</div>
          <div class="fundamental-label">Número de Destino</div>
          <div class="fundamental-number">${perfil.destino}</div>
          <div class="fundamental-desc">O propósito da encarnação, o caminho que a vida oferece</div>
        </div>
        
        <div class="fundamental-card">
          <div class="fundamental-symbol">🕊️</div>
          <div class="fundamental-label">Número da Alma</div>
          <div class="fundamental-number">${perfil.motivacao}</div>
          <div class="fundamental-desc">Desejos internos, o que motiva e busca inconscientemente</div>
        </div>
        
        <div class="fundamental-card">
          <div class="fundamental-symbol">💎</div>
          <div class="fundamental-label">Número da Expressão</div>
          <div class="fundamental-number">${perfil.expressao}</div>
          <div class="fundamental-desc">Talentos naturais e capacidades que expressa no mundo</div>
        </div>
        
        <div class="fundamental-card">
          <div class="fundamental-symbol">🌹</div>
          <div class="fundamental-label">Número da Impressão</div>
          <div class="fundamental-number">${perfil.impressao}</div>
          <div class="fundamental-desc">A máscara social, primeira impressão que transmite</div>
        </div>  </div>
        </div>
      </div>
      
      <!-- Seção dos Números Complementares -->
      <div class="fundamental-numbers-section">
        <h2 class="fundamental-title">✨ Números Complementares da Sua Jornada ✨</h2>
        <div class="explanation-text">
          <p>Estes números aprofundam a compreensão do seu mapa numerológico, revelando aspectos mais sutis da sua personalidade e jornada. Eles mostram como suas energias fundamentais se combinam e interagem, oferecendo insights sobre sua missão, conflitos internos e potencial de realização.</p>
        </div>
        
        <div class="fundamental-grid">
          <div class="fundamental-card">
            <div class="fundamental-symbol">🌙</div>
            <div class="fundamental-label">Número de Missão</div>
            <div class="fundamental-number">${perfil.numeroMissao}</div>
            <div class="fundamental-desc">O que você veio aprender e desenvolver nesta vida</div>
          </div>
          
          <div class="fundamental-card">
            <div class="fundamental-symbol">🔥</div>
            <div class="fundamental-label">Eu Interior</div>
            <div class="fundamental-number">${perfil.euInterior}</div>
            <div class="fundamental-desc">Harmonia entre o que sente e o que mostra ao mundo</div>
          </div>
          
          <div class="fundamental-card">
            <div class="fundamental-symbol">🌿</div>
            <div class="fundamental-label">Herança Familiar</div>
            <div class="fundamental-number">${perfil.herancaFamiliar.numero}</div>
            <div class="fundamental-desc">Padrões herdados e influências ancestrais (${perfil.herancaFamiliar.padrao})</div>
          </div>
          
          <div class="fundamental-card">
            <div class="fundamental-symbol">🌟</div>
            <div class="fundamental-label">Destino Final</div>
            <div class="fundamental-number">${perfil.destinoFinal}</div>
            <div class="fundamental-desc">Síntese de todas as partes do seu mapa numerológico</div>
          </div>
        </div>
      </div>
      
      <div class="number-display">
        <h4>🔍 Análise Complementar</h4>
        Primeiro Nome: ${perfil.primeiroNome} | Sobrenome: ${perfil.sobrenome} | 
        Maturidade: ${perfil.maturidade} | Ponte: ${perfil.ponte} | Ano Pessoal: ${perfil.anoPessoal}
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
    
    // NOVAS CATEGORIAS COM INTERPRETAÇÕES
    
    // Expressão e Destino (se disponíveis)
    if (interpretacoes.expressao && interpretacoes.expressao[perfil.expressao]) {
      const expr = interpretacoes.expressao[perfil.expressao];
      html += `
        <div class="result-item">
          <h4>🎯 Expressão ${perfil.expressao}</h4>
          <p><strong>${expr.titulo}</strong></p>
          <p>${expr.texto}</p>
        </div>
      `;
    }
    
    if (interpretacoes.destino && interpretacoes.destino[perfil.destino]) {
      const dest = interpretacoes.destino[perfil.destino];
      html += `
        <div class="result-item">
          <h4>🛤️ Destino ${perfil.destino}</h4>
          <p><strong>${dest.titulo}</strong></p>
          <p>${dest.texto}</p>
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
  
  // SEÇÕES ADICIONAIS
  
  // Lições Cármicas
  if (perfil.licoescarmicas && perfil.licoescarmicas.length > 0) {
    html += `
      <div class="result-item">
        <h4>⚖️ Lições Cármicas</h4>
        <div class="explanation-text">
          <p>Os números ausentes no seu nome completo representam as <strong>Lições Cármicas</strong>. Estas são áreas de fraqueza ou aprendizados que sua alma não integrou em vidas passadas e que agora se apresentam como desafios a serem superados. A ausência de um número indica uma energia que você precisa desenvolver e cultivar nesta vida para alcançar um maior equilíbrio.</p>
        </div>
        <p><strong>Números Ausentes:</strong> ${perfil.licoescarmicas.join(', ')}</p>
      </div>
    `;
  }
  
  // Intensidade dos Números
  html += `
      <div class="result-item">
        <h4>📈 Intensidade dos Números</h4>
        <div class="explanation-text">
          <p>A frequência com que cada número (de 1 a 9) aparece nas letras do seu nome revela a <strong>Intensidade</strong> dessas energias em sua personalidade. Números com alta frequência indicam talentos e características fortes, enquanto números com baixa frequência (ou ausentes) apontam para as Lições Cármicas. Esta análise mostra quais energias são dominantes e quais precisam de mais atenção.</p>
        </div>
      <div class="intensity-grid">
  `;
  
  for (let i = 1; i <= 9; i++) {
    const count = perfil.intensidade[i] || 0;
    const intensity = count === 0 ? 'ausente' : count === 1 ? 'normal' : count === 2 ? 'forte' : 'muito forte';
    html += `<span class="intensity-item">Número ${i}: ${count} (${intensity})</span>`;
  }
  
  html += `
      </div>
      <p>A intensidade mostra como cada número se manifesta em sua personalidade.</p>
    </div>
  `;
  
  // Desafios Pessoais
  html += `
      <div class="result-item">
        <h4>🎯 Desafios Pessoais</h4>
        <div class="explanation-text">
          <p>Calculados a partir de subtrações entre os números da sua data de nascimento, os <strong>Desafios Pessoais</strong> representam os obstáculos específicos que você encontrará em diferentes fases da sua vida. Eles são como "pedras no sapato" que, uma vez superadas, se transformam em grandes fontes de força e sabedoria. Existem quatro desafios principais que marcam sua jornada.</p>
        </div>
      <p><strong>1º Desafio (Juventude):</strong> ${perfil.desafios.primeiro}</p>
      <p><strong>2º Desafio (Idade Adulta):</strong> ${perfil.desafios.segundo}</p>
      <p><strong>3º Desafio (Principal):</strong> ${perfil.desafios.terceiro}</p>
      <p><strong>4º Desafio (Maturidade):</strong> ${perfil.desafios.quarto}</p>
      <p>Os desafios representam obstáculos a superar em diferentes fases da vida.</p>
    </div>
  `;
  
  // Ciclos de Vida
  html += `
      <div class="result-item">
        <h4>🔄 Ciclos de Vida</h4>
        <div class="explanation-text">
          <p>Sua vida é dividida em três grandes <strong>Ciclos</strong>, cada um governado por um número específico derivado da sua data de nascimento. O primeiro ciclo (formativo) vai do nascimento até a maturidade (por volta dos 28-35 anos), o segundo (produtivo) cobre a fase adulta, e o terceiro (colheita) abrange a fase mais madura da vida. Cada ciclo traz um tema central e um conjunto de experiências.</p>
        </div>
      <div class="cycles-grid">
        <div class="cycle-card">
          <h5>1º Ciclo - Número ${perfil.ciclosVida.ciclo1.numero}</h5>
          <p><strong>Período:</strong> ${perfil.ciclosVida.ciclo1.periodo}</p>
          <p><strong>Fase:</strong> ${perfil.ciclosVida.ciclo1.fase}</p>
        </div>
        <div class="cycle-card">
          <h5>2º Ciclo - Número ${perfil.ciclosVida.ciclo2.numero}</h5>
          <p><strong>Período:</strong> ${perfil.ciclosVida.ciclo2.periodo}</p>
          <p><strong>Fase:</strong> ${perfil.ciclosVida.ciclo2.fase}</p>
        </div>
        <div class="cycle-card">
          <h5>3º Ciclo - Número ${perfil.ciclosVida.ciclo3.numero}</h5>
          <p><strong>Período:</strong> ${perfil.ciclosVida.ciclo3.periodo}</p>
          <p><strong>Fase:</strong> ${perfil.ciclosVida.ciclo3.fase}</p>
        </div>
      </div>
      <p>Os três grandes ciclos da vida representam as energias dominantes em cada fase da sua jornada.</p>
    </div>
  `;
  
  // Períodos de Aprendizado e Entrega
  html += `
      <div class="result-item">
        <h4>🎓 Períodos de Aprendizado e Entrega</h4>
        <div class="explanation-text">
          <p>Dentro dos grandes Ciclos de Vida, sua jornada é dividida em dois <strong>Períodos</strong> principais. O <strong>Período de Aprendizado</strong> foca na aquisição de conhecimento, desenvolvimento pessoal e experiências. O <strong>Período de Entrega</strong> é quando você começa a aplicar esse conhecimento acumulado para servir ao mundo e cumprir seu propósito de forma mais concreta. A transição entre eles é um marco importante.</p>
        </div>
      <div class="periods-grid">
        <div class="period-card ${perfil.periodosAprendizado.aprendizado.ativo ? 'active' : ''}">
          <h5>Período de Aprendizado - Número ${perfil.periodosAprendizado.aprendizado.numero}</h5>
          <p><strong>Período:</strong> ${perfil.periodosAprendizado.aprendizado.periodo}</p>
          <p><strong>Fase:</strong> ${perfil.periodosAprendizado.aprendizado.fase}</p>
          ${perfil.periodosAprendizado.aprendizado.ativo ? '<p class="current-phase">✨ FASE ATUAL</p>' : ''}
        </div>
        <div class="period-card ${perfil.periodosAprendizado.entrega.ativo ? 'active' : ''}">
          <h5>Período de Entrega - Número ${perfil.periodosAprendizado.entrega.numero}</h5>
          <p><strong>Período:</strong> ${perfil.periodosAprendizado.entrega.periodo}</p>
          <p><strong>Fase:</strong> ${perfil.periodosAprendizado.entrega.fase}</p>
          ${perfil.periodosAprendizado.entrega.ativo ? '<p class="current-phase">✨ FASE ATUAL</p>' : ''}
        </div>
      </div>
      <p><strong>Sua idade atual:</strong> ${perfil.periodosAprendizado.idadeAtual} anos - <strong>Fase atual:</strong> ${perfil.periodosAprendizado.faseAtual}</p>
      <p>O período de aprendizado foca na aquisição de conhecimento e experiências. O período de entrega é quando aplicamos esse conhecimento para servir ao mundo.</p>
    </div>
  `;
  
  // Análise do Ano Pessoal
  html += `
      <div class="result-item">
        <h4>📅 Ciclo Anual Atual</h4>
        <div class="explanation-text">
          <p>Calculado a partir da soma do seu dia e mês de nascimento com o ano corrente, o <strong>Ano Pessoal</strong> descreve a energia dominante que influenciará sua vida durante o ano. A cada aniversário, você entra em um novo Ano Pessoal, que segue um ciclo de 9 anos. Saber seu número anual ajuda a aproveitar as oportunidades e a navegar os desafios de cada período.</p>
        </div>
      <p><strong>Ano Pessoal ${perfil.anoPessoal}:</strong> Este é o seu ciclo numerológico atual.</p>
      <p>Cada ano pessoal traz energias e oportunidades específicas para crescimento.</p>
    </div>
  `;
  
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
  const nome = document.getElementById("nomePiramide").value.trim();
  const idadeVal = parseInt(document.getElementById("idadePiramide").value, 10);
  if (!nome || isNaN(idadeVal)) {
    alert("Por favor, preencha nome e idade.");
    return;
  }
  const resultadoDiv = document.getElementById("resultados-piramide");
  if (!resultadoDiv) {
    console.error("Elemento resultados-piramide não encontrado!");
    return;
  }
  // Calcular número base combinando nome e idade
  const numeroBase = reduzirNumero(calcularNumeroNome(nome) + idadeVal);
  // Obter informações do arcano se disponíveis
  let arcanoInfo = null;
  if (typeof getInfoArcano === 'function') {
    arcanoInfo = getInfoArcano(numeroBase);
  }
  const arcanoNome = arcanoInfo && arcanoInfo.nome ? arcanoInfo.nome : `Arcano ${numeroBase}`;
  const imgSrc = (typeof getCaminhoImagemArcano === 'function' && arcanoInfo) ? getCaminhoImagemArcano(numeroBase) : '';
  let html = `
    <div class="resultado-header">
      <h3>🔺 Pirâmide Cabalística</h3>
      <div class="numeros-resumo">Arcano Atual: ${arcanoNome} (${numeroBase})</div>
    </div>
  `;
  if (imgSrc) {
    html += `<img src="${imgSrc}" alt="${arcanoNome}" style="max-width:150px;">`;
  }
  // Verificar sequências negativas expandidas
  if (typeof sequenciasNegativasExpandidas !== 'undefined' && sequenciasNegativasExpandidas[numeroBase]) {
    const seq = sequenciasNegativasExpandidas[numeroBase];
    html += `<div class="result-item"><h4>⚠️ Sequência Negativa ${numeroBase}</h4><p><strong>${seq.titulo}</strong></p><p>${seq.significado}</p></div>`;
  }
  resultadoDiv.innerHTML = html;
  resultadoDiv.classList.remove("hidden");
  resultadoDiv.scrollIntoView({ behavior: "smooth" });
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
  const nome = document.getElementById("nomePinaculos").value.trim();
  const data = document.getElementById("dataPinaculos").value;
  
  if (!nome || !data) {
    alert("Por favor, preencha nome e data de nascimento.");
    return;
  }
  
  const partesData = data.split("-");
  if (partesData.length !== 3) {
    alert("Formato de data inválido. Use AAAA-MM-DD");
    return;
  }
  
  const ano = parseInt(partesData[0]);
  const mes = parseInt(partesData[1]);
  const dia = parseInt(partesData[2]);
  
  // Cálculos dos Pináculos
  const pinaculo1 = reduzirNumero(mes + dia);
  const pinaculo2 = reduzirNumero(dia + ano);
  const pinaculo3 = reduzirNumero(pinaculo1 + pinaculo2);
  const pinaculo4 = reduzirNumero(mes + ano);
  
  // Idades dos Pináculos
  const numeroDestino = reduzirNumero(mes + dia + ano);
  const idade1 = 36 - numeroDestino;
  const idade2 = idade1 + 9;
  const idade3 = idade2 + 9;
  
  // Exibir resultados no contêiner correto
  const resultado = document.getElementById("resultados-pinaculos");
  if (!resultado) {
    console.error("Elemento resultados-pinaculos não encontrado!");
    return;
  }
  // Preparar HTML de interpretações detalhadas, exibindo título e texto completo
  function gerarInterpretacao(pin) {
    if (window.interpretacoesPinaculos && window.interpretacoesPinaculos[pin]) {
      const inter = window.interpretacoesPinaculos[pin];
      // Caso o texto seja um objeto com propriedades titulo/texto, exibimos ambos
      if (typeof inter === 'object' && inter.titulo && inter.texto) {
        return `<p><strong>${inter.titulo}</strong></p><p>${inter.texto}</p>`;
      }
      // Se for string ou outro tipo, retornamos diretamente
      return inter;
    }
    return `<p>Interpretação para o Pináculo ${pin} em desenvolvimento.</p>`;
  }
  
  resultado.innerHTML = `
    <div class="resultado-header">
      <h3>🏔️ Pináculos da Vida</h3>
      <div class="numeros-resumo">Pináculos: ${pinaculo1} | ${pinaculo2} | ${pinaculo3} | ${pinaculo4}</div>
    </div>
    <div class="interpretacao-container">
      <div class="numero-titulo">
        <h4>🌅 1º Pináculos (Nascimento aos ${idade1} anos): ${pinaculo1}</h4>
      </div>
      <div class="interpretacao-texto">
        ${gerarInterpretacao(pinaculo1)}
      </div>
      
      <div class="numero-titulo">
        <h4>🌞 2º Pináculos (${idade1 + 1} aos ${idade2} anos): ${pinaculo2}</h4>
      </div>
      <div class="interpretacao-texto">
        ${gerarInterpretacao(pinaculo2)}
      </div>
      
      <div class="numero-titulo">
        <h4>🌅 3º Pináculos (${idade2 + 1} aos ${idade3} anos): ${pinaculo3}</h4>
      </div>
      <div class="interpretacao-texto">
        ${gerarInterpretacao(pinaculo3)}
      </div>
      
      <div class="numero-titulo">
        <h4>🌟 4º Pináculos (${idade3 + 1} anos em diante): ${pinaculo4}</h4>
      </div>
      <div class="interpretacao-texto">
        ${gerarInterpretacao(pinaculo4)}
      </div>
    </div>
  `;
  
  resultado.classList.remove("hidden");
  resultado.scrollIntoView({ behavior: "smooth" });
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
  const nome1 = document.getElementById("nomePessoa1").value.trim();
  const data1 = document.getElementById("dataPessoa1").value;
  const nome2 = document.getElementById("nomePessoa2").value.trim();
  const data2 = document.getElementById("dataPessoa2").value;
  
  if (!nome1 || !data1 || !nome2 || !data2) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  
  // Calcular números para pessoa 1
  const motivacao1 = calcularMotivacao(nome1);
  const impressao1 = calcularImpressao(nome1);
  const expressao1 = calcularExpressao(nome1);
  const destino1 = calcularDestino(data1.replace(/-/g, "/"));
  
  // Calcular números para pessoa 2
  const motivacao2 = calcularMotivacao(nome2);
  const impressao2 = calcularImpressao(nome2);
  const expressao2 = calcularExpressao(nome2);
  const destino2 = calcularDestino(data2.replace(/-/g, "/"));
  
  // Calcular compatibilidade
  const compatibilidadeMotivacao = calcularCompatibilidade(motivacao1, motivacao2);
  const compatibilidadeImpressao = calcularCompatibilidade(impressao1, impressao2);
  const compatibilidadeExpressao = calcularCompatibilidade(expressao1, expressao2);
  const compatibilidadeDestino = calcularCompatibilidade(destino1, destino2);
  
  const compatibilidadeGeral = Math.round((compatibilidadeMotivacao + compatibilidadeImpressao + compatibilidadeExpressao + compatibilidadeDestino) / 4);
  
  // Exibir resultados no contêiner correto
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
          <strong>Motivação (${motivacao1} ↔ ${motivacao2}):</strong> ${compatibilidadeMotivacao}%
          <p>Compatibilidade dos desejos internos e motivações profundas.</p>
        </div>
        <div class="compatibilidade-item">
          <strong>Impressão (${impressao1} ↔ ${impressao2}):</strong> ${compatibilidadeImpressao}%
          <p>Compatibilidade da primeira impressão e energia externa.</p>
        </div>
        <div class="compatibilidade-item">
          <strong>Expressão (${expressao1} ↔ ${expressao2}):</strong> ${compatibilidadeExpressao}%
          <p>Compatibilidade dos talentos naturais e forma de expressão.</p>
        </div>
        <div class="compatibilidade-item">
          <strong>Destino (${destino1} ↔ ${destino2}):</strong> ${compatibilidadeDestino}%
          <p>Compatibilidade dos caminhos de vida e propósitos.</p>
        </div>
        
        <div class="interpretacao-geral">
          ${window.sinastria_expandida && window.sinastria_expandida[compatibilidadeGeral] ? window.sinastria_expandida[compatibilidadeGeral] : `<p>Interpretação detalhada para ${compatibilidadeGeral}% de compatibilidade em desenvolvimento.</p>`}
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
}

console.log("✅ SISTEMA FUNCIONAL CARREGADO COM SUCESSO!");
