// 💕 Aurora Sagrada - Compatibilidade Amorosa

// Cache para dados de compatibilidade
let dadosCompatibilidade = null;

/**
 * Carrega dados de compatibilidade do arquivo JSON
 * @returns {Promise<Object>} Dados de compatibilidade
 */
async function carregarDadosCompatibilidade() {
    if (dadosCompatibilidade) {
        return dadosCompatibilidade;
    }
    
    try {
        const response = await fetch('data/compat.json');
        dadosCompatibilidade = await response.json();
        return dadosCompatibilidade;
    } catch (error) {
        console.error('Erro ao carregar dados de compatibilidade:', error);
        return gerarCompatibilidadeBasica();
    }
}

/**
 * Calcula compatibilidade entre dois perfis
 * @param {Object} perfil1 - Primeiro perfil numerológico
 * @param {Object} perfil2 - Segundo perfil numerológico
 * @returns {Promise<Object>} Análise de compatibilidade
 */
async function calcularCompatibilidade(perfil1, perfil2) {
    const dados = await carregarDadosCompatibilidade();
    
    // Extrair números principais
    const nums1 = {
        alma: perfil1.numeros.alma,
        personalidade: perfil1.numeros.personalidade,
        expressao: perfil1.numeros.expressao,
        destino: perfil1.numeros.destino
    };
    
    const nums2 = {
        alma: perfil2.numeros.alma,
        personalidade: perfil2.numeros.personalidade,
        expressao: perfil2.numeros.expressao,
        destino: perfil2.numeros.destino
    };
    
    // Calcular scores por categoria
    const scores = {
        alma: calcularScoreCategoria(nums1.alma, nums2.alma, dados, 'alma'),
        personalidade: calcularScoreCategoria(nums1.personalidade, nums2.personalidade, dados, 'personalidade'),
        expressao: calcularScoreCategoria(nums1.expressao, nums2.expressao, dados, 'expressao'),
        destino: calcularScoreCategoria(nums1.destino, nums2.destino, dados, 'destino')
    };
    
    // Calcular score geral (média ponderada)
    const scoreGeral = Math.round(
        (scores.alma * 0.3 + 
         scores.personalidade * 0.25 + 
         scores.expressao * 0.25 + 
         scores.destino * 0.2)
    );
    
    // Gerar análise detalhada
    const analise = gerarAnaliseDetalhada(nums1, nums2, scores, scoreGeral, dados);
    
    return {
        scoreGeral,
        scores,
        analise,
        perfis: {
            perfil1: {
                nome: perfil1.info.nome,
                numeros: nums1
            },
            perfil2: {
                nome: perfil2.info.nome,
                numeros: nums2
            }
        }
    };
}

/**
 * Calcula score de compatibilidade para uma categoria específica
 * @param {number} num1 - Número do primeiro perfil
 * @param {number} num2 - Número do segundo perfil
 * @param {Object} dados - Dados de compatibilidade
 * @param {string} categoria - Categoria (alma, personalidade, etc.)
 * @returns {number} Score de 0 a 100
 */
function calcularScoreCategoria(num1, num2, dados, categoria) {
    const chave = `${num1}-${num2}`;
    const chaveInversa = `${num2}-${num1}`;
    
    // Buscar nos dados carregados
    if (dados[categoria] && dados[categoria][chave]) {
        return dados[categoria][chave].score || 50;
    }
    if (dados[categoria] && dados[categoria][chaveInversa]) {
        return dados[categoria][chaveInversa].score || 50;
    }
    
    // Fallback: cálculo básico
    return calcularScoreBasico(num1, num2);
}

/**
 * Cálculo básico de compatibilidade quando não há dados específicos
 * @param {number} num1 - Primeiro número
 * @param {number} num2 - Segundo número
 * @returns {number} Score básico
 */
function calcularScoreBasico(num1, num2) {
    // Números iguais: alta compatibilidade
    if (num1 === num2) return 85;
    
    // Números complementares
    const complementares = {
        1: [2, 8], 2: [1, 6], 3: [6, 9], 4: [2, 8], 5: [1, 7],
        6: [2, 3, 9], 7: [5, 9], 8: [1, 4], 9: [3, 6, 7]
    };
    
    if (complementares[num1] && complementares[num1].includes(num2)) {
        return 75;
    }
    
    // Números harmônicos (diferença de 3 ou 6)
    const diferenca = Math.abs(num1 - num2);
    if (diferenca === 3 || diferenca === 6) return 65;
    
    // Números próximos
    if (diferenca === 1 || diferenca === 2) return 55;
    
    // Outros casos
    return 45;
}

