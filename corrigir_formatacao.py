#!/usr/bin/env python3
"""
Script para corrigir formatação dos textos do Sistema Numeralis
- Remove asteriscos desnecessários
- Adiciona quebras de linha adequadas
- Melhora legibilidade geral
"""

import re
import json

def corrigir_formatacao_texto(texto):
    """Corrige a formatação de um texto individual"""
    if not texto:
        return texto
    
    # Remove asteriscos duplos no início e fim de seções
    texto = re.sub(r'\*\*([^*]+)\*\*:', r'\n\n\1:\n', texto)
    
    # Remove asteriscos simples
    texto = re.sub(r'\*([^*]+)\*', r'\1', texto)
    
    # Adiciona quebras de linha após pontos finais seguidos de letra maiúscula
    texto = re.sub(r'\.([A-Z])', r'.\n\n\1', texto)
    
    # Adiciona quebras de linha antes de "Aspectos Profundos"
    texto = re.sub(r'(\w)(\*\*Aspectos Profundos)', r'\1\n\n\2', texto)
    
    # Adiciona quebras de linha antes de "Manifestações Práticas"
    texto = re.sub(r'(\w)(\*\*Manifestações Práticas)', r'\1\n\n\2', texto)
    
    # Corrige quebras de linha múltiplas
    texto = re.sub(r'\n{3,}', '\n\n', texto)
    
    # Remove espaços no início e fim
    texto = texto.strip()
    
    return texto

def processar_arquivo_js(caminho_arquivo):
    """Processa um arquivo JavaScript com interpretações"""
    print(f"Processando: {caminho_arquivo}")
    
    with open(caminho_arquivo, 'r', encoding='utf-8') as f:
        conteudo = f.read()
    
    # Encontra todos os textos entre aspas
    padrao_texto = r'texto:\s*"([^"]*(?:\\.[^"]*)*)"'
    
    def corrigir_match(match):
        texto_original = match.group(1)
        # Decodifica escapes
        texto_decodificado = texto_original.encode().decode('unicode_escape')
        # Corrige formatação
        texto_corrigido = corrigir_formatacao_texto(texto_decodificado)
        # Recodifica escapes
        texto_recodificado = texto_corrigido.replace('"', '\\"').replace('\n', '\\n')
        return f'texto: "{texto_recodificado}"'
    
    conteudo_corrigido = re.sub(padrao_texto, corrigir_match, conteudo, flags=re.DOTALL)
    
    # Salva arquivo corrigido
    with open(caminho_arquivo, 'w', encoding='utf-8') as f:
        f.write(conteudo_corrigido)
    
    print(f"✅ Corrigido: {caminho_arquivo}")

def main():
    """Função principal"""
    arquivos_para_corrigir = [
        '/home/ubuntu/Numeralis/interpretacoes_pitagoricas_ultra_expandidas.js',
        '/home/ubuntu/Numeralis/textos_pinaculos_melhorados.js'
    ]
    
    for arquivo in arquivos_para_corrigir:
        try:
            processar_arquivo_js(arquivo)
        except Exception as e:
            print(f"❌ Erro ao processar {arquivo}: {e}")
    
    print("🎉 Formatação corrigida com sucesso!")

if __name__ == "__main__":
    main()
