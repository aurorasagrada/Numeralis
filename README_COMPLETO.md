# 🌟 Aurora Sagrada - Sistema Numerológico Completo

## ✨ Visão Geral
O Aurora Sagrada é um sistema completo de numerologia e tarô com design whimsigoth vintage, oferecendo análises profundas através de cálculos pitagóricos, cabalísticos e interpretações baseadas nos arcanos maiores.

## 🎯 Funcionalidades Principais

### 🔢 Sistema Numerológico Completo
- **Numerologia Pitagórica**: Cálculos tradicionais com redução 1-9
- **Numerologia Cabalística**: Sistema hebraico com correspondências 1-26
- **Números da Alma, Personalidade, Expressão e Destino**
- **Ano Pessoal e Ciclos Temporais**

### 🔺 Pirâmide Cabalística
- **Construção automática** da pirâmide com nome completo
- **Ciclos de 90 anos** divididos por número de letras
- **Arcano Regente** baseado na idade atual
- **Interpretações detalhadas** de cada posição

### 🌟 Arcanos Temporais
- **Arcano Pessoal**: Guia espiritual permanente
- **Arcano do Ano**: Energia anual
- **Arcano do Mês**: Vibração mensal
- **Arcano da Semana**: Aprendizados semanais
- **Arcano do Dia**: Atmosfera diária

### 💕 Compatibilidade Amorosa
- **Base de dados completa** com 445 combinações
- **Análise detalhada** por números de destino
- **Scores de compatibilidade** com porcentagens
- **Pontos fortes, desafios e conselhos** personalizados

## 📁 Estrutura do Projeto

### 🎨 Interfaces Principais
- **`aurora_sagrada_sistema_completo.html`** - Sistema original corrigido
- **`guia_numerologico_aurora_sagrada.html`** - Guia educativo completo
- **`calculadora_avancada_numerologia.html`** - Ferramenta unificada avançada

### 🗃️ Bases de Dados
- **`base_dados_ciclos_90_corrigida.js`** - 966 linhas de interpretações dos ciclos
- **`completar_combinacoes_amorosas.json`** - 445 combinações de compatibilidade
- **`cartas_tarot/`** - 81 arquivos HTML com interpretações das cartas
- **`imagens_cartas/`** - 158 imagens de cartas em alta qualidade

### 📚 Documentação
- **`README.md`** - Documentação principal
- **`RELATORIO_CORRECOES_AURORA_SAGRADA.md`** - Relatório de correções
- **`INSTRUCOES_GITHUB.md`** - Instruções para upload
- **`todo.md`** - Lista de tarefas e progresso

## 🔧 Tecnologias Utilizadas

### Frontend
- **HTML5** com estrutura semântica
- **CSS3** com gradientes e animações
- **JavaScript ES6+** com funções modernas
- **Design Responsivo** para desktop e mobile

### Dados
- **JSON** para bases de compatibilidade
- **JavaScript Objects** para interpretações
- **Tabelas de conversão** pitagórica e cabalística

## 🎨 Design Whimsigoth

### 🎨 Paleta de Cores
- **Primária**: `#3e0a29` (Vinho profundo)
- **Secundária**: `#b2d1b1` (Verde sálvia)
- **Terciária**: `#0b1836` (Azul noturno)
- **Acento**: `#f0aa53` (Dourado místico)
- **Fundo**: `#f2eaff` (Lavanda suave)

### 🔤 Tipografia
- **Títulos**: Cinzel Decorative (serif decorativa)
- **Corpo**: Alice (serif elegante)
- **Elementos especiais**: Ícones pixel art

### ✨ Elementos Visuais
- Gradientes sutis e sombras
- Bordas arredondadas
- Animações suaves
- Ornamentos decorativos
- Cards com elevação

## 🚀 Como Usar

### 1. Sistema Principal
```bash
# Abrir no navegador
open aurora_sagrada_sistema_completo.html
```

### 2. Guia Numerológico
```bash
# Ferramenta educativa
open guia_numerologico_aurora_sagrada.html
```

### 3. Calculadora Avançada
```bash
# Interface unificada completa
open calculadora_avancada_numerologia.html
```