/**
 * Gera análise detalhada da compatibilidade
 * @param {Object} nums1 - Números do primeiro perfil
 * @param {Object} nums2 - Números do segundo perfil
 * @param {Object} scores - Scores por categoria
 * @param {number} scoreGeral - Score geral
 * @param {Object} dados - Dados de compatibilidade
 * @returns {Object} Análise detalhada
 */
function gerarAnaliseDetalhada(nums1, nums2, scores, scoreGeral, dados) {
    const analise = {
        resumo: gerarResumoCompatibilidade(scoreGeral),
        pontosFavoraveis: [],
        desafios: [],
        conselhos: [],
        areas: {
            emocional: analisarAreaEmocional(nums1.alma, nums2.alma, scores.alma),
            social: analisarAreaSocial(nums1.personalidade, nums2.personalidade, scores.personalidade),
            criativa: analisarAreaCriativa(nums1.expressao, nums2.expressao, scores.expressao),
            proposito: analisarAreaProposito(nums1.destino, nums2.destino, scores.destino)
        }
    };
    
    // Adicionar pontos favoráveis baseados nos scores
    if (scores.alma >= 70) {
        analise.pontosFavoraveis.push("Forte conexão emocional e espiritual");
    }
    if (scores.personalidade >= 70) {
        analise.pontosFavoraveis.push("Boa harmonia social e de convivência");
    }
    if (scores.expressao >= 70) {
        analise.pontosFavoraveis.push("Excelente complementaridade criativa");
    }
    if (scores.destino >= 70) {
        analise.pontosFavoraveis.push("Propósitos de vida alinhados");
    }
    
    // Adicionar desafios baseados nos scores baixos
    if (scores.alma < 50) {
        analise.desafios.push("Necessidade de maior compreensão emocional");
    }
    if (scores.personalidade < 50) {
        analise.desafios.push("Diferenças de temperamento a serem trabalhadas");
    }
    if (scores.expressao < 50) {
        analise.desafios.push("Estilos de expressão muito diferentes");
    }
    if (scores.destino < 50) {
        analise.desafios.push("Caminhos de vida com direções distintas");
    }
    
    // Gerar conselhos baseados no score geral
    analise.conselhos = gerarConselhos(scoreGeral, scores);
    
    return analise;
}

/**
 * Gera resumo baseado no score geral
 * @param {number} score - Score geral de compatibilidade
 * @returns {string} Resumo da compatibilidade
 */
function gerarResumoCompatibilidade(score) {
    if (score >= 85) {
        return "Compatibilidade excepcional! Vocês formam uma união harmoniosa com grande potencial de crescimento mútuo.";
    } else if (score >= 70) {
        return "Ótima compatibilidade! Há uma base sólida para um relacionamento duradouro e feliz.";
    } else if (score >= 55) {
        return "Boa compatibilidade. Com compreensão e esforço mútuo, podem construir um relacionamento sólido.";
    } else if (score >= 40) {
        return "Compatibilidade moderada. Requer trabalho e dedicação para superar as diferenças.";
    } else {
        return "Compatibilidade desafiadora. Grandes diferenças que exigem muito amor e compreensão.";
    }
}

/**
 * Analisa área emocional (números da alma)
 * @param {number} alma1 - Alma do primeiro perfil
 * @param {number} alma2 - Alma do segundo perfil
 * @param {number} score - Score da categoria
 * @returns {Object} Análise da área emocional
 */
function analisarAreaEmocional(alma1, alma2, score) {
    const analise = {
        score,
        titulo: "Conexão Emocional",
        descricao: ""
    };
    
    if (score >= 70) {
        analise.descricao = "Vocês compartilham uma profunda sintonia emocional. Suas almas vibram em harmonia, criando uma base sólida de compreensão mútua.";
    } else if (score >= 50) {
        analise.descricao = "Há uma boa conexão emocional entre vocês. Com paciência e diálogo, podem aprofundar ainda mais essa ligação.";
    } else {
        analise.descricao = "Suas necessidades emocionais são diferentes. É importante cultivar a empatia e buscar compreender as motivações profundas um do outro.";
    }
    
    return analise;
}

/**
 * Analisa área social (números da personalidade)
 * @param {number} pers1 - Personalidade do primeiro perfil
 * @param {number} pers2 - Personalidade do segundo perfil
 * @param {number} score - Score da categoria
 * @returns {Object} Análise da área social
 */
