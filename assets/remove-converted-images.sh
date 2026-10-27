
#!/usr/bin/env bash

ROOT_DIR="${1:-.}"

find "$ROOT_DIR" -type f \
  \( -iname '*.jpg' -o -iname '*.jpeg' \
     -o -iname '*.png' \
     -o -iname '*.gif' \) \
  -print0 |
while IFS= read -r -d '' file; do
    webp="${file%.*}.webp"

    if [[ -f "$webp" ]]; then
        rm -- "$file"
        echo "Deleted: $file"
    fi
done

echo "Cleanup finished."

