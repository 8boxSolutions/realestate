import FeatureStats from '@/features/home/FeatureStats';
import NewsAndBlogs from '@/features/home/NewsAndBlogs';
import LatestPropeties from '@/features/home/LatestPropeties';
import { propertiesJournal } from '@/constants/property';
import PropertyCollection from '@/components/PropertyCollection';

const Journal = () => {
	return (
		<section className="px-20 py-12">
			<h1 className="text-3xl font-normal text-primary">TREADING NOW</h1>

			<div className="flex flex-col space-y-2 pt-10">
				<h2>LATEST NEWS!</h2>
				<p className="max-w-3xl text-[#808080]">
					Discover a vibrant community of modern homes designed for comfort, convenience, and style. Perfectly located
					near schools, shopping centers, and parks, this development blends urban living with a serene atmosphere.
				</p>
			</div>

			<div className="mt-10 flex flex-col gap-25">
				<FeatureStats />
				<PropertyCollection
					data={propertiesJournal}
					text="Leo morbi faucibus mattis pharetra tellus velit "
					title="Real Estate News"
				/>
				<LatestPropeties />
				<NewsAndBlogs />
			</div>
		</section>
	);
};

export default Journal;
