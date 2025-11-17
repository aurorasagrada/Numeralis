// FUNÇÕES ORIGINAIS DE ASPECTOS DA VIDA - RESGATADAS DO REPOSITÓRIO
// Extraídas do commit 5cfe291 - Textos originais funcionais

// Função para obter aspectos da vida da sinastria
function obterAspectosVidaSinastria(numeroAnalise, compatibilidadeGeral) {
  const aspectos = {
    1: {
      contexto: "Vocês formam uma união pioneira e independente. Este é um relacionamento baseado na liderança compartilhada, onde ambos buscam inovação e novos começos. A energia de número 1 traz iniciativa, coragem e a capacidade de abrir caminhos juntos.",
      amor: "Paixão intensa e relacionamento dinâmico. Vocês se inspiram mutuamente a serem melhores versões de si mesmos. A atração é baseada na admiração mútua pela força e determinação do parceiro.",
      domestica: "Casa organizada com cada um tendo seu espaço de liderança. Decisões tomadas de forma equilibrada, respeitando a independência individual. Ambiente estimulante e cheio de projetos novos.",
      financas: "Excelente capacidade de gerar renda através de empreendimentos próprios. Investimentos em negócios inovadores e startups. Tendência a serem pioneiros em novos mercados financeiros.",
      social: "Casal admirado pela liderança e iniciativa. Vocês são referência em seu círculo social, inspirando outros casais. Participação ativa em grupos de liderança e desenvolvimento pessoal.",
      objetivos: "Metas ambiciosas focadas em conquistas pessoais e profissionais. Desejo de deixar um legado e serem reconhecidos como pioneiros em suas áreas. Projetos inovadores em conjunto.",
      crescimento: "Desenvolvimento da autoconfiança e capacidade de liderança. Aprendizado sobre como equilibrar independência com parceria. Crescimento através de desafios e conquistas compartilhadas."
    },
    2: {
      contexto: "Vocês formam uma união harmoniosa e cooperativa. Este relacionamento é baseado na parceria equilibrada, sensibilidade emocional e capacidade de trabalhar juntos. A energia do número 2 traz diplomacia, paciência e profunda conexão emocional.",
      amor: "Relacionamento terno e profundamente emocional. Vocês se completam de forma natural, criando uma atmosfera de paz e harmonia. O amor é expresso através de pequenos gestos e cuidado mútuo.",
      domestica: "Lar acolhedor e harmonioso onde a cooperação é natural. Decisões tomadas em conjunto com muito diálogo. Ambiente decorado com sensibilidade e atenção aos detalhes que trazem conforto.",
      financas: "Gestão financeira cuidadosa e conservadora. Preferência por investimentos seguros e planejamento a longo prazo. Excelente capacidade de economizar e construir patrimônio gradualmente.",
      social: "Casal querido e respeitado pela gentileza e diplomacia. Vocês são mediadores naturais em conflitos e sempre dispostos a ajudar amigos. Círculo social estável e duradouro.",
      objetivos: "Metas focadas no bem-estar familiar e harmonia. Desejo de criar um ambiente estável e amoroso. Projetos que beneficiem a comunidade e promovam a paz.",
      crescimento: "Desenvolvimento da paciência e capacidade de cooperação. Aprendizado sobre como manter a harmonia sem perder a individualidade. Crescimento através da sensibilidade emocional."
    },
    3: {
      contexto: "Vocês formam uma união criativa e comunicativa. Este relacionamento é marcado pela expressão artística, otimismo e capacidade de inspirar outros. A energia do número 3 traz alegria, criatividade e excelente comunicação.",
      amor: "Relacionamento alegre e cheio de criatividade. Vocês se divertem juntos e encontram formas únicas de expressar o amor. A comunicação é fluida e cheia de humor e carinho.",
      domestica: "Casa colorida e cheia de vida, com espaços dedicados à criatividade. Ambiente alegre onde a música, arte e conversas animadas são constantes. Decoração única e expressiva.",
      financas: "Renda através de atividades criativas e comunicação. Possibilidade de ganhos com arte, mídia, entretenimento ou educação. Tendência a investir em experiências e desenvolvimento pessoal.",
      social: "Casal popular e carismático que anima qualquer ambiente. Vocês são o centro das atenções em eventos sociais. Amizades diversas e conexões através de interesses artísticos.",
      objetivos: "Metas relacionadas à expressão criativa e comunicação. Desejo de inspirar outros através da arte, escrita ou ensino. Projetos que envolvam criatividade e inovação.",
      crescimento: "Desenvolvimento da autoexpressão e talentos criativos. Aprendizado sobre como usar a comunicação para construir relacionamentos. Crescimento através da arte e criatividade."
    },
    4: {
      contexto: "Vocês formam uma união sólida e prática. Este relacionamento é baseado na estabilidade, trabalho árduo e construção de bases sólidas para o futuro. A energia do número 4 traz organização, disciplina e confiabilidade.",
      amor: "Relacionamento estável e confiável, construído sobre bases sólidas. O amor é demonstrado através de ações práticas e compromisso duradouro. Lealdade e dedicação são as marcas desta união.",
      domestica: "Casa bem organizada e funcional, onde tudo tem seu lugar. Rotinas estabelecidas que trazem segurança e eficiência. Ambiente prático mas aconchegante, focado no conforto real.",
      financas: "Excelente gestão financeira com foco em segurança e estabilidade. Investimentos conservadores e planejamento detalhado. Capacidade de construir patrimônio sólido através de trabalho árduo.",
      social: "Casal respeitado pela confiabilidade e integridade. Amizades duradouras baseadas em confiança mútua. Participação em atividades comunitárias e grupos de trabalho voluntário.",
      objetivos: "Metas práticas focadas em segurança e estabilidade familiar. Desejo de construir um legado duradouro. Projetos que envolvam construção, organização ou serviços essenciais.",
      crescimento: "Desenvolvimento da disciplina e capacidade de organização. Aprendizado sobre como equilibrar trabalho e vida pessoal. Crescimento através da perseverança e dedicação."
    },
    5: {
      contexto: "Vocês formam uma união dinâmica e aventureira. Este relacionamento é marcado pela liberdade, versatilidade e busca constante por novas experiências. A energia do número 5 traz movimento, curiosidade e adaptabilidade.",
      amor: "Relacionamento excitante e cheio de surpresas. Vocês mantêm a paixão viva através de novas experiências e aventuras compartilhadas. A liberdade individual é respeitada e valorizada.",
      domestica: "Casa flexível e adaptável, que reflete as mudanças e interesses do casal. Ambiente que facilita a mobilidade e recebe bem visitantes. Decoração variada e internacional.",
      financas: "Renda diversificada através de múltiplas fontes e atividades. Investimentos em viagens, educação e experiências. Capacidade de se adaptar rapidamente a mudanças econômicas.",
      social: "Casal sociável com círculo amplo e diverso de amigos. Vocês são conhecidos pela hospitalidade e histórias interessantes. Conexões internacionais e multiculturais.",
      objetivos: "Metas relacionadas a viagens, educação e expansão de horizontes. Desejo de conhecer diferentes culturas e formas de vida. Projetos que envolvam comunicação e intercâmbio.",
      crescimento: "Desenvolvimento da adaptabilidade e abertura mental. Aprendizado sobre como equilibrar liberdade com compromisso. Crescimento através de experiências diversas e viagens."
    },
    6: {
      contexto: "Vocês formam uma união amorosa e responsável. Este relacionamento é centrado na família, cuidado mútuo e serviço aos outros. A energia do número 6 traz nurturing, responsabilidade e profundo senso de comunidade.",
      amor: "Relacionamento profundamente amoroso e protetor. Vocês cuidam um do outro com dedicação e ternura. O amor é expresso através do cuidado, apoio e criação de um ambiente seguro.",
      domestica: "Casa acolhedora que é o centro da vida familiar e social. Ambiente onde todos se sentem bem-vindos e cuidados. Decoração calorosa com foco no conforto e funcionalidade familiar.",
      financas: "Gestão financeira focada no bem-estar familiar e segurança. Investimentos em educação dos filhos, saúde e propriedades. Tendência a ser generosos com família e comunidade.",
      social: "Casal conhecido pela generosidade e disposição em ajudar outros. Vocês são o ponto de apoio para familiares e amigos. Participação ativa em atividades comunitárias e beneficentes.",
      objetivos: "Metas centradas no bem-estar familiar e contribuição para a comunidade. Desejo de criar um ambiente harmonioso e educativo. Projetos relacionados a cuidado, educação ou saúde.",
      crescimento: "Desenvolvimento da capacidade de nutrir e cuidar. Aprendizado sobre como equilibrar as necessidades próprias com as dos outros. Crescimento através do serviço e amor incondicional."
    },
    7: {
      contexto: "Vocês formam uma união profunda e espiritual. Este relacionamento é baseado na busca por conhecimento, introspecção e crescimento espiritual. A energia do número 7 traz sabedoria, intuição e conexão com o sagrado.",
      amor: "Relacionamento profundo e intuitivo, onde a conexão vai além do físico. Vocês se compreendem em níveis sutis e compartilham uma jornada espiritual. O amor é expresso através da compreensão mútua.",
      domestica: "Casa tranquila e contemplativa, com espaços para meditação e estudo. Ambiente que favorece a introspecção e o crescimento espiritual. Biblioteca bem organizada e objetos sagrados.",
      financas: "Gestão financeira intuitiva e não materialista. Investimentos em educação, livros e experiências espirituais. Tendência a valorizar mais o crescimento interior que bens materiais.",
      social: "Casal seletivo com círculo pequeno mas profundo de amigos. Vocês são procurados por conselhos e orientação espiritual. Conexões com pessoas de interesses similares em crescimento pessoal.",
      objetivos: "Metas relacionadas ao crescimento espiritual e busca por sabedoria. Desejo de compreender os mistérios da vida. Projetos que envolvam ensino, pesquisa ou práticas espirituais.",
      crescimento: "Desenvolvimento da intuição e sabedoria interior. Aprendizado sobre como equilibrar vida material e espiritual. Crescimento através da meditação, estudo e autoconhecimento."
    },
    8: {
      contexto: "Vocês formam uma união poderosa e ambiciosa. Este relacionamento é focado no sucesso material, liderança e construção de impérios. A energia do número 8 traz poder, organização e capacidade de realização material.",
      amor: "Relacionamento baseado em respeito mútuo e admiração pelo sucesso do parceiro. Vocês se apoiam nas ambições e celebram as conquistas juntos. O amor é expresso através do apoio aos objetivos mútuos.",
      domestica: "Casa luxuosa e bem organizada que reflete o sucesso do casal. Ambiente sofisticado com qualidade em todos os detalhes. Espaço para entretenimento de negócios e networking.",
      financas: "Excelente capacidade de gerar e multiplicar riqueza. Investimentos estratégicos em negócios, imóveis e mercado financeiro. Gestão profissional das finanças com foco em crescimento.",
      social: "Casal influente e respeitado em círculos de negócios e poder. Vocês são referência em sucesso e liderança. Networking estratégico e participação em eventos de alto nível.",
      objetivos: "Metas ambiciosas focadas em sucesso material e reconhecimento. Desejo de construir um império e deixar um legado financeiro. Projetos de grande escala e impacto.",
      crescimento: "Desenvolvimento da capacidade de liderança e gestão. Aprendizado sobre como usar o poder de forma ética. Crescimento através de desafios empresariais e conquistas materiais."
    },
    9: {
      contexto: "Vocês formam uma união humanitária e universal. Este relacionamento é baseado na compaixão, serviço à humanidade e visão ampla do mundo. A energia do número 9 traz altruísmo, sabedoria e capacidade de inspirar outros.",
      amor: "Relacionamento baseado em amor universal e compaixão. Vocês se amam não apenas como casal, mas como almas que servem juntas a um propósito maior. O amor transcende o pessoal.",
      domestica: "Casa aberta e acolhedora para pessoas de todas as origens. Ambiente que reflete valores humanitários e consciência global. Decoração com elementos de diferentes culturas.",
      financas: "Gestão financeira voltada para causas humanitárias e projetos sociais. Investimentos éticos e sustentáveis. Tendência a doar e apoiar causas importantes para a humanidade.",
      social: "Casal admirado pela generosidade e visão humanitária. Vocês inspiram outros a serem melhores e mais conscientes. Conexões globais e participação em movimentos sociais.",
      objetivos: "Metas focadas em fazer a diferença no mundo e ajudar a humanidade. Desejo de deixar um legado de amor e serviço. Projetos que beneficiem grandes grupos de pessoas.",
      crescimento: "Desenvolvimento da compaixão universal e sabedoria. Aprendizado sobre como servir sem se esgotar. Crescimento através do serviço desinteressado e amor incondicional."
    }
  };

  const aspecto = aspectos[numeroAnalise] || aspectos[1];
  
  // Ajustar contexto baseado na compatibilidade
  let contextoAjustado = aspecto.contexto;
  if (compatibilidadeGeral >= 80) {
    contextoAjustado += " Vocês têm uma sintonia excepcional que potencializa todas essas qualidades.";
  } else if (compatibilidadeGeral >= 60) {
    contextoAjustado += " Com boa comunicação, vocês podem desenvolver plenamente essas características.";
  } else {
    contextoAjustado += " Trabalhem juntos para desenvolver essas qualidades e superar os desafios.";
  }

  return {
    contexto: contextoAjustado,
    amor: aspecto.amor,
    domestica: aspecto.domestica,
    financas: aspecto.financas,
    social: aspecto.social,
    objetivos: aspecto.objetivos,
    crescimento: aspecto.crescimento
  };
}

