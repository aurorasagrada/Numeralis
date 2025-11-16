#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json

def limpar_formatacao_ia(texto):
    """Remove formatações de IA e caracteres especiais problemáticos"""
    
    # Corrigir caracteres especiais comuns
    texto = texto.replace('Ã§', 'ç')
    texto = texto.replace('Ã£o', 'ão')
    texto = texto.replace('Ã¡', 'á')
    texto = texto.replace('Ã©', 'é')
    texto = texto.replace('Ã­', 'í')
    texto = texto.replace('Ã³', 'ó')
    texto = texto.replace('Ãº', 'ú')
    texto = texto.replace('Ã¢', 'â')
    texto = texto.replace('Ãª', 'ê')
    texto = texto.replace('Ã´', 'ô')
    texto = texto.replace('Ã ', 'à')
    texto = texto.replace('Ã¨', 'è')
    texto = texto.replace('Ã¬', 'ì')
    texto = texto.replace('Ã²', 'ò')
    texto = texto.replace('Ã¹', 'ù')
    texto = texto.replace('Ã¤', 'ä')
    texto = texto.replace('Ã«', 'ë')
    texto = texto.replace('Ã¯', 'ï')
    texto = texto.replace('Ã¶', 'ö')
    texto = texto.replace('Ã¼', 'ü')
    texto = texto.replace('Ã±', 'ñ')
    texto = texto.replace('Ã§', 'ç')
    texto = texto.replace('Ã', 'Á')
    texto = texto.replace('Ã‰', 'É')
    texto = texto.replace('Ã', 'Í')
    texto = texto.replace('Ã"', 'Ó')
    texto = texto.replace('Ãš', 'Ú')
    texto = texto.replace('Ã‚', 'Â')
    texto = texto.replace('ÃŠ', 'Ê')
    texto = texto.replace('Ã"', 'Ô')
    texto = texto.replace('Ã€', 'À')
    
    # Remover formatações de IA
    texto = re.sub(r'\*\*([^*]+)\*\*', r'\1', texto)  # Remove **texto**
    texto = re.sub(r'\*([^*]+)\*', r'\1', texto)      # Remove *texto*
    texto = re.sub(r'- \n\n([^:]+):\n', r'\n\1: ', texto)  # Corrige formatação de listas
    texto = re.sub(r'\n- \n', r'\n', texto)           # Remove travessões desnecessários
    texto = re.sub(r'\*Aspectos[^*]*\*', '', texto)   # Remove seções com asteriscos
    texto = re.sub(r'\*Manifestações[^*]*\*', '', texto)  # Remove seções com asteriscos
    
    # Limpar quebras de linha excessivas
    texto = re.sub(r'\n{3,}', '\n\n', texto)
    
    # Remover espaços extras
    texto = re.sub(r' {2,}', ' ', texto)
    
    return texto.strip()

