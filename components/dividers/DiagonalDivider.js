"use client";
import "./dividers.css";

export default function DiagonalDivider({ nextColor = "hsl(var(--bg-tertiary))" }) {
  return (
    <div className="diagonal-divider w-full overflow-hidden leading-[0]">
      <div className="relative w-full h-20 md:h-24">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="-15000 0 30000 80"
          preserveAspectRatio="none"
        >
          {/* Layer 1 */}
          <g opacity="0.4">
            <polygon
              points="-15000,0 15000,38 15000,80 -15000,80"
              fill={nextColor}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 30,2; 0,0"
                dur="12s"
                repeatCount="indefinite"
              />
            </polygon>
          </g>
          {/* Layer 2 */}
          <g opacity="0.5">
            <polygon
              points="-15000,55 15000,12 15000,80 -15000,80"
              fill={nextColor}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -25,3; 0,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </polygon>
          </g>
          {/* Layer 3 */}
          <g opacity="0.6">
            <polygon
              points="-15000,20 15000,48 15000,80 -15000,80"
              fill={nextColor}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 28,2; 0,0"
                dur="14s"
                repeatCount="indefinite"
              />
            </polygon>
          </g>
          {/* Layer 4 */}
          <g opacity="0.75">
            <polygon
              points="-15000,62 15000,28 15000,80 -15000,80"
              fill={nextColor}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -20,3; 0,0"
                dur="9s"
                repeatCount="indefinite"
              />
            </polygon>
          </g>
          {/* Final Solid Layer */}
          <polygon
            points="-15000,35 15000,70 15000,80 -15000,80"
            fill={nextColor}
          />
        </svg>
      </div>
    </div>
  );
}
