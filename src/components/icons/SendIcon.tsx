import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#000000';
export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px" style={{ fill: props.color ?? defaultButtonColor }} {...props}>
    <g>
	<g>
		<path class="st0" d="M6.8,29.1l2.8-3l2.8,3H6.8z M6.4,32.8v-1.3c0-0.1,0-0.1,0.1-0.1h6.2c0.1,0,0.1,0,0.1,0.1v1.3
			c0,0.1,0,0.1-0.1,0.1H6.5C6.4,32.9,6.4,32.9,6.4,32.8z M5.7,32.8c0,0.5,0.3,0.8,0.8,0.8h6.2c0.5,0,0.8-0.3,0.8-0.8v-1.3
			c0-0.5-0.3-0.8-0.8-0.8H6.5c-0.5,0-0.8,0.3-0.8,0.8V32.8z M6.5,29.8h6.3c0.6,0,0.8-0.5,0.4-0.9l-3.1-3.3c-0.3-0.3-0.7-0.3-1,0
			L6,28.9C5.7,29.3,5.9,29.8,6.5,29.8z"/>
	</g>
</g>
  </svg>
);
