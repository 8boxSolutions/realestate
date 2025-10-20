import PropertyGrid from '@/components/PropertyGrid';

const FavoriteSection = () => {
	return (
		<div className="px-4 pt-10 pb-15 sm:px-8 lg:px-20">
			{/* Header Section */}
			<div className="flex flex-col items-center space-y-5 text-center">
				<h1 className="text-5xl font-semibold text-primary">Favorite</h1>
				<p className="max-w-xl text-sm text-black sm:text-base">
					Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
				</p>
			</div>
			<PropertyGrid />
		</div>
	);
};

export default FavoriteSection;
