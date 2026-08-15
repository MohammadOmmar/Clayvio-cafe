import { SVGProps } from 'react';

export default function CafeTable(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Table surface */}
      <path
        d="M40 280 Q200 260 360 280 L350 320 Q200 340 50 320 Z"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#C9A87C"
        fillOpacity="0.3"
      />
      {/* Table legs */}
      <path d="M80 320 L75 380" stroke="#3A2720" strokeWidth="3" strokeLinecap="round" />
      <path d="M320 320 L325 380" stroke="#3A2720" strokeWidth="3" strokeLinecap="round" />

      {/* Kulhad chai */}
      <path
        d="M120 180 L125 250 Q127 270 155 270 Q183 270 185 250 L190 180"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.5"
      />
      <path d="M115 180 Q155 168 195 180" stroke="#3A2720" strokeWidth="3" fill="none" />
      <path d="M120 185 Q155 178 190 185" stroke="#A65F42" strokeWidth="2" fill="none" opacity="0.6" />
      {/* Kulhad steam */}
      <path d="M140 160 Q135 145 142 135 Q149 125 144 112" stroke="#B8955A" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M165 155 Q160 140 167 130 Q174 120 169 107" stroke="#B8955A" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />

      {/* Coffee cup */}
      <path
        d="M240 200 L245 255 Q248 270 270 270 Q292 270 295 255 L300 200"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.5"
      />
      <path d="M235 200 Q270 190 305 200" stroke="#3A2720" strokeWidth="3" fill="none" />
      <path d="M240 205 Q270 198 300 205" stroke="#3A2720" strokeWidth="2" fill="none" opacity="0.7" />
      {/* Handle */}
      <path d="M300 210 Q325 210 325 230 Q325 250 300 250" stroke="#3A2720" strokeWidth="3" fill="none" />
      {/* Coffee steam */}
      <path d="M255 180 Q250 165 257 155 Q264 145 259 132" stroke="#B8955A" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M280 175 Q275 160 282 150 Q289 140 284 127" stroke="#B8955A" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />

      {/* Small plate */}
      <path
        d="M120 280 Q155 270 190 280 Q155 290 120 280"
        stroke="#3A2720"
        strokeWidth="2.5"
        fill="#E9E0D2"
        fillOpacity="0.4"
      />

      {/* Spoon */}
      <path d="M200 270 L230 250" stroke="#3A2720" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="195" cy="275" rx="8" ry="5" transform="rotate(-30 195 275)" stroke="#3A2720" strokeWidth="2" fill="none" />

      {/* Botanical - left branch */}
      <path d="M30 200 Q60 180 80 150 Q90 130 100 100" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M60 180 Q45 170 40 155" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M80 150 Q95 145 100 130" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="40" cy="152" rx="10" ry="6" transform="rotate(-30 40 152)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="100" cy="128" rx="10" ry="6" transform="rotate(20 100 128)" stroke="#6C6A4D" strokeWidth="2" fill="none" />

      {/* Botanical - right branch */}
      <path d="M370 180 Q340 160 320 130 Q310 110 305 80" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M340 160 Q355 150 360 135" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M320 130 Q305 125 300 110" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="360" cy="132" rx="10" ry="6" transform="rotate(30 360 132)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="300" cy="108" rx="10" ry="6" transform="rotate(-20 300 108)" stroke="#6C6A4D" strokeWidth="2" fill="none" />

      {/* Hanging lamp */}
      <path d="M200 20 L200 60" stroke="#3A2720" strokeWidth="2" strokeLinecap="round" />
      <path d="M180 60 Q200 50 220 60 L215 85 Q200 95 185 85 Z" stroke="#3A2720" strokeWidth="2.5" fill="#B8955A" fillOpacity="0.3" />
      <path d="M185 85 Q200 90 215 85" stroke="#3A2720" strokeWidth="2" fill="none" />
    </svg>
  );
}