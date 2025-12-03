import { useState, ChangeEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Coupon {
	code: string;
	discount: string;
}

const CouponsForm = () => {
	const [coupons, setCoupon] = useState<Coupon[]>([
		{
			code: 'RealEstateDiscount',
			discount: '5',
		},
	]);

	const addCoupon = () => {
		setCoupon((prevCoupons) => [
			...prevCoupons,
			{
				code: '',
				discount: '',
			},
		]);
	};

	const updateCoupon = (index: number, field: keyof Coupon, value: string) => {
		setCoupon((prevCoupons) => {
			const updated = [...prevCoupons];
			updated[index][field] = value;
			return updated;
		});
	};

	return (
		<section className="pt-10">
			{coupons.map((coupon, i) => (
				<div key={i} className="flex gap-10 space-y-3">
					<div className="space-y-2">
						<Label className="text-md text-[#23232380]">Coupon Code</Label>
						<Input
							type="text"
							value={coupon.code}
							onChange={(e: ChangeEvent<HTMLInputElement>) => updateCoupon(i, 'code', e.target.value)}
							placeholder="Coupon Code"
							className="rounded-full py-5"
						/>
					</div>
					<div className="space-y-2">
						<Label className="text-md text-[#23232380]">Discount</Label>
						<Input
							type="number"
							value={coupon.discount}
							onChange={(e: ChangeEvent<HTMLInputElement>) => updateCoupon(i, 'discount', e.target.value)}
							placeholder="%"
							className="rounded-full py-5"
						/>
					</div>
				</div>
			))}
			<Button
				onClick={addCoupon}
				className="rounded-full bg-primary/30 p-5 text-primary hover:bg-primary/30 hover:text-primary"
			>
				+ Add Coupon
			</Button>
		</section>
	);
};

export default CouponsForm;
