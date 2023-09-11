import { SVGProps } from 'react';

const ShopSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 576 512"
    {...props}
  >
    <path d="m547.6 103.8-57.3-90.7C485.2 5 476.1 0 466.4 0H109.6c-9.7 0-18.8 5-23.9 13.1l-57.4 90.7c-29.6 46.8-3.4 111.9 51.9 119.4 4 .5 8.1.8 12.1.8 26.1 0 49.3-11.4 65.2-29 15.9 17.6 39.1 29 65.2 29s49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29 26.2 0 49.3-11.4 65.2-29 16 17.6 39.1 29 65.2 29 4.1 0 8.1-.3 12.1-.8 55.5-7.4 81.8-72.5 52.1-119.4zm-47.9 151.1h-.1c-5.3.7-10.7 1.1-16.2 1.1-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4-5.5 0-11-.4-16.3-1.1H76c-4.1-.6-8.1-1.3-12-2.3V448c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V252.6c-4 1-8 1.8-12.3 2.3z" />
  </svg>
);
export default ShopSVG;