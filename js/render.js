// 🎨 Aurora Sagrada - Renderização

/**
 * Renderiza card de número numerológico
 * @param {number} numero - Valor do número
 * @param {string} nome - Nome do número
 * @param {string} descricao - Descrição do número
 * @param {Object} meta - Meta informações
 * @param {string} tipo - Tipo do número
 * @returns {string} HTML do card
 */
function renderNumeroCard(numero, nome, descricao, meta, tipo) {
    const ehMestre = meta.ehMestre[tipo];
    const ehKarmico = meta.ehKarmico[tipo];
    
    let badgeHtml = '';
    if (ehMestre) {
        badgeHtml = '<div class="as-numeros-mestres">Número Mestre</div>';
    } else if (ehKarmico) {
        badgeHtml = '<div class="as-numero-karmico">Número Kármico</div>';
    }
    
    return `
        <div class="as-numero-card">
            <div class="as-numero-valor">${numero}</div>
            <div class="as-numero-nome">${nome}</div>
            <div class="as-numero-desc">${descricao}</div>
            ${badgeHtml}
        </div>
    `;
}

/**
 * Renderiza card de arcano
 * @param {number} numero - Número do arcano
 * @param {string} titulo - Título do arcano
 * @param {string} descricao - Descrição do arcano
 * @returns {string} HTML do card
 */
function renderArcanoCard(numero, titulo, descricao) {
    const imagemSrc = AuroraUtils.IMAGENS_ARCANOS[numero] || AuroraUtils.IMAGENS_ARCANOS[0];
    const nomeArcano = AuroraUtils.ARCANOS_MAIORES[numero] || 'Desconhecido';
    
    return `
        <div class="as-arcano-card">
            <img src="${imagemSrc}" alt="${nomeArcano}" class="as-arcano-imagem" 
                 onerror="this.src='assets/img/cartas/00-0-Back.jpg'" loading="lazy">
            <div class="as-arcano-info">
                <div class="as-arcano-numero">${numero}</div>
                <div class="as-arcano-nome">${titulo}</div>
                <div class="as-arcano-desc">
                    <strong>${nomeArcano}</strong><br>
                    ${descricao}
                </div>
            </div>
        </div>
    `;
}

/**
 * Renderiza pirâmide cabalística visual
 * @param {Object} piramideData - Dados da pirâmide
 * @returns {string} HTML da pirâmide
 */
