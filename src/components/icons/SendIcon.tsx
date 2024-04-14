import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#000';
export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px" style={{ fill: props.color ?? defaultButtonColor }} {...props}>
    <path class="st0" d="M0,0" />
    <ellipse class="st1" cx="12" cy="12" rx="11.3" ry="11" />
    <ellipse class="st1" cx="12" cy="12" rx="3.5" ry="3.4" />
    <ellipse class="st1" cx="12" cy="12" rx="7.7" ry="7.4" />
  </svg>
);
