import HeroSection from '@/features/home/HeroSection';
import FeaturesProject from '@/features/home/FeaturesProject';
import FeatureStats from '@/features/home/FeatureStats';
import NeighborhoodGuides from '@/features/home/NeighborhoodGuides';
import NewsAndBlogs from '@/features/home/NewsAndBlogs';
import PropertyList from '@/features/home/PropertyList';
import LatestPropeties from '@/features/home/LatestPropeties';
import FeaturesTestimonials from '@/features/home/FeaturesTestimonials';
const Home = () => {
	return (
		<div className="p-20">
			<HeroSection />
			<FeaturesProject />
			<LatestPropeties />
			<NeighborhoodGuides />
			<NewsAndBlogs />
			<FeaturesTestimonials />
			<FeatureStats />
			<PropertyList />
		</div>
	);
};

export default Home;
