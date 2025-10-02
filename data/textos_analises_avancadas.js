// Base de dados expandida para análises avançadas
const textosAnalises = {
  transitos: {
    titulo: "Os Trânsitos Numerológicos: Navegando pelas Estações da Vida",
    introducao: `
      <p>Os trânsitos numerológicos são como as estações do ano em nossa jornada pessoal - cada um traz suas próprias energias, desafios e oportunidades. Compreender esses ciclos nos permite navegar pela vida com maior consciência, aproveitando ao máximo cada fase e preparando-nos adequadamente para as transições.</p>
      
      <p>Assim como um jardineiro experiente sabe quando plantar, quando podar e quando colher, uma pessoa consciente de seus trânsitos numerológicos pode tomar decisões mais alinhadas com o fluxo natural de sua evolução pessoal.</p>
    `,
    
    ciclos: {
      1: {
        titulo: "Trânsito do Pioneiro - Tempo de Novos Começos",
        duracao: "Aproximadamente 9 anos",
        energia: "Iniciação, liderança, independência, coragem",
        oportunidades: [
          "Iniciar novos projetos ou empreendimentos",
          "Desenvolver liderança e autoconfiança",
          "Tomar decisões importantes de forma independente",
          "Explorar talentos únicos e originalidade"
        ],
        desafios: [
          "Evitar impulsividade excessiva",
          "Aprender a trabalhar em equipe",
          "Não se tornar excessivamente egocêntrico",
          "Equilibrar ambição com consideração pelos outros"
        ],
        conselhos: `
          <p>Durante este trânsito, você está sendo chamado a assumir o protagonismo de sua própria vida. É um período de grande potencial criativo e realizador, mas que exige coragem para sair da zona de conforto e assumir riscos calculados.</p>
          
          <p>Este é o momento ideal para iniciar aquele projeto que você vem adiando, para se posicionar como líder em sua área ou para tomar decisões que há muito tempo precisavam ser tomadas. Confie em sua intuição e na sua capacidade de abrir novos caminhos.</p>
          
          <p>Lembre-se de que ser pioneiro não significa ser solitário. Busque equilibrar sua necessidade de independência com a sabedoria de aceitar apoio e conselhos quando necessário.</p>
        `
      },
      
      2: {
        titulo: "Trânsito do Diplomata - Tempo de Cooperação e Relacionamentos",
        duracao: "Aproximadamente 9 anos",
        energia: "Cooperação, sensibilidade, parceria, paciência",
        oportunidades: [
          "Fortalecer relacionamentos pessoais e profissionais",
          "Desenvolver habilidades de mediação e diplomacia",
          "Trabalhar em equipe de forma mais efetiva",
          "Cultivar a paciência e a sensibilidade"
        ],
        desafios: [
          "Não se perder nas necessidades dos outros",
          "Evitar indecisão excessiva",
          "Manter a própria identidade em parcerias",
          "Lidar com conflitos de forma construtiva"
        ],
        conselhos: `
          <p>Este trânsito convida você a explorar o poder da colaboração e da parceria. É um período onde suas maiores conquistas virão através do trabalho conjunto com outros, seja em relacionamentos pessoais ou profissionais.</p>
          
          <p>Desenvolva sua capacidade de ouvir verdadeiramente, de compreender diferentes perspectivas e de encontrar soluções que beneficiem a todos os envolvidos. Sua sensibilidade e intuição estarão especialmente aguçadas durante este período.</p>
          
          <p>Cuidado para não se tornar excessivamente dependente da aprovação dos outros ou para não abdicar completamente de suas próprias necessidades em favor da harmonia. O verdadeiro equilíbrio vem quando você consegue ser um parceiro generoso sem perder sua essência individual.</p>
        `
      }
    }
  },
  
  pinaculos: {
    titulo: "Os Pináculos da Vida: Marcos de Evolução Pessoal",
    introducao: `
      <p>Os Pináculos representam os grandes marcos evolutivos de nossa jornada terrena. São como montanhas que devemos escalar, cada uma oferecendo uma vista única e lições específicas que nos preparam para a próxima etapa de nossa evolução.</p>
      
      <p>Tradicionalmente, reconhecemos quatro grandes Pináculos na vida de uma pessoa, cada um correspondendo a diferentes fases de desenvolvimento e maturidade. Compreender esses ciclos nos permite abraçar cada fase com maior consciência e propósito.</p>
    `,
    
    fases: {
      primeiro: {
        titulo: "Primeiro Pináculo - A Formação da Personalidade (0-35 anos)",
        foco: "Desenvolvimento da identidade pessoal e descoberta de talentos",
        caracteristicas: `
          <p>Este é o período de formação fundamental, onde estabelecemos nossa identidade básica e descobrimos nossos talentos naturais. É uma fase de experimentação, aprendizado e construção das bases que sustentarão toda nossa jornada futura.</p>
          
          <p>Durante este Pináculo, somos como escultores trabalhando em nossa própria obra-prima, descobrindo quem somos através de tentativas, erros e sucessos. Cada experiência contribui para moldar nossa personalidade e nossa visão de mundo.</p>
        `,
        desafios: "Encontrar equilíbrio entre conformidade social e expressão autêntica",
        oportunidades: "Descobrir paixões, desenvolver talentos, estabelecer bases sólidas para o futuro"
      },
      
      segundo: {
        titulo: "Segundo Pináculo - A Construção da Carreira (35-44 anos)",
        foco: "Estabelecimento profissional e consolidação de conquistas",
        caracteristicas: `
          <p>Este é o período de maior produtividade e construção material. Aqui, aplicamos tudo o que aprendemos no primeiro Pináculo para estabelecer nossa posição no mundo e construir as estruturas que nos darão segurança e reconhecimento.</p>
          
          <p>É uma fase de grande energia e ambição, onde nossa capacidade de realização está no auge. As sementes plantadas na juventude começam a dar frutos, e temos a oportunidade de colher os resultados de nossos esforços anteriores.</p>
        `,
        desafios: "Equilibrar ambição com vida pessoal, evitar burnout",
        oportunidades: "Alcançar reconhecimento profissional, construir segurança material, liderar projetos importantes"
      }
    }
  },
  
  ciclosVida: {
    titulo: "Os Grandes Ciclos da Existência",
    introducao: `
      <p>Nossa vida é organizada em grandes ciclos de aproximadamente 27 anos cada, correspondendo às fases fundamentais da experiência humana. Cada ciclo traz suas próprias lições, desafios e oportunidades de crescimento.</p>
      
      <p>Compreender esses ciclos nos permite viver cada fase com maior consciência e propósito, aproveitando ao máximo as energias disponíveis em cada período.</p>
    `,
    
    ciclos: {
      formativo: {
        titulo: "Ciclo Formativo (0-27 anos) - A Semente",
        energia: "Aprendizado, descoberta, formação da personalidade",
        foco: "Absorver conhecimento, desenvolver habilidades básicas, formar identidade",
        licoes: `
          <p>Este é o ciclo da pura potencialidade, onde somos como sementes absorvendo todos os nutrientes necessários para nosso crescimento futuro. Cada experiência, cada aprendizado, cada relacionamento contribui para formar a base de quem nos tornaremos.</p>
          
          <p>É um período de grande plasticidade, onde nossa mente e coração estão mais abertos para novas experiências e influências. As impressões recebidas durante este ciclo terão impacto duradouro em toda nossa jornada.</p>
        `
      },
      
      produtivo: {
        titulo: "Ciclo Produtivo (27-54 anos) - A Árvore",
        energia: "Realização, construção, produtividade, responsabilidade",
        foco: "Aplicar conhecimentos, construir carreira, formar família, contribuir para a sociedade",
        licoes: `
          <p>Agora somos a árvore que cresceu da semente do primeiro ciclo. Este é o período de maior produtividade e realização material, onde aplicamos tudo o que aprendemos para construir nossa vida e contribuir para o mundo.</p>
          
          <p>É uma fase de grande responsabilidade, onde nossas decisões afetam não apenas a nós mesmos, mas também àqueles que dependem de nós. Nossa energia está no auge, e temos a capacidade de realizar grandes feitos.</p>
        `
      },
      
      sabedoria: {
        titulo: "Ciclo da Sabedoria (54+ anos) - O Fruto",
        energia: "Sabedoria, mentoria, legado, transcendência",
        foco: "Compartilhar experiências, orientar outros, deixar um legado, buscar significado mais profundo",
        licoes: `
          <p>Este é o ciclo do fruto maduro, onde toda a experiência acumulada se transforma em sabedoria. Agora temos a oportunidade de compartilhar nossos aprendizados e orientar aqueles que estão nos ciclos anteriores.</p>
          
          <p>É um período de maior introspecção e busca por significado mais profundo. As conquistas materiais, embora importantes, cedem espaço para questões mais transcendentais sobre propósito e legado.</p>
        `
      }
    }
  }
};
