import { SVGProps } from 'react';

export default function Botanical(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Main stem */}
      <path
        d="M100 190 Q95 150 100 110 Q105 70 100 30"
        stroke="#6C6A4D"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left branches */}
      <path d="M100 150 Q80 140 65 125" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M100 110 Q75 100 60 85" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M100 70 Q80 60 70 50" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Right branches */}
      <path d="M100 140 Q120 130 135 115" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M100 100 Q125 90 140 75" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M100 60 Q120 50 130 40" stroke="#6C6A4D" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Leaves */}
      <ellipse cx="65" cy="123" rx="12" ry="7" transform="rotate(-30 65 123)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="60" cy="83" rx="12" ry="7" transform="rotate(-25 60 83)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="70" cy="48" rx="10" ry="6" transform="rotate(-20 70 48)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="135" cy="113" rx="12" ry="7" transform="rotate(25 135 113)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="140" cy="73" rx="12" ry="7" transform="rotate(30 140 73)" stroke="#6C6A4D" strokeWidth="2" fill="none" />
      <ellipse cx="130" cy="38" rx="10" ry="6" transform="rotate(20 130 38)" stroke="#6C6A4D" strokeWidth="2" fill="none" />

      {/* Top leaf */}
      <ellipse cx="100" cy="28" rx="10" ry="6" stroke="#6C6A4D" strokeWidth="2" fill="none" />
    </svg>
  );
}