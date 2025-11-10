/// <reference types="vite/client" />
declare module 'swiper/css';
declare module 'swiper/css/pagination';
declare module 'swiper/css/effect-fade';
declare module 'swiper/css/effect-coverflow';
declare module 'swiper/css/navigation';

declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.svg' {
	import * as React from 'react';
	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
	export default ReactComponent;
}

declare module '*.svg?react' {
	import * as React from 'react';
	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
	export default ReactComponent;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.gif' {
	const src: string;
	export default src;
}
