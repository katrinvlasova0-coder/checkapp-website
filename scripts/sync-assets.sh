#!/usr/bin/env bash
# Sync DIDI assets from the CheckApp mobile repo into the website public folder.
# Usage: ./scripts/sync-assets.sh [path-to-checkapp-repo]

set -euo pipefail

MOBILE_REPO="${1:-../checkapp}"
DEST="$(dirname "$0")/../public/assets"
SRC="$MOBILE_REPO/assets/images"

mkdir -p "$DEST"

ASSETS=(
  didi-body-home.png
  didi-avatar-header.png
  didi-app-icon.png
  didi-home-character.png
  streak-flame.png
  streak-tick-done.png
  streak-tick-empty.png
  streak-tick-today.png
  home-bg.png
  splash-ellipse-1.png
  splash-ellipse-2.png
  splash-ellipse-3.png
)

for asset in "${ASSETS[@]}"; do
  if [ -f "$SRC/$asset" ]; then
    cp "$SRC/$asset" "$DEST/$asset"
    echo "✓ $asset"
  else
    echo "⚠ missing: $SRC/$asset"
  fi
done

echo "Done. Assets synced to $DEST"
