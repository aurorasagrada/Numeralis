// Base de dados para sequências negativas da pirâmide cabalística
const sequenciasNegativas = {
  introducao: {
    titulo: "Compreendendo as Sequências Negativas na Pirâmide Cabalística",
    texto: `
      <p>As sequências negativas na pirâmide cabalística não representam aspectos "ruins" ou "maléficos" da personalidade, mas sim padrões energéticos que indicam áreas de maior desafio e oportunidade de crescimento. São como sombras que, quando iluminadas pela consciência, se transformam em fontes de poder e sabedoria.</p>
      
      <p>Estas sequências aparecem quando determinados números se repetem em posições específicas da pirâmide ou quando certas combinações criam padrões que indicam lições kármicas importantes a serem trabalhadas nesta encarnação.</p>
      
      <p>Reconhecer e compreender essas sequências é fundamental para o processo de autoconhecimento e transformação pessoal, pois elas apontam exatamente onde devemos focar nossa atenção para alcançar maior equilíbrio e realização.</p>
    `
  },
  
  padroes: {
    repeticoes: {
      titulo: "Padrões de Repetição Numérica",
      descricao: "Quando o mesmo número aparece múltiplas vezes na pirâmide",
      
      1: {
        titulo: "Excesso de Energia 1 - O Tirano Interior",
        manifestacao: "Autoritarismo, impaciência, egocentrismo, dificuldade em aceitar opiniões diferentes",
        origem: "Feridas relacionadas ao poder pessoal e reconhecimento",
        transformacao: `
          <p>O excesso de energia 1 indica uma alma que veio para aprender sobre o verdadeiro significado da liderança. Muitas vezes, essas pessoas tiveram experiências passadas onde seu poder foi suprimido ou mal utilizado, criando uma compensação excessiva nesta vida.</p>
          
          <p>A transformação acontece quando a pessoa compreende que a verdadeira liderança não é sobre dominar os outros, mas sobre inspirá-los e capacitá-los. É preciso desenvolver humildade, paciência e a capacidade de ouvir e valorizar as contribuições dos outros.</p>
          
          <p>O caminho de cura envolve práticas que desenvolvam a compaixão e a cooperação, como trabalho voluntário, mentoria de jovens ou participação em projetos colaborativos onde o ego individual deve ser colocado a serviço de um bem maior.</p>
        `,
        exercicios: [
          "Praticar a escuta ativa em conversas",
          "Delegar responsabilidades e confiar nos outros",
          "Buscar feedback honesto sobre seu estilo de liderança",
          "Desenvolver projetos em equipe onde você não seja o líder"
        ]
      },
      
      2: {
        titulo: "Excesso de Energia 2 - O Mártir Emocional",
        manifestacao: "Codependência, vitimização, indecisão crônica, perda da identidade pessoal",
        origem: "Feridas relacionadas ao abandono e à necessidade de aprovação",
        transformacao: `
          <p>O excesso de energia 2 revela uma alma que precisa aprender sobre o equilíbrio entre dar e receber, entre cuidar dos outros e cuidar de si mesma. Frequentemente, essas pessoas desenvolveram padrões de autossacrifício como forma de garantir amor e aceitação.</p>
          
          <p>A transformação requer o desenvolvimento de limites saudáveis e o reconhecimento de que o verdadeiro amor não exige o sacrifício da própria identidade. É preciso aprender a dizer "não" quando necessário e a valorizar suas próprias necessidades e desejos.</p>
          
          <p>O processo de cura envolve reconectar-se com sua própria essência, desenvolvendo autoestima independente da aprovação externa e aprendendo que é possível ser amoroso e cooperativo sem se anular completamente.</p>
        `,
        exercicios: [
          "Estabelecer limites claros em relacionamentos",
          "Praticar atividades que fortaleçam a autoestima",
          "Tomar decisões pequenas de forma independente",
          "Desenvolver hobbies e interesses pessoais"
        ]
      },
      
      3: {
        titulo: "Excesso de Energia 3 - O Palhaço Triste",
        manifestacao: "Superficialidade emocional, dispersão, busca constante por aprovação, drama excessivo",
        origem: "Feridas relacionadas à expressão autêntica e ao medo da rejeição",
        transformacao: `
          <p>O excesso de energia 3 indica uma alma que usa a criatividade e o humor como máscaras para esconder vulnerabilidades profundas. Essas pessoas frequentemente temem que, se mostrarem sua verdadeira essência, serão rejeitadas ou consideradas inadequadas.</p>
          
          <p>A transformação acontece quando a pessoa encontra coragem para ser autêntica, mesmo que isso signifique momentos de seriedade ou vulnerabilidade. É preciso aprender que a verdadeira criatividade vem da honestidade emocional, não da performance constante.</p>
          
          <p>O caminho de cura envolve desenvolver profundidade emocional e aprender a usar os dons criativos para expressar verdades mais profundas sobre a experiência humana, transformando entretenimento superficial em arte que toca e transforma.</p>
        `,
        exercicios: [
          "Praticar momentos de silêncio e introspecção",
          "Expressar emoções difíceis através da arte",
          "Buscar relacionamentos baseados em autenticidade",
          "Desenvolver projetos criativos com propósito mais profundo"
        ]
      }
    },
    
    combinacoes: {
      titulo: "Combinações Desafiadoras",
      descricao: "Quando certas combinações numéricas criam tensões específicas",
      
      "1-4": {
        titulo: "Conflito Inovação vs. Tradição",
        manifestacao: "Frustração constante entre desejo de mudança e necessidade de segurança",
        dinamica: "A energia 1 quer inovar enquanto a 4 busca manter estruturas estabelecidas",
        transformacao: `
          <p>Esta combinação cria uma tensão interna entre o impulso pioneiro e a necessidade de segurança. A pessoa sente-se dividida entre o desejo de quebrar paradigmas e o medo de perder a estabilidade conquistada.</p>
          
          <p>A resolução vem através da compreensão de que inovação e tradição podem coexistir harmoniosamente. É possível ser pioneiro dentro de estruturas estabelecidas, criando mudanças graduais e sustentáveis.</p>
        `,
        solucao: "Desenvolver inovações que respeitem valores tradicionais importantes"
      },
      
      "3-7": {
        titulo: "Conflito Expressão vs. Introspecção",
        manifestacao: "Alternância entre necessidade de socialização e isolamento",
        dinamica: "A energia 3 busca expressão externa enquanto a 7 precisa de recolhimento interno",
        transformacao: `
          <p>Esta combinação cria uma pessoa que oscila entre momentos de grande sociabilidade e períodos de profundo recolhimento. Pode haver confusão sobre qual é a verdadeira natureza da pessoa.</p>
          
          <p>A integração acontece quando se compreende que ambas as necessidades são válidas e podem ser honradas em momentos apropriados. A expressão criativa pode ser enriquecida pela profundidade contemplativa.</p>
        `,
        solucao: "Criar ritmos que honrem tanto a necessidade de expressão quanto de introspecção"
      }
    }
  },
  
  trabalhoTransformacao: {
    titulo: "Métodos de Transformação das Sequências Negativas",
    introducao: `
      <p>O trabalho com sequências negativas não visa eliminá-las, mas sim transformar sua energia de forma construtiva. É um processo alquímico onde o chumbo das dificuldades se transforma no ouro da sabedoria.</p>
    `,
    
    tecnicas: {
      consciencia: {
        titulo: "Desenvolvimento da Consciência",
        descricao: "O primeiro passo é reconhecer e aceitar os padrões sem julgamento",
        praticas: [
          "Observação diária dos padrões comportamentais",
          "Registro em diário das situações desafiadoras",
          "Meditação focada na aceitação das sombras pessoais"
        ]
      },
      
      integracao: {
        titulo: "Integração Consciente",
        descricao: "Trabalhar ativamente para equilibrar as energias conflitantes",
        praticas: [
          "Exercícios específicos para cada tipo de sequência",
          "Terapias que trabalhem com polaridades",
          "Práticas espirituais que promovam equilíbrio interno"
        ]
      },
      
      transcendencia: {
        titulo: "Transcendência e Serviço",
        descricao: "Usar as lições aprendidas para ajudar outros em situações similares",
        praticas: [
          "Mentoria de pessoas com desafios similares",
          "Desenvolvimento de projetos que transformem feridas em medicina",
          "Ensino e compartilhamento das lições aprendidas"
        ]
      }
    }
  }
};
