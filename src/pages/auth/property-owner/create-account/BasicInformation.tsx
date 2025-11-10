import { Label } from '@/components/ui/label';
import { Input } from '@/components';
import { Checkbox } from '@/components';

const BasicInformation = () => {
	return (
		<section className="pt-10">
			<div className="space-y-2 pb-5">
				<h1 className="text-2xl">Basic Information</h1>
				<p>
					Provide essential details about yourself, including your name, profile picture, and bio. This information will
					help clients get to know you and what you offer.
				</p>
			</div>
			<form className="grid grid-cols-2 gap-5">
				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">First Name</Label>
						<span className="text-primary">*</span>
					</div>

					<Input type="name" placeholder="First Name" className="rounded-full py-6" />
				</div>

				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">Last Name</Label>
						<span className="text-primary">*</span>
					</div>
					<Input type="name" placeholder="Last Name" className="rounded-full py-6" />
				</div>

				<div className="space-y-2">
					<div className="flex justify-between pr-2">
						<Label className="text-xl font-normal">Middle Name</Label>
						<p>
							<Checkbox /> I don't have Middle Name
						</p>
					</div>
					<Input type="name" placeholder="Middle Name" className="rounded-full py-6" />
				</div>

				<div className="space-y-2">
					<div className="flex">
						<Label className="text-xl font-normal">Nickname</Label>
						<span className="text-primary">*</span>
					</div>
					<Input type="name" placeholder="Nickname" className="rounded-full py-6" />
				</div>
			</form>
		</section>
	);
};

export default BasicInformation;
