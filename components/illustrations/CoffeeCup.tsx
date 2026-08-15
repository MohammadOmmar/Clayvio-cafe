import { SVGProps } from 'react';

export default function CoffeeCup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Steam */}
      <path
        d="M80 55 Q75 42 82 33 Q89 24 84 12"
        stroke="#B8955A"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M105 50 Q100 37 107 28 Q114 19 109 7"
        stroke="#B8955A"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Saucer */}
      <path
        d="M55 150 Q100 140 145 150 Q100 160 55 150"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.4"
      />

      {/* Cup body */}
      <path
        d="M70 80 L75 135 Q78 150 100 150 Q122 150 125 135 L130 80"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.5"
      />

      {/* Cup rim */}
      <path
        d="M65 80 Q100 70 135 80"
        stroke="#3A2720"
        strokeWidth="3"
        fill="none"
      />

      {/* Coffee surface */}
      <path
        d="M70 85 Q100 78 130 85"
        stroke="#3A2720"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />

      {/* Handle */}
      <path
        d="M130 90 Q155 90 155 110 Q155 130 130 130"
        stroke="#3A2720"
        strokeWidth="3"
        fill="none"
      />

      {/* Coffee beans */}
      <ellipse cx="45" cy="60" rx="8" ry="5" transform="rotate(-20 45 60)" stroke="#3A2720" strokeWidth="2" fill="none" />
      <path d="M45 57 Q45 60 45 63" stroke="#3A2720" strokeWidth="1.5" />
      <ellipse cx="160" cy="70" rx="8" ry="5" transform="rotate(15 160 70)" stroke="#3A2720" strokeWidth="2" fill="none" />
      <path d="M160 67 Q160 70 160 73" stroke="#3A2720" strokeWidth="1.5" />
    </svg>
  );
}