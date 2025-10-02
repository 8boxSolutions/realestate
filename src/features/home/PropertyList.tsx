import { useState } from 'react';
import { properties } from '@/constants/property';
import { Button } from '@/components/ui/button';

const PropertyList = () => {
	const [active, setActive] = useState<string>('All');

	const button = [
		{ key: 'all', label: 'All' },
		{ key: 'for sale', label: 'For Sale' },
		{ key: 'for rent', label: 'For Rent' },
	];

	return (
		<section className="mt-10 flex flex-col space-y-10 p-15">
			<div className="flex flex-row justify-center gap-3 sm:gap-10">
				{button.map((btn) => (
					<Button
						key={btn.key}
						onClick={() => setActive(btn.key)}
						className={`text-md rounded-full p-8 ${active === btn.key ? 'bg-primary text-white' : ''}`}
					>
						{btn.label}
					</Button>
				))}
			</div>

			<div className="min-h-2xl rounded-2xl bg-white px-10 py-5 text-black shadow-2xl">
				<h1 className="mb-2 text-[1.2rem] font-semibold lg:text-3xl">POPULAR PROPERTIES IN THE PHILIPPINES</h1>
				<span>Leo morbi faucibus mattis pharetra tellus velit</span>

				<div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{active === 'all' &&
						properties.map((item) => (
							<div
								key={item.id}
								className="grid grid-cols-1 rounded-3xl from-primary to-[#FFFBFB] py-2 hover:bg-gradient-to-r hover:from-primary hover:to-[#FFFBFB] hover:drop-shadow-lg hover:drop-shadow-primary lg:grid-cols-2"
							>
								<img src={item.image} alt={item.title} className="h-35 rounded-3xl object-cover sm:h-48" />
								<div className="p-5">
									<h3 className="text-[1.1rem] lg:text-lg">{item.title}</h3>
									<p>{item.place}</p>
									<p className="text-sm font-bold">{item.price}</p>
								</div>
							</div>
						))}

					{active === 'for sale' &&
						properties.map((item) => (
							<div
								key={item.id}
								className="grid grid-cols-1 rounded-3xl from-primary to-[#FFFBFB] py-2 hover:bg-gradient-to-r hover:from-primary hover:to-[#FFFBFB] hover:drop-shadow-lg hover:drop-shadow-primary lg:grid-cols-2"
							>
								<img src={item.image} alt={item.title} className="h-35 rounded-3xl object-cover sm:h-48" />
								<div className="p-5">
									<h3 className="text-[1.1rem] lg:text-lg">{item.title}</h3>
									<p>{item.place}</p>
									<p className="text-sm font-bold">{item.price}</p>
								</div>
							</div>
						))}

					{active === 'for rent' &&
						properties.map((item) => (
							<div
								key={item.id}
								className="grid grid-cols-1 rounded-3xl from-primary to-[#FFFBFB] py-2 hover:bg-gradient-to-r hover:from-primary hover:to-[#FFFBFB] hover:drop-shadow-lg hover:drop-shadow-primary lg:grid-cols-2"
							>
								<img src={item.image} alt={item.title} className="h-35 rounded-3xl object-cover sm:h-48" />
								<div className="p-5">
									<h3 className="text-[1.1rem] lg:text-lg">{item.title}</h3>
									<p>{item.place}</p>
									<p className="text-sm font-bold">{item.price}</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default PropertyList;
