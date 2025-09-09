// 🔧 Aurora Sagrada - Utilitários

// Tabelas de conversão
const TABELAS = {
    pitagorica: {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    },
    cabalistica: {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18,
        'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
    }
};

// Constantes
const NUMEROS_MESTRES = [11, 22, 33];
const NUMEROS_KARMICOS = [13, 14, 16, 19];

const ARCANOS_MAIORES = {
    0: "O Louco", 1: "O Mago", 2: "A Sacerdotisa", 3: "A Imperatriz", 4: "O Imperador",
    5: "O Papa", 6: "Os Enamorados", 7: "O Carro", 8: "A Justiça", 9: "O Eremita",
    10: "A Roda da Fortuna", 11: "A Força", 12: "O Enforcado", 13: "A Morte",
    14: "A Temperança", 15: "O Diabo", 16: "A Torre", 17: "A Estrela",
    18: "A Lua", 19: "O Sol", 20: "O Julgamento", 21: "O Mundo", 22: "O Louco"
};

const IMAGENS_ARCANOS = {
    0: 'assets/img/cartas/00-0-TheFool.jpg',
    1: 'assets/img/cartas/01-I-TheMagician.jpg',
    2: 'assets/img/cartas/02-II-TheHighPriestess.jpg',
    3: 'assets/img/cartas/03-III-TheEmpress.jpg',
    4: 'assets/img/cartas/04-IV-TheEmperor.jpg',
    5: 'assets/img/cartas/05-V-TheHierophant.jpg',
    6: 'assets/img/cartas/06-VI-TheLovers.jpg',
    7: 'assets/img/cartas/07-VII-TheChariot.jpg',
    8: 'assets/img/cartas/08-VIII-Strength.jpg',
    9: 'assets/img/cartas/09-IX-TheHermit.jpg',
    10: 'assets/img/cartas/10-X-WheelofFortune.jpg',
    11: 'assets/img/cartas/11-XI-Justice.jpg',
    12: 'assets/img/cartas/12-XII-TheHangedMan.jpg',
    13: 'assets/img/cartas/13-XIII-Death.jpg',
    14: 'assets/img/cartas/14-XIV-Temperance.jpg',
    15: 'assets/img/cartas/15-XV-TheDevil.jpg',
    16: 'assets/img/cartas/16-XVI-TheTower.jpg',
    17: 'assets/img/cartas/17-XVII-TheStar.jpg',
    18: 'assets/img/cartas/18-XVIII-TheMoon.jpg',
    19: 'assets/img/cartas/19-XIX-TheSun.jpg',
    20: 'assets/img/cartas/20-XX-Judgement.jpg',
    21: 'assets/img/cartas/21-XXI-TheWorld.jpg',
    22: 'assets/img/cartas/00-0-TheFool.jpg'
};

/**
 * Normaliza texto removendo acentos e convertendo para maiúsculo
 * @param {string} texto - Texto a ser normalizado
 * @returns {string} Texto normalizado
 */
function normalizarTexto(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
}

/**
 * Reduz número preservando números mestres
 * @param {number} numero - Número a ser reduzido
 * @returns {number} Número reduzido
 */
function reduzirNumero(numero) {
    if (NUMEROS_MESTRES.includes(numero)) {
        return numero;
    }
    
    while (numero > 9) {
        numero = numero.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        if (NUMEROS_MESTRES.includes(numero)) {
            return numero;
        }
    }
    return numero;
}

/**
 * Reduz número para range de arcanos (1-22)
 * @param {number} numero - Número a ser reduzido
 * @returns {number} Número entre 1-22
 */
