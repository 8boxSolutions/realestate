import imageDream from '@/assets/homepage/imageDream.jpg';
import { Button } from '@/components/ui/button';
import { properties } from '@/constants/statsData';

const FeatureStats = () => {
	return (
		<section className="grid grid-cols-2 gap-20">
			<img src={imageDream} alt="image" className="size-full rounded-3xl" />
			<div className="flex flex-col space-y-5 text-black">
				<h1 className="mt-10 text-4xl text-primary">Your Dream property Awaits</h1>
				<p>
					From stylish apartments to spacious family homes, we offer a wide range of properties designed to fit every
					lifestyle. With hundreds of successful sales and satisfied clients, we make it easier than ever to find the
					perfect place to call home.
				</p>
				<div className="mt-10 flex gap-10">
					<Button className="rounded-full bg-[#2B2B2B] p-6">Contact Us</Button>
					<a href="" className="flex items-center text-primary underline underline-offset-1">
						Read More
					</a>
				</div>

				<div className="mt-10 grid grid-cols-4">
					{properties.map((property, index) => (
						<div key={index} className="flex flex-col items-center space-y-2">
							<img src={property.icon} alt="" className="size-25" />
							<span className="text-2xl font-bold">{property.number}</span>
							<span>{property.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeatureStats;
