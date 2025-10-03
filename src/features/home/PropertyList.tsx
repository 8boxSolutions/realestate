import { useState } from 'react';
import { properties } from '@/constants/property';
import { Button } from '@/components/ui/button';

const PropertyList = () => {
	const [active, setActive] = useState<string>('All');
	const [fade, setFade] = useState<boolean>(true);

	const button = [
		{ key: 'All', label: 'All' },
		{ key: 'For Sale', label: 'For Sale' },
		{ key: 'For Rent', label: 'For Rent' },
	];

	const filteredProperties = active === 'All' ? properties : properties.filter((item) => item.type === active);

	const handleClick = (key: string) => {
		setFade(false);
		setTimeout(() => {
			setActive(key);
			setFade(true);
		}, 300);
	};

	return (
		<section className="mt-10 flex flex-col space-y-8 p-4 sm:p-15">
			<div className="flex flex-wrap justify-center gap-2 sm:gap-10">
				{button.map((btn) => (
					<Button
						key={btn.key}
						onClick={() => handleClick(btn.key)}
						className={`sm:text-md rounded-full px-4 py-2 text-sm sm:px-8 sm:py-3 ${
							active === btn.key ? 'bg-primary text-white' : ''
						}`}
					>
						{btn.label}
					</Button>
				))}
			</div>

			<div
				className={`sm:min-h-2xl min-h-[500px] rounded-2xl bg-white px-4 py-5 text-black shadow-2xl transition-opacity duration-500 sm:px-10 sm:py-5 ${
					fade ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<h1 className="mb-2 text-[1rem] font-semibold sm:text-[1.2rem] lg:text-3xl">
					POPULAR PROPERTIES IN THE PHILIPPINES
				</h1>
				<span className="text-sm sm:text-base">Leo morbi faucibus mattis pharetra tellus velit</span>

				<div className="mt-5 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
					{filteredProperties.map((item) => (
						<div
							key={item.id}
							className="grid grid-cols-1 rounded-3xl from-primary to-[#FFFBFB] py-2 hover:bg-gradient-to-r hover:from-primary hover:to-[#FFFBFB] hover:drop-shadow-lg hover:drop-shadow-primary sm:grid-cols-2"
						>
							<img src={item.image} alt={item.title} className="h-48 w-full rounded-3xl object-cover sm:h-48 lg:h-56" />
							<div className="p-3 sm:p-5">
								<h3 className="text-[1rem] font-semibold sm:text-[1.1rem] lg:text-lg">{item.title}</h3>
								<p className="text-sm sm:text-base">{item.place}</p>
								<p className="text-sm font-bold sm:text-base">{item.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PropertyList;
