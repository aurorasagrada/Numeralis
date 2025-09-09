// 👤 Aurora Sagrada - Perfil Numerológico

/**
 * Calcula perfil numerológico completo
 * @param {Object} params - Parâmetros do perfil
 * @param {string} params.nome - Nome completo
 * @param {string} params.data - Data de nascimento (YYYY-MM-DD)
 * @param {string} params.tabela - Tipo de tabela ('pitagorica' ou 'cabalistica')
 * @returns {Object} Perfil numerológico completo
 */
function calcularPerfil({ nome, data, tabela = 'pitagorica' }) {
    // Validações
    if (!AuroraUtils.validarNome(nome)) {
        throw new Error('Nome inválido');
    }
    if (!AuroraUtils.validarData(data)) {
        throw new Error('Data inválida');
    }

    const hash = AuroraUtils.gerarHash(nome, data, tabela);
    
    // Verificar cache
    if (AuroraCache.has(hash)) {
        return AuroraCache.get(hash);
    }

    // Processar nome
    const nomeNormalizado = AuroraUtils.normalizarTexto(nome);
    const vogais = AuroraUtils.extrairVogais(nome);
    const consoantes = AuroraUtils.extrairConsoantes(nome);
    
    // Calcular números fundamentais
    const numeros = calcularNumerosFundamentais(vogais, consoantes, nomeNormalizado, data, tabela);
    
    // Calcular arcanos temporais
    const arcanosTemporais = AuroraArcanos.calcularArcanosTemporais(data);
    
    // Calcular pirâmide cabalística (se aplicável)
    const piramide = tabela === 'cabalistica' 
        ? AuroraPiramide.calcularPiramide(nomeNormalizado, AuroraUtils.calcularIdade(data))
        : null;

    // Calcular meta informações
    const meta = calcularMetaInformacoes(numeros);

    const resultado = {
        numeros,
        arcanosTemporais,
        piramide,
        meta,
        info: {
            nome: nome.trim(),
            data,
            tabela,
            idade: AuroraUtils.calcularIdade(data),
            hash
        }
    };

    // Salvar no cache
    AuroraCache.set(hash, resultado);
    
    return resultado;
}

/**
 * Calcula números fundamentais da numerologia
 * @param {string} vogais - Vogais do nome
 * @param {string} consoantes - Consoantes do nome
 * @param {string} nomeCompleto - Nome completo normalizado
 * @param {string} data - Data de nascimento
 * @param {string} tabela - Tipo de tabela
 * @returns {Object} Números fundamentais
 */
function calcularNumerosFundamentais(vogais, consoantes, nomeCompleto, data, tabela) {
    // Números básicos
    const alma = AuroraUtils.reduzirNumero(AuroraUtils.calcularComTabela(vogais, tabela));
    const personalidade = AuroraUtils.reduzirNumero(AuroraUtils.calcularComTabela(consoantes, tabela));
    const expressao = AuroraUtils.reduzirNumero(AuroraUtils.calcularComTabela(nomeCompleto.replace(/\s/g, ''), tabela));
    
    // Número do destino (data de nascimento)
    const [ano, mes, dia] = data.split('-').map(Number);
    const destino = AuroraUtils.reduzirNumero(dia + mes + ano);
    
    // Números avançados
    const maturidade = AuroraUtils.reduzirNumero(expressao + destino);
    
    // Número do equilíbrio (primeira + última letra)
    const primeiraLetra = nomeCompleto.charAt(0);
    const ultimaLetra = nomeCompleto.charAt(nomeCompleto.length - 1);
    const equilibrio = AuroraUtils.reduzirNumero(
        (AuroraUtils.TABELAS[tabela][primeiraLetra] || 0) + 
        (AuroraUtils.TABELAS[tabela][ultimaLetra] || 0)
    );

    // Número da motivação íntima (primeira vogal)
    const primeiraVogal = AuroraUtils.extrairVogais(nomeCompleto).charAt(0);
    const motivacaoIntima = AuroraUtils.reduzirNumero(AuroraUtils.TABELAS[tabela][primeiraVogal] || 0);

    // Número da impressão exterior (primeira consoante)
    const primeiraConsoante = AuroraUtils.extrairConsoantes(nomeCompleto).charAt(0);
    const impressaoExterior = AuroraUtils.reduzirNumero(AuroraUtils.TABELAS[tabela][primeiraConsoante] || 0);

    // Ano pessoal atual
    const anoAtual = new Date().getFullYear();
    const anoPessoal = AuroraUtils.reduzirNumero(dia + mes + anoAtual);

    return {
        alma,
        personalidade,
        expressao,
        destino,
        maturidade,
        equilibrio,
        motivacaoIntima,
        impressaoExterior,
        anoPessoal
    };
}

/**
 * Calcula meta informações sobre os números
 * @param {Object} numeros - Números fundamentais
 * @returns {Object} Meta informações
 */
function calcularMetaInformacoes(numeros) {
    const meta = {
        ehMestre: {},
        ehKarmico: {},
        contadores: {
            mestres: 0,
            karmicos: 0,
            normais: 0
        }
    };

    // Verificar cada número
    Object.keys(numeros).forEach(tipo => {
        const numero = numeros[tipo];
        meta.ehMestre[tipo] = AuroraUtils.ehNumeroMestre(numero);
        meta.ehKarmico[tipo] = AuroraUtils.ehNumeroKarmico(numero);

        // Contar tipos
        if (meta.ehMestre[tipo]) {
            meta.contadores.mestres++;
        } else if (meta.ehKarmico[tipo]) {
            meta.contadores.karmicos++;
        } else {
            meta.contadores.normais++;
        }
    });

    return meta;
}

