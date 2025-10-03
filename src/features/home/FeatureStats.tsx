import imageDream from '@/assets/homepage/imageDream.jpg';
import { Button } from '@/components/ui/button';
import { properties } from '@/constants/statsData';

const FeatureStats = () => {
	return (
		<section className="grid grid-cols-1 gap-10 px-5 md:grid-cols-2 md:gap-20 md:px-0">
			<img src={imageDream} alt="image" className="h-auto w-full rounded-3xl object-cover" />

			<div className="flex flex-col space-y-5 text-black">
				<h1 className="mt-5 text-2xl text-primary sm:text-3xl md:mt-10 md:text-4xl">Your Dream property Awaits</h1>
				<p className="text-sm sm:text-base md:text-base">
					From stylish apartments to spacious family homes, we offer a wide range of properties designed to fit every
					lifestyle. With hundreds of successful sales and satisfied clients, we make it easier than ever to find the
					perfect place to call home.
				</p>

				<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-10 md:mt-10">
					<Button className="w-full rounded-full bg-[#2B2B2B] p-4 text-sm sm:w-auto sm:p-6 sm:text-base">
						Contact Us
					</Button>
					<a
						href=""
						className="flex items-center justify-center text-sm text-primary underline underline-offset-1 sm:justify-start sm:text-base"
					>
						Read More
					</a>
				</div>

				<div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4 md:mt-10 md:gap-10">
					{properties.map((property, index) => (
						<div key={index} className="flex flex-col items-center space-y-1 sm:space-y-2">
							<img src={property.icon} alt="" className="h-12 w-12 sm:h-16 sm:w-16" />
							<span className="text-lg font-bold sm:text-2xl">{property.number}</span>
							<span className="text-sm sm:text-base">{property.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeatureStats;