function renderPiramide(piramideData) {
    if (!piramideData) {
        return '<p class="as-loading">Pirâmide cabalística disponível apenas no sistema cabalístico.</p>';
    }
    
    const { piramide, arcanoRegente, interpretacao } = piramideData;
    
    let piramideHtml = '<div class="as-piramide-visual">';
    
    // Renderizar cada linha da pirâmide
    piramide.forEach((linha, index) => {
        piramideHtml += '<div class="as-piramide-linha">';
        linha.forEach(numero => {
            const isRegente = numero === arcanoRegente;
            const classe = isRegente ? 'as-piramide-numero regente' : 'as-piramide-numero';
            piramideHtml += `<div class="${classe}" title="Arcano ${numero}: ${AuroraUtils.ARCANOS_MAIORES[numero]}">${numero}</div>`;
        });
        piramideHtml += '</div>';
    });
    
    piramideHtml += '</div>';
    
    // Adicionar interpretação do arcano regente
    if (interpretacao) {
        piramideHtml += `
            <div class="as-card">
                <h4>🔮 Arcano Regente: ${interpretacao.arcano.nome}</h4>
                <p><strong>Período:</strong> ${interpretacao.faixaEtaria} (${interpretacao.fase})</p>
                <p><strong>Energia:</strong> ${interpretacao.energia}</p>
                <p><strong>Significado:</strong> ${interpretacao.arcano.significado}</p>
                
                <div class="as-interpretacao-detalhes">
                    <div class="as-desafios">
                        <h5>🎯 Desafios do Período:</h5>
                        <ul>
                            ${interpretacao.desafios.map(desafio => `<li>${desafio}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="as-oportunidades">
                        <h5>✨ Oportunidades:</h5>
                        <ul>
                            ${interpretacao.oportunidades.map(oportunidade => `<li>${oportunidade}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="as-conselhos">
                        <h5>💡 Conselhos:</h5>
                        <ul>
                            ${interpretacao.conselhos.map(conselho => `<li>${conselho}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    return piramideHtml;
}

/**
 * Renderiza resultado de compatibilidade
 * @param {Object} compatData - Dados de compatibilidade
 * @returns {string} HTML da compatibilidade
 */
function renderCompatibilidade(compatData) {
    const { scoreGeral, scores, analise, perfis } = compatData;
    
    return `
        <div class="as-compatibilidade-resultado">
            <div class="as-score-circle">${scoreGeral}%</div>
            <h3>Compatibilidade Amorosa</h3>
            <p class="as-resumo">${analise.resumo}</p>
            
            <div class="as-perfis-grid">
                <div class="as-perfil-card">
                    <h4>${perfis.perfil1.nome}</h4>
                    <p>Alma: ${perfis.perfil1.numeros.alma}</p>
                    <p>Personalidade: ${perfis.perfil1.numeros.personalidade}</p>
                    <p>Expressão: ${perfis.perfil1.numeros.expressao}</p>
                    <p>Destino: ${perfis.perfil1.numeros.destino}</p>
                </div>
                <div class="as-perfil-card">
                    <h4>${perfis.perfil2.nome}</h4>
                    <p>Alma: ${perfis.perfil2.numeros.alma}</p>
                    <p>Personalidade: ${perfis.perfil2.numeros.personalidade}</p>
                    <p>Expressão: ${perfis.perfil2.numeros.expressao}</p>
                    <p>Destino: ${perfis.perfil2.numeros.destino}</p>
                </div>
            </div>
            
            <div class="as-scores-detalhados">
                <h4>📊 Análise Detalhada</h4>
                <div class="as-score-item">
                    <span>💖 ${analise.areas.emocional.titulo}:</span>
                    <span class="as-score-valor">${scores.alma}%</span>
                </div>
                <div class="as-score-item">
                    <span>👥 ${analise.areas.social.titulo}:</span>
                    <span class="as-score-valor">${scores.personalidade}%</span>
                </div>
                <div class="as-score-item">
                    <span>🎨 ${analise.areas.criativa.titulo}:</span>
                    <span class="as-score-valor">${scores.expressao}%</span>
                </div>
                <div class="as-score-item">
                    <span>🎯 ${analise.areas.proposito.titulo}:</span>
                    <span class="as-score-valor">${scores.destino}%</span>
                </div>
            </div>
            
            ${renderAnaliseAreas(analise.areas)}
            
            ${analise.pontosFavoraveis.length > 0 ? `
                <div class="as-pontos-favoraveis">
                    <h4>✅ Pontos Favoráveis</h4>
                    <ul>
                        ${analise.pontosFavoraveis.map(ponto => `<li>${ponto}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${analise.desafios.length > 0 ? `
                <div class="as-desafios">
                    <h4>⚠️ Desafios a Superar</h4>
                    <ul>
                        ${analise.desafios.map(desafio => `<li>${desafio}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div class="as-conselhos">
                <h4>💡 Conselhos para o Relacionamento</h4>
                <ul>
                    ${analise.conselhos.map(conselho => `<li>${conselho}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Renderiza análise detalhada das áreas
 * @param {Object} areas - Áreas de análise
 * @returns {string} HTML das áreas
 */
function renderAnaliseAreas(areas) {
    return `
        <div class="as-analise-areas">
            <h4>🔍 Análise por Área</h4>
            ${Object.values(areas).map(area => `
                <div class="as-area-card">
                    <h5>${area.titulo} (${area.score}%)</h5>
                    <p>${area.descricao}</p>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * Renderiza mapa numerológico completo
 * @param {Object} resultados - Resultados do perfil
 * @returns {void} Atualiza DOM diretamente
 */
function renderMapa(resultados) {
    const { numeros, arcanosTemporais, piramide, meta } = resultados;
    
    // Números fundamentais
    document.getElementById('numeros-fundamentais').innerHTML = `
        ${renderNumeroCard(numeros.alma, 'Alma', 'Motivação interior e desejos profundos', meta, 'alma')}
        ${renderNumeroCard(numeros.personalidade, 'Personalidade', 'Como os outros te veem', meta, 'personalidade')}
        ${renderNumeroCard(numeros.expressao, 'Expressão', 'Seus talentos e habilidades naturais', meta, 'expressao')}
        ${renderNumeroCard(numeros.destino, 'Destino', 'Seu propósito de vida e missão', meta, 'destino')}
        ${renderNumeroCard(numeros.maturidade, 'Maturidade', 'Energia que se manifesta após os 35 anos', meta, 'maturidade')}
        ${renderNumeroCard(numeros.equilibrio, 'Equilíbrio', 'Como encontrar harmonia interior', meta, 'equilibrio')}
        ${renderNumeroCard(numeros.anoPessoal, 'Ano Pessoal', 'Energia que rege seu ano atual', meta, 'anoPessoal')}
    `;
    
    // Arcanos temporais
    document.getElementById('arcanos-temporais').innerHTML = `
        ${renderArcanoCard(arcanosTemporais.pessoal, 'Arcano Pessoal', 'Seu guia espiritual permanente, a essência de sua alma')}
        ${renderArcanoCard(arcanosTemporais.ano, 'Arcano do Ano', 'A energia que rege todo o seu ano atual')}
        ${renderArcanoCard(arcanosTemporais.mes, 'Arcano do Mês', 'A vibração predominante do mês atual')}
        ${renderArcanoCard(arcanosTemporais.semana, 'Arcano da Semana', 'Os aprendizados e desafios da semana')}
        ${renderArcanoCard(arcanosTemporais.dia, 'Arcano do Dia', 'A atmosfera espiritual que rege este dia específico')}
    `;
    
    // Pirâmide cabalística
    document.getElementById('piramide-cabalistica').innerHTML = renderPiramide(piramide);
    
    // Mostrar resultados
    const resultadosDiv = document.getElementById('resultados-mapa');
    resultadosDiv.classList.add('show');
    resultadosDiv.style.display = 'block';
}

/**
 * Renderiza resultado de compatibilidade
 * @param {Object} compatData - Dados de compatibilidade
 * @returns {void} Atualiza DOM diretamente
 */
function renderResultadoCompatibilidade(compatData) {
    document.getElementById('resultado-compatibilidade').innerHTML = renderCompatibilidade(compatData);
    
    // Mostrar resultado
    const resultadoDiv = document.getElementById('resultado-compatibilidade');
    resultadoDiv.classList.add('show');
    resultadoDiv.style.display = 'block';
}

/**
 * Mostra indicador de carregamento
 * @param {string} containerId - ID do container
 * @returns {void}
 */
function mostrarCarregamento(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '<div class="as-loading">🔮 Calculando sua numerologia...</div>';
        container.style.display = 'block';
    }
}

/**
 * Mostra mensagem de erro
 * @param {string} containerId - ID do container
 * @param {string} mensagem - Mensagem de erro
 * @returns {void}
 */
function mostrarErro(containerId, mensagem) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `<div class="as-error">${mensagem}</div>`;
        container.style.display = 'block';
    }
}

/**
 * Limpa resultados
 * @param {string} containerId - ID do container
 * @returns {void}
 */
function limparResultados(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        container.style.display = 'none';
        container.classList.remove('show');
    }
}

/**
 * Imprime seção específica
 * @param {string} secaoId - ID da seção a imprimir
 * @returns {void}
 */
function imprimirSecao(secaoId) {
    const secao = document.getElementById(secaoId);
    if (!secao) return;
    
    // Criar janela de impressão
    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Aurora Sagrada - Mapa Numerológico</title>
            <link rel="stylesheet" href="css/theme-aurora.css">
            <link rel="stylesheet" href="css/print.css">
        </head>
        <body>
            <div class="as-container">
                <div class="as-header">
                    <h1>🌟 Aurora Sagrada 🌟</h1>
                    <p>Mapa Numerológico</p>
                </div>
                ${secao.outerHTML}
            </div>
        </body>
        </html>
    `);
    
    janelaImpressao.document.close();
    
    // Aguardar carregamento e imprimir
    janelaImpressao.onload = function() {
        setTimeout(() => {
            janelaImpressao.print();
            janelaImpressao.close();
        }, 500);
    };
}

/**
 * Atualiza URL com parâmetros do perfil
 * @param {Object} perfil - Dados do perfil
 * @returns {void}
 */
function atualizarURL(perfil) {
    const params = new URLSearchParams();
    params.set('nome', perfil.info.nome);
    params.set('data', perfil.info.data);
    params.set('tabela', perfil.info.tabela);
    
    const novaURL = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', novaURL);
}

/**
 * Carrega perfil da URL
 * @returns {Object|null} Dados do perfil ou null
 */
function carregarPerfilURL() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    const data = params.get('data');
    const tabela = params.get('tabela') || 'pitagorica';
    
    if (nome && data) {
        return { nome, data, tabela };
    }
    
    return null;
}

// Exportar para uso global
window.AuroraRender = {
    renderNumeroCard,
    renderArcanoCard,
    renderPiramide,
    renderCompatibilidade,
    renderAnaliseAreas,
    renderMapa,
    renderResultadoCompatibilidade,
    mostrarCarregamento,
    mostrarErro,
    limparResultados,
    imprimirSecao,
    atualizarURL,
    carregarPerfilURL
};

