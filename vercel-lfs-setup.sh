#!/bin/bash

# Script simplificado para Vercel - copia vídeos LFS para o build
echo "=== Vercel Video Setup ==="

# Criar diretório de vídeos se não existir
mkdir -p public/videos

# Verifica se os vídeos já existem (ponteiros LFS)
echo "Checking video files..."

# Lista arquivos LFS
echo "Files tracked by LFS:"
git lfs ls-files 2>/dev/null || echo "Git LFS not available"

# Estratégia: se os arquivos são ponteiros LFS, precisamos baixá-los
# Verifica tamanho dos arquivos - ponteiros LFS são ~130 bytes
TUTORIAL_SIZE=$(stat -c%s "public/videos/tutorial-membros.mp4" 2>/dev/null || echo "0")
PRATICA_SIZE=$(stat -c%s "public/videos/ver-na-pratica.mp4" 2>/dev/null || echo "0")

echo "Current file sizes:"
echo "  tutorial-membros.mp4: $TUTORIAL_SIZE bytes"
echo "  ver-na-pratica.mp4: $PRATICA_SIZE bytes"

# Se os arquivos são muito pequenos (<1000 bytes), são ponteiros LFS
if [ "$TUTORIAL_SIZE" -lt 1000 ] || [ "$PRATICA_SIZE" -lt 1000 ]; then
    echo ""
    echo "Detected LFS pointer files - need to download actual videos"
    echo "Installing Git LFS..."

    # Tenta instalar git-lfs
    LFS_VERSION="3.4.1"
    curl -sL "https://github.com/git-lfs/git-lfs/releases/download/v${LFS_VERSION}/git-lfs-linux-amd64-v${LFS_VERSION}.tar.gz" -o /tmp/lfs.tgz
    tar -xzf /tmp/lfs.tgz -C /tmp
    PREFIX=$HOME/.local /tmp/git-lfs-${LFS_VERSION}/install.sh
    export PATH="$HOME/.local/bin:$PATH"

    # Configura e baixa
    git lfs install
    git lfs pull

    # Verifica novamente
    TUTORIAL_SIZE=$(stat -c%s "public/videos/tutorial-membros.mp4" 2>/dev/null || echo "0")
    PRATICA_SIZE=$(stat -c%s "public/videos/ver-na-pratica.mp4" 2>/dev/null || echo "0")
fi

echo ""
echo "=== Final file sizes ==="
echo "  tutorial-membros.mp4: $TUTORIAL_SIZE bytes"
echo "  ver-na-pratica.mp4: $PRATICA_SIZE bytes"

# Verifica se os vídeos foram baixados com sucesso
if [ "$TUTORIAL_SIZE" -gt 1000000 ] && [ "$PRATICA_SIZE" -gt 1000000 ]; then
    echo "✓ Videos ready for build"
    exit 0
else
    echo "⚠ Warning: Videos may not be fully downloaded"
    echo "Build will continue but videos might not work in production"
    exit 0  # Não falha o build, mas avisa
fi
