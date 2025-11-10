import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const maxCapAndFaci = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CapacityAndFacilities = () => {
	return (
		<section className="pt-10">
			<div className="space-y-2">
				<h1 className="text-2xl">Property Details</h1>
				<p>
					Provide the key details of your property to help potential buyers or renters understand its capacity and
					features.
				</p>
			</div>

			<div className="space-y-5 pt-5">
				<div>
					<h6 className="text-lg">Maximum Occupancy</h6>
					<p className="text-[#23232380]">
						Enter the maximum number of people the property can comfortably accommodate.
					</p>
					<Select>
						<SelectTrigger className="p mt-3 w-120 rounded-full">
							<SelectValue className="" />
						</SelectTrigger>

						<SelectContent>
							{maxCapAndFaci.map((item, index) => (
								<SelectItem key={index} value={String(item)}>
									{item}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<h6 className="text-lg">Number of Bedrooms</h6>
					<p className="text-[#23232380]">Specify the total number of bedrooms in the property.</p>
					<Select>
						<SelectTrigger className="p mt-3 w-120 rounded-full">
							<SelectValue />
						</SelectTrigger>

						<SelectContent>
							{maxCapAndFaci.map((item, index) => (
								<SelectItem key={index} value={String(item)}>
									{item}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<h6 className="text-lg">Number of Bathrooms</h6>
					<p className="text-[#23232380]">Indicate how many bathrooms are available.</p>
					<Select>
						<SelectTrigger className="p mt-3 w-120 rounded-full">
							<SelectValue />
						</SelectTrigger>

						<SelectContent>
							{maxCapAndFaci.map((item, index) => (
								<SelectItem key={index} value={String(item)}>
									{item}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<h6 className="text-lg">Parking Availability</h6>
					<p className="text-[#23232380]">Indicate how many bathrooms are available.</p>
					<Select>
						<SelectTrigger className="p mt-3 w-120 rounded-full">
							<SelectValue />
						</SelectTrigger>

						<SelectContent>
							{maxCapAndFaci.map((item, index) => (
								<SelectItem key={index} value={String(item)}>
									{item}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
		</section>
	);
};

export default CapacityAndFacilities;