## 📊 Estatísticas do Projeto

### 📈 Arquivos e Linhas
- **Total de arquivos**: 515+
- **Linhas de código**: 15.000+
- **Bases de dados**: 1.411 linhas
- **Interpretações**: Milhares de textos únicos

### 🔢 Funcionalidades
- **78 cartas de tarô** com interpretações completas
- **445 combinações amorosas** analisadas
- **22 arcanos maiores** com ciclos de 90 anos
- **9 números principais** com significados detalhados

## 🔮 Cálculos Implementados

### Numerologia Básica
```javascript
// Número da Alma (vogais)
const numeroAlma = reduzirNumero(calcularVogais(nome));

// Número da Personalidade (consoantes)
const numeroPersonalidade = reduzirNumero(calcularConsoantes(nome));

// Número da Expressão (nome completo)
const numeroExpressao = reduzirNumero(calcularNomeCompleto(nome));

// Número do Destino (data de nascimento)
const numeroDestino = reduzirNumero(somarData(dataNascimento));
```

### Pirâmide Cabalística
```javascript
// Construção da pirâmide
function construirPiramide(numerosCabalisticos) {
    const piramide = [numerosCabalisticos];
    let linhaAtual = numerosCabalisticos;
    
    while (linhaAtual.length > 1) {
        const novaLinha = [];
        for (let i = 0; i < linhaAtual.length - 1; i++) {
            const soma = linhaAtual[i] + linhaAtual[i + 1];
            novaLinha.push(reduzirParaArcano(soma));
        }
        piramide.push(novaLinha);
        linhaAtual = novaLinha;
    }
    
    return piramide;
}
```

### Arcanos Temporais
```javascript
// Arcano Pessoal
const arcanoPessoal = reduzirParaArcano(somarData(dataNascimento));

// Arcano do Ano
const arcanoAno = reduzirParaArcano(dia + mes + anoAtual);

// Arcano do Mês
const arcanoMes = reduzirParaArcano(arcanoAno + mesAtual);
```

## 🌟 Recursos Especiais

### 🔍 Interpretações Profundas
- **Ciclos de 90 anos** com textos detalhados
- **Aspectos múltiplos**: amor, finanças, família, espiritualidade
- **Palavras-chave** para cada arcano
- **Sínteses** completas e poéticas

### 💫 Interface Intuitiva
- **Navegação por tabs** organizada
- **Resultados visuais** com cards elegantes
- **Feedback imediato** em todos os cálculos
- **Design responsivo** para todos os dispositivos

### 🎯 Precisão dos Cálculos
- **Validação de dados** em todos os campos
- **Tratamento de erros** robusto
- **Cálculos verificados** matematicamente
- **Resultados consistentes** entre sistemas

## 🔄 Atualizações e Melhorias

### ✅ Correções Implementadas
- **Cálculo de idade** corrigido (era negativo)
- **Layout responsivo** validado
- **Duplicação de imagens** removida
- **Navegação** otimizada
- **Base de dados** integrada completamente

### 🚀 Próximas Funcionalidades
- [ ] Sistema de salvamento de perfis
- [ ] Exportação de relatórios em PDF
- [ ] Integração com calendário lunar
- [ ] Análise de trânsitos planetários
- [ ] Sistema de notificações personalizadas

## 📱 Compatibilidade

### 🌐 Navegadores Suportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### 📱 Dispositivos
- ✅ Desktop (1920x1080+)
- ✅ Tablet (768x1024+)
- ✅ Mobile (375x667+)

## 🤝 Contribuição

### 🔧 Como Contribuir
1. Fork do repositório
2. Criar branch para feature
3. Implementar melhorias
4. Testar funcionalidades
5. Submeter pull request

### 📝 Padrões de Código
- **JavaScript**: ES6+ com comentários
- **CSS**: BEM methodology
- **HTML**: Semântico e acessível
- **Commits**: Conventional commits

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

Desenvolvido com ✨ magia numerológica e design whimsigoth para a comunidade esotérica e espiritual.

---

**Aurora Sagrada** - *Onde os números revelam os mistérios da alma* 🌙✨

