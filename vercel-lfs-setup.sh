#!/bin/bash

# Script para configurar Git LFS na Vercel
echo "=== Starting Vercel LFS Setup ==="

# Verifica se git-lfs já está instalado
if command -v git-lfs >/dev/null 2>&1; then
    echo "Git LFS already installed"
    git lfs version
else
    echo "Installing Git LFS..."

    # Download direto da release oficial
    LFS_VERSION="3.4.1"
    LFS_URL="https://github.com/git-lfs/git-lfs/releases/download/v${LFS_VERSION}/git-lfs-linux-amd64-v${LFS_VERSION}.tar.gz"

    echo "Downloading git-lfs v${LFS_VERSION}..."
    curl -sL "$LFS_URL" -o /tmp/git-lfs.tar.gz || { echo "Failed to download git-lfs"; exit 1; }

    tar -xzf /tmp/git-lfs.tar.gz -C /tmp || { echo "Failed to extract git-lfs"; exit 1; }

    echo "Installing git-lfs..."
    PREFIX=/tmp/git-lfs-install /tmp/git-lfs-${LFS_VERSION}/install.sh || { echo "Failed to install git-lfs"; exit 1; }

    # Add to PATH
    export PATH="/tmp/git-lfs-install/bin:$PATH"

    echo "Git LFS installed successfully"
    git lfs version || { echo "Git LFS not available after install"; exit 1; }
fi

echo ""
echo "=== Configuring Git LFS ==="
git lfs install || { echo "Warning: Failed to install LFS hooks"; }

echo ""
echo "=== LFS files in repository ==="
git lfs ls-files || echo "No LFS files found or LFS not initialized"

echo ""
echo "=== Pulling LFS files ==="
git lfs pull || { echo "Failed to pull LFS files"; exit 1; }

echo ""
echo "=== Verifying downloaded files ==="
ls -lh public/videos/ 2>/dev/null || echo "Videos directory not found"

if [ -f "public/videos/tutorial-membros.mp4" ]; then
    SIZE=$(stat -c%s "public/videos/tutorial-membros.mp4" 2>/dev/null || echo "0")
    echo "✓ tutorial-membros.mp4: $SIZE bytes"
else
    echo "✗ tutorial-membros.mp4 not found!"
fi

if [ -f "public/videos/ver-na-pratica.mp4" ]; then
    SIZE=$(stat -c%s "public/videos/ver-na-pratica.mp4" 2>/dev/null || echo "0")
    echo "✓ ver-na-pratica.mp4: $SIZE bytes"
else
    echo "✗ ver-na-pratica.mp4 not found!"
fi

echo ""
echo "=== Setup complete - ready for build ==="
