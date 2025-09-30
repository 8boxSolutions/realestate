import HeroSection from '@/features/home/HeroSection';
import FeaturesProject from '@/features/home/FeaturesProject';
import FeatureStats from '@/features/home/FeatureStats';
import NeighborhoodGuides from '@/features/home/NeighborhoodGuides';

const Home = () => {
	return (
		<div className="p-10">
			<HeroSection />
			<FeaturesProject />
			<NeighborhoodGuides />
			<FeatureStats />
		</div>
	);
};

export default Home;
