import { SVGProps } from 'react';

export default function Pizza(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Pizza base */}
      <path
        d="M100 40 Q160 50 170 120 Q100 160 30 120 Q40 50 100 40"
        stroke="#3A2720"
        strokeWidth="3"
        fill="#E9E0D2"
        fillOpacity="0.4"
      />
      {/* Crust */}
      <path
        d="M100 40 Q160 50 170 120"
        stroke="#3A2720"
        strokeWidth="3"
        fill="none"
      />
      {/* Sauce */}
      <path
        d="M100 55 Q150 62 158 118 Q100 148 42 118 Q50 62 100 55"
        stroke="#A65F42"
        strokeWidth="2"
        fill="#A65F42"
        fillOpacity="0.2"
      />
      {/* Pepperoni */}
      <ellipse cx="100" cy="90" rx="12" ry="9" stroke="#3A2720" strokeWidth="2" fill="#A65F42" fillOpacity="0.3" />
      <ellipse cx="70" cy="110" rx="10" ry="8" stroke="#3A2720" strokeWidth="2" fill="#A65F42" fillOpacity="0.3" />
      <ellipse cx="130" cy="110" rx="10" ry="8" stroke="#3A2720" strokeWidth="2" fill="#A65F42" fillOpacity="0.3" />
      <ellipse cx="100" cy="130" rx="9" ry="7" stroke="#3A2720" strokeWidth="2" fill="#A65F42" fillOpacity="0.3" />
      {/* Cheese dots */}
      <circle cx="85" cy="85" r="3" stroke="#3A2720" strokeWidth="1.5" />
      <circle cx="115" cy="85" r="3" stroke="#3A2720" strokeWidth="1.5" />
      <circle cx="100" cy="105" r="3" stroke="#3A2720" strokeWidth="1.5" />
    </svg>
  );
}