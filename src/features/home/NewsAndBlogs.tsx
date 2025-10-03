import { properties } from '@/constants/newsandblogsData';
import { FaUser, FaTag, FaArrowRight } from 'react-icons/fa';
import { CiCalendar } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const NewsAndBlogs = () => {
	return (
		<section className="flex flex-col space-y-5 p-5 text-black md:p-5">
			<p className="text-center text-xl text-primary md:text-2xl lg:text-3xl">NEWS AND BLOGS</p>
			<h1 className="text-center text-2xl font-semibold md:text-4xl lg:text-5xl">Property News & Insights</h1>

			<div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
				{properties.map((item, index) => (
					<div key={index} className="flex h-full flex-col">
						<div className="flex items-center">
							<img src={item.image} alt="" className="h-48 w-full rounded-t-lg object-cover md:h-56 lg:h-64" />
						</div>

						<div className="flex h-full w-full flex-col justify-between rounded-b-lg bg-white shadow-lg md:shadow-xl">
							<div className="flex justify-between p-4 md:flex-row md:p-6">
								<div className="mb-2 flex items-center gap-2 md:mb-0 md:gap-3">
									<FaUser className="text-primary" size={16} />
									<span className="text-xs text-[#7C8893] md:text-sm">{item.name}</span>
								</div>
								<div className="flex items-center gap-2 md:gap-3">
									<FaTag className="text-primary" size={16} />
									<span className="text-xs text-[#7C8893] md:text-sm">{item.tag}</span>
								</div>
							</div>

							<h2 className="mb-4 flex-grow px-4 text-center text-lg md:text-xl lg:text-2xl">{item.title}</h2>

							<Separator />

							<div className="mt-auto flex flex-col items-center justify-between gap-3 p-4 md:flex-row md:p-6">
								<div className="flex items-center gap-2 md:gap-3">
									<CiCalendar className="text-primary" size={16} />
									<span className="text-xs text-[#7C8893] md:text-sm">{item.date}</span>
								</div>
								<Button className="w-full rounded-full bg-[#2B2B2B] px-4 py-2 text-xs md:w-auto md:px-6 md:py-3 md:text-sm">
									Read More
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center pt-15">
				<Button variant="outline" className="w-60 rounded-full py-8 text-lg text-primary">
					View all <FaArrowRight />
				</Button>
			</div>
		</section>
	);
};

export default NewsAndBlogs;
