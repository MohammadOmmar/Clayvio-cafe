import { SVGProps } from 'react';

export default function CafeInterior(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Wall */}
      <path d="M20 20 L380 20 L380 280 L20 280 Z" stroke="#3A2720" strokeWidth="2.5" fill="#F4EFE6" fillOpacity="0.3" />

      {/* Wood slat ceiling */}
      <path d="M20 20 L380 20" stroke="#3A2720" strokeWidth="3" />
      <path d="M20 35 L380 35" stroke="#3A2720" strokeWidth="1.5" opacity="0.4" />
      <path d="M20 50 L380 50" stroke="#3A2720" strokeWidth="1.5" opacity="0.4" />

      {/* Hanging pendant lights */}
      <path d="M100 50 L100 80" stroke="#3A2720" strokeWidth="2" />
      <path d="M85 80 Q100 70 115 80 L110 100 Q100 110 90 100 Z" stroke="#3A2720" strokeWidth="2" fill="#B8955A" fillOpacity="0.3" />
      <path d="M250 50 L250 80" stroke="#3A2720" strokeWidth="2" />
      <path d="M235 80 Q250 70 265 80 L260 100 Q250 110 240 100 Z" stroke="#3A2720" strokeWidth="2" fill="#B8955A" fillOpacity="0.3" />

      {/* Window */}
      <path d="M280 60 L370 60 L370 160 L280 160 Z" stroke="#3A2720" strokeWidth="2.5" fill="#E9E0D2" fillOpacity="0.3" />
      <path d="M325 60 L325 160" stroke="#3A2720" strokeWidth="1.5" />
      <path d="M280 110 L370 110" stroke="#3A2720" strokeWidth="1.5" />

      {/* Shelf */}
      <path d="M30 120 L200 120" stroke="#3A2720" strokeWidth="2.5" />
      {/* Items on shelf */}
      <path d="M50 100 L55 120" stroke="#3A2720" strokeWidth="2" />
      <path d="M50 100 Q60 95 70 100 L75 120" stroke="#3A2720" strokeWidth="2" fill="none" />
      <path d="M100 105 L105 120" stroke="#3A2720" strokeWidth="2" />
      <path d="M100 105 Q110 100 120 105 L125 120" stroke="#3A2720" strokeWidth="2" fill="none" />
      <path d="M150 95 L155 120" stroke="#3A2720" strokeWidth="2" />
      <path d="M150 95 Q160 90 170 95 L175 120" stroke="#3A2720" strokeWidth="2" fill="none" />

      {/* Table */}
      <path d="M60 220 Q150 210 240 220 L235 250 Q150 260 65 250 Z" stroke="#3A2720" strokeWidth="3" fill="#C9A87C" fillOpacity="0.3" />
      <path d="M80 250 L75 290" stroke="#3A2720" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M220 250 L225 290" stroke="#3A2720" strokeWidth="2.5" strokeLinecap="round" />

      {/* Chairs */}
      <path d="M40 200 L40 250 L50 250" stroke="#3A2720" strokeWidth="2.5" fill="none" />
      <path d="M40 200 L70 200 L70 250" stroke="#3A2720" strokeWidth="2.5" fill="none" />
      <path d="M230 200 L230 250 L240 250" stroke="#3A2720" strokeWidth="2.5" fill="none" />
      <path d="M230 200 L260 200 L260 250" stroke="#3A2720" strokeWidth="2.5" fill="none" />

      {/* Kulhad on table */}
      <path d="M130 195 L133 220 Q135 230 150 230 Q165 230 167 220 L170 195" stroke="#3A2720" strokeWidth="2.5" fill="#E9E0D2" fillOpacity="0.5" />
      <path d="M127 195 Q150 188 173 195" stroke="#3A2720" strokeWidth="2.5" fill="none" />
      <path d="M140 180 Q135 170 142 162 Q149 154 144 144" stroke="#B8955A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* Plant */}
      <path d="M300 200 Q310 180 320 160" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M300 200 Q290 180 285 165" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M300 200 Q300 175 300 155" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="320" cy="158" rx="10" ry="6" transform="rotate(20 320 158)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="285" cy="163" rx="10" ry="6" transform="rotate(-20 285 163)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="300" cy="153" rx="10" ry="6" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <path d="M290 200 L310 200 L310 220 L290 220 Z" stroke="#3A2720" strokeWidth="2" fill="none" />
    </svg>
  );
}