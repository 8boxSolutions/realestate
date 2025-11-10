import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const ContactInfo = () => {
	const [phone, setPhone] = useState<string>('');

	return (
		<section className="pt-10">
			<div className="space-y-2 pb-5">
				<h1 className="text-2xl">Contact Information</h1>
				<p>
					Add your contact details, such as email address and phone number, to enable smooth communication with clients
					and our team. Rest assured that your information will be kept secure and confidential.
				</p>
			</div>

			<form className="grid grid-cols-2 gap-5">
				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">Phone [1]</Label>
						<span className="text-primary">*</span>
					</div>
					<PhoneInput
						defaultCountry="ph"
						value={phone}
						onChange={(phone) => setPhone(phone)}
						className="mt-1 [&_.react-international-phone-country-selector]:pr-3"
					/>
				</div>

				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">Phone [2]</Label>
						<span className="text-primary">*</span>
					</div>
					<PhoneInput
						defaultCountry="ph"
						value={phone}
						onChange={(phone) => setPhone(phone)}
						className="mt-1 [&_.react-international-phone-country-selector]:pr-3"
					/>
				</div>

				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">Email Address</Label>
						<span className="text-primary">*</span>
					</div>
					<Input type="email" placeholder="Email Address" className="rounded-full py-6" />
				</div>

				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">Alternative Email Address </Label>
						<span>(Optional)</span>
					</div>
					<Input type="email" placeholder="Email Address" className="rounded-full py-6" />
				</div>
			</form>
		</section>
	);
};

export default ContactInfo;
