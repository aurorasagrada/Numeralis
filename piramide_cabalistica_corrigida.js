// Correções da Pirâmide Cabalística
// Mapeamento de arcanos com imagens e caminhos corretos

const arcanosImagens = {
  "O Louco": "assets/img/cartas/00-0-TheFool.jpg",
  "O Mago": "assets/img/cartas/01-I-TheMagician.jpg", 
  "A Sacerdotisa": "assets/img/cartas/02-II-TheHighPriestess.jpg",
  "A Imperatriz": "assets/img/cartas/03-III-TheEmpress.jpg",
  "O Imperador": "assets/img/cartas/04-IV-TheEmperor.jpg",
  "O Papa": "assets/img/cartas/05-V-TheHierophant.jpg",
  "Os Enamorados": "assets/img/cartas/06-VI-TheLovers.jpg",
  "O Carro": "assets/img/cartas/07-VII-TheChariot.jpg",
  "A Justiça": "assets/img/cartas/11-XI-Justice.jpg",
  "O Eremita": "assets/img/cartas/09-IX-TheHermit.jpg",
  "A Roda da Fortuna": "assets/img/cartas/10-X-WheelofFortune.jpg",
  "A Força": "assets/img/cartas/08-VIII-Strength.jpg",
  "O Enforcado": "assets/img/cartas/12-XII-TheHangedMan.jpg",
  "A Morte": "assets/img/cartas/13-XIII-Death.jpg",
  "A Temperança": "assets/img/cartas/14-XIV-Temperance.jpg",
  "O Diabo": "assets/img/cartas/15-XV-TheDevil.jpg",
  "A Torre": "assets/img/cartas/16-XVI-TheTower.jpg",
  "A Estrela": "assets/img/cartas/17-XVII-TheStar.jpg",
  "A Lua": "assets/img/cartas/18-XVIII-TheMoon.jpg",
  "O Sol": "assets/img/cartas/19-XIX-TheSun.jpg",
  "O Julgamento": "assets/img/cartas/20-XX-Judgement.jpg",
  "O Mundo": "assets/img/cartas/21-XXI-TheWorld.jpg"
};

const arcanosLinks = {
  "O Louco": "arcanos/o_louco.html",
  "O Mago": "arcanos/o_mago.html", 
  "A Sacerdotisa": "arcanos/a_sacerdotisa.html",
  "A Imperatriz": "arcanos/a_imperatriz.html",
  "O Imperador": "arcanos/o_imperador.html",
  "O Papa": "arcanos/o_papa.html",
  "Os Enamorados": "arcanos/os_enamorados.html",
  "O Carro": "arcanos/o_carro.html",
  "A Justiça": "arcanos/a_justica.html",
  "O Eremita": "arcanos/o_eremita.html",
  "A Roda da Fortuna": "arcanos/a_roda_da_fortuna.html",
  "A Força": "arcanos/a_forca.html",
  "O Enforcado": "arcanos/o_enforcado.html",
  "A Morte": "arcanos/a_morte.html",
  "A Temperança": "arcanos/a_temperanca.html",
  "O Diabo": "arcanos/o_diabo.html",
  "A Torre": "arcanos/a_torre.html",
  "A Estrela": "arcanos/a_estrela.html",
  "A Lua": "arcanos/a_lua.html",
  "O Sol": "arcanos/o_sol.html",
  "O Julgamento": "arcanos/o_julgamento.html",
  "O Mundo": "arcanos/o_mundo.html"
};

// Função para renderizar arcanos com imagens e botões
function renderArcanoComImagem(arcano, idades) {
  const imagem = arcanosImagens[arcano] || "assets/img/cartas/00-0-Back.jpg";
  const link = arcanosLinks[arcano] || "#";
  
  return `
    <div style="background: rgba(11,24,54,0.3); border: 2px solid var(--sage); border-radius: 15px; padding: 1.5rem; margin: 1rem; text-align: center; min-width: 200px;">
      <h5 style="color: var(--gold); margin-bottom: 1rem; font-size: 1.1rem;">${arcano}</h5>
      
      <div style="margin-bottom: 1rem; cursor: pointer;" onclick="window.open('${link}', '_blank')">
        <img src="${imagem}" alt="${arcano}" style="width: 100px; height: 150px; object-fit: cover; border-radius: 12px; border: 3px solid var(--gold); box-shadow: 0 6px 15px rgba(0,0,0,0.4); transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 8px 20px rgba(212,175,55,0.6)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.4)'">
      </div>
      
      <p style="color: var(--sage); margin-bottom: 1rem; font-size: 0.9rem;">
        Idades: ${idades}
      </p>
      
      <a href="${link}" target="_blank" style="background: linear-gradient(135deg, var(--gold), #d4a574); color: #000; padding: 0.5rem 1rem; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.9rem; display: inline-block; transition: all 0.3s ease;">
        📖 Ler Mais
      </a>
    </div>
  `;
}

