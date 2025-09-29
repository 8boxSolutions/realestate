import background from '@/assets/homepage/heroSection.png';
import BookARent from '@/bookings/BookARent';
const HeroSection = () => {
	return (
		<>
			<div className="flex w-full flex-col justify-center p-10">
				<img src={background} alt="background" className="min-h-0 w-full rounded-4xl object-cover" />
				<div className="w-full -translate-y-10 sm:mx-auto sm:max-w-7xl sm:-translate-y-12">
					<BookARent />
				</div>
			</div>
		</>
	);
};

export default HeroSection;
