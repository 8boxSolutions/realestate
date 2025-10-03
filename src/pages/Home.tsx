import HeroSection from '@/features/home/HeroSection';
import FeaturesProject from '@/features/home/FeaturesProject';
import FeatureStats from '@/features/home/FeatureStats';
import NeighborhoodGuides from '@/features/home/NeighborhoodGuides';
import NewsAndBlogs from '@/features/home/NewsAndBlogs';
import PropertyList from '@/features/home/PropertyList';
import LatestPropeties from '@/features/home/LatestPropeties';
import FeaturesTestimonials from '@/features/home/FeaturesTestimonials';
import CompanyPartners from '@/features/home/CompanyPartners';
const Home = () => {
	return (
		<>
			<div className="p-10 md:p-20">
				<HeroSection />
				<FeaturesProject />
			</div>

			<CompanyPartners />

			<div className="p-20">
				<LatestPropeties />
				<NeighborhoodGuides />
				<NewsAndBlogs />
			</div>

			<FeaturesTestimonials />

			<div className="p-20">
				<FeatureStats />
				<PropertyList />
			</div>
		</>
	);
};

export default Home;
