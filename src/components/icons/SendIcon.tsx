import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px" style={{ fill: props.color ?? defaultButtonColor }} {...props}>
    <circle class="st0" cx="4.8" cy="256.8" r="4.8"/>
  </svg>
);
