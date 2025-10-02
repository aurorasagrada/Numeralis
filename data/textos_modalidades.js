// Base de dados expandida para todas as modalidades de numerologia
const textosModalidades = {
  residencial: {
    titulo: "Numerologia Residencial: A Energia do Seu Lar",
    introducao: `
      <p>Sua casa é muito mais do que apenas um local físico onde você habita - ela é um campo energético vivo que influencia profundamente seu bem-estar, suas relações e seu crescimento pessoal. A Numerologia Residencial nos ensina que cada endereço carrega uma vibração específica que pode harmonizar ou desafiar nossa própria energia pessoal.</p>
      
      <p>Através dos números que compõem seu endereço, podemos decifrar as características energéticas de seu lar e compreender como essa energia interage com sua numerologia pessoal. Esta análise não apenas revela as qualidades inerentes do espaço, mas também oferece insights valiosos sobre como otimizar essa energia para criar um ambiente mais harmonioso e propício ao seu desenvolvimento.</p>
      
      <p>Cada número residencial traz consigo lições específicas e oportunidades de crescimento. Compreender essas energias permite que você trabalhe conscientemente com elas, transformando sua casa em um verdadeiro santuário de apoio e crescimento pessoal.</p>
    `,
    
    interpretacoes: {
      1: {
        titulo: "Casa da Liderança e Novos Começos",
        energia: "Independência, inovação, liderança, pioneirismo",
        caracteristicas: `
          <p>Uma residência com energia 1 é um verdadeiro laboratório de inovação e liderança. Este é o tipo de casa que naturalmente atrai pessoas ambiciosas, empreendedoras e que não têm medo de trilhar caminhos únicos. A energia desta casa estimula a independência e encoraja seus moradores a assumirem o protagonismo de suas próprias vidas.</p>
          
          <p>Moradores desta casa frequentemente se encontram em posições de liderança, seja em suas carreiras, comunidades ou círculos sociais. A casa 1 é especialmente favorável para quem está iniciando novos projetos, mudando de carreira ou buscando maior autonomia em sua vida. É um espaço que respira inovação e originalidade.</p>
          
          <p>Esta energia residencial também favorece o desenvolvimento da autoconfiança e da capacidade de tomar decisões importantes de forma independente. Moradores podem notar um aumento em sua coragem para enfrentar desafios e uma maior clareza sobre seus objetivos pessoais.</p>
        `,
        desafios: "Pode gerar isolamento excessivo, competitividade desnecessária ou dificuldade em trabalhar em equipe",
        harmonizacao: "Inclua elementos que promovam cooperação, como espaços de convivência acolhedores e objetos que representem parceria",
        cores: "Vermelho, laranja e dourado para potencializar a energia; azul e verde para equilibrar",
        elementos: "Cristais como quartzo rutilado e citrino; plantas como bambu da sorte e espada-de-são-jorge"
      },
      
      2: {
        titulo: "Casa da Harmonia e Relacionamentos",
        energia: "Cooperação, diplomacia, sensibilidade, parceria",
        caracteristicas: `
          <p>A casa com energia 2 é um verdadeiro ninho de harmonia e conexão emocional. Este é o tipo de residência que naturalmente se torna um ponto de encontro para familiares e amigos, um espaço onde as pessoas se sentem acolhidas e compreendidas. A energia desta casa promove relacionamentos profundos e duradouros.</p>
          
          <p>Moradores desta casa frequentemente desenvolvem habilidades excepcionais de mediação e diplomacia. É um ambiente que favorece casais, famílias e qualquer pessoa que valorize relacionamentos harmoniosos. A casa 2 é especialmente benéfica para terapeutas, conselheiros e profissionais que trabalham com pessoas.</p>
          
          <p>Esta energia residencial também estimula a intuição e a sensibilidade emocional. Moradores podem notar uma maior capacidade de compreender as necessidades dos outros e uma tendência natural para criar ambientes pacíficos e equilibrados.</p>
        `,
        desafios: "Pode gerar dependência emocional excessiva, indecisão ou tendência a evitar conflitos necessários",
        harmonizacao: "Crie espaços que promovam tanto a união quanto a individualidade, equilibrando áreas comuns com cantos pessoais",
        cores: "Rosa, azul claro e branco para potencializar; amarelo e laranja para energizar",
        elementos: "Cristais como quartzo rosa e pedra da lua; plantas como lírio da paz e violeta"
      },
      
      3: {
        titulo: "Casa da Criatividade e Expressão",
        energia: "Criatividade, comunicação, alegria, expressão artística",
        caracteristicas: `
          <p>Uma residência com energia 3 é um verdadeiro centro de criatividade e expressão. Este é o tipo de casa que pulsa com vida, cor e movimento, inspirando seus moradores a explorarem seus talentos artísticos e comunicativos. A energia desta casa estimula a criatividade em todas as suas formas.</p>
          
          <p>Moradores desta casa frequentemente se destacam em áreas criativas como arte, música, escrita ou comunicação. É um ambiente que favorece artistas, escritores, comunicadores e qualquer pessoa que trabalhe com expressão criativa. A casa 3 é especialmente benéfica para famílias com crianças, pois estimula o desenvolvimento criativo.</p>
          
          <p>Esta energia residencial também promove a comunicação aberta e honesta. Moradores podem notar uma maior facilidade para expressar seus sentimentos e ideias, bem como uma tendência natural para criar um ambiente alegre e estimulante.</p>
        `,
        desafios: "Pode gerar dispersão excessiva, superficialidade ou dificuldade em manter foco em projetos longos",
        harmonizacao: "Organize espaços criativos bem definidos e inclua elementos que promovam concentração e profundidade",
        cores: "Amarelo, laranja e verde para potencializar; azul e violeta para equilibrar",
        elementos: "Cristais como citrino e ametista; plantas como girassol e lavanda"
      }
    }
  },
  
  veicular: {
    titulo: "Numerologia Veicular: A Energia do Seu Meio de Transporte",
    introducao: `
      <p>Seu veículo é muito mais do que um simples meio de transporte - ele é uma extensão de sua energia pessoal e um companheiro constante em sua jornada diária. A Numerologia Veicular revela que a placa de seu carro, moto ou qualquer outro veículo carrega uma vibração específica que influencia suas experiências de viagem, sua segurança e até mesmo seu estado emocional durante os deslocamentos.</p>
      
      <p>Cada combinação de letras e números na placa cria um campo energético único que interage com sua própria numerologia pessoal. Esta energia pode facilitar ou desafiar suas jornadas, influenciar a forma como você se relaciona com seu veículo e até mesmo afetar a frequência de problemas mecânicos ou situações inesperadas.</p>
      
      <p>Compreender a numerologia de seu veículo permite que você trabalhe conscientemente com essa energia, criando uma relação mais harmoniosa com seu meio de transporte e otimizando suas experiências de viagem para maior segurança, conforto e fluidez.</p>
    `,
    
    interpretacoes: {
      1: {
        titulo: "Veículo do Pioneiro - Energia de Liderança",
        caracteristicas: "Independência, velocidade, inovação, liderança no trânsito",
        experiencias: `
          <p>Um veículo com energia 1 é como ter um companheiro pioneiro que está sempre pronto para abrir novos caminhos. Este tipo de veículo tende a ser confiável em situações onde é necessário tomar a iniciativa, como encontrar rotas alternativas ou ser o primeiro a se mover em situações de trânsito complexas.</p>
          
          <p>Proprietários deste veículo frequentemente se encontram assumindo a liderança no trânsito, sendo os primeiros a partir no sinal verde ou a encontrar soluções criativas para problemas de tráfego. É um veículo que inspira confiança e coragem em seu condutor.</p>
          
          <p>Esta energia veicular também favorece viagens de negócios, mudanças de cidade e qualquer situação onde seja necessário pioneirismo e independência. O veículo tende a responder bem a condutores decididos e confiantes.</p>
        `,
        cuidados: "Evite imprudência excessiva; o veículo pode encorajar velocidade desnecessária",
        manutencao: "Tende a ser resistente, mas requer atenção a sistemas de direção e freios",
        harmonizacao: "Use acessórios em tons de vermelho ou dourado; mantenha o interior organizado e limpo"
      },
      
      2: {
        titulo: "Veículo do Diplomata - Energia de Cooperação",
        caracteristicas: "Suavidade, conforto, segurança, harmonia no trânsito",
        experiencias: `
          <p>Um veículo com energia 2 é como ter um mediador pacífico que promove harmonia e cooperação no trânsito. Este tipo de veículo tende a criar experiências de condução mais suaves e relaxantes, favorecendo viagens em família e situações que requerem paciência e diplomacia.</p>
          
          <p>Proprietários deste veículo frequentemente notam uma maior cortesia de outros motoristas e uma tendência natural para evitar conflitos no trânsito. É um veículo que promove a condução defensiva e consciente, priorizando a segurança sobre a velocidade.</p>
          
          <p>Esta energia veicular é especialmente favorável para viagens românticas, passeios familiares e situações onde o conforto e a harmonia são mais importantes que a velocidade. O veículo responde bem a condutores pacientes e cuidadosos.</p>
        `,
        cuidados: "Pode encorajar condução excessivamente lenta; mantenha equilíbrio entre segurança e fluidez",
        manutencao: "Geralmente confiável, mas requer atenção especial ao sistema de suspensão e conforto",
        harmonizacao: "Use acessórios em tons pastéis; inclua elementos que promovam conforto e tranquilidade"
      }
    }
  },
  
  digital: {
    titulo: "Numerologia Digital: Sua Identidade no Mundo Virtual",
    introducao: `
      <p>Na era digital, nossa presença online tornou-se uma extensão fundamental de nossa identidade. A Numerologia Digital revela que nossos números de telefone, nomes de usuário e identidades virtuais carregam vibrações específicas que influenciam nossa experiência no mundo digital e a forma como nos conectamos com outros através da tecnologia.</p>
      
      <p>Cada dígito em seu número de telefone ou cada letra em seu nome de usuário contribui para criar um campo energético que afeta suas comunicações digitais, suas conexões online e até mesmo a frequência de problemas técnicos que você pode experimentar. Esta energia digital interage constantemente com sua numerologia pessoal, criando padrões únicos de experiência virtual.</p>
      
      <p>Compreender sua numerologia digital permite otimizar sua presença online, escolher nomes de usuário mais alinhados com seus objetivos e criar uma identidade virtual que verdadeiramente ressoe com sua essência pessoal, facilitando conexões mais autênticas e experiências digitais mais harmoniosas.</p>
    `,
    
    interpretacoes: {
      1: {
        titulo: "Identidade Digital do Líder",
        caracteristicas: "Inovação tecnológica, liderança online, presença marcante",
        manifestacao: `
          <p>Uma identidade digital com energia 1 naturalmente se destaca no ambiente virtual. Pessoas com esta vibração digital tendem a ser pioneiras em novas plataformas, líderes de opinião em suas áreas de interesse e frequentemente são as primeiras a adotar novas tecnologias ou tendências digitais.</p>
          
          <p>Esta energia favorece empreendedores digitais, influenciadores e qualquer pessoa que busque estabelecer uma presença online forte e independente. Há uma tendência natural para criar conteúdo original e inovador que se destaca da multidão.</p>
          
          <p>No ambiente profissional digital, esta energia promove liderança em projetos online, capacidade de tomar decisões rápidas em ambientes virtuais e uma presença que inspira confiança em colegas e clientes através de plataformas digitais.</p>
        `,
        desafios: "Pode gerar impaciência com tecnologias lentas ou tendência ao isolamento digital",
        otimizacao: "Use nomes de usuário que reflitam liderança; mantenha perfis atualizados e profissionais",
        plataformas: "LinkedIn para networking profissional; YouTube para compartilhar expertise"
      },
      
      2: {
        titulo: "Identidade Digital do Colaborador",
        caracteristicas: "Conexões harmoniosas, colaboração online, sensibilidade digital",
        manifestacao: `
          <p>Uma identidade digital com energia 2 cria conexões profundas e significativas no ambiente virtual. Pessoas com esta vibração digital são naturalmente diplomáticas em suas comunicações online, excelentes mediadoras em discussões digitais e tendem a criar comunidades harmoniosas ao seu redor.</p>
          
          <p>Esta energia favorece profissionais que trabalham em equipes virtuais, terapeutas online e qualquer pessoa que busque criar relacionamentos autênticos através da tecnologia. Há uma habilidade natural para perceber nuances emocionais mesmo em comunicações escritas.</p>
          
          <p>No ambiente social digital, esta energia promove amizades duradouras formadas online, participação ativa em grupos de apoio virtuais e uma presença que acalma e harmoniza discussões acaloradas em fóruns ou redes sociais.</p>
        `,
        desafios: "Pode gerar dependência excessiva de validação online ou dificuldade em estabelecer limites digitais",
        otimizacao: "Participe de comunidades colaborativas; use a tecnologia para fortalecer relacionamentos reais",
        plataformas: "Facebook para conexões pessoais; Discord para comunidades de interesse"
      }
    }
  },
  
  pedras: {
    titulo: "Numerologia das Pedras Preciosas: Cristais para Sua Jornada",
    introducao: `
      <p>As pedras preciosas e cristais são muito mais do que belos ornamentos - elas são repositórios vivos de energia que podem amplificar, equilibrar e harmonizar nossa vibração pessoal. A Numerologia das Pedras revela que cada número de destino ressoa com cristais específicos que podem apoiar nossa jornada de crescimento e realização pessoal.</p>
      
      <p>Esta antiga sabedoria reconhece que as pedras formadas nas profundezas da Terra carregam frequências específicas que interagem com nossa própria energia numerológica. Quando escolhemos conscientemente cristais alinhados com nossa numerologia pessoal, criamos uma sinergia poderosa que pode acelerar nosso desenvolvimento espiritual e material.</p>
      
      <p>Cada pedra associada ao seu número de destino oferece qualidades únicas que podem ajudá-lo a superar desafios específicos, potencializar seus talentos naturais e manter-se alinhado com seu propósito de vida mais elevado.</p>
    `,
    
    correspondencias: {
      1: {
        pedra: "Granada",
        propriedades: "Coragem, liderança, vitalidade, determinação",
        descricao: `
          <p>A Granada é a pedra perfeita para quem possui o número de destino 1, pois amplifica naturalmente as qualidades de liderança e pioneirismo. Esta pedra de fogo interior desperta a coragem necessária para assumir riscos calculados e liderar com confiança.</p>
          
          <p>Conhecida como a "pedra do guerreiro", a Granada fortalece a determinação e ajuda a manter o foco em objetivos de longo prazo. Ela é especialmente útil para superar a procrastinação e transformar ideias em ações concretas.</p>
          
          <p>No aspecto emocional, a Granada ajuda a equilibrar a tendência ao isolamento do número 1, promovendo relacionamentos mais calorosos sem comprometer a independência pessoal.</p>
        `,
        usos: [
          "Use como pingente para fortalecer a autoconfiança",
          "Mantenha na mesa de trabalho para estimular a produtividade",
          "Medite com ela para clarificar objetivos pessoais",
          "Carregue no bolso durante apresentações importantes"
        ],
        cuidados: "Limpe mensalmente com água corrente e energize ao sol da manhã"
      },
      
      2: {
        pedra: "Pedra da Lua",
        propriedades: "Intuição, sensibilidade, harmonia emocional, receptividade",
        descricao: `
          <p>A Pedra da Lua é o cristal ideal para quem possui o número de destino 2, pois amplifica a intuição natural e promove o equilíbrio emocional necessário para relacionamentos harmoniosos. Esta pedra lunar conecta você com os ciclos naturais da vida e da emoção.</p>
          
          <p>Conhecida como a "pedra da nova lua", ela ajuda a desenvolver a sensibilidade psíquica e a capacidade de compreender as necessidades não expressas dos outros. É especialmente útil para mediadoras, terapeutas e conselheiros.</p>
          
          <p>No aspecto relacional, a Pedra da Lua promove comunicação empática e ajuda a resolver conflitos através da compreensão mútua, fortalecendo a capacidade natural do número 2 para a diplomacia.</p>
        `,
        usos: [
          "Use como anel para fortalecer relacionamentos",
          "Coloque sob o travesseiro para sonhos intuitivos",
          "Medite com ela durante a lua cheia",
          "Mantenha no ambiente de trabalho para promover harmonia"
        ],
        cuidados: "Limpe com água de chuva e energize sob a luz da lua cheia"
      }
    }
  }
};
