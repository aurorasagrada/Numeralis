# 🌟 Lista de Cálculos de Arcanos - Aurora Sagrada

## ✅ **ARCANOS JÁ INTEGRADOS NA FERRAMENTA**

### 🔢 **1. Arcano Pessoal**
- **Fórmula**: `reduzirParaArcano(numeroDestino)`
- **Base**: Data de nascimento (dia + mês + ano)
- **Função**: `arcanoPessoal = reduzirParaArcano(destino)`
- **Descrição**: Guia espiritual permanente, essência da alma
- **Status**: ✅ **IMPLEMENTADO**

### 📅 **2. Arcano do Ano**
- **Fórmula**: `reduzirParaArcano(dia + mês + anoAtual)`
- **Base**: Dia e mês de nascimento + ano atual
- **Função**: `arcanoAno = reduzirParaArcano(reduzirNumero(dia + mes + hoje.getFullYear()))`
- **Descrição**: Energia que rege todo o ano atual
- **Status**: ✅ **IMPLEMENTADO**

### 🌙 **3. Arcano do Mês**
- **Fórmula**: `reduzirParaArcano(arcanoAno + mêsAtual)`
- **Base**: Arcano do ano + mês atual
- **Função**: `arcanoMes = reduzirParaArcano(reduzirNumero(arcanoAno + (hoje.getMonth() + 1)))`
- **Descrição**: Vibração predominante do mês atual
- **Status**: ✅ **IMPLEMENTADO**

### 📊 **4. Arcano da Semana**
- **Fórmula**: `reduzirParaArcano(semanaISO)`
- **Base**: Número da semana ISO do ano
- **Função**: `arcanoSemana = reduzirParaArcano(reduzirNumero(semanaISO))`
- **Descrição**: Aprendizados e desafios da semana
- **Status**: ✅ **IMPLEMENTADO** (com semana ISO correta)

### ☀️ **5. Arcano do Dia**
- **Fórmula**: `reduzirParaArcano(dia + mês + ano atual)`
- **Base**: Data completa do dia atual
- **Função**: `arcanoDia = reduzirParaArcano(reduzirNumero(hoje.getDate() + (hoje.getMonth() + 1) + hoje.getFullYear()))`
- **Descrição**: Atmosfera espiritual que rege o dia específico
- **Status**: ✅ **IMPLEMENTADO**

### 🔺 **6. Arcano Regente (Pirâmide Cabalística)**
- **Fórmula**: Baseado na posição na pirâmide e idade atual
- **Base**: Nome convertido em números cabalísticos + idade
- **Função**: 
  ```javascript
  const numArcanos = numerosCabalisticos.length;
  const periodo = Math.round(90 / numArcanos);
  const posicaoAtual = Math.ceil(idadeAprox / periodo);
  arcanoRegente = reduzirParaArcano(numero);
  ```
- **Descrição**: Rege períodos específicos da vida (ciclos de 90 anos)
- **Status**: ✅ **IMPLEMENTADO** (apenas no sistema cabalístico)

## 🔧 **FUNÇÕES AUXILIARES IMPLEMENTADAS**

### **reduzirParaArcano(numero)**
```javascript
function reduzirParaArcano(numero) {
    while (numero > 22) {
        numero = numero.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return numero === 0 ? 22 : numero;
}
```
- **Função**: Reduz qualquer número para o range 1-22 (Arcanos Maiores)
- **Tratamento especial**: 0 vira 22 (O Louco)

### **obterSemanaISO(data)**
```javascript
function obterSemanaISO(data) {
    const d = new Date(data);
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}
```
- **Função**: Calcula corretamente a semana ISO (padrão internacional)

