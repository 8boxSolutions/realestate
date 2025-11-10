import { Label } from '@/components/ui/label';
import { Input } from '@/components';

const SecurityDetails = () => {
	return (
		<section className="">
			<div className="space-y-1 pb-5">
				<h1 className="text-2xl">Security Details</h1>
				<p>
					Create a strong and unique password to secure your account. Choose a combination of characters, numbers, and
					symbols to ensure your account remains protected.
				</p>
			</div>
			<form className="grid grid-cols-2 gap-5">
				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">Create Password</Label>
						<span className="text-primary">*</span>
					</div>
					<Input type="password" placeholder="Create Password" className="rounded-full py-6" />
				</div>

				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">Confirm Password</Label>
						<span className="text-primary">*</span>
					</div>
					<Input type="password" placeholder="Confirm Password" className="rounded-full py-6" />
				</div>
			</form>
		</section>
	);
};

export default SecurityDetails;
