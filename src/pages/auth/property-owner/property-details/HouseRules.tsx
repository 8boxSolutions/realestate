import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { TimePicker } from '@/components/TimePicker';

const HouseRules = () => {
	return (
		<section className="w-full max-w-4xl">
			<h1 className="pt-10 text-2xl font-bold">Next, let describe your property's house rules</h1>
			<div className="space-y-5 pt-10">
				<h2 className="text-2xl font-bold">What should tenants or buyers know about living or staying here?</h2>
				<Textarea className="min-h-50" />
				<div className="flex justify-between">
					<span>200 characters required</span>
					<span className="text-primary">Show example</span>
				</div>
				<Separator />
			</div>

			<div className="pt-10">
				<h3 className="text-2xl font-bold">Check-In and Check-Out (for rentals/short stays)</h3>
				<span>For rent only.</span>
				<div className="grid grid-cols-2 gap-10 pt-5">
					<TimePicker label="Check-In" id="check-in" />
					<TimePicker label="Check-Out" id="check-out" />
				</div>
			</div>

			<div className="space-y-5 pt-10">
				<div>
					<h3 className="text-2xl font-bold">House Policies</h3>
					<span className="text-sm text-[#23232380]">Please outline your property policies</span>
				</div>

				<div className="space-y-2">
					<div className="flex justify-between">
						<h4 className="text-2xl font-bold">Smoking Policy</h4>
						<Switch />
					</div>
					<p className="text-sm text-[#23232380]">
						This information helps tenants understand where smoking is permitted or prohibited at your property.
					</p>
				</div>

				<div className="space-y-2">
					<div className="flex justify-between">
						<h5 className="text-2xl font-bold">Pet Policy</h5>
						<Switch />
					</div>
					<p className="text-sm text-[#23232380]">
						This information helps tenants understand if they can bring their pets to your property and any associated
						requirements or restrictions.
					</p>
				</div>

				<div className="space-y-2">
					<h6 className="text-2xl font-bold">Quiet Hours</h6>
					<p className="text-sm text-[#23232380]">
						During quiet hours, tenants are expected to keep noise levels to a minimum to respect neighbors and the
						surrounding environment.
					</p>
					<div className="grid grid-cols-2 gap-10">
						<TimePicker label="Start Time" id="start-time" />
						<TimePicker label="End Time" id="end-time" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HouseRules;