// Função corrigida para renderizar resultados da pirâmide
function renderResultadosPiramideCompleta_Corrigida(piramide, arcanoAtual, sequenciasNegativasEncontradas, desafiosCarmicos, nome, idade) {
  // Disponibilizar globalmente
  window.renderResultadosPiramideCompleta_Corrigida = renderResultadosPiramideCompleta_Corrigida;
  const resultadosDiv = document.getElementById('resultados-piramide');
  
  let html = `
    <div class="card" style="background: linear-gradient(135deg, rgba(62,10,41,0.1), rgba(11,24,54,0.1)); border: 2px solid var(--wine);">
      <h2 style="text-align: center; color: var(--gold); margin-bottom: 2rem;">
        🔺 SUA PIRÂMIDE CABALÍSTICA COMPLETA
      </h2>
      
      <div style="text-align: center; margin-bottom: 2rem;">
        <h3 style="color: var(--sage);">${nome}, ${idade} anos</h3>
        <p style="color: var(--parch); font-style: italic;">
          Descobra os mistérios de sua jornada através da sabedoria cabalística ancestral
        </p>
      </div>
  `;

  // Arcano Regente Atual
  if (arcanoAtual.arcano) {
    const imagemArcano = arcanosImagens[arcanoAtual.arcano] || "assets/img/cartas/00-0-Back.jpg";
    const linkArcano = arcanosLinks[arcanoAtual.arcano] || "#";
    
    html += `
      <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: rgba(240,170,83,0.1); border-radius: 15px; border: 2px solid var(--gold);">
        <h3 style="color: var(--gold); margin-bottom: 1.5rem;">✨ SEU ARCANO REGENTE ATUAL</h3>
        
        <div style="margin-bottom: 1.5rem;">
          <img src="${imagemArcano}" alt="${arcanoAtual.arcano}" style="width: 150px; height: 225px; object-fit: cover; border-radius: 12px; border: 3px solid var(--gold); box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
        </div>
        
        <h4 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.8rem; font-weight: bold;">${arcanoAtual.arcano}</h4>
        <p style="color: var(--sage); margin-bottom: 1.5rem;">Arcano Regente aos ${idade} anos</p>
        
        <a href="${linkArcano}" target="_blank" style="background: linear-gradient(135deg, var(--gold), #d4a574); color: #000; padding: 1rem 2rem; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 1.1rem; display: inline-block; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
          📖 LER MAIS SOBRE ESTE ARCANO
        </a>
      </div>
    `;
  }

  // Pirâmide Visual
  html += `
    <div style="margin: 2rem 0;">
      <h3 style="text-align: center; color: var(--sage); margin-bottom: 2rem;">Pirâmide Cabalística - Ciclo de 90 Anos</h3>
      <div class="pyramid-container">
  `;
  
  for (let i = 0; i < piramide.length; i++) {
    html += '<div class="pyramid-row">';
    for (let j = 0; j < piramide[i].length; j++) {
      const isHighlight = (i === arcanoAtual.linha && j === arcanoAtual.coluna);
      let classe = 'pyramid-cell';
      
      if (isHighlight) {
        classe += ' highlight';
      }
      
      // Verificar se faz parte de sequência negativa
      for (let seq of sequenciasNegativasEncontradas) {
        if (seq.linha === i && j >= seq.posicao && j < seq.posicao + 3) {
          classe += ' negative-sequence';
        }
      }
      
      html += `<div class="${classe}">${piramide[i][j]}</div>`;
    }
    html += '</div>';
  }
  
  html += `
      </div>
    </div>
  `;

  // Mapeamento dos Arcanos por Idades - CORRIGIDO
  html += `
    <div style="margin: 2rem 0; padding: 2rem; background: rgba(178,209,177,0.1); border-radius: 15px; border: 2px solid var(--sage);">
      <h3 style="color: var(--sage); text-align: center; margin-bottom: 2rem;">🔮 IDADES DOS ARCANOS NO CICLO DE 90 ANOS</h3>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; justify-items: center;">
  `;

  // Usar o mapeamento correto dos arcanos
  for (let i = 0; i < mapeamentoArcanos.length; i++) {
    const arcanoInfo = mapeamentoArcanos[i];
    html += renderArcanoComImagem(arcanoInfo.nome, arcanoInfo.idades);
  }

  html += `
      </div>
    </div>
  `;

  // Sequências Negativas - CORRIGIDAS (sem duplicação)
  if (sequenciasNegativasEncontradas.length > 0) {
    html += `
      <div style="margin: 2rem 0; padding: 2rem; background: rgba(62,10,41,0.1); border-radius: 15px; border: 2px solid var(--wine);">
        <h3 style="color: var(--gold); text-align: center; margin-bottom: 2rem;">⚠️ SEQUÊNCIAS NEGATIVAS DETECTADAS NA PIRÂMIDE</h3>
        <p style="text-align: center; color: var(--sage); margin-bottom: 2rem; font-style: italic;">
          Padrões que requerem atenção especial e transformação consciente
        </p>
    `;
    
    for (let seq of sequenciasNegativasEncontradas) {
      const info = sequenciasNegativasExpandidas[seq.sequencia];
      if (info) {
        html += `
          <div style="background: rgba(11,24,54,0.3); border-radius: 15px; padding: 2rem; margin: 1.5rem 0; border: 2px solid var(--wine);">
            <h4 style="color: #d4af37; margin-bottom: 1.5rem; text-align: center; font-size: 1.8rem; font-weight: bold;">${info.titulo}</h4>
            
            <div style="background: rgba(62,10,41,0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
              <h5 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.3rem; font-weight: bold;">📋 SIGNIFICADO PROFUNDO</h5>
              <p style="line-height: 1.7; text-align: justify;">${info.significado}</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
              <div style="background: rgba(178,209,177,0.1); padding: 1.5rem; border-radius: 10px;">
                <h6 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold;">✅ PONTOS POSITIVOS</h6>
                <ul style="margin: 0; padding-left: 1.2rem;">
                  ${info.pontosPositivos.map(ponto => `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${ponto}</li>`).join('')}
                </ul>
              </div>
              
              <div style="background: rgba(240,170,83,0.1); padding: 1.5rem; border-radius: 10px;">
                <h6 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold;">⚠️ PONTOS NEGATIVOS</h6>
                <ul style="margin: 0; padding-left: 1.2rem;">
                  ${info.pontosNegativos.map(ponto => `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${ponto}</li>`).join('')}
                </ul>
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
              <div style="background: rgba(62,10,41,0.1); padding: 1.5rem; border-radius: 10px;">
                <h6 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold;">🚫 O QUE EVITAR</h6>
                <ul style="margin: 0; padding-left: 1.2rem;">
                  ${info.oQueEvitar.map(item => `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${item}</li>`).join('')}
                </ul>
              </div>
              
              <div style="background: rgba(11,24,54,0.2); padding: 1.5rem; border-radius: 10px;">
                <h6 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold;">🛠️ O QUE TRABALHAR</h6>
                <ul style="margin: 0; padding-left: 1.2rem;">
                  ${info.oQueTrabalhar.map(item => `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${item}</li>`).join('')}
                </ul>
              </div>
            </div>
            
            <div style="background: rgba(178,209,177,0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
              <h6 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold;">🌟 COMO SUPERAR</h6>
              <ul style="margin: 0; padding-left: 1.2rem;">
                ${info.comoSuperar.map(item => `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${item}</li>`).join('')}
              </ul>
            </div>
            
            <div style="background: linear-gradient(135deg, rgba(240,170,83,0.2), rgba(178,209,177,0.2)); padding: 1.5rem; border-radius: 10px; text-align: center;">
              <h6 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold;">✨ TRANSFORMAÇÃO ESPERADA</h6>
              <p style="line-height: 1.7; font-style: italic;">${info.transformacao}</p>
            </div>
          </div>
        `;
      }
    }
    
    html += `</div>`;
  }

  // Desafios Cármicos - MANTIDOS
  if (desafiosCarmicos.length > 0) {
    html += `
      <div style="margin: 2rem 0; padding: 2rem; background: rgba(240,170,83,0.1); border-radius: 15px; border: 2px solid var(--gold);">
        <h3 style="color: var(--gold); text-align: center; margin-bottom: 2rem;">🔥 DESAFIOS CÁRMICOS IDENTIFICADOS</h3>
        <p style="text-align: center; color: var(--sage); margin-bottom: 2rem; font-style: italic;">
          Lições de vida que sua alma escolheu desenvolver nesta encarnação
        </p>
    `;
    
    for (let desafio of desafiosCarmicos) {
      const info = desafio.desafio;
      html += `
        <div style="background: rgba(11,24,54,0.3); border-radius: 15px; padding: 2rem; margin: 1.5rem 0; border: 2px solid var(--gold);">
          <h4 style="color: #d4af37; margin-bottom: 1.5rem; text-align: center; font-size: 1.8rem; font-weight: bold;">${info.titulo}</h4>
          
          <div style="background: rgba(178,209,177,0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
            <h5 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.3rem; font-weight: bold;">🎯 SIGNIFICADO DO DESAFIO</h5>
            <p style="line-height: 1.7; text-align: justify;">${info.significado}</p>
          </div>
          
          <div style="background: linear-gradient(135deg, rgba(240,170,83,0.2), rgba(178,209,177,0.2)); padding: 1.5rem; border-radius: 10px; text-align: center;">
            <h5 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.3rem; font-weight: bold;">✨ TRANSFORMAÇÃO ESPERADA</h5>
            <p style="line-height: 1.7; font-style: italic;">${info.transformacaoEsperada}</p>
          </div>
        </div>
      `;
    }
    
    html += `</div>`;
  }

  html += `</div>`;
  
  resultadosDiv.innerHTML = html;
  resultadosDiv.classList.remove('hidden');
}

// Mapeamento para compatibilidade com o código principal
if (typeof window !== 'undefined') {
  window.renderResultadosPiramideCompleta = renderResultadosPiramideCompleta_Corrigida;
  window.arcanosLinks = arcanosLinks;
}
