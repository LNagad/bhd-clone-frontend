import { SVGProps } from 'react';

const LaptopSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 640 512"
    {...props}
  >
    <path d="M128 32c-35.3 0-64 28.7-64 64v256h64V96h384v256h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2H19.2z" />
  </svg>
);

export default LaptopSVG;