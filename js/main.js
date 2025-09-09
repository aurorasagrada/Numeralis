// 🌟 Aurora Sagrada - Inicialização Principal

// Estado global da aplicação
const AuroraApp = {
    secaoAtiva: 'meu-mapa',
    perfilAtual: null,
    perfil1: null,
    perfil2: null,
    compatibilidadeAtual: null
};

/**
 * Inicializa a aplicação
 */
function inicializarApp() {
    console.log('🌟 Inicializando Aurora Sagrada...');
    
    // Configurar eventos
    configurarEventos();
    
    // Carregar perfil da URL se existir
    carregarPerfilInicial();
    
    // Configurar fontes do Google
    carregarFontes();
    
    console.log('✨ Aurora Sagrada inicializada com sucesso!');
}

/**
 * Configura todos os event listeners
 */
function configurarEventos() {
    // Tabs de navegação
    document.querySelectorAll('.as-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const secao = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
            mostrarSecao(secao);
        });
    });
    
    // Formulário do mapa pessoal
    const formMapa = document.getElementById('form-mapa');
    if (formMapa) {
        formMapa.addEventListener('submit', handleFormMapa);
    }
    
    // Formulário de compatibilidade
    const formCompat = document.getElementById('form-compatibilidade');
    if (formCompat) {
        formCompat.addEventListener('submit', handleFormCompatibilidade);
    }
    
    // Eventos de teclado para melhor UX
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            const secaoAtiva = document.querySelector('.as-section.active');
            const form = secaoAtiva?.querySelector('form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }
        }
    });
    
    // Auto-save nos campos (debounced)
    const campos = document.querySelectorAll('input[type="text"], input[type="date"], select');
    campos.forEach(campo => {
        campo.addEventListener('input', AuroraUtils.debounce(() => {
            salvarRascunho();
        }, 1000));
    });
}

/**
 * Mostra seção específica
 * @param {string} secaoId - ID da seção a mostrar
 */
