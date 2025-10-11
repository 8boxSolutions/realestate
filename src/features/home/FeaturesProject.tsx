import featureLocationIcon from '@/assets/homepage/featuresLocationIcon.svg';
import featurePriceTagIcon from '@/assets/homepage/featuresPriceTagIcon.svg';
import GalleryGrid from '@/components/GalleryGrid';
const FeaturesProject = () => {
	return (
		<section className="flex justify-between gap-2">
			<div className="flex flex-col space-y-10 text-black">
				<h1 className="text-3xl font-normal text-primary">FEATURED PROJECT</h1>
				<div className="flex flex-col gap-2">
					<h2 className="text-4xl">Modern Family Homes in Greenview Residences</h2>
					<p className="max-w-2xl">
						Discover a vibrant community of modern homes designed for comfort, convenience, and style. Perfectly located
						near schools, shopping centers, and parks, this development blends urban living with a serene atmosphere.
					</p>
				</div>
				<div className="flex flex-col space-y-6">
					<div className="flex max-w-md items-center gap-3 rounded-3xl bg-white p-6 shadow-2xl">
						<img src={featureLocationIcon} alt="locationIcon" className="size-10" />
						<div>
							<h3 className="text-lg">Location- Quezon City</h3>
							<p>Situated in a prime spot with easy access to schools, malls, and transport hubs.</p>
						</div>
					</div>

					<div className="flex max-w-md items-center gap-3 rounded-3xl bg-white p-6 shadow-2xl">
						<img src={featurePriceTagIcon} alt="priceTagIcon" className="size-10" />
						<div>
							<h4 className="text-lg">Price - ₱4.5M – ₱8.2M</h4>
							<p>Affordable investment with flexible options to match your budget.</p>
						</div>
					</div>
				</div>
			</div>

			<GalleryGrid />
		</section>
	);
};

export default FeaturesProject;
