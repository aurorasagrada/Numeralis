// Mapeamento completo dos Arcanos Maiores e Menores
const mapeamentoArcanos = {
    // Arcanos Maiores (0-21)
    0: { nome: "O Louco", arquivo: "o_louco.html", imagem: "0TheFool.jpg", diretorio: "maiores" },
    1: { nome: "O Mago", arquivo: "o_mago.html", imagem: "1TheMagician.jpg", diretorio: "maiores" },
    2: { nome: "A Sacerdotisa", arquivo: "a_sacerdotisa.html", imagem: "2TheHighPriestess.jpg", diretorio: "maiores" },
    3: { nome: "A Imperatriz", arquivo: "a_imperatriz.html", imagem: "3TheEmpress.jpg", diretorio: "maiores" },
    4: { nome: "O Imperador", arquivo: "o_imperador.html", imagem: "4TheEmperor.jpg", diretorio: "maiores" },
    5: { nome: "O Papa", arquivo: "o_papa.html", imagem: "5TheHierophant.jpg", diretorio: "maiores" },
    6: { nome: "Os Enamorados", arquivo: "os_enamorados.html", imagem: "6TheLovers.jpg", diretorio: "maiores" },
    7: { nome: "O Carro", arquivo: "o_carro.html", imagem: "7TheChariot.jpg", diretorio: "maiores" },
    8: { nome: "A Justiça", arquivo: "a_justica.html", imagem: "8Justice.jpg", diretorio: "maiores" },
    9: { nome: "O Eremita", arquivo: "o_eremita.html", imagem: "9TheHermit.jpg", diretorio: "maiores" },
    10: { nome: "A Roda da Fortuna", arquivo: "a_roda_da_fortuna.html", imagem: "10TheWheelofFortune.jpg", diretorio: "maiores" },
    11: { nome: "A Força", arquivo: "a_forca.html", imagem: "11Strength.jpg", diretorio: "maiores" },
    12: { nome: "O Enforcado", arquivo: "o_enforcado.html", imagem: "12TheHangedMan.jpg", diretorio: "maiores" },
    13: { nome: "A Morte", arquivo: "a_morte.html", imagem: "13Death.jpg", diretorio: "maiores" },
    14: { nome: "A Temperança", arquivo: "a_temperanca.html", imagem: "14Temperance.jpg", diretorio: "maiores" },
    15: { nome: "O Diabo", arquivo: "o_diabo.html", imagem: "15TheDevil.jpg", diretorio: "maiores" },
    16: { nome: "A Torre", arquivo: "a_torre.html", imagem: "16TheTower.jpg", diretorio: "maiores" },
    17: { nome: "A Estrela", arquivo: "a_estrela.html", imagem: "17TheStar.jpg", diretorio: "maiores" },
    18: { nome: "A Lua", arquivo: "a_lua.html", imagem: "18TheMoon.jpg", diretorio: "maiores" },
    19: { nome: "O Sol", arquivo: "o_sol.html", imagem: "19TheSun.jpg", diretorio: "maiores" },
    20: { nome: "O Julgamento", arquivo: "o_julgamento.html", imagem: "20Judgement.jpg", diretorio: "maiores" },
    21: { nome: "O Mundo", arquivo: "o_mundo.html", imagem: "21TheWorld.jpg", diretorio: "maiores" },

    // Arcanos Menores - Ouros/Pentáculos (22-35)
    22: { nome: "Ás de Ouros", arquivo: "as_de_ouros.html", imagem: "22OneofPentacles.jpg", diretorio: "menores/ouros" },
    23: { nome: "Dois de Ouros", arquivo: "dois_de_ouros.html", imagem: "23TwoofPentacles.jpg", diretorio: "menores/ouros" },
    24: { nome: "Três de Ouros", arquivo: "tres_de_ouros.html", imagem: "24ThreeofPentacles.jpg", diretorio: "menores/ouros" },
    25: { nome: "Quatro de Ouros", arquivo: "quatro_de_ouros.html", imagem: "25FourofPentacles.jpg", diretorio: "menores/ouros" },
    26: { nome: "Cinco de Ouros", arquivo: "cinco_de_ouros.html", imagem: "26FiveofPentacles.jpg", diretorio: "menores/ouros" },
    27: { nome: "Seis de Ouros", arquivo: "seis_de_ouros.html", imagem: "27SixofPentacles.jpg", diretorio: "menores/ouros" },
    28: { nome: "Sete de Ouros", arquivo: "sete_de_ouros.html", imagem: "28SevenofPentacles.jpg", diretorio: "menores/ouros" },
    29: { nome: "Oito de Ouros", arquivo: "oito_de_ouros.html", imagem: "29EightofPentacles.jpg", diretorio: "menores/ouros" },
    30: { nome: "Nove de Ouros", arquivo: "nove_de_ouros.html", imagem: "30NineofPentacles.jpg", diretorio: "menores/ouros" },
    31: { nome: "Dez de Ouros", arquivo: "dez_de_ouros.html", imagem: "31TenofPentacles.jpg", diretorio: "menores/ouros" },
    32: { nome: "Valete de Ouros", arquivo: "valete_de_ouros.html", imagem: "32PageofPentacles.jpg", diretorio: "menores/ouros" },
    33: { nome: "Cavaleiro de Ouros", arquivo: "cavaleiro_de_ouros.html", imagem: "33KnightofPentacles.jpg", diretorio: "menores/ouros" },
    34: { nome: "Rainha de Ouros", arquivo: "rainha_de_ouros.html", imagem: "34QueenofPentacles.jpg", diretorio: "menores/ouros" },
    35: { nome: "Rei de Ouros", arquivo: "rei_de_ouros.html", imagem: "35KingofPentacles.jpg", diretorio: "menores/ouros" },

    // Arcanos Menores - Paus/Clubes (36-49)
    36: { nome: "Ás de Paus", arquivo: "as_de_paus.html", imagem: "36OneofClubs.jpg", diretorio: "menores/paus" },
    37: { nome: "Dois de Paus", arquivo: "dois_de_paus.html", imagem: "37TwoofClubs.jpg", diretorio: "menores/paus" },
    38: { nome: "Três de Paus", arquivo: "tres_de_paus.html", imagem: "38ThreeofClubs.jpg", diretorio: "menores/paus" },
    39: { nome: "Quatro de Paus", arquivo: "quatro_de_paus.html", imagem: "39FourofClubs.jpg", diretorio: "menores/paus" },
    40: { nome: "Cinco de Paus", arquivo: "cinco_de_paus.html", imagem: "40FiveofClubs.jpg", diretorio: "menores/paus" },
    41: { nome: "Seis de Paus", arquivo: "seis_de_paus.html", imagem: "41SixofClubs.jpg", diretorio: "menores/paus" },
    42: { nome: "Sete de Paus", arquivo: "sete_de_paus.html", imagem: "42SevenofClubs.jpg", diretorio: "menores/paus" },
    43: { nome: "Oito de Paus", arquivo: "oito_de_paus.html", imagem: "43EightofClubs.jpg", diretorio: "menores/paus" },
    44: { nome: "Nove de Paus", arquivo: "nove_de_paus.html", imagem: "44NineofClubs.jpg", diretorio: "menores/paus" },
    45: { nome: "Dez de Paus", arquivo: "dez_de_paus.html", imagem: "45TenofClubs.jpg", diretorio: "menores/paus" },
    46: { nome: "Valete de Paus", arquivo: "valete_de_paus.html", imagem: "46PageofClubs.jpg", diretorio: "menores/paus" },
    47: { nome: "Cavaleiro de Paus", arquivo: "cavaleiro_de_paus.html", imagem: "47KnightofClubs.jpg", diretorio: "menores/paus" },
    48: { nome: "Rainha de Paus", arquivo: "rainha_de_paus.html", imagem: "48QueenofClubs.jpg", diretorio: "menores/paus" },
    49: { nome: "Rei de Paus", arquivo: "rei_de_paus.html", imagem: "49KingofClubs.jpg", diretorio: "menores/paus" },

    // Arcanos Menores - Copas (50-63)
    50: { nome: "Ás de Copas", arquivo: "as_de_copas.html", imagem: "50OneofCups.jpg", diretorio: "menores/copas" },
    51: { nome: "Dois de Copas", arquivo: "dois_de_copas.html", imagem: "51TwoofCups.jpg", diretorio: "menores/copas" },
    52: { nome: "Três de Copas", arquivo: "tres_de_copas.html", imagem: "52ThreeofCups.jpg", diretorio: "menores/copas" },
    53: { nome: "Quatro de Copas", arquivo: "quatro_de_copas.html", imagem: "53FourofCups.jpg", diretorio: "menores/copas" },
    54: { nome: "Cinco de Copas", arquivo: "cinco_de_copas.html", imagem: "54FiveofCups.jpg", diretorio: "menores/copas" },
    55: { nome: "Seis de Copas", arquivo: "seis_de_copas.html", imagem: "55SixofCups.jpg", diretorio: "menores/copas" },
    56: { nome: "Sete de Copas", arquivo: "sete_de_copas.html", imagem: "56SevenofCups.jpg", diretorio: "menores/copas" },
    57: { nome: "Oito de Copas", arquivo: "oito_de_copas.html", imagem: "57EightofCups.jpg", diretorio: "menores/copas" },
    58: { nome: "Nove de Copas", arquivo: "nove_de_copas.html", imagem: "58NineofCups.jpg", diretorio: "menores/copas" },
    59: { nome: "Dez de Copas", arquivo: "dez_de_copas.html", imagem: "59TenofCups.jpg", diretorio: "menores/copas" },
    60: { nome: "Valete de Copas", arquivo: "valete_de_copas.html", imagem: "60PageofCups.jpg", diretorio: "menores/copas" },
    61: { nome: "Cavaleiro de Copas", arquivo: "cavaleiro_de_copas.html", imagem: "61KnightofCups.jpg", diretorio: "menores/copas" },
    62: { nome: "Rainha de Copas", arquivo: "rainha_de_copas.html", imagem: "62QueenofCups.jpg", diretorio: "menores/copas" },
    63: { nome: "Rei de Copas", arquivo: "rei_de_copas.html", imagem: "63KingofCups.jpg", diretorio: "menores/copas" },

    // Arcanos Menores - Espadas (64-77)
    64: { nome: "Ás de Espadas", arquivo: "as_de_espadas.html", imagem: "64OneofSwords.jpg", diretorio: "menores/espadas" },
    65: { nome: "Dois de Espadas", arquivo: "dois_de_espadas.html", imagem: "65TwoofSwords.jpg", diretorio: "menores/espadas" },
    66: { nome: "Três de Espadas", arquivo: "tres_de_espadas.html", imagem: "66ThreeofSwords.jpg", diretorio: "menores/espadas" },
    67: { nome: "Quatro de Espadas", arquivo: "quatro_de_espadas.html", imagem: "67FourofSwords.jpg", diretorio: "menores/espadas" },
    68: { nome: "Cinco de Espadas", arquivo: "cinco_de_espadas.html", imagem: "68FiveofSwords.jpg", diretorio: "menores/espadas" },
    69: { nome: "Seis de Espadas", arquivo: "seis_de_espadas.html", imagem: "69SixofSwords.jpg", diretorio: "menores/espadas" },
    70: { nome: "Sete de Espadas", arquivo: "sete_de_espadas.html", imagem: "70SevenofSwords.jpg", diretorio: "menores/espadas" },
    71: { nome: "Oito de Espadas", arquivo: "oito_de_espadas.html", imagem: "71EightofSwords.jpg", diretorio: "menores/espadas" },
    72: { nome: "Nove de Espadas", arquivo: "nove_de_espadas.html", imagem: "72NineofSwords.jpg", diretorio: "menores/espadas" },
    73: { nome: "Dez de Espadas", arquivo: "dez_de_espadas.html", imagem: "73TenofSwords.jpg", diretorio: "menores/espadas" },
    74: { nome: "Valete de Espadas", arquivo: "valete_de_espadas.html", imagem: "74PageofSwords.jpg", diretorio: "menores/espadas" },
    75: { nome: "Cavaleiro de Espadas", arquivo: "cavaleiro_de_espadas.html", imagem: "75KnightofSwords.jpg", diretorio: "menores/espadas" },
    76: { nome: "Rainha de Espadas", arquivo: "rainha_de_espadas.html", imagem: "76QueenofSwords.jpg", diretorio: "menores/espadas" },
    77: { nome: "Rei de Espadas", arquivo: "rei_de_espadas.html", imagem: "77KingofSwords.jpg", diretorio: "menores/espadas" }
};

