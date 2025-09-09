// 🔺 Aurora Sagrada - Pirâmide Cabalística

/**
 * Calcula pirâmide cabalística completa
 * @param {string} nomeNormalizado - Nome normalizado (sem espaços, maiúsculo)
 * @param {number} idade - Idade atual da pessoa
 * @returns {Object} Dados completos da pirâmide
 */
function calcularPiramide(nomeNormalizado, idade) {
    // Converter nome em números cabalísticos
    const numerosCabalisticos = nomeNormalizado.split('').map(letra => 
        AuroraUtils.TABELAS.cabalistica[letra] || 0
    );
    
    // Construir pirâmide
    const piramide = construirPiramide(numerosCabalisticos);
    
    // Calcular arcano regente e período
    const { arcanoRegente, periodo, posicaoAtual } = calcularArcanoRegente(piramide, idade);
    
    // Obter interpretação do período
    const interpretacao = obterInterpretacaoPeriodo(arcanoRegente, periodo, posicaoAtual, numerosCabalisticos.length);
    
    return {
        piramide,
        arcanoRegente,
        periodo,
        posicaoAtual,
        interpretacao,
        totalLetras: numerosCabalisticos.length,
        anosPorPeriodo: Math.round(90 / numerosCabalisticos.length)
    };
}

/**
 * Constrói a pirâmide numérica
 * @param {Array} numeros - Array de números base
 * @returns {Array} Pirâmide completa (array de arrays)
 */
function construirPiramide(numeros) {
    const piramide = [numeros];
    let linhaAtual = numeros;
    
    while (linhaAtual.length > 1) {
        const novaLinha = [];
        for (let i = 0; i < linhaAtual.length - 1; i++) {
            const soma = linhaAtual[i] + linhaAtual[i + 1];
            novaLinha.push(AuroraUtils.reduzirParaArcano(soma));
        }
        piramide.push(novaLinha);
        linhaAtual = novaLinha;
    }
    
    return piramide;
}

/**
 * Calcula o arcano regente baseado na idade atual
 * @param {Array} piramide - Pirâmide construída
 * @param {number} idade - Idade atual
 * @returns {Object} Arcano regente e informações do período
 */
function calcularArcanoRegente(piramide, idade) {
    const baseLength = piramide[0].length;
    const periodo = Math.round(90 / baseLength);
    const posicaoAtual = Math.ceil(idade / periodo);
    
    let arcanoRegente = null;
    let contador = 0;
    
    // Percorrer pirâmide para encontrar o arcano na posição atual
    for (let linha of piramide) {
        for (let numero of linha) {
            contador++;
            if (contador === posicaoAtual) {
                arcanoRegente = numero;
                break;
            }
        }
        if (arcanoRegente) break;
    }
    
    // Se não encontrou, usar o topo da pirâmide
    if (!arcanoRegente) {
        arcanoRegente = piramide[piramide.length - 1][0];
    }
    
    return {
        arcanoRegente,
        periodo,
        posicaoAtual
    };
}

/**
 * Obtém interpretação do período atual
 * @param {number} arcanoRegente - Número do arcano regente
 * @param {number} periodo - Duração de cada período em anos
 * @param {number} posicao - Posição atual na sequência
 * @param {number} totalLetras - Total de letras no nome
 * @returns {Object} Interpretação completa
 */
function obterInterpretacaoPeriodo(arcanoRegente, periodo, posicao, totalLetras) {
    const infoArcano = AuroraArcanos.obterInfoArcano(arcanoRegente);
    
    const idadeInicio = (posicao - 1) * periodo;
    const idadeFim = posicao * periodo;
    
    const interpretacao = {
        arcano: infoArcano,
        faixaEtaria: `${idadeInicio} - ${idadeFim} anos`,
        fase: obterFaseVida(idadeInicio, idadeFim),
        energia: infoArcano.energia,
        desafios: obterDesafiosPeriodo(arcanoRegente),
        oportunidades: obterOportunidadesPeriodo(arcanoRegente),
        conselhos: obterConselhosPeriodo(arcanoRegente)
    };
    
    return interpretacao;
}

/**
 * Determina a fase da vida baseada na idade
 * @param {number} idadeInicio - Idade de início do período
 * @param {number} idadeFim - Idade de fim do período
 * @returns {string} Fase da vida
 */
function obterFaseVida(idadeInicio, idadeFim) {
    const idadeMedia = (idadeInicio + idadeFim) / 2;
    
    if (idadeMedia <= 18) return "Infância e Adolescência";
    if (idadeMedia <= 30) return "Juventude";
    if (idadeMedia <= 45) return "Idade Adulta Inicial";
    if (idadeMedia <= 60) return "Maturidade";
    if (idadeMedia <= 75) return "Idade Madura Avançada";
    return "Sabedoria e Legado";
}

