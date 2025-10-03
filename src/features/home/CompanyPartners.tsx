import React, { useRef } from 'react';
import img1 from '@/assets/homepage/partner/img1.png';
import img2 from '@/assets/homepage/partner/img2.png';
import img3 from '@/assets/homepage/partner/img3.png';
import img4 from '@/assets/homepage/partner/img4.png';
import { Button } from '@/components';
import { MoveLeft, MoveRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const CompanyPartners = () => {
	const partnersCompany = [{ image: img1 }, { image: img2 }, { image: img3 }, { image: img4 }];

	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	return (
		<section className="bg-[#F5F5F5] p-10">
			<h1 className="pb-10 text-center text-2xl font-medium text-primary">OUR PARTNERS</h1>

			<div className="mr-10 flex justify-end gap-6">
				<Button
					ref={prevRef}
					className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-xl"
				>
					<MoveLeft className="size-5" />
				</Button>
				<Button
					ref={nextRef}
					className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-xl"
				>
					<MoveRight className="size-5" />
				</Button>
			</div>

			<div className="mt-10">
				<Swiper
					modules={[Navigation, EffectCoverflow]}
					spaceBetween={50}
					slidesPerView={3}
					centeredSlides={true}
					loop={false}
					effect="coverflow"
					speed={800}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 150,
						modifier: 1,
						slideShadows: false,
					}}
					onInit={(swiper) => {
						// @ts-ignore
						swiper.params.navigation.prevEl = prevRef.current;
						// @ts-ignore
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{partnersCompany.map((item, index) => (
						<SwiperSlide key={index}>
							<div className="flex items-center justify-center">
								<div className="relative transition-all duration-500 ease-in-out">
									<img src={item.image} alt="" className="size-30 rounded-lg object-cover sm:size-76" />
									<div className="absolute inset-0 rounded-lg bg-linear-to-t from-[#F7000080]/50 to-white/10"></div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default CompanyPartners;
