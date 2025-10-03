import { properties } from '@/constants/neighborData';

const NeighborhoodGuides = () => {
	return (
		<section className="my-15 flex flex-col space-y-10">
			{/* Header */}
			<div className="flex flex-col space-y-3 text-center text-black">
				<h1 className="text-4xl md:text-5xl">Neighborhood guides</h1>
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
						className={`group relative overflow-hidden rounded-xl ${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''} ${index === 1 ? 'lg:col-span-1 lg:row-span-1' : ''} ${index === 2 ? 'lg:col-span-1 lg:row-span-2' : ''} ${index === 3 ? 'lg:col-span-1 lg:row-span-1' : ''} ${index === 4 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
					>
						<img src={item.image} alt={item.title} className="z-0 h-full w-full object-cover" />

						<div className="absolute inset-0 z-10 bg-primary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

						<div className="absolute bottom-4 left-4 z-20 text-white transition-all duration-300 group-hover:inset-0 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-center">
							<h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-2xl">{item.title}</h3>

							<h3 className="text-lg font-normal transition-all duration-300 group-hover:text-2xl">{item.count}</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default NeighborhoodGuides;