/**
 * Obtém desafios específicos do arcano
 * @param {number} arcano - Número do arcano
 * @returns {Array} Lista de desafios
 */
function obterDesafiosPeriodo(arcano) {
    const desafios = {
        1: ["Evitar o egoísmo excessivo", "Aprender a trabalhar em equipe", "Controlar a impaciência"],
        2: ["Superar a indecisão", "Desenvolver autoconfiança", "Evitar a dependência emocional"],
        3: ["Focar a energia criativa", "Evitar a superficialidade", "Desenvolver disciplina"],
        4: ["Evitar a rigidez excessiva", "Abraçar mudanças necessárias", "Equilibrar trabalho e vida"],
        5: ["Controlar a inquietação", "Assumir responsabilidades", "Evitar a dispersão"],
        6: ["Equilibrar dar e receber", "Evitar o perfeccionismo", "Lidar com críticas"],
        7: ["Superar o isolamento", "Compartilhar conhecimento", "Confiar na intuição"],
        8: ["Evitar a obsessão pelo poder", "Manter a ética", "Equilibrar material e espiritual"],
        9: ["Evitar o martírio", "Aceitar limitações humanas", "Praticar o desapego"],
        10: ["Aceitar mudanças", "Evitar a passividade", "Aproveitar oportunidades"],
        11: ["Controlar a sensibilidade", "Evitar a arrogância espiritual", "Manter os pés no chão"],
        12: ["Aceitar períodos de pausa", "Evitar o vitimismo", "Encontrar propósito no sacrifício"],
        13: ["Abraçar transformações", "Superar medos", "Deixar ir o que não serve"],
        14: ["Evitar extremos", "Praticar paciência", "Integrar opostos"],
        15: ["Reconhecer limitações", "Evitar vícios", "Buscar libertação"],
        16: ["Reconstruir após crises", "Evitar a resistência", "Aprender com rupturas"],
        17: ["Manter a fé", "Evitar ilusões", "Seguir a intuição"],
        18: ["Distinguir realidade de ilusão", "Confiar na intuição", "Superar medos"],
        19: ["Evitar o ego inflado", "Compartilhar sucessos", "Manter humildade"],
        20: ["Aceitar chamados superiores", "Superar julgamentos", "Perdoar o passado"],
        21: ["Evitar a complacência", "Continuar evoluindo", "Compartilhar conquistas"],
        22: ["Evitar a imprudência", "Aprender com experiências", "Confiar no processo"]
    };
    
    return desafios[arcano] || ["Desenvolver consciência", "Buscar equilíbrio", "Praticar autoconhecimento"];
}

/**
 * Obtém oportunidades específicas do arcano
 * @param {number} arcano - Número do arcano
 * @returns {Array} Lista de oportunidades
 */
function obterOportunidadesPeriodo(arcano) {
    const oportunidades = {
        1: ["Liderar projetos inovadores", "Desenvolver independência", "Iniciar novos caminhos"],
        2: ["Mediar conflitos", "Desenvolver intuição", "Criar parcerias"],
        3: ["Expressar criatividade", "Comunicar ideias", "Inspirar outros"],
        4: ["Construir bases sólidas", "Organizar sistemas", "Criar estabilidade"],
        5: ["Explorar novos horizontes", "Comunicar conhecimento", "Promover mudanças"],
        6: ["Cuidar e nutrir", "Harmonizar relacionamentos", "Ensinar com amor"],
        7: ["Desenvolver sabedoria", "Pesquisar verdades", "Orientar espiritualmente"],
        8: ["Conquistar sucesso material", "Liderar organizações", "Construir impérios"],
        9: ["Servir a humanidade", "Compartilhar sabedoria", "Curar e inspirar"],
        10: ["Aproveitar ciclos favoráveis", "Adaptar-se a mudanças", "Crescer com experiências"],
        11: ["Inspirar e elevar", "Desenvolver dons psíquicos", "Iluminar caminhos"],
        12: ["Ganhar nova perspectiva", "Desenvolver compaixão", "Encontrar propósito"],
        13: ["Renovar completamente", "Transformar realidades", "Renascer fortalecido"],
        14: ["Encontrar equilíbrio", "Curar e harmonizar", "Integrar experiências"],
        15: ["Reconhecer limitações", "Libertar-se de prisões", "Transformar sombras"],
        16: ["Reconstruir sobre bases sólidas", "Libertar-se de ilusões", "Despertar consciência"],
        17: ["Seguir inspiração divina", "Renovar esperanças", "Guiar outros"],
        18: ["Desenvolver intuição", "Explorar subconsciente", "Conectar-se com mistérios"],
        19: ["Alcançar sucesso pleno", "Irradiar vitalidade", "Realizar sonhos"],
        20: ["Despertar espiritualmente", "Cumprir missão", "Renovar propósitos"],
        21: ["Completar ciclos", "Integrar experiências", "Alcançar maestria"],
        22: ["Iniciar jornadas", "Confiar no desconhecido", "Abraçar aventuras"]
    };
    
    return oportunidades[arcano] || ["Crescer espiritualmente", "Desenvolver potenciais", "Servir ao bem maior"];
}

