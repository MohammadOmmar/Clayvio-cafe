import { SVGProps } from 'react';

export default function CafeStorefront(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Building */}
      <path d="M50 40 L350 40 L350 280 L50 280 Z" stroke="#3A2720" strokeWidth="3" fill="#F4EFE6" fillOpacity="0.3" />

      {/* Roof */}
      <path d="M40 40 L200 15 L360 40" stroke="#3A2720" strokeWidth="3" fill="none" />

      {/* Sign */}
      <path d="M120 60 L280 60 L280 100 L120 100 Z" stroke="#3A2720" strokeWidth="2.5" fill="#E9E0D2" fillOpacity="0.5" />
      <path d="M150 80 L250 80" stroke="#3A2720" strokeWidth="2" strokeLinecap="round" />
      <path d="M160 70 L240 70" stroke="#3A2720" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Door */}
      <path d="M170 180 L170 280 L230 280 L230 180 Q200 170 170 180" stroke="#3A2720" strokeWidth="2.5" fill="#C9A87C" fillOpacity="0.3" />
      <circle cx="220" cy="230" r="3" stroke="#3A2720" strokeWidth="2" />

      {/* Windows */}
      <path d="M80 120 L150 120 L150 170 L80 170 Z" stroke="#3A2720" strokeWidth="2.5" fill="#E9E0D2" fillOpacity="0.4" />
      <path d="M115 120 L115 170" stroke="#3A2720" strokeWidth="1.5" />
      <path d="M80 145 L150 145" stroke="#3A2720" strokeWidth="1.5" />

      <path d="M250 120 L320 120 L320 170 L250 170 Z" stroke="#3A2720" strokeWidth="2.5" fill="#E9E0D2" fillOpacity="0.4" />
      <path d="M285 120 L285 170" stroke="#3A2720" strokeWidth="1.5" />
      <path d="M250 145 L320 145" stroke="#3A2720" strokeWidth="1.5" />

      {/* Warm light in window */}
      <path d="M85 125 L145 125 L145 165 L85 165 Z" stroke="#B8955A" strokeWidth="1.5" fill="#B8955A" fillOpacity="0.15" />
      <path d="M255 125 L315 125 L315 165 L255 165 Z" stroke="#B8955A" strokeWidth="1.5" fill="#B8955A" fillOpacity="0.15" />

      {/* Plant left */}
      <path d="M60 280 Q65 260 70 245" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M60 280 Q55 260 52 250" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="70" cy="243" rx="8" ry="5" transform="rotate(15 70 243)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="52" cy="248" rx="8" ry="5" transform="rotate(-15 52 248)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <path d="M50 280 L80 280 L80 290 L50 290 Z" stroke="#3A2720" strokeWidth="2" fill="none" />

      {/* Plant right */}
      <path d="M340 280 Q345 260 350 245" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M340 280 Q335 260 332 250" stroke="#6C6A4D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="350" cy="243" rx="8" ry="5" transform="rotate(-15 350 243)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="332" cy="248" rx="8" ry="5" transform="rotate(15 332 248)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <path d="M320 280 L350 280 L350 290 L320 290 Z" stroke="#3A2720" strokeWidth="2" fill="none" />

      {/* Ground */}
      <path d="M30 280 L370 280" stroke="#3A2720" strokeWidth="2.5" />
    </svg>
  );
}