function mostrarSecao(secaoId) {
    // Atualizar estado
    AuroraApp.secaoAtiva = secaoId;
    
    // Ocultar todas as seções
    document.querySelectorAll('.as-section').forEach(secao => {
        secao.classList.remove('active');
    });
    
    // Mostrar seção ativa
    const secaoAtiva = document.getElementById(secaoId);
    if (secaoAtiva) {
        secaoAtiva.classList.add('active');
    }
    
    // Atualizar botões de tab
    document.querySelectorAll('.as-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const btnAtivo = document.querySelector(`[onclick*="${secaoId}"]`);
    if (btnAtivo) {
        btnAtivo.classList.add('active');
    }
    
    // Limpar resultados da seção anterior se necessário
    if (secaoId === 'meu-mapa') {
        // Manter resultados do mapa
    } else if (secaoId === 'compatibilidade') {
        // Manter resultados de compatibilidade
    }
}

/**
 * Manipula submissão do formulário de mapa pessoal
 * @param {Event} e - Evento de submit
 */
async function handleFormMapa(e) {
    e.preventDefault();
    
    try {
        // Obter dados do formulário
        const formData = new FormData(e.target);
        const nome = formData.get('nome') || document.getElementById('nome-mapa').value;
        const data = formData.get('data') || document.getElementById('data-mapa').value;
        const tabela = formData.get('tabela') || document.getElementById('tabela-mapa').value;
        
        // Validar dados
        if (!AuroraUtils.validarNome(nome)) {
            AuroraRender.mostrarErro('resultados-mapa', 'Por favor, digite um nome válido (mínimo 2 caracteres).');
            return;
        }
        
        if (!AuroraUtils.validarData(data)) {
            AuroraRender.mostrarErro('resultados-mapa', 'Por favor, digite uma data de nascimento válida.');
            return;
        }
        
        // Mostrar carregamento
        AuroraRender.mostrarCarregamento('resultados-mapa');
        
        // Calcular perfil
        const perfil = AuroraPerfil.calcularPerfil({ nome, data, tabela });
        
        // Salvar no estado
        AuroraApp.perfilAtual = perfil;
        
        // Renderizar resultados
        AuroraRender.renderMapa(perfil);
        
        // Atualizar URL
        AuroraRender.atualizarURL(perfil);
        
        // Salvar no localStorage
        localStorage.setItem('aurora_ultimo_perfil', JSON.stringify(perfil));
        
    } catch (error) {
        console.error('Erro ao calcular mapa:', error);
        AuroraRender.mostrarErro('resultados-mapa', `Erro ao calcular: ${error.message}`);
    }
}

/**
 * Manipula submissão do formulário de compatibilidade
 * @param {Event} e - Evento de submit
 */
async function handleFormCompatibilidade(e) {
    e.preventDefault();
    
    try {
        // Obter dados dos formulários
        const formData = new FormData(e.target);
        const nome1 = formData.get('nome1') || document.getElementById('nome1').value;
        const data1 = formData.get('data1') || document.getElementById('data1').value;
        const nome2 = formData.get('nome2') || document.getElementById('nome2').value;
        const data2 = formData.get('data2') || document.getElementById('data2').value;
        const tabela = formData.get('tabela-compat') || document.getElementById('tabela-compat').value;
        
        // Validar dados
        if (!AuroraUtils.validarNome(nome1) || !AuroraUtils.validarNome(nome2)) {
            AuroraRender.mostrarErro('resultado-compatibilidade', 'Por favor, digite nomes válidos para ambas as pessoas.');
            return;
        }
        
        if (!AuroraUtils.validarData(data1) || !AuroraUtils.validarData(data2)) {
            AuroraRender.mostrarErro('resultado-compatibilidade', 'Por favor, digite datas de nascimento válidas para ambas as pessoas.');
            return;
        }
        
        // Mostrar carregamento
        AuroraRender.mostrarCarregamento('resultado-compatibilidade');
        
        // Calcular perfis
        const perfil1 = AuroraPerfil.calcularPerfil({ nome: nome1, data: data1, tabela });
        const perfil2 = AuroraPerfil.calcularPerfil({ nome: nome2, data: data2, tabela });
        
        // Calcular compatibilidade
        const compatibilidade = await AuroraCompat.calcularCompatibilidade(perfil1, perfil2);
        
        // Salvar no estado
        AuroraApp.perfil1 = perfil1;
        AuroraApp.perfil2 = perfil2;
        AuroraApp.compatibilidadeAtual = compatibilidade;
        
        // Renderizar resultado
        AuroraRender.renderResultadoCompatibilidade(compatibilidade);
        
        // Salvar no localStorage
        localStorage.setItem('aurora_ultima_compatibilidade', JSON.stringify({
            perfil1, perfil2, compatibilidade
        }));
        
    } catch (error) {
        console.error('Erro ao calcular compatibilidade:', error);
        AuroraRender.mostrarErro('resultado-compatibilidade', `Erro ao calcular: ${error.message}`);
    }
}

/**
 * Carrega perfil inicial da URL ou localStorage
 */
function carregarPerfilInicial() {
    // Tentar carregar da URL primeiro
    const perfilURL = AuroraRender.carregarPerfilURL();
    if (perfilURL) {
        // Preencher formulário
        document.getElementById('nome-mapa').value = perfilURL.nome;
        document.getElementById('data-mapa').value = perfilURL.data;
        document.getElementById('tabela-mapa').value = perfilURL.tabela;
        
        // Calcular automaticamente
        document.getElementById('form-mapa').dispatchEvent(new Event('submit'));
        return;
    }
    
    // Tentar carregar do localStorage
    try {
        const ultimoPerfil = localStorage.getItem('aurora_ultimo_perfil');
        if (ultimoPerfil) {
            const perfil = JSON.parse(ultimoPerfil);
            
            // Preencher formulário
            document.getElementById('nome-mapa').value = perfil.info.nome;
            document.getElementById('data-mapa').value = perfil.info.data;
            document.getElementById('tabela-mapa').value = perfil.info.tabela;
        }
    } catch (error) {
        console.log('Nenhum perfil salvo encontrado');
    }
}

/**
 * Salva rascunho dos formulários
 */
function salvarRascunho() {
    try {
        const rascunho = {
            mapa: {
                nome: document.getElementById('nome-mapa')?.value || '',
                data: document.getElementById('data-mapa')?.value || '',
                tabela: document.getElementById('tabela-mapa')?.value || 'pitagorica'
            },
            compatibilidade: {
                nome1: document.getElementById('nome1')?.value || '',
                data1: document.getElementById('data1')?.value || '',
                nome2: document.getElementById('nome2')?.value || '',
                data2: document.getElementById('data2')?.value || '',
                tabela: document.getElementById('tabela-compat')?.value || 'pitagorica'
            }
        };
        
        localStorage.setItem('aurora_rascunho', JSON.stringify(rascunho));
    } catch (error) {
        console.log('Erro ao salvar rascunho:', error);
    }
}

/**
 * Carrega rascunho dos formulários
 */
function carregarRascunho() {
    try {
        const rascunho = localStorage.getItem('aurora_rascunho');
        if (rascunho) {
            const dados = JSON.parse(rascunho);
            
            // Preencher formulário do mapa
            if (dados.mapa) {
                const nomeMapa = document.getElementById('nome-mapa');
                const dataMapa = document.getElementById('data-mapa');
                const tabelaMapa = document.getElementById('tabela-mapa');
                
                if (nomeMapa && !nomeMapa.value) nomeMapa.value = dados.mapa.nome;
                if (dataMapa && !dataMapa.value) dataMapa.value = dados.mapa.data;
                if (tabelaMapa) tabelaMapa.value = dados.mapa.tabela;
            }
            
            // Preencher formulário de compatibilidade
            if (dados.compatibilidade) {
                const nome1 = document.getElementById('nome1');
                const data1 = document.getElementById('data1');
                const nome2 = document.getElementById('nome2');
                const data2 = document.getElementById('data2');
                const tabelaCompat = document.getElementById('tabela-compat');
                
                if (nome1 && !nome1.value) nome1.value = dados.compatibilidade.nome1;
                if (data1 && !data1.value) data1.value = dados.compatibilidade.data1;
                if (nome2 && !nome2.value) nome2.value = dados.compatibilidade.nome2;
                if (data2 && !data2.value) data2.value = dados.compatibilidade.data2;
                if (tabelaCompat) tabelaCompat.value = dados.compatibilidade.tabela;
            }
        }
    } catch (error) {
        console.log('Erro ao carregar rascunho:', error);
    }
}

/**
 * Carrega fontes do Google
 */
function carregarFontes() {
    // Carregar fontes do Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Alice:wght@400&family=Cinzel+Decorative:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

/**
 * Função global para imprimir seção (chamada pelos botões)
 * @param {string} secaoId - ID da seção
 */
function imprimirSecao(secaoId) {
    AuroraRender.imprimirSecao(secaoId);
}

/**
 * Função global para mostrar seção (chamada pelos botões)
 * @param {string} secaoId - ID da seção
 */
function mostrarSecao(secaoId) {
    AuroraApp.mostrarSecao ? AuroraApp.mostrarSecao(secaoId) : mostrarSecao(secaoId);
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    inicializarApp();
    carregarRascunho();
});

// Salvar rascunho antes de sair da página
window.addEventListener('beforeunload', salvarRascunho);

// Exportar para uso global
window.AuroraApp = AuroraApp;
window.mostrarSecao = mostrarSecao;
window.imprimirSecao = imprimirSecao;

