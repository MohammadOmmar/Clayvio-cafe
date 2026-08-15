import { SVGProps } from 'react';

export default function Shake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Glass */}
      <path
        d="M70 60 L75 140 Q78 160 100 160 Q122 160 125 140 L130 60"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.3"
      />
      {/* Straw */}
      <path d="M95 60 L85 20" stroke="#3A2720" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M85 20 L80 10" stroke="#3A2720" strokeWidth="2.5" strokeLinecap="round" />
      {/* Shake surface */}
      <path d="M72 65 Q100 58 128 65" stroke="#A65F42" strokeWidth="2.5" fill="none" />
      {/* Whipped cream */}
      <path d="M75 60 Q100 50 125 60 Q100 70 75 60" stroke="#3A2720" strokeWidth="2" fill="#E9E0D2" fillOpacity="0.5" />
      {/* Cherry */}
      <circle cx="100" cy="48" r="6" stroke="#3A2720" strokeWidth="2" fill="#A65F42" fillOpacity="0.4" />
      <path d="M100 42 L100 36" stroke="#3A2720" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}