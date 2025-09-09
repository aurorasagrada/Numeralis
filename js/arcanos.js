// 🌟 Aurora Sagrada - Arcanos Temporais

/**
 * Calcula todos os arcanos temporais
 * @param {string} dataNascimento - Data de nascimento (YYYY-MM-DD)
 * @param {Date} dataReferencia - Data de referência (padrão: hoje)
 * @returns {Object} Arcanos temporais
 */
function calcularArcanosTemporais(dataNascimento, dataReferencia = new Date()) {
    const [ano, mes, dia] = dataNascimento.split('-').map(Number);
    
    return {
        pessoal: calcularArcanoPessoal(dia, mes, ano),
        ano: calcularArcanoAno(dia, mes, dataReferencia.getFullYear()),
        mes: calcularArcanoMes(dia, mes, dataReferencia.getFullYear(), dataReferencia.getMonth() + 1),
        semana: calcularArcanoSemana(dataReferencia),
        dia: calcularArcanoDia(dataReferencia)
    };
}

/**
 * Calcula arcano pessoal (baseado na data de nascimento)
 * @param {number} dia - Dia de nascimento
 * @param {number} mes - Mês de nascimento
 * @param {number} ano - Ano de nascimento
 * @returns {number} Arcano pessoal (1-22)
 */
function calcularArcanoPessoal(dia, mes, ano) {
    const soma = dia + mes + ano;
    const numeroDestino = AuroraUtils.reduzirNumero(soma);
    return AuroraUtils.reduzirParaArcano(numeroDestino);
}

/**
 * Calcula arcano do ano
 * @param {number} diaNasc - Dia de nascimento
 * @param {number} mesNasc - Mês de nascimento
 * @param {number} anoAtual - Ano atual
 * @returns {number} Arcano do ano (1-22)
 */
function calcularArcanoAno(diaNasc, mesNasc, anoAtual) {
    const soma = diaNasc + mesNasc + anoAtual;
    return AuroraUtils.reduzirParaArcano(AuroraUtils.reduzirNumero(soma));
}

/**
 * Calcula arcano do mês
 * @param {number} diaNasc - Dia de nascimento
 * @param {number} mesNasc - Mês de nascimento
 * @param {number} anoAtual - Ano atual
 * @param {number} mesAtual - Mês atual
 * @returns {number} Arcano do mês (1-22)
 */
function calcularArcanoMes(diaNasc, mesNasc, anoAtual, mesAtual) {
    const arcanoAno = calcularArcanoAno(diaNasc, mesNasc, anoAtual);
    const soma = arcanoAno + mesAtual;
    return AuroraUtils.reduzirParaArcano(AuroraUtils.reduzirNumero(soma));
}

/**
 * Calcula arcano da semana (baseado na semana ISO)
 * @param {Date} data - Data de referência
 * @returns {number} Arcano da semana (1-22)
 */
function calcularArcanoSemana(data) {
    const semanaISO = AuroraUtils.obterSemanaISO(data);
    return AuroraUtils.reduzirParaArcano(AuroraUtils.reduzirNumero(semanaISO));
}

/**
 * Calcula arcano do dia
 * @param {Date} data - Data de referência
 * @returns {number} Arcano do dia (1-22)
 */
function calcularArcanoDia(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const soma = dia + mes + ano;
    return AuroraUtils.reduzirParaArcano(AuroraUtils.reduzirNumero(soma));
}

/**
 * Obtém informações detalhadas de um arcano
 * @param {number} numeroArcano - Número do arcano (1-22)
 * @returns {Object} Informações do arcano
 */
