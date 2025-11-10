import { property, propertyTips, uploadProperty } from '@/constants/propertyTypeData';
import tips from '@/assets/tips.svg';
const PropertyType = () => {
	return (
		<div className="pt-10">
			<section>
				<div className="space-y-2 pb-9">
					<h1 className="text-2xl">Property Type</h1>
					<p>Please select the property type that best describes your listing.</p>
				</div>
				<div className="grid grid-cols-4 gap-10 bg-[#D4D4D4]/50 p-10">
					{property.map((item) => (
						<div
							key={item.id}
							className="group flex flex-col items-center rounded-2xl bg-white px-5 py-10 transition duration-300 hover:bg-primary"
						>
							<span className="rounded-full bg-primary p-3 transition duration-300 group-hover:bg-white">
								<item.icon size={38} className="text-white transition duration-300 group-hover:text-primary" />
							</span>

							<div className="pt-3 text-center">
								<label className="text-xl font-medium group-hover:text-white">{item.label}</label>
								<p className="text-sm text-[#808080] group-hover:text-gray-200">{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="flex justify-between pt-10">
				<div>
					<div className="space-y-2 pb-2">
						<h1 className="text-2xl">Upload Property Photos</h1>
						<p className="text-[#23232380]/50">Show potential buyers or renters what makes your property stand out.</p>
					</div>
					<p className="pb-2">Please upload clear, high-quality photos of your property (Minimum of 5 images):</p>

					{uploadProperty.map((list, index) => (
						<ul key={index}>
							<li className="list-disc pt-1 text-xl font-bold">
								{list.label} <span className="font-normal">{list.text}</span>
							</li>
						</ul>
					))}
				</div>

				<div className="h-50 rounded-2xl bg-[#FFF4E4] px-9 pt-8 shadow-xl">
					<div className="flex justify-center gap-2 pb-2">
						<img src={tips} alt="tips" />
						<h2 className="text-xl font-bold">Tips for you</h2>
					</div>
					{propertyTips.map((item, index) => (
						<ul key={index}>
							<li className="list-disc">{item.label}</li>
						</ul>
					))}
				</div>
			</section>
		</div>
	);
};

export default PropertyType;
