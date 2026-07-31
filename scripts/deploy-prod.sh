#!/usr/bin/env bash
# Production deploy for YOJO Genesis → Vercel
# Requires: VERCEL_TOKEN (and optionally VERCEL_ORG_ID / VERCEL_PROJECT_ID)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "ERROR: VERCEL_TOKEN is not set."
  echo "Create a token at https://vercel.com/account/tokens"
  echo "Then: export VERCEL_TOKEN=... && npm run deploy:prod"
  exit 1
fi

echo "→ Pulling latest main"
git fetch origin main
git checkout main
git pull origin main

echo "→ Building locally (sanity)"
npm ci
npm run build

echo "→ Deploying to Vercel production"
ARGS=(deploy --prod --yes --token "$VERCEL_TOKEN")
if [[ -n "${VERCEL_ORG_ID:-}" ]]; then
  ARGS+=(--scope "$VERCEL_ORG_ID")
fi
npx vercel "${ARGS[@]}"

echo "→ Smoke-checking production"
sleep 5
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://yojo-genesis.vercel.app/ja)
if [[ "$STATUS" != "200" ]]; then
  echo "ERROR: production /ja returned $STATUS"
  exit 1
fi

if ! curl -sL https://yojo-genesis.vercel.app/ja | grep -q 'aria-label="YOJO Genesis"'; then
  echo "WARN: new header marker not found yet (CDN may still be propagating)"
fi

echo "✓ Production deploy complete: https://yojo-genesis.vercel.app"
