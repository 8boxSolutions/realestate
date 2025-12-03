import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';

const security = ['Yes', 'No Security Deposit'];
const reservation = ['Refundable', 'Non-Refundable'];

const SecurityDeposit = () => {
	return (
		<section className="w-full max-w-2xl space-y-5 pt-10">
			<div className="space-y-2">
				<h1 className="text-2xl font-bold">Security Deposit</h1>
				<p>This information helps buyer or renter understand the security measures in place at the property</p>

				<RadioGroup className="pt-2">
					{security.map((item, index) => (
						<div key={index} className="flex items-center space-x-2">
							<RadioGroupItem value={item} id={item} />
							<Label htmlFor={item}>{item}</Label>
						</div>
					))}
				</RadioGroup>
				<div className="flex max-w-sm flex-col gap-4 pt-4">
					<span className="text-[#23232380]">Security Deposit</span>
					<Input type="number" placeholder="PHP" className="rounded-full px-4 py-5" />
				</div>
			</div>

			<div className="space-y-2">
				<h2 className="text-2xl font-bold">Reservation Fee</h2>
				<p>
					Payment to secure the property and place it on hold. This amount is usually deductible from the total price or
					rent, subject to the agree terms
				</p>

				<RadioGroup className="pt-2">
					{reservation.map((item, index) => (
						<div key={index} className="flex items-center space-x-2">
							<RadioGroupItem value={item} id={item} />
							<Label htmlFor={item}>{item}</Label>
						</div>
					))}
				</RadioGroup>
				<div className="flex max-w-sm flex-col gap-2 pt-4">
					<span className="text-[#23232380]">Security Deposit</span>
					<Input type="number" placeholder="PHP" className="rounded-full px-4 py-5" />
				</div>
			</div>
		</section>
	);
};

export default SecurityDeposit;
