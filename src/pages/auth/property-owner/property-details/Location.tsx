import { Label } from '@/components';
import { Input } from '@/components';
import location from '@/assets/location.png';

const Location = () => {
	return (
		<section className="pt-10">
			<h1 className="text-2xl">Where is your property located</h1>

			<div className="pt-5">
				<div className="flex">
					<Label className="text-xl">Location</Label>
					<span className="text-primary">*</span>
				</div>
				<Input type="text" placeholder="Location" className="rounded-full border border-[#23232380] p-7" />
			</div>
			<div className="flex gap-10 pt-5">
				<div>
					<Label className="text-xl">Latitude</Label>
					<Input type="text" placeholder="Latitude" className="w-120 rounded-full border border-[#23232380] p-7" />
				</div>
				<div>
					<Label className="text-xl">Longitude</Label>
					<Input type="text" placeholder="Longitude" className="w-120 rounded-full border border-[#23232380] p-7" />
				</div>
			</div>
			<div className="pt-15">
				<img src={location} alt="location" className="w-full" />
			</div>
		</section>
	);
};

export default Location;
