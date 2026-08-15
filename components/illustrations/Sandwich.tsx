import { SVGProps } from 'react';

export default function Sandwich(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Top bread */}
      <path
        d="M50 70 Q100 55 150 70 L145 95 Q100 105 55 95 Z"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.5"
      />
      {/* Filling */}
      <path
        d="M55 100 Q100 110 145 100 L145 120 Q100 130 55 120 Z"
        stroke="#A65F42"
        strokeWidth="2.5"
        fill="#A65F42"
        fillOpacity="0.3"
      />
      {/* Lettuce */}
      <path
        d="M55 125 Q100 115 145 125 Q100 135 55 125"
        stroke="#6C6A4D"
        strokeWidth="2.5"
        fill="#6C6A4D"
        fillOpacity="0.2"
      />
      {/* Bottom bread */}
      <path
        d="M55 130 Q100 140 145 130 L143 155 Q100 165 57 155 Z"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.5"
      />
      {/* Seeds */}
      <circle cx="80" cy="80" r="2" stroke="#3A2720" strokeWidth="1.5" />
      <circle cx="100" cy="75" r="2" stroke="#3A2720" strokeWidth="1.5" />
      <circle cx="120" cy="80" r="2" stroke="#3A2720" strokeWidth="1.5" />
    </svg>
  );
}