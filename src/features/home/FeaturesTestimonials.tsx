import qouteDown from '@/assets/homepage/testimonials/quote-down.svg';
import qouteUp from '@/assets/homepage/testimonials/quote-up.svg';
import { testimonials } from '@/constants/testimonialsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const FeaturesTestimonials = () => {
	const chunkedTestimonials = [];
	for (let i = 0; i < testimonials.length; i += 3) {
		chunkedTestimonials.push(testimonials.slice(i, i + 3));
	}

	return (
		<section className="w-auto bg-[#F6F6F6] p-20">
			<div className="pl-20">
				<img src={qouteUp} alt="" />
			</div>

			<div className="flex flex-col items-center space-y-5">
				<p className="text-2xl text-primary">Our Testimonials</p>
				<h1 className="text-5xl font-semibold text-black">What Our Clients Says</h1>
			</div>

			<Swiper
				modules={[Pagination, Autoplay, EffectFade]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				pagination={{ clickable: true, el: '.testimonials-pagination' }}
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				loop={true}
				slidesPerView={1}
				className="mt-15"
			>
				{chunkedTestimonials.map((group, groupIndex) => (
					<SwiperSlide key={groupIndex}>
						<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
							{group.map((item, index) => {
								const absoluteIndex = groupIndex * 3 + index;
								const bgColor = absoluteIndex % 2 === 1;

								return (
									<div key={index} className="mx-auto flex max-w-md flex-col space-y-5">
										<div className={`relative rounded-lg p-5 ${bgColor ? 'bg-primary text-white' : 'bg-white'}`}>
											<p>{item.testimonial}</p>

											<div
												className={`absolute -bottom-3 left-6 h-0 w-0 border-t-[12px] border-r-[10px] border-l-[10px] ${
													bgColor ? 'border-t-primary' : 'border-t-white'
												} border-r-transparent border-l-transparent`}
											></div>
										</div>

										<div className="flex items-center gap-5">
											<img src={item.image} alt={item.name} className="h-15 w-15 rounded-full object-cover" />
											<div className="flex flex-col">
												<span>{item.name}</span>
												<span>{item.position}</span>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="testimonials-pagination mt-10 flex justify-center"></div>
			<div className="mt-10 flex justify-end">
				<img src={qouteDown} alt="" />
			</div>
		</section>
	);
};

export default FeaturesTestimonials;