/**
 * Obtém conselhos específicos do arcano
 * @param {number} arcano - Número do arcano
 * @returns {Array} Lista de conselhos
 */
function obterConselhosPeriodo(arcano) {
    const conselhos = {
        1: ["Seja corajoso mas não imprudente", "Lidere pelo exemplo", "Mantenha a originalidade"],
        2: ["Confie em sua intuição", "Pratique a paciência", "Valorize parcerias"],
        3: ["Expresse sua criatividade", "Comunique-se com alegria", "Mantenha o otimismo"],
        4: ["Construa com paciência", "Seja prático e realista", "Valorize a disciplina"],
        5: ["Explore com responsabilidade", "Mantenha-se flexível", "Comunique suas descobertas"],
        6: ["Ame incondicionalmente", "Cuide sem sufocar", "Busque harmonia"],
        7: ["Busque conhecimento interior", "Confie em sua sabedoria", "Compartilhe insights"],
        8: ["Use o poder com sabedoria", "Mantenha a integridade", "Equilibre ambições"],
        9: ["Sirva com compaixão", "Pratique o desapego", "Compartilhe sabedoria"],
        10: ["Aceite os ciclos da vida", "Aproveite oportunidades", "Mantenha-se adaptável"],
        11: ["Use dons para o bem", "Mantenha humildade", "Inspire através do exemplo"],
        12: ["Aceite pausas necessárias", "Veja além das aparências", "Pratique a entrega"],
        13: ["Abrace transformações", "Deixe morrer o que não serve", "Renasça conscientemente"],
        14: ["Pratique a moderação", "Busque o meio-termo", "Integre opostos"],
        15: ["Reconheça suas sombras", "Liberte-se de vícios", "Transforme limitações"],
        16: ["Aceite mudanças bruscas", "Reconstrua com sabedoria", "Liberte-se de ilusões"],
        17: ["Mantenha a esperança", "Siga sua estrela-guia", "Inspire outros"],
        18: ["Confie em sua intuição", "Navegue pelos mistérios", "Ilumine as sombras"],
        19: ["Irradie sua luz", "Compartilhe sucessos", "Mantenha a vitalidade"],
        20: ["Atenda chamados superiores", "Perdoe e renove", "Cumpra sua missão"],
        21: ["Celebre conquistas", "Compartilhe sabedoria", "Continue evoluindo"],
        22: ["Confie no processo", "Mantenha a fé", "Abrace o desconhecido"]
    };
    
    return conselhos[arcano] || ["Mantenha-se consciente", "Pratique o amor", "Busque a verdade"];
}

/**
 * Gera mapa completo dos períodos de vida
 * @param {string} nome - Nome completo
 * @param {number} idadeAtual - Idade atual
 * @returns {Array} Mapa de todos os períodos
 */
function gerarMapaPeriodos(nome, idadeAtual) {
    const nomeNormalizado = AuroraUtils.normalizarTexto(nome).replace(/\s/g, '');
    const piramideCompleta = calcularPiramide(nomeNormalizado, idadeAtual);
    
    const totalLetras = piramideCompleta.totalLetras;
    const anosPorPeriodo = piramideCompleta.anosPorPeriodo;
    
    const mapa = [];
    let contador = 0;
    
    for (let linha of piramideCompleta.piramide) {
        for (let numero of linha) {
            contador++;
            const idadeInicio = (contador - 1) * anosPorPeriodo;
            const idadeFim = contador * anosPorPeriodo;
            const ativo = idadeAtual >= idadeInicio && idadeAtual < idadeFim;
            
            mapa.push({
                periodo: contador,
                arcano: numero,
                idadeInicio,
                idadeFim,
                ativo,
                interpretacao: obterInterpretacaoPeriodo(numero, anosPorPeriodo, contador, totalLetras)
            });
        }
    }
    
    return mapa;
}

// Exportar para uso global
window.AuroraPiramide = {
    calcularPiramide,
    construirPiramide,
    calcularArcanoRegente,
    obterInterpretacaoPeriodo,
    obterFaseVida,
    obterDesafiosPeriodo,
    obterOportunidadesPeriodo,
    obterConselhosPeriodo,
    gerarMapaPeriodos
};