### **construirPiramide(numeros)**
```javascript
function construirPiramide(numeros) {
    const piramide = [numeros];
    let linhaAtual = numeros;
    
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
- **Função**: Constrói pirâmide cabalística com redução para arcanos

## 🗺️ **MAPEAMENTO DOS ARCANOS MAIORES**

```javascript
const arcanosMaiores = {
    0: "O Louco", 1: "O Mago", 2: "A Sacerdotisa", 3: "A Imperatriz", 4: "O Imperador",
    5: "O Papa", 6: "Os Enamorados", 7: "O Carro", 8: "A Justiça", 9: "O Eremita",
    10: "A Roda da Fortuna", 11: "A Força", 12: "O Enforcado", 13: "A Morte",
    14: "A Temperança", 15: "O Diabo", 16: "A Torre", 17: "A Estrela",
    18: "A Lua", 19: "O Sol", 20: "O Julgamento", 21: "O Mundo", 22: "O Louco"
};
```

## 🖼️ **IMAGENS DOS ARCANOS INTEGRADAS**

```javascript
const imagensArcanos = {
    0: 'imagens_cartas/00-0-TheFool.jpg',
    1: 'imagens_cartas/01-I-TheMagician.jpg',
    // ... todos os 22 arcanos mapeados
    21: 'imagens_cartas/21-XXI-TheWorld.jpg',
    22: 'imagens_cartas/00-0-TheFool.jpg'
};
```

## 📊 **ESTRUTURA DE DADOS DOS ARCANOS TEMPORAIS**

```javascript
arcanosTemporais: {
    pessoal: arcanoPessoal,    // Baseado no destino
    ano: arcanoAno,            // Dia+mês nascimento + ano atual
    mes: arcanoMes,            // Arcano ano + mês atual
    semana: arcanoSemana,      // Semana ISO
    dia: arcanoDia             // Data completa atual
}
```

## 🎯 **COMO OS ARCANOS SÃO EXIBIDOS**

### **renderArcanoCard(numero, titulo, descricao)**
```javascript
function renderArcanoCard(numero, titulo, descricao) {
    const imagemSrc = imagensArcanos[numero] || 'imagens_cartas/00-0-Back.jpg';
    const nomeArcano = arcanosMaiores[numero] || 'Desconhecido';
    
    return `
        <div class="arcano-card">
            <img src="${imagemSrc}" alt="${nomeArcano}" class="arcano-imagem" 
                 onerror="this.src='imagens_cartas/00-0-Back.jpg'">
            <div class="arcano-info">
                <div class="arcano-numero">${numero}</div>
                <div class="arcano-nome">${titulo}</div>
                <div class="arcano-desc">
                    <strong>${nomeArcano}</strong><br>
                    ${descricao}
                </div>
            </div>
        </div>
    `;
}
```

## ✅ **RESUMO DOS ARCANOS IMPLEMENTADOS**

| Arcano | Fórmula | Base de Cálculo | Status |
|--------|---------|------------------|--------|
| **Pessoal** | `reduzirParaArcano(destino)` | Data de nascimento | ✅ |
| **Ano** | `reduzirParaArcano(dia+mês+anoAtual)` | Aniversário + ano atual | ✅ |
| **Mês** | `reduzirParaArcano(arcanoAno+mês)` | Arcano ano + mês atual | ✅ |
| **Semana** | `reduzirParaArcano(semanaISO)` | Semana ISO do ano | ✅ |
| **Dia** | `reduzirParaArcano(dia+mês+ano)` | Data completa atual | ✅ |
| **Regente** | Posição na pirâmide + idade | Pirâmide cabalística | ✅ |

## 🔄 **FLUXO DE CÁLCULO**

1. **Input**: Nome + Data de nascimento
2. **Processamento**: Função `calcularPerfil()`
3. **Cálculos simultâneos**:
   - Números fundamentais
   - Arcanos temporais (5 tipos)
   - Pirâmide cabalística (se selecionada)
4. **Output**: Objeto com todos os resultados
5. **Renderização**: Cards visuais com imagens

## 🎨 **INTEGRAÇÃO VISUAL**

- ✅ **Imagens das cartas** exibidas em cada arcano
- ✅ **Cards responsivos** com informações detalhadas
- ✅ **Tratamento de erro** para imagens não encontradas
- ✅ **Design whimsigoth** preservado
- ✅ **Exportação PDF** por seção

## 🚀 **STATUS GERAL**

**TODOS OS ARCANOS TEMPORAIS ESTÃO 100% IMPLEMENTADOS E FUNCIONAIS!**

- ✅ 6 tipos de arcanos calculados
- ✅ Imagens integradas (22 arcanos maiores)
- ✅ Interface visual completa
- ✅ Cálculos matematicamente corretos
- ✅ Cache para performance
- ✅ Permalink para compartilhamento

