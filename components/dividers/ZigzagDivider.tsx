import "./dividers.css";

interface ZigzagDividerProps {
  transition?: string;
  flip?: boolean;
  className?: string;
}

const layers = [
  {
    className: "zigzag-layer-1",
    fillOpacity: 0.4,
    dur: "18s",
    period: 200,
    d: "M-400,120 L-400,80 L-300,40 L-200,80 L-100,40 L0,80 L100,40 L200,80 L300,40 L400,80 L500,40 L600,80 L700,40 L800,80 L900,40 L1000,80 L1100,40 L1200,80 L1300,40 L1400,80 L1500,40 L1600,80 L1600,120 Z",
    values: [
      "M-400,120 L-400,80 L-300,40 L-200,80 L-100,40 L0,80 L100,40 L200,80 L300,40 L400,80 L500,40 L600,80 L700,40 L800,80 L900,40 L1000,80 L1100,40 L1200,80 L1300,40 L1400,80 L1500,40 L1600,80 L1600,120 Z",
      "M-400,120 L-400,70 L-300,50 L-200,70 L-100,50 L0,70 L100,50 L200,70 L300,50 L400,70 L500,50 L600,70 L700,50 L800,70 L900,50 L1000,70 L1100,50 L1200,70 L1300,50 L1400,70 L1500,50 L1600,70 L1600,120 Z",
      "M-400,120 L-400,80 L-300,40 L-200,80 L-100,40 L0,80 L100,40 L200,80 L300,40 L400,80 L500,40 L600,80 L700,40 L800,80 L900,40 L1000,80 L1100,40 L1200,80 L1300,40 L1400,80 L1500,40 L1600,80 L1600,120 Z",
    ],
  },
  {
    className: "zigzag-layer-2",
    fillOpacity: 0.5,
    dur: "15s",
    period: 240,
    d: "M-400,120 L-400,90 L-280,55 L-160,90 L-40,55 L80,90 L200,55 L320,90 L440,55 L560,90 L680,55 L800,90 L920,55 L1040,90 L1160,55 L1280,90 L1400,55 L1520,90 L1640,55 L1640,120 Z",
    values: [
      "M-400,120 L-400,90 L-280,55 L-160,90 L-40,55 L80,90 L200,55 L320,90 L440,55 L560,90 L680,55 L800,90 L920,55 L1040,90 L1160,55 L1280,90 L1400,55 L1520,90 L1640,55 L1640,120 Z",
      "M-400,120 L-400,85 L-280,65 L-160,85 L-40,65 L80,85 L200,65 L320,85 L440,65 L560,85 L680,65 L800,85 L920,65 L1040,85 L1160,65 L1280,85 L1400,65 L1520,85 L1640,65 L1640,120 Z",
      "M-400,120 L-400,90 L-280,55 L-160,90 L-40,55 L80,90 L200,55 L320,90 L440,55 L560,90 L680,55 L800,90 L920,55 L1040,90 L1160,55 L1280,90 L1400,55 L1520,90 L1640,55 L1640,120 Z",
    ],
  },
  {
    className: "zigzag-layer-3",
    fillOpacity: 0.6,
    dur: "12s",
    period: 300,
    d: "M-400,120 L-400,95 L-250,65 L-100,95 L50,65 L200,95 L350,65 L500,95 L650,65 L800,95 L950,65 L1100,95 L1250,65 L1400,95 L1550,65 L1600,95 L1600,120 Z",
    values: [
      "M-400,120 L-400,95 L-250,65 L-100,95 L50,65 L200,95 L350,65 L500,95 L650,65 L800,95 L950,65 L1100,95 L1250,65 L1400,95 L1550,65 L1600,95 L1600,120 Z",
      "M-400,120 L-400,90 L-250,75 L-100,90 L50,75 L200,90 L350,75 L500,90 L650,75 L800,90 L950,75 L1100,90 L1250,75 L1400,90 L1550,75 L1600,90 L1600,120 Z",
      "M-400,120 L-400,95 L-250,65 L-100,95 L50,65 L200,95 L350,65 L500,95 L650,65 L800,95 L950,65 L1100,95 L1250,65 L1400,95 L1550,65 L1600,95 L1600,120 Z",
    ],
  },
  {
    className: "zigzag-layer-4",
    fillOpacity: 1,
    dur: "8s",
    period: 200,
    d: "M-400,120 L-400,100 L-300,75 L-200,100 L-100,75 L0,100 L100,75 L200,100 L300,75 L400,100 L500,75 L600,100 L700,75 L800,100 L900,75 L1000,100 L1100,75 L1200,100 L1300,75 L1400,100 L1500,75 L1600,100 L1600,120 Z",
    values: [
      "M-400,120 L-400,100 L-300,75 L-200,100 L-100,75 L0,100 L100,75 L200,100 L300,75 L400,100 L500,75 L600,100 L700,75 L800,100 L900,75 L1000,100 L1100,75 L1200,100 L1300,75 L1400,100 L1500,75 L1600,100 L1600,120 Z",
      "M-400,120 L-400,95 L-300,80 L-200,95 L-100,80 L0,95 L100,80 L200,95 L300,80 L400,95 L500,80 L600,95 L700,80 L800,95 L900,80 L1000,95 L1100,80 L1200,95 L1300,80 L1400,95 L1550,80 L1600,95 L1600,120 Z",
      "M-400,120 L-400,100 L-300,75 L-200,100 L-100,75 L0,100 L100,75 L200,100 L300,75 L400,100 L500,75 L600,100 L700,75 L800,100 L900,75 L1000,100 L1100,75 L1200,100 L1300,75 L1400,100 L1500,75 L1600,100 L1600,120 Z",
    ],
  },
];

export default function ZigzagDivider({
  transition = "main-to-secondary",
  flip = false,
  className = "",
}: ZigzagDividerProps) {
  return (
    <div
      className={`zigzag-divider ${flip ? "rotate-180" : ""} ${className}`.trim()}
      data-transition={transition}
    >
      <svg
        className="relative block w-[calc(100%+1.3px)] h-40 md:h-48"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {layers.map(
          (
            { className: layerClass, fillOpacity, dur, d, values, period },
            index,
          ) => (
            <path
              key={layerClass}
              className={`zigzag-scroll ${layerClass}`}
              style={
                {
                  "--zigzag-dur": dur,
                  "--zigzag-period": `${period}px`,
                  "--zigzag-dir": index % 2 === 0 ? "normal" : "reverse",
                } as React.CSSProperties
              }
              d={d}
              fillOpacity={fillOpacity}
            >
              <animate
                attributeName="d"
                dur={dur}
                repeatCount="indefinite"
                values={values.join(";\n")}
              />
            </path>
          ),
        )}
      </svg>
    </div>
  );
}
