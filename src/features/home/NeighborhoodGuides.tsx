import { properties } from '@/constants/neighborData';

const NeighborhoodGuides = () => {
	return (
		<section className="my-15 flex flex-col space-y-10">
			{/* Header */}
			<div className="flex flex-col space-y-3 text-center text-black">
				<h1 className="text-5xl">Neighborhood guides</h1>
				<p>
					Explore our neighborhood guides to find the perfect location that matches your needs, from vibrant city living
					to peaceful suburbs.
				</p>
			</div>

			{/* Grid */}
			<div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{properties.map((item, index) => (
					<div
						key={index}
						className={`relative overflow-hidden rounded-xl ${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''} ${index === 1 ? 'lg:col-span-1 lg:row-span-1' : ''} ${index === 2 ? 'lg:col-span-1 lg:row-span-2' : ''} ${index === 3 ? 'lg:col-span-1 lg:row-span-1' : ''} ${index === 4 ? 'lg:col-span-2 lg:row-span-1' : ''} `}
					>
						<img src={item.image} alt={item.title} className="h-full w-full object-cover" />
						<div className="absolute bottom-4 left-4 text-white">
							<h3 className="text-lg font-semibold">{item.title}</h3>
							<p className="text-sm">{item.count} properties</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default NeighborhoodGuides;
