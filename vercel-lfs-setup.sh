#!/bin/bash

# Script para configurar Git LFS na Vercel
set -e

echo "=== Verificando Git LFS ==="

# Verifica se git-lfs já está instalado
if command -v git-lfs >/dev/null 2>&1; then
    echo "✓ Git LFS já instalado"
    git lfs version
else
    echo "⚠ Git LFS não encontrado, instalando..."

    # Download direto da release oficial
    LFS_VERSION="3.4.1"
    LFS_URL="https://github.com/git-lfs/git-lfs/releases/download/v${LFS_VERSION}/git-lfs-linux-amd64-v${LFS_VERSION}.tar.gz"

    echo "Baixando git-lfs v${LFS_VERSION}..."
    curl -sL "$LFS_URL" | tar -xz -C /tmp

    echo "Instalando git-lfs..."
    cd /tmp/git-lfs-${LFS_VERSION}
    ./install.sh
    cd -

    echo "✓ Git LFS instalado com sucesso"
    git lfs version
fi

echo ""
echo "=== Configurando Git LFS ==="
git lfs install --skip-smudge

echo ""
echo "=== Arquivos LFS no repositório ==="
git lfs ls-files

echo ""
echo "=== Baixando arquivos LFS ==="
git lfs pull

echo ""
echo "=== Verificando arquivos baixados ==="
if [ -f "public/videos/tutorial-membros.mp4" ]; then
    SIZE=$(stat -f%z "public/videos/tutorial-membros.mp4" 2>/dev/null || stat -c%s "public/videos/tutorial-membros.mp4")
    echo "✓ tutorial-membros.mp4: $(numfmt --to=iec $SIZE 2>/dev/null || echo $SIZE bytes)"
else
    echo "✗ tutorial-membros.mp4 não encontrado!"
fi

if [ -f "public/videos/ver-na-pratica.mp4" ]; then
    SIZE=$(stat -f%z "public/videos/ver-na-pratica.mp4" 2>/dev/null || stat -c%s "public/videos/ver-na-pratica.mp4")
    echo "✓ ver-na-pratica.mp4: $(numfmt --to=iec $SIZE 2>/dev/null || echo $SIZE bytes)"
else
    echo "✗ ver-na-pratica.mp4 não encontrado!"
fi

echo ""
echo "=== Pronto para build ==="
