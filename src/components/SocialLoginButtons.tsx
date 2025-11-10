import React from 'react';
import apple from '@/assets/social/apple.svg';
import facebook from '@/assets/social/facebook.svg';
import google from '@/assets/social/google.svg';
import { Button } from '@/components/ui/button';

interface socialProps {}

const SocialLoginButtons: React.FC<socialProps> = ({}) => {
	return (
		<div className="w-full">
			<div className="flex gap-2">
				<Button variant="outline" className="flex flex-1 items-center justify-center py-5 sm:py-6 md:py-7">
					<img src={facebook} alt="facebook" className="h-5 w-5 sm:h-6 sm:w-6" />
				</Button>
				<Button variant="outline" className="flex flex-1 items-center justify-center py-5 sm:py-6 md:py-7">
					<img src={google} alt="google" className="h-5 w-5 sm:h-6 sm:w-6" />
				</Button>
				<Button variant="outline" className="flex flex-1 items-center justify-center py-5 sm:py-6 md:py-7">
					<img src={apple} alt="apple" className="h-5 w-5 sm:h-6 sm:w-6" />
				</Button>
			</div>
		</div>
	);
};

export default SocialLoginButtons;
