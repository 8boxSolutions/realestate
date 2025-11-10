import React from 'react';

interface illustratioonProps {
	image?: string;
}

const LoginIllustration: React.FC<illustratioonProps> = ({ image }) => {
	return (
		<div className="hidden pt-10 md:block lg:pb-5">
			<img src={image} alt={image} className="h-full" />
		</div>
	);
};

export default LoginIllustration;
