import { Input } from './ui/input';
import { Button } from './ui/button';
import { FaArrowRight } from 'react-icons/fa6';

const Subscribe = () => {
	return (
		<div className="flex flex-col items-start space-y-4">
			<h1 className="text-lg font-semibold text-black">Subscribe to our NewsLetter!</h1>

			<div className="relative">
				<Input type="email" placeholder="Email Address" className="w-80 rounded-full bg-white py-6" />
				<Button className="absolute top-2 right-2 rounded-full">
					<FaArrowRight />
				</Button>
			</div>
		</div>
	);
};

export default Subscribe;
