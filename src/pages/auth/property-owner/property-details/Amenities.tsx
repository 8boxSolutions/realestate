import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import {
	security,
	outdoorSpace,
	features,
	recreationalFacilities,
	services,
	livingSpace,
} from '@/constants/aminitiesData';

const Amenities = () => {
	return (
		<section className="pt-10">
			<div className="w-5xl space-y-5">
				<h1 className="text-2xl">Amenities and Inclusions</h1>
				<p>
					Please specify the amenities, features, and services included with the property. Highlight what makes your
					listing attractive—whether it’s access to facilities, utilities, or exclusive features.
				</p>
				<Separator />
			</div>

			<div className="pt-10">
				<h2 className="text-2xl font-normal">Does your property include any of these?</h2>
				<p className="text-md text-[#23232380]">Selecting an option may reveal additional configuration choices.</p>

				<div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-10">
					{/* Left column */}
					<div className="space-y-6">
						<div className="relative space-y-4">
							<h6>Security</h6>
							<div className="grid grid-cols-2 gap-2">
								{security.map((item, index) => (
									<div key={index} className="flex gap-2">
										<Checkbox id={item.label} />
										<Label>{item.label}</Label>
									</div>
								))}
							</div>
							<Separator className="!w-lg" />

							{/* short red line */}
							<div className="absolute right-25 bottom-0 flex items-center justify-center">
								<div className="h-20 w-[1.5px] bg-red-500"></div>
							</div>
						</div>

						<div className="relative space-y-4">
							<h6>Outdoor Spaces</h6>
							<div className="grid grid-cols-2 gap-2">
								{outdoorSpace.map((item, index) => (
									<div key={index} className="flex gap-2">
										<Checkbox id={item.label} />
										<Label>{item.label}</Label>
									</div>
								))}
							</div>
							<Separator className="!w-lg" />

							<div className="absolute right-25 bottom-0 flex items-center justify-center">
								<div className="mx-auto h-20 w-[1.5px] bg-red-500"></div>
							</div>
						</div>

						<div className="relative space-y-4">
							<h6>Features</h6>
							<div className="grid grid-cols-2 gap-2">
								{features.map((item, index) => (
									<div key={index} className="flex gap-2">
										<Checkbox id={item.label} />
										<Label>{item.label}</Label>
									</div>
								))}
							</div>
							<Separator className="!w-lg" />

							<div className="absolute right-25 bottom-0 flex items-center justify-center">
								<div className="mx-auto h-20 w-[1.5px] bg-red-500"></div>
							</div>
						</div>
					</div>

					{/* Right column */}
					<div className="space-y-6">
						<div className="space-y-4">
							<h6>Recreational Facilities</h6>
							<div className="grid grid-cols-2 gap-2">
								{recreationalFacilities.map((item, index) => (
									<div key={index} className="flex gap-2">
										<Checkbox id={item.label} />
										<Label>{item.label}</Label>
									</div>
								))}
							</div>
							<Separator className="!w-lg" />
						</div>

						<div className="space-y-4">
							<h6>Services</h6>
							<div className="grid grid-cols-2 gap-2">
								{services.map((item, index) => (
									<div key={index} className="flex gap-2">
										<Checkbox id={item.label} />
										<Label>{item.label}</Label>
									</div>
								))}
							</div>
							<Separator className="!w-lg" />
						</div>

						<div className="space-y-4">
							<h6>Living spaces</h6>
							<div className="grid grid-cols-2 gap-2">
								{livingSpace.map((item, index) => (
									<div key={index} className="flex gap-2">
										<Checkbox id={item.label} />
										<Label>{item.label}</Label>
									</div>
								))}
								<Separator className="!w-lg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Amenities;
