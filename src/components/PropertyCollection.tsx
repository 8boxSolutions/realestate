import React from 'react';
import type { Property } from '@/constants/property';

interface propertyProps {
	data: Property[];
	title: string;
	text: string;
	fade?: boolean;
}

const PropertyCollection: React.FC<propertyProps> = ({ data, title, fade = true, text }) => {
	return (
		<div
			className={`sm:min-h-2xl min-h-[500px] rounded-2xl bg-white px-4 py-5 text-black shadow-2xl transition-opacity duration-500 sm:px-10 sm:py-5 ${
				fade ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<h1 className="mb-2 text-[1rem] font-semibold sm:text-[1.2rem] lg:text-3xl">{title}</h1>
			<span className="text-sm sm:text-base">{text}</span>

			<div className="mt-5 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
				{data.map((item) => (
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
	);
};

export default PropertyCollection;