/**
 * Obtém descrição de um número numerológico
 * @param {number} numero - Número a descrever
 * @param {string} tipo - Tipo do número (alma, personalidade, etc.)
 * @returns {string} Descrição do número
 */
function obterDescricaoNumero(numero, tipo) {
    const descricoes = {
        alma: {
            1: "Independência, liderança, pioneirismo interior",
            2: "Cooperação, diplomacia, sensibilidade emocional",
            3: "Criatividade, comunicação, expressão artística",
            4: "Estabilidade, organização, trabalho metódico",
            5: "Liberdade, aventura, curiosidade intelectual",
            6: "Responsabilidade, cuidado, harmonia familiar",
            7: "Espiritualidade, introspecção, busca pela verdade",
            8: "Ambição material, poder, realização profissional",
            9: "Humanitarismo, compaixão, sabedoria universal",
            11: "Intuição elevada, inspiração, missão espiritual",
            22: "Construtor mestre, visão prática grandiosa",
            33: "Mestre professor, cura através do amor"
        },
        personalidade: {
            1: "Aparenta confiança, liderança natural",
            2: "Aparenta gentileza, diplomacia, cooperação",
            3: "Aparenta alegria, criatividade, sociabilidade",
            4: "Aparenta seriedade, confiabilidade, praticidade",
            5: "Aparenta dinamismo, versatilidade, liberdade",
            6: "Aparenta responsabilidade, cuidado, proteção",
            7: "Aparenta mistério, profundidade, reserva",
            8: "Aparenta autoridade, sucesso, materialismo",
            9: "Aparenta sabedoria, generosidade, universalidade",
            11: "Aparenta inspiração, sensibilidade elevada",
            22: "Aparenta visão grandiosa, capacidade realizadora",
            33: "Aparenta compaixão, cura, ensino"
        },
        expressao: {
            1: "Talento para liderar, iniciar, inovar",
            2: "Talento para mediar, cooperar, harmonizar",
            3: "Talento para criar, comunicar, entreter",
            4: "Talento para organizar, construir, sistematizar",
            5: "Talento para explorar, comunicar, libertar",
            6: "Talento para cuidar, ensinar, harmonizar",
            7: "Talento para pesquisar, analisar, espiritualizar",
            8: "Talento para administrar, liderar, materializar",
            9: "Talento para inspirar, curar, universalizar",
            11: "Talento para inspirar, iluminar, elevar",
            22: "Talento para construir grandes projetos",
            33: "Talento para ensinar, curar, amar"
        },
        destino: {
            1: "Desenvolver liderança e independência",
            2: "Aprender cooperação e diplomacia",
            3: "Expressar criatividade e comunicação",
            4: "Construir bases sólidas e estabilidade",
            5: "Explorar liberdade e experiências",
            6: "Assumir responsabilidades e cuidar",
            7: "Buscar conhecimento e espiritualidade",
            8: "Conquistar sucesso material e poder",
            9: "Servir a humanidade com sabedoria",
            11: "Inspirar e elevar a consciência",
            22: "Materializar grandes visões",
            33: "Ensinar através do amor incondicional"
        }
    };

    return descricoes[tipo]?.[numero] || `Energia do número ${numero}`;
}

/**
 * Gera relatório textual do perfil
 * @param {Object} perfil - Perfil numerológico
 * @returns {string} Relatório em texto
 */
function gerarRelatorio(perfil) {
    const { numeros, meta, info } = perfil;
    
    let relatorio = `MAPA NUMEROLÓGICO - ${info.nome}\n`;
    relatorio += `Data de Nascimento: ${AuroraUtils.formatarData(info.data)}\n`;
    relatorio += `Sistema: ${info.tabela.charAt(0).toUpperCase() + info.tabela.slice(1)}\n`;
    relatorio += `Idade: ${info.idade} anos\n\n`;

    relatorio += "NÚMEROS FUNDAMENTAIS:\n";
    relatorio += `Alma: ${numeros.alma} - ${obterDescricaoNumero(numeros.alma, 'alma')}\n`;
    relatorio += `Personalidade: ${numeros.personalidade} - ${obterDescricaoNumero(numeros.personalidade, 'personalidade')}\n`;
    relatorio += `Expressão: ${numeros.expressao} - ${obterDescricaoNumero(numeros.expressao, 'expressao')}\n`;
    relatorio += `Destino: ${numeros.destino} - ${obterDescricaoNumero(numeros.destino, 'destino')}\n`;
    relatorio += `Maturidade: ${numeros.maturidade}\n`;
    relatorio += `Equilíbrio: ${numeros.equilibrio}\n`;
    relatorio += `Ano Pessoal: ${numeros.anoPessoal}\n\n`;

    if (meta.contadores.mestres > 0) {
        relatorio += `NÚMEROS MESTRES: ${meta.contadores.mestres}\n`;
    }
    if (meta.contadores.karmicos > 0) {
        relatorio += `NÚMEROS KÁRMICOS: ${meta.contadores.karmicos}\n`;
    }

    return relatorio;
}

// Cache para perfis calculados
const AuroraCache = new Map();

// Exportar para uso global
window.AuroraPerfil = {
    calcularPerfil,
    calcularNumerosFundamentais,
    calcularMetaInformacoes,
    obterDescricaoNumero,
    gerarRelatorio,
    cache: AuroraCache
};