// Função para obter informações do arcano
function getInfoArcano(numero) {
    return mapeamentoArcanos[numero] || null;
}

// Função para obter caminho da imagem do arcano
function getCaminhoImagemArcano(numero) {
    const info = getInfoArcano(numero);
    return info ? `assets/img/cartas/${info.imagem}` : null;
}

// Função para obter caminho da página do arcano
function getCaminhoPaginaArcano(numero) {
    const info = getInfoArcano(numero);
    return info ? `arcanos/${info.diretorio}/${info.arquivo}` : null;
}

// Função para criar botão "Ler Mais"
function criarBotaoLerMais(numeroArcano) {
    const info = getInfoArcano(numeroArcano);
    if (!info) return '';
    
    const caminhoPagina = getCaminhoPaginaArcano(numeroArcano);
    return `<button onclick="window.open('${caminhoPagina}', '_blank')" 
                    style="background: linear-gradient(135deg, var(--wine), var(--sage)); 
                           color: var(--gold); 
                           border: 1px solid var(--gold); 
                           padding: 8px 15px; 
                           border-radius: 20px; 
                           font-size: 0.9rem; 
                           cursor: pointer; 
                           margin-left: 10px;
                           transition: all 0.3s ease;">
                📖 Ler Mais
            </button>`;
}