function obterInfoArcano(numeroArcano) {
    const nome = AuroraUtils.ARCANOS_MAIORES[numeroArcano] || 'Desconhecido';
    const imagem = AuroraUtils.IMAGENS_ARCANOS[numeroArcano] || AuroraUtils.IMAGENS_ARCANOS[0];
    
    const significados = {
        1: {
            palavrasChave: "Início, liderança, independência, pioneirismo",
            significado: "O Mago representa o poder da vontade e a capacidade de manifestar ideias no mundo material.",
            energia: "Criativa e iniciadora"
        },
        2: {
            palavrasChave: "Intuição, mistério, sabedoria oculta, feminino sagrado",
            significado: "A Sacerdotisa simboliza a sabedoria interior e a conexão com o inconsciente.",
            energia: "Receptiva e intuitiva"
        },
        3: {
            palavrasChave: "Criatividade, fertilidade, abundância, maternidade",
            significado: "A Imperatriz representa a força criativa da natureza e a abundância.",
            energia: "Nutritiva e criativa"
        },
        4: {
            palavrasChave: "Autoridade, estrutura, estabilidade, paternidade",
            significado: "O Imperador simboliza a ordem, a estrutura e o poder terreno.",
            energia: "Estruturante e protetora"
        },
        5: {
            palavrasChave: "Tradição, ensino, espiritualidade, orientação",
            significado: "O Papa representa a sabedoria tradicional e a orientação espiritual.",
            energia: "Educativa e espiritual"
        },
        6: {
            palavrasChave: "Amor, escolhas, relacionamentos, harmonia",
            significado: "Os Enamorados simbolizam as escolhas do coração e a união.",
            energia: "Amorosa e harmonizadora"
        },
        7: {
            palavrasChave: "Vitória, determinação, controle, progresso",
            significado: "O Carro representa o triunfo através da determinação e controle.",
            energia: "Dinâmica e vitoriosa"
        },
        8: {
            palavrasChave: "Justiça, equilíbrio, verdade, karma",
            significado: "A Justiça simboliza o equilíbrio cósmico e as consequências dos atos.",
            energia: "Equilibrante e justa"
        },
        9: {
            palavrasChave: "Sabedoria, introspecção, busca interior, orientação",
            significado: "O Eremita representa a busca da verdade interior e a sabedoria.",
            energia: "Contemplativa e sábia"
        },
        10: {
            palavrasChave: "Destino, ciclos, mudança, oportunidade",
            significado: "A Roda da Fortuna simboliza os ciclos da vida e as mudanças do destino.",
            energia: "Cíclica e transformadora"
        },
        11: {
            palavrasChave: "Força interior, coragem, compaixão, domínio",
            significado: "A Força representa o poder interior e o domínio através da compaixão.",
            energia: "Corajosa e compassiva"
        },
        12: {
            palavrasChave: "Sacrifício, pausa, nova perspectiva, entrega",
            significado: "O Enforcado simboliza a necessidade de parar e ver as coisas de outra forma.",
            energia: "Reflexiva e sacrificial"
        },
        13: {
            palavrasChave: "Transformação, fim, renascimento, renovação",
            significado: "A Morte representa transformações profundas e o fim de ciclos.",
            energia: "Transformadora e renovadora"
        },
        14: {
            palavrasChave: "Moderação, equilíbrio, paciência, cura",
            significado: "A Temperança simboliza a moderação e a busca do equilíbrio.",
            energia: "Moderadora e curativa"
        },
        15: {
            palavrasChave: "Tentação, materialismo, prisão, sombra",
            significado: "O Diabo representa as tentações materiais e as prisões que criamos.",
            energia: "Tentadora e limitante"
        },
        16: {
            palavrasChave: "Ruptura, revelação, libertação, despertar",
            significado: "A Torre simboliza a destruição necessária para a renovação.",
            energia: "Disruptiva e libertadora"
        },
        17: {
            palavrasChave: "Esperança, inspiração, orientação, renovação",
            significado: "A Estrela representa a esperança e a orientação divina.",
            energia: "Inspiradora e esperançosa"
        },
        18: {
            palavrasChave: "Ilusão, intuição, mistério, subconsciente",
            significado: "A Lua simboliza o mundo das ilusões e do subconsciente.",
            energia: "Misteriosa e ilusória"
        },
        19: {
            palavrasChave: "Sucesso, vitalidade, alegria, realização",
            significado: "O Sol representa o sucesso, a vitalidade e a alegria de viver.",
            energia: "Vital e realizadora"
        },
        20: {
            palavrasChave: "Julgamento, renascimento, chamado, despertar",
            significado: "O Julgamento simboliza o despertar espiritual e o chamado superior.",
            energia: "Despertadora e julgadora"
        },
        21: {
            palavrasChave: "Realização, completude, sucesso, integração",
            significado: "O Mundo representa a realização completa e a integração total.",
            energia: "Realizadora e integradora"
        },
        22: {
            palavrasChave: "Novo início, espontaneidade, fé, jornada",
            significado: "O Louco simboliza o início de uma nova jornada com fé e espontaneidade.",
            energia: "Iniciadora e espontânea"
        }
    };

    const info = significados[numeroArcano] || {
        palavrasChave: "Energia universal",
        significado: "Arcano com energia específica para este momento.",
        energia: "Transformadora"
    };

    return {
        numero: numeroArcano,
        nome,
        imagem,
        ...info
    };
}