// Função para obter aspectos da vida baseados nos números pitagóricos
function obterAspectosVidaPitagorico(numero, tipo) {
  const aspectos = {
    1: {
      aprendizado: "Desenvolver independência e liderança. Aprender a confiar em si mesmo e tomar iniciativas. O número 1 ensina sobre pioneirismo e originalidade.",
      relacionamentos: "Buscar parceiros que respeitem sua independência. Evitar relacionamentos possessivos. Aprender a equilibrar liderança com cooperação.",
      carreira: "Excelente em posições de liderança, empreendedorismo e inovação. Carreiras que exigem iniciativa e originalidade são ideais.",
      crescimento: "Desenvolver autoconfiança sem arrogância. Aprender a trabalhar em equipe mantendo sua individualidade. Cultivar paciência com outros."
    },
    2: {
      aprendizado: "Desenvolver cooperação e diplomacia. Aprender a trabalhar em equipe e mediar conflitos. O número 2 ensina sobre harmonia e parceria.",
      relacionamentos: "Naturalmente inclinado a relacionamentos harmoniosos. Precisa aprender a não se anular pelo outro. Buscar equilíbrio entre dar e receber.",
      carreira: "Excelente em trabalho em equipe, mediação, aconselhamento e áreas que envolvem cooperação e sensibilidade.",
      crescimento: "Desenvolver assertividade sem perder a gentileza. Aprender a expressar suas necessidades. Cultivar autoestima independente da aprovação alheia."
    },
    3: {
      aprendizado: "Desenvolver criatividade e comunicação. Aprender a expressar-se de forma autêntica e inspiradora. O número 3 ensina sobre alegria e otimismo.",
      relacionamentos: "Buscar parceiros que apreciem sua criatividade e humor. Evitar relacionamentos que sufoquem sua expressão. Aprender a ser mais profundo.",
      carreira: "Excelente em artes, comunicação, entretenimento, ensino e qualquer área que envolva criatividade e expressão.",
      crescimento: "Desenvolver disciplina sem perder espontaneidade. Aprender a focar energia criativa. Cultivar profundidade emocional além da superfície."
    },
    4: {
      aprendizado: "Desenvolver disciplina e organização. Aprender a construir bases sólidas e trabalhar com perseverança. O número 4 ensina sobre estabilidade.",
      relacionamentos: "Buscar parceiros confiáveis e estáveis. Precisa aprender a ser mais flexível e espontâneo. Valorizar segurança emocional.",
      carreira: "Excelente em administração, construção, contabilidade, engenharia e áreas que exigem organização e método.",
      crescimento: "Desenvolver flexibilidade sem perder confiabilidade. Aprender a aceitar mudanças. Cultivar espontaneidade dentro da estrutura."
    },
    5: {
      aprendizado: "Desenvolver liberdade e versatilidade. Aprender a abraçar mudanças e explorar novos horizontes. O número 5 ensina sobre experiência.",
      relacionamentos: "Buscar parceiros que respeitem sua necessidade de liberdade. Evitar relacionamentos restritivos. Aprender a se comprometer.",
      carreira: "Excelente em vendas, viagens, comunicação, marketing e áreas que oferecem variedade e movimento.",
      crescimento: "Desenvolver compromisso sem perder liberdade. Aprender a terminar o que começa. Cultivar profundidade além da superfície."
    },
    6: {
      aprendizado: "Desenvolver responsabilidade e cuidado. Aprender a nutrir e proteger outros. O número 6 ensina sobre amor incondicional e serviço.",
      relacionamentos: "Naturalmente cuidadoso e protetor. Precisa aprender a não ser controlador. Buscar equilíbrio entre cuidar e permitir crescimento.",
      carreira: "Excelente em saúde, educação, serviço social, artes e qualquer área que envolva cuidado e responsabilidade social.",
      crescimento: "Desenvolver limites saudáveis no cuidado. Aprender a cuidar de si mesmo também. Cultivar amor sem possessividade."
    },
    7: {
      aprendizado: "Desenvolver sabedoria e introspecção. Aprender a buscar verdades profundas e conhecimento espiritual. O número 7 ensina sobre mistério.",
      relacionamentos: "Buscar parceiros que respeitem sua necessidade de solidão. Precisa aprender a se abrir emocionalmente. Valorizar conexões profundas.",
      carreira: "Excelente em pesquisa, espiritualidade, análise, ciência e áreas que exigem profundidade e investigação.",
      crescimento: "Desenvolver conexão emocional sem perder profundidade. Aprender a compartilhar sabedoria. Cultivar confiança nos outros."
    },
    8: {
      aprendizado: "Desenvolver poder material e autoridade. Aprender a usar recursos de forma ética e construtiva. O número 8 ensina sobre manifestação.",
      relacionamentos: "Buscar parceiros que respeitem suas ambições. Precisa aprender a não negligenciar relacionamentos por trabalho. Equilibrar poder e amor.",
      carreira: "Excelente em negócios, finanças, administração executiva e áreas que envolvem poder e recursos materiais.",
      crescimento: "Desenvolver generosidade com sucesso. Aprender a usar poder para o bem comum. Cultivar humildade com conquistas."
    },
    9: {
      aprendizado: "Desenvolver compaixão universal e sabedoria. Aprender a servir a humanidade com amor incondicional. O número 9 ensina sobre completude.",
      relacionamentos: "Buscar parceiros que compartilhem ideais humanitários. Precisa aprender a não se sacrificar excessivamente. Amar sem se perder.",
      carreira: "Excelente em trabalho humanitário, artes, ensino, cura e qualquer área que sirva ao bem maior da humanidade.",
      crescimento: "Desenvolver discernimento na generosidade. Aprender a receber além de dar. Cultivar amor próprio junto com amor universal."
    }
  };

  const numeroReduzido = numero > 9 ? reduzirNumeroCompleto(numero) : numero;
  return aspectos[numeroReduzido] || {
    aprendizado: "Número especial com lições únicas de crescimento e desenvolvimento pessoal.",
    relacionamentos: "Relacionamentos que oferecem oportunidades especiais de crescimento e compreensão mútua.",
    carreira: "Caminhos profissionais únicos que permitem expressar talentos especiais e servir de forma diferenciada.",
    crescimento: "Jornada de desenvolvimento pessoal com desafios e oportunidades especiais de evolução."
  };
}

// Exportar para uso global
window.obterAspectosVidaSinastria = obterAspectosVidaSinastria;
window.obterAspectosVidaPitagorico = obterAspectosVidaPitagorico;