def criar_texto_humanizado(numero, tipo):
    """Cria textos humanizados para cada número e tipo"""
    
    textos = {
        'motivacao': {
            1: """Sua motivação mais profunda nasce de uma necessidade fundamental de ser pioneiro e líder em tudo que faz. Você sente um impulso irresistível de abrir novos caminhos, de ser o primeiro a explorar territórios desconhecidos e de demonstrar que é possível superar qualquer obstáculo através da força de vontade e determinação. Esta energia o impulsiona a buscar constantemente situações onde possa exercer sua liderança natural, tomar decisões importantes de forma independente e influenciar positivamente o curso dos eventos.

Você se sente verdadeiramente vivo quando está criando algo completamente novo, quando está iniciando projetos que nunca existiram antes ou quando está demonstrando possibilidades que outros nem imaginavam ser possíveis. Sua alma se alimenta da energia pura da criação e da inovação, e você encontra profunda satisfação em ser reconhecido como alguém que não apenas sonha com mudanças, mas que realmente as torna realidade através de ação concreta e determinada.

Esta motivação o leva a desenvolver uma forte independência e uma capacidade natural de inspirar outros através do seu exemplo. Você não se contenta em seguir caminhos já estabelecidos, preferindo sempre criar suas próprias rotas e métodos únicos. Sua energia pioneira é contagiante e frequentemente desperta em outros a coragem de também buscarem seus próprios caminhos de liderança e autenticidade.

Em relacionamentos e parcerias, você é motivado pela necessidade de manter sua individualidade enquanto contribui de forma significativa para o crescimento conjunto. Você valoriza pessoas que respeitam sua necessidade de liderar e que se inspiram em sua capacidade de transformar visões em realidade tangível.""",
            
            2: """Sua motivação mais profunda emerge da busca constante por harmonia, equilíbrio e cooperação genuína em todas as áreas da vida. Você sente uma necessidade visceral de criar pontes entre pessoas, ideias e situações que parecem opostas ou incompatíveis, encontrando sempre formas de unir diferenças em uma síntese harmoniosa e produtiva. Esta energia o impulsiona a buscar situações onde possa exercer sua capacidade natural de mediação, diplomacia e criação de consenso.

Você se sente verdadeiramente realizado quando consegue transformar conflitos em oportunidades de crescimento mútuo, quando facilita comunicação efetiva entre pessoas com perspectivas diferentes, ou quando cria ambientes onde todos se sentem ouvidos, compreendidos e valorizados. Sua alma se nutre da energia sutil da cooperação e da sensibilidade emocional refinada que permite perceber necessidades não expressas e sentimentos ocultos.

Esta motivação o leva a desenvolver uma inteligência emocional excepcional e uma capacidade natural de criar espaços seguros onde outros podem ser completamente autênticos. Você possui um talento especial para ver o potencial de harmonia mesmo nas situações mais desafiadoras, e frequentemente serve como o elemento estabilizador que permite que grupos e relacionamentos floresçam.

Em suas interações pessoais e profissionais, você é motivado pela necessidade de contribuir para o bem-estar coletivo, sempre buscando soluções que beneficiem todas as partes envolvidas. Você valoriza profundamente a reciprocidade, a lealdade e a construção de relacionamentos baseados em confiança mútua e respeito genuíno.""",
            
            3: """Sua motivação mais profunda brota de uma necessidade irreprimível de expressar criatividade, alegria e inspiração através de todas as formas possíveis de comunicação e arte. Você sente um impulso vital de transformar experiências internas em expressões externas que toquem, inspirem e elevem outras pessoas. Esta energia o impulsiona a buscar constantemente meios criativos e inovadores de compartilhar sua visão única do mundo através da palavra, da arte, da música, da escrita ou de qualquer forma de expressão que permita que sua luz interior brilhe intensamente.

Você se sente verdadeiramente vivo quando está criando algo belo, quando está comunicando ideias de forma inspiradora, ou quando está usando seu talento natural para elevar o ânimo e despertar a alegria em outros. Sua alma se alimenta da energia pura da criação artística e da capacidade mágica de transformar até mesmo os desafios mais difíceis em oportunidades de expressão criativa e crescimento pessoal.

Esta motivação o leva a desenvolver talentos comunicativos excepcionais e uma capacidade natural de ver possibilidades luminosas onde outros veem apenas limitações. Você possui um dom especial para encontrar beleza em experiências aparentemente comuns e para transformar momentos ordinários em experiências extraordinárias através de sua perspectiva criativa única.

Em seus relacionamentos e atividades profissionais, você é motivado pela necessidade de compartilhar alegria, otimismo e inspiração. Você valoriza ambientes onde a criatividade é celebrada, onde a expressão autêntica é encorajada e onde há espaço para experimentação e inovação artística.""",
            
            4: """Sua motivação mais profunda emerge da necessidade fundamental de construir bases sólidas, duradouras e confiáveis que possam sustentar não apenas seus próprios sonhos, mas também servir como fundação segura para que outros possam construir suas aspirações. Você sente um impulso poderoso de criar ordem, estrutura e estabilidade em um mundo frequentemente caótico e imprevisível. Esta energia o impulsiona a buscar formas sistemáticas e eficazes de estabelecer sistemas funcionais, processos otimizados e estruturas organizacionais que funcionem de maneira eficiente e sustentável.

Você se sente verdadeiramente realizado quando vê projetos crescerem organicamente desde a concepção inicial até a realização completa e bem-sucedida. Sua alma se alimenta da energia transformadora da construção metódica e consciente, do trabalho árduo executado com excelência e da satisfação profunda de criar algo que resistirá ao teste do tempo.

Esta motivação o leva a desenvolver uma disciplina excepcional e uma capacidade natural de transformar ideias abstratas em realidades concretas e mensuráveis. Você possui um talento especial para ver o potencial de longo prazo em projetos e situações, e frequentemente serve como a força estabilizadora que permite que outros se sintam seguros para sonhar grande e criar livremente.

Em suas atividades pessoais e profissionais, você é motivado pela necessidade de deixar um legado duradouro e de contribuir para a construção de um mundo mais organizado, eficiente e confiável. Você valoriza a qualidade sobre a quantidade, a substância sobre a aparência, e sempre busca formas de melhorar e aperfeiçoar sistemas existentes.""",
            
            5: """Sua motivação mais profunda nasce de uma sede insaciável de liberdade, aventura e experiências transformadoras que expandam constantemente seus horizontes e sua compreensão do mundo. Você sente um impulso irresistível de explorar novos territórios, tanto físicos quanto mentais e espirituais, sempre buscando quebrar limitações e transcender fronteiras que outros consideram intransponíveis. Esta energia o impulsiona a buscar constantemente variedade, mudança e oportunidades de crescimento através de experiências diversificadas e enriquecedoras.

Você se sente verdadeiramente vivo quando está descobrindo algo novo, quando está viajando para lugares desconhecidos, quando está aprendendo habilidades diferentes ou quando está se conectando com pessoas de culturas e perspectivas variadas. Sua alma se alimenta da energia dinâmica da mudança e da aventura, e você encontra profunda satisfação em expandir continuamente sua compreensão da vida através de experiências diretas e autênticas.

Esta motivação o leva a desenvolver uma adaptabilidade excepcional e uma capacidade natural de se reinventar constantemente. Você possui um talento especial para ver oportunidades onde outros veem apenas incertezas, e frequentemente serve como catalisador de mudanças positivas em grupos e organizações.

Em seus relacionamentos e atividades profissionais, você é motivado pela necessidade de manter sua independência enquanto compartilha suas descobertas e aprendizados com outros. Você valoriza a diversidade, a espontaneidade e a possibilidade de explorar diferentes caminhos e possibilidades sem se sentir limitado por expectativas rígidas ou estruturas inflexíveis."""
        }
    }
    
    return textos.get(tipo, {}).get(numero, "Texto em desenvolvimento.")

# Ler o arquivo atual
with open('/home/ubuntu/Numeralis/interpretacoes_pitagoricas_ultra_expandidas.js', 'r', encoding='utf-8') as f:
    conteudo = f.read()

print("Análise dos problemas encontrados:")
print("1. Caracteres especiais: Ã§, Ã£o, Ã¡, etc.")
print("2. Formatações de IA: **, *, travessões desnecessários")
print("3. Estrutura confusa com asteriscos e seções mal formatadas")
print("4. Textos robotizados e não humanizados")
print("\nIniciando correção...")

# Aplicar limpeza básica
conteudo_limpo = limpar_formatacao_ia(conteudo)

print("Correção básica aplicada!")
print("Próximo passo: Reescrever textos humanizados para cada seção.")
