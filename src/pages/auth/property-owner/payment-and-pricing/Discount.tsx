import CouponsForm from './CouponsForm';

const Discount = () => {
	return (
		<section>
			<div className="space-y-2 pt-10">
				<h1 className="text-2xl">Discount</h1>
				<p>You may apply discount for your property </p>
			</div>
			<CouponsForm />
		</section>
	);
};

export default Discount;
