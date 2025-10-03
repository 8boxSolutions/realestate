import background from '@/assets/homepage/heroSection.png';
import BookARent from '@/bookings/BookARent';
const HeroSection = () => {
	return (
		<>
			<div className="mb-20 flex w-full flex-col justify-center">
				<img
					src={background}
					alt="background"
					className="h-48 w-full rounded-4xl object-cover sm:h-64 md:h-96 lg:h-100 xl:h-150"
				/>
				<div className="mx-10 -mt-10">
					<BookARent />
				</div>
			</div>
		</>
	);
};

export default HeroSection;