function reduzirParaArcano(numero) {
    while (numero > 22) {
        numero = numero.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return numero === 0 ? 22 : numero;
}

/**
 * Calcula valor numérico usando tabela especificada
 * @param {string} texto - Texto a ser calculado
 * @param {string} nomeTabela - Nome da tabela ('pitagorica' ou 'cabalistica')
 * @returns {number} Valor numérico
 */
function calcularComTabela(texto, nomeTabela) {
    const tabela = TABELAS[nomeTabela];
    const textoNormalizado = normalizarTexto(texto);
    return textoNormalizado.split('').reduce((soma, letra) => {
        return soma + (tabela[letra] || 0);
    }, 0);
}

/**
 * Separa vogais de um texto
 * @param {string} texto - Texto de entrada
 * @returns {string} Apenas as vogais
 */
function extrairVogais(texto) {
    return normalizarTexto(texto).replace(/[^AEIOU]/g, '');
}

/**
 * Separa consoantes de um texto
 * @param {string} texto - Texto de entrada
 * @returns {string} Apenas as consoantes
 */
function extrairConsoantes(texto) {
    return normalizarTexto(texto).replace(/[AEIOU\s]/g, '');
}

/**
 * Verifica se é número mestre
 * @param {number} numero - Número a verificar
 * @returns {boolean} True se for número mestre
 */
function ehNumeroMestre(numero) {
    return NUMEROS_MESTRES.includes(numero);
}

/**
 * Verifica se é número kármico
 * @param {number} numero - Número a verificar
 * @returns {boolean} True se for número kármico
 */
function ehNumeroKarmico(numero) {
    return NUMEROS_KARMICOS.includes(numero);
}

/**
 * Calcula semana ISO (padrão internacional)
 * @param {Date|string} data - Data para calcular
 * @returns {number} Número da semana ISO
 */
function obterSemanaISO(data) {
    const d = new Date(data);
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

/**
 * Gera hash único para cache
 * @param {string} nome - Nome da pessoa
 * @param {string} data - Data de nascimento
 * @param {string} tabela - Tipo de tabela
 * @returns {string} Hash único
 */
function gerarHash(nome, data, tabela) {
    return `${nome.toLowerCase().replace(/\s/g, '')}-${data}-${tabela}`;
}

/**
 * Valida data de nascimento
 * @param {string} data - Data no formato YYYY-MM-DD
 * @returns {boolean} True se válida
 */
function validarData(data) {
    if (!data) return false;
    const dataObj = new Date(data);
    const hoje = new Date();
    return dataObj instanceof Date && !isNaN(dataObj) && dataObj <= hoje;
}

/**
 * Valida nome
 * @param {string} nome - Nome a validar
 * @returns {boolean} True se válido
 */
function validarNome(nome) {
    return nome && nome.trim().length >= 2;
}

/**
 * Calcula idade baseada na data de nascimento
 * @param {string} dataNascimento - Data no formato YYYY-MM-DD
 * @returns {number} Idade em anos
 */
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();
    
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    
    return idade;
}

/**
 * Formata data para exibição
 * @param {string} data - Data no formato YYYY-MM-DD
 * @returns {string} Data formatada
 */
function formatarData(data) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
}

/**
 * Debounce para otimizar performance
 * @param {Function} func - Função a ser executada
 * @param {number} delay - Delay em milissegundos
 * @returns {Function} Função com debounce
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Mostra mensagem de erro
 * @param {string} mensagem - Mensagem de erro
 * @param {HTMLElement} container - Container para exibir erro
 */
function mostrarErro(mensagem, container) {
    container.innerHTML = `<div class="as-error">${mensagem}</div>`;
}

/**
 * Mostra indicador de carregamento
 * @param {HTMLElement} container - Container para exibir loading
 */
function mostrarLoading(container) {
    container.innerHTML = '<div class="as-loading">🔮 Calculando sua numerologia...</div>';
}

/**
 * Limpa conteúdo de um container
 * @param {HTMLElement} container - Container a ser limpo
 */
function limparContainer(container) {
    container.innerHTML = '';
}

// Exportar para uso global
window.AuroraUtils = {
    TABELAS,
    NUMEROS_MESTRES,
    NUMEROS_KARMICOS,
    ARCANOS_MAIORES,
    IMAGENS_ARCANOS,
    normalizarTexto,
    reduzirNumero,
    reduzirParaArcano,
    calcularComTabela,
    extrairVogais,
    extrairConsoantes,
    ehNumeroMestre,
    ehNumeroKarmico,
    obterSemanaISO,
    gerarHash,
    validarData,
    validarNome,
    calcularIdade,
    formatarData,
    debounce,
    mostrarErro,
    mostrarLoading,
    limparContainer
};

