import clsx from 'clsx';
import { properties } from '@/constants/latestPropertiesData';
import { Bath, Bed } from 'lucide-react';
import Dollar from '@/assets/homepage/latestproperties/Dollar.svg';
import Flame from '@/assets/homepage/latestproperties/Flame.svg';
import House from '@/assets/homepage/latestproperties/House.svg';
import Marquee from 'react-fast-marquee';

const LatestPropeties = () => {
	return (
		<section className="mt-16">
			<h1 className="text-2xl font-normal text-primary">FEATURED PROPERTIES</h1>

			<div className="mt-9 flex flex-col space-y-2 text-black">
				<h2>Latest Listed Properties</h2>
				<p>Explore top properties chosen for their quality, comfort, and investment potential.</p>
			</div>
			<Marquee pauseOnHover={true} speed={150} gradient={false} className="mt-10">
				<div className="flex gap-10 pr-10 md:pr-10">
					{properties.map((item) => (
						<div key={item.id} className="flex flex-shrink-0 flex-col space-y-2">
							<div className="relative">
								<img src={item.image} alt={item.title} className="h-50 w-70 rounded-3xl object-cover md:size-100" />
								<div
									className={clsx('absolute bottom-5 m-2 w-auto rounded-full px-5 py-2', {
										'bg-[#D7EEFF] text-[#119BFF]': item.status === 'New Listing',
										'bg-[#F1FFF1] text-[#00CE3A]': item.status === 'Discounted Price',
										'bg-[#FFE1E1] text-[#FF1111]': item.status === 'Popular',
									})}
								>
									<div className="flex justify-center gap-5">
										{item.status === 'New Listing' && <img src={House} alt="HouseIcon" />}
										{item.status === 'Discounted Price' && <img src={Dollar} alt="DollarIcon" />}
										{item.status === 'Popular' && <img src={Flame} alt="FlameIcon" />}
										<span className="flex items-center">{item.status}</span>
									</div>
								</div>
							</div>

							{/* Details */}
							<h1 className="mt-5 text-3xl text-black">PHP {item.price.toLocaleString()}</h1>
							<p className="text-lg font-medium">{item.title}</p>
							<p>{item.location}</p>
							<div className="flex gap-20">
								<div className="flex">
									<Bed />
									<span className="flex">4 beds</span>
								</div>

								<div className="flex gap-2">
									<Bath />
									<span>{item.bath} Baths</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</Marquee>
		</section>
	);
};

export default LatestPropeties;
