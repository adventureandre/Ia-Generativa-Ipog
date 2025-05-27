#!/bin/bash

# Identifica o interpretador Python disponível
if command -v python3 &>/dev/null; then
    PYTHON_CMD=python3
elif command -v python &>/dev/null; then
    PYTHON_CMD=python
else
    echo "Erro: Python não encontrado. Por favor, instale Python para usar este script."
    exit 1
fi

# Função para iniciar o servidor de acordo com a versão do Python
start_server() {
    local port=$1
    echo "Iniciando servidor na porta $port..."
    
    # Obtém a versão do Python
    local version=$($PYTHON_CMD --version 2>&1)
    
    # Determina qual comando usar com base na versão
    if [[ $version == *"Python 3"* ]]; then
        echo "Usando Python 3 HTTP Server"
        $PYTHON_CMD -m http.server $port
    else
        echo "Usando Python 2 SimpleHTTPServer"
        $PYTHON_CMD -m SimpleHTTPServer $port
    fi
}

# Verifica se a porta foi fornecida como argumento
if [ -z "$1" ]; then
    PORT=8000
else
    PORT=$1
fi

echo "==================================="
echo "GenAI Impact - Servidor de Desenvolvimento"
echo "==================================="
echo "Acessível em: http://localhost:$PORT"
echo "Pressione Ctrl+C para encerrar o servidor"
echo "==================================="

# Inicia o servidor na porta especificada
start_server $PORT
