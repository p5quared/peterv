#!/bin/sh
set -e

echo "checking for existence of hugo"
if ! command -v hugo >/dev/null 2>&1; then
  echo "Error: hugo is not installed. Install it from https://gohugo.io/installation/"
  exit 1
fi
echo "hugo version $(hugo version) found."

echo "installing pre-commit hook (verify build)"
cat > ".git/hooks/pre-commit" << 'EOF'
#!/bin/sh
echo "Running hugo build..."
if ! hugo build; then
  echo "hugo build failed. Commit aborted."
  exit 1
fi
EOF
chmod +x ".git/hooks/pre-commit"
echo "pre-commit hook installed."

echo "Setup complete."
