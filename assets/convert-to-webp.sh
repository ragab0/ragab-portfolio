
#!/usr/bin/env bash

ROOT_DIR="${1:-.}"
QUALITY=90

find "$ROOT_DIR" -type f \
  \( -iname '*.jpg' -o -iname '*.jpeg' \
     -o -iname '*.png' \
     -o -iname '*.gif' \) \
  -print0 |
while IFS= read -r -d '' file; do
    output="${file%.*}.webp"

    if [[ -f "$output" ]]; then
        echo "Skipping: $output"
        continue
    fi

    echo "Converting: $file"

    if vips copy "$file" "${output}[Q=$QUALITY]"; then
        echo "Created: $output"
    else
        echo "Failed: $file" >&2
    fi
done

echo "Conversion finished."
