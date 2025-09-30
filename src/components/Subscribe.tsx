import { Input } from './ui/input';
import { Button } from './ui/button';
import { FaArrowRight } from 'react-icons/fa6';

const Subscribe = () => {
	return (
		<div className="flex flex-col items-start space-y-4">
			<h1 className="text-lg font-semibold text-black">Subscribe to our NewsLetter!</h1>

			<div className="relative">
				<Input type="email" placeholder="Email Address" className="w-50 rounded-full bg-white md:w-80 md:py-6" />
				<Button className="absolute right-2 w-10 rounded-full md:top-2">
					<FaArrowRight className="w-20" />
				</Button>
			</div>
		</div>
	);
};

export default Subscribe;
