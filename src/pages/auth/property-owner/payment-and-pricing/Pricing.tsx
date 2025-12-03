import { Input } from '@/components/ui/input';
const Pricing = () => {
	return (
		<section className="w-full max-w-2xl space-y-9">
			<div className="pt-20">
				<h1 className="text-2xl font-bold">Pricing </h1>
				<p>Please enter your property's pricing information</p>
			</div>

			<div className="space-y-2">
				<h2 className="text-2xl font-bold">Total</h2>
				<p>Total amount to be paid by client</p>
				<Input type="number" placeholder="PHP" className="mt-2 rounded-full px-5 py-6" />
			</div>

			<div className="space-y-2">
				<div className="flex items-center gap-2">
					<h3 className="text-2xl font-bold">Monthly Rent</h3>
					<span>(if rent)</span>
				</div>
				<p>please specify the fee charged for each month if you property is for rent</p>
				<Input type="number" placeholder="PHP" className="mt-2 rounded-full px-5 py-6" />
			</div>

			<div className="space-y-2">
				<h4 className="text-2xl font-bold">Cleaning fee</h4>
				<p>Fee charged for cleaning services</p>
				<Input type="number" placeholder="PHP" className="mt-2 rounded-full px-5 py-6" />
			</div>
		</section>
	);
};

export default Pricing;