function analisarAreaSocial(pers1, pers2, score) {
    const analise = {
        score,
        titulo: "Harmonia Social",
        descricao: ""
    };
    
    if (score >= 70) {
        analise.descricao = "Vocês se complementam muito bem socialmente. Suas personalidades criam uma dinâmica interessante e atrativa.";
    } else if (score >= 50) {
        analise.descricao = "Boa harmonia social. Vocês conseguem se adaptar bem aos diferentes ambientes juntos.";
    } else {
        analise.descricao = "Suas formas de se relacionar socialmente são bem diferentes. Respeitar essas diferenças pode enriquecer a relação.";
    }
    
    return analise;
}

/**
 * Analisa área criativa (números da expressão)
 * @param {number} exp1 - Expressão do primeiro perfil
 * @param {number} exp2 - Expressão do segundo perfil
 * @param {number} score - Score da categoria
 * @returns {Object} Análise da área criativa
 */
function analisarAreaCriativa(exp1, exp2, score) {
    const analise = {
        score,
        titulo: "Expressão Criativa",
        descricao: ""
    };
    
    if (score >= 70) {
        analise.descricao = "Excelente sinergia criativa! Vocês se inspiram mutuamente e podem criar projetos incríveis juntos.";
    } else if (score >= 50) {
        analise.descricao = "Boa complementaridade criativa. Suas diferentes formas de expressão podem se enriquecer mutuamente.";
    } else {
        analise.descricao = "Estilos de expressão muito diferentes. Aprender a valorizar e apoiar as formas únicas de cada um é essencial.";
    }
    
    return analise;
}

/**
 * Analisa área de propósito (números do destino)
 * @param {number} dest1 - Destino do primeiro perfil
 * @param {number} dest2 - Destino do segundo perfil
 * @param {number} score - Score da categoria
 * @returns {Object} Análise da área de propósito
 */
function analisarAreaProposito(dest1, dest2, score) {
    const analise = {
        score,
        titulo: "Propósito de Vida",
        descricao: ""
    };
    
    if (score >= 70) {
        analise.descricao = "Seus caminhos de vida estão alinhados! Vocês podem caminhar juntos em direção aos mesmos objetivos superiores.";
    } else if (score >= 50) {
        analise.descricao = "Propósitos compatíveis. Embora tenham missões individuais, podem se apoiar mutuamente no crescimento.";
    } else {
        analise.descricao = "Caminhos de vida bem diferentes. É importante respeitar e apoiar as jornadas individuais de cada um.";
    }
    
    return analise;
}

/**
 * Gera conselhos baseados nos scores
 * @param {number} scoreGeral - Score geral
 * @param {Object} scores - Scores por categoria
 * @returns {Array} Lista de conselhos
 */
function gerarConselhos(scoreGeral, scores) {
    const conselhos = [];
    
    // Conselhos gerais baseados no score
    if (scoreGeral >= 70) {
        conselhos.push("Cultivem a gratidão pela harmonia que possuem");
        conselhos.push("Usem essa sintonia para crescer juntos espiritualmente");
    } else if (scoreGeral >= 50) {
        conselhos.push("Invistam em comunicação aberta e honesta");
        conselhos.push("Celebrem as diferenças como oportunidades de crescimento");
    } else {
        conselhos.push("Pratiquem a paciência e a compreensão mútua");
        conselhos.push("Busquem pontos em comum para fortalecer a união");
    }
    
    // Conselhos específicos por área
    if (scores.alma < 60) {
        conselhos.push("Dediquem tempo para conversas profundas sobre sonhos e medos");
    }
    if (scores.personalidade < 60) {
        conselhos.push("Respeitem os diferentes ritmos e estilos de cada um");
    }
    if (scores.expressao < 60) {
        conselhos.push("Apoiem os projetos criativos individuais um do outro");
    }
    if (scores.destino < 60) {
        conselhos.push("Encontrem formas de apoiar os objetivos pessoais de cada um");
    }
    
    return conselhos;
}

/**
 * Gera dados básicos de compatibilidade quando não há arquivo JSON
 * @returns {Object} Dados básicos de compatibilidade
 */
function gerarCompatibilidadeBasica() {
    return {
        alma: {},
        personalidade: {},
        expressao: {},
        destino: {}
    };
}

// Exportar para uso global
window.AuroraCompat = {
    carregarDadosCompatibilidade,
    calcularCompatibilidade,
    calcularScoreCategoria,
    calcularScoreBasico,
    gerarAnaliseDetalhada,
    gerarResumoCompatibilidade,
    analisarAreaEmocional,
    analisarAreaSocial,
    analisarAreaCriativa,
    analisarAreaProposito,
    gerarConselhos
};

