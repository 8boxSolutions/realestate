import bg from '@/assets/guidelines/img-bg.jpg';
import GuidelinesAndImages from './GuidelinesAndImages';
import PropertyList from '@/features/home/PropertyList';
import PropertyPolicy from './PropertyPolicy';
const PropertyGuidelines = () => {
	return (
		<div className="px-10 py-10">
			<div
				className="relative flex min-h-96 items-center justify-center rounded-2xl"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<div className="relative z-10 space-y-3 px-4 text-center text-white">
					{' '}
					<h1 className="text-center text-3xl text-white sm:text-5xl lg:text-7xl">Real Estate Property Guidelines</h1>
					<p className="sm:text-[1rem] lg:text-xl">
						Explore properties that match your lifestyle—modern, affordable, and built for you. Find the perfect place
						to start your next chapter.
					</p>
				</div>

				{/* BACKGROUND-COLOR */}
				<div className="absolute inset-0 rounded-2xl bg-[#39000073]/45"></div>
			</div>
			<GuidelinesAndImages />
			<PropertyPolicy />
			<PropertyList />
		</div>
	);
};

export default PropertyGuidelines;
