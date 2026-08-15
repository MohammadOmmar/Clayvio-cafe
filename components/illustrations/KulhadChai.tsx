import { SVGProps } from 'react';

export default function KulhadChai(props: SVGProps<SVGSVGElement>) {
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
        d="M70 55 Q65 40 72 30 Q79 20 74 8"
        stroke="#B8955A"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M95 50 Q90 35 97 25 Q104 15 99 3"
        stroke="#B8955A"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M120 55 Q115 40 122 30 Q129 20 124 8"
        stroke="#B8955A"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Kulhad body */}
      <path
        d="M60 75 L65 145 Q67 165 100 165 Q133 165 135 145 L140 75"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.5"
      />
      {/* Kulhad top rim */}
      <path
        d="M55 75 Q100 62 145 75"
        stroke="#3A2720"
        strokeWidth="3"
        fill="none"
      />
      {/* Chai surface */}
      <path
        d="M60 80 Q100 72 140 80"
        stroke="#A65F42"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      {/* Kulhad base */}
      <path
        d="M95 185 L105 185"
        stroke="#3A2720"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}