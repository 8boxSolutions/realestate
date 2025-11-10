import { Label } from '@/components/ui/label';
import { Input } from '@/components';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DatePicker } from '@/components/DatePicker';

const OwnershipType = () => {
	return (
		<section className="pt-10">
			<div className="space-y-2 pb-5">
				<h1 className="text-2xl">Provide Ownership Type</h1>
				<p>
					Add your property/business to Real Estate. Please provide details about your business, including whether
					you're operating as an individual agent or as a brokerage/team. This information will help us verify and list
					your properties accurately.
				</p>
			</div>
			<RadioGroup defaultValue="Individual">
				<div className="flex items-center gap-3">
					<RadioGroupItem value="Individual" id="individual" />
					<Label htmlFor="individual" className="text-xl font-normal">
						Individual Property Owner
					</Label>
				</div>
				<div className="flex items-center gap-3">
					<RadioGroupItem value="Partnership" id="patnership" />
					<Label htmlFor="patnership" className="text-xl font-normal">
						Partnership / Co-Ownership
					</Label>
				</div>
				<div className="flex items-center gap-3">
					<RadioGroupItem value="Corporation" id="corporation" />
					<Label htmlFor="corporation " className="text-xl font-normal">
						Corporation / Developer
					</Label>
				</div>
			</RadioGroup>

			<form className="pt-8">
				<div>
					<div className="flex">
						<Label className="text-xl font-normal">Full Name</Label>
						<span className="text-primary">*</span>
					</div>
					<Input type="name" placeholder="Full Name" className="text-md w-full rounded-full px-5 py-6" />
				</div>
				<div className="mt-5 grid grid-cols-2 gap-6">
					<DatePicker />
					<div>
						<div className="flex">
							<Label className="text-xl font-normal">Place of Birth</Label>
							<span className="text-primary">*</span>
						</div>
						<Input type="text" placeholder="Place of Birth" className="text-md mt-3 w-full rounded-full px-5 py-6" />
					</div>
				</div>
			</form>
		</section>
	);
};

export default OwnershipType;
