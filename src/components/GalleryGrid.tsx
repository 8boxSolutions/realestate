import image1 from '@/assets/homepage/featuresImage1.jpg';
import image2 from '@/assets/homepage/featuresImage2.jpg';
import image3 from '@/assets/homepage/featuresImage3.jpg';
import circle1 from '@/assets/homepage/circle-1.svg';
import circle2 from '@/assets/homepage/circle-2.svg';

const GalleryGrid = () => {
	return (
		<div className="relative hidden lg:block">
			<div className="absolute -top-5 -left-20 flex w-full justify-center">
				<img src={circle1} alt="" className="size-50" />
			</div>
			<div className="relative z-10 mt-10 flex gap-10">
				<img src={image1} alt="image-1" className="mt-10 h-120 w-70 rounded-4xl object-cover" />
				<div className="flex flex-col gap-5">
					<img src={image2} alt="image-2" className="w-120 rounded-4xl object-cover" />
					<img src={image3} alt="image-3" className="w-120 rounded-4xl object-cover" />
					<div className="-mt-14 mr-4 flex justify-end">
						<img src={circle2} alt="icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalleryGrid;
