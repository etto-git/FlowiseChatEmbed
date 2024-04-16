import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#000000';
export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px" style={{ fill: props.color ?? defaultButtonColor }} {...props}>
<path d="M0.9,242.7h0.3v7.7H0.9V242.7z"/>
	<path d="M2.1,242.7h0.3v7.7H2.1V242.7z"/>
	<path d="M3.4,242.7h0.3v7.7H3.4V242.7z"/>
	<path d="M4.7,242.7H5v7.7H4.7V242.7z"/>
	<path d="M5.9,242.7h0.3v7.7H5.9V242.7z"/>
	<path d="M7.2,242.7h0.3v7.7H7.2V242.7z"/>
  </svg>
);