/**
 * Calcula arcanos para um período específico
 * @param {string} dataNascimento - Data de nascimento
 * @param {string} dataInicio - Data de início do período
 * @param {string} dataFim - Data de fim do período
 * @returns {Array} Array de arcanos para o período
 */
function calcularArcanosPeriodo(dataNascimento, dataInicio, dataFim) {
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    const arcanos = [];
    
    const dataAtual = new Date(inicio);
    while (dataAtual <= fim) {
        const arcanosData = calcularArcanosTemporais(dataNascimento, dataAtual);
        arcanos.push({
            data: new Date(dataAtual),
            arcanos: arcanosData
        });
        dataAtual.setDate(dataAtual.getDate() + 1);
    }
    
    return arcanos;
}

/**
 * Obtém previsão baseada nos arcanos
 * @param {Object} arcanos - Arcanos temporais
 * @returns {Object} Previsão interpretada
 */
function obterPrevisao(arcanos) {
    const previsao = {
        geral: "",
        amor: "",
        trabalho: "",
        saude: "",
        espiritualidade: ""
    };

    // Interpretação baseada no arcano do ano (mais influente)
    const arcanoAno = arcanos.ano;
    const infoAno = obterInfoArcano(arcanoAno);
    
    previsao.geral = `Este ano está sob a influência de ${infoAno.nome}, trazendo ${infoAno.energia.toLowerCase()}. ${infoAno.significado}`;
    
    // Interpretações específicas por área (simplificadas)
    const interpretacoes = {
        amor: {
            6: "Período favorável para relacionamentos e escolhas do coração.",
            2: "Momento de intuição e conexão emocional profunda.",
            3: "Criatividade e expressão no amor, possível fertilidade.",
            default: "Energia do amor influenciada pela vibração atual."
        },
        trabalho: {
            1: "Excelente momento para liderar e iniciar novos projetos.",
            8: "Foco no sucesso material e reconhecimento profissional.",
            4: "Período de construção sólida e organização no trabalho.",
            default: "Energia profissional alinhada com o momento atual."
        },
        saude: {
            14: "Momento ideal para buscar equilíbrio e moderação na saúde.",
            19: "Vitalidade em alta, energia positiva para o bem-estar.",
            7: "Foco no controle e disciplina para manter a saúde.",
            default: "Atenção especial à saúde conforme a energia do período."
        },
        espiritualidade: {
            9: "Período de busca interior e desenvolvimento espiritual.",
            17: "Momento de inspiração e conexão com a orientação superior.",
            20: "Despertar espiritual e chamado para evolução.",
            default: "Crescimento espiritual alinhado com o momento."
        }
    };

    Object.keys(interpretacoes).forEach(area => {
        const areaInterpretacoes = interpretacoes[area];
        previsao[area] = areaInterpretacoes[arcanoAno] || areaInterpretacoes.default;
    });

    return previsao;
}

// Exportar para uso global
window.AuroraArcanos = {
    calcularArcanosTemporais,
    calcularArcanoPessoal,
    calcularArcanoAno,
    calcularArcanoMes,
    calcularArcanoSemana,
    calcularArcanoDia,
    obterInfoArcano,
    calcularArcanosPeriodo,
    obterPrevisao
};

