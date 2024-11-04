"use client";

type LogoProps = {
  className?: string;
  height: number;
  width: number;
};

const Logo = ({ className, height, width }: LogoProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 277.000000 277.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g
        transform="translate(0.000000,277.000000) scale(0.100000,-0.100000)"
        fill="hsl(var(--foreground))"
        stroke="none"
      >
        <path
          d="M146 2362 c-3 -5 -4 -121 -1 -258 2 -137 4 -581 4 -986 l1 -738 331
0 330 0 865 862 864 863 0 133 0 133 -503 -3 -502 -4 -99 -27 c-318 -86 -558
-301 -683 -611 -75 -188 -84 -433 -22 -638 11 -38 23 -68 27 -68 4 0 71 64
150 143 l142 142 0 71 c0 39 9 105 20 148 66 258 273 441 540 476 89 11 300
13 300 2 0 -4 -282 -289 -628 -635 l-627 -627 -73 0 -72 0 0 815 0 815 -179 0
c-99 0 -182 -4 -185 -8z"
        />
        <path
          d="M1982 1377 c-94 -95 -172 -176 -172 -180 0 -4 106 -7 235 -7 193 0
235 -2 235 -14 0 -27 -49 -122 -93 -183 -140 -189 -393 -286 -625 -239 -46 9
-99 24 -118 33 l-35 17 -129 -129 c-72 -72 -129 -134 -127 -139 6 -19 123 -76
212 -105 132 -42 226 -55 368 -48 449 21 830 345 923 787 19 88 25 300 11 353
l-7 27 -253 0 -252 0 -173 -173z"
        />
      </g>
    </svg>
  );
};

export default Logo;
