import React from "react";

export default function Flare(props) {
  return (
    <svg
      width="779"
      height="797"
      viewBox="0 0 779 797"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.5" filter="url(#filter0_f_230_510)">
        <ellipse
          cx="389.472"
          cy="398.432"
          rx="239.472"
          ry="248.432"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_230_510"
          x="0"
          y="0"
          width="778.945"
          height="796.864"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_230_510"
          />
        </filter>
      </defs>
    </svg>
  );
}
