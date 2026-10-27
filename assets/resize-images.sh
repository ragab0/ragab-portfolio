
#!/usr/bin/env bash

ROOT_DIR="${1:-.}"
MAX_WIDTH=1000

find "$ROOT_DIR" -type f -iname '*.webp' -print0 |
while IFS= read -r -d '' file; do
    width=$(vipsheader -f width "$file") || {
        echo "Failed to read: $file" >&2
        continue
    }

    if (( width > MAX_WIDTH )); then
        echo "Resizing: $file (${width}px → ${MAX_WIDTH}px)"

        temp="${file%.*}.tmp.webp"

        if vips thumbnail "$file" "$temp" "$MAX_WIDTH" --size down; then
            if mv -f -- "$temp" "$file"; then
                echo "Done: $file"
            else
                echo "Failed to replace: $file" >&2
                rm -f -- "$temp"
            fi
        else
            echo "Failed: $file" >&2
            rm -f -- "$temp"
        fi
    else
        echo "Skipping: $file (${width}px)"
    fi
done

echo "Resizing finished."
