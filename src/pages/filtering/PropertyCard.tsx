import React from 'react';
import type { PropertyDetails } from '@/constants/housePropertyData';
import { Heart, Clock, MoveRight } from 'lucide-react';
import { FaBed, FaUser, FaCar, FaBath } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { Button } from '@/components';
import { FaLocationDot } from 'react-icons/fa6';
import { Separator } from '@/components/ui/separator';
import PaginationProperty from '@/components/PaginationProperty';

interface PropertyCardProps {
	title?: string;
	data: PropertyDetails[];
	noOfHouse: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, data, noOfHouse }) => {
	return (
		<section className="px-5 md:mt-20 md:px-20">
			<div className="flex flex-col items-center space-y-4 md:space-y-6">
				<h1 className="text-2xl font-medium text-primary md:text-3xl">{title}</h1>
				<h3 className="text-4xl font-semibold text-black md:text-5xl">{noOfHouse}</h3>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
				{data.map((item) => (
					<div key={item.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
						<div className="relative">
							<img src={item.image} alt={item.title} className="h-60 w-full object-cover md:h-72" />

							<div className="absolute top-5 right-5 left-5 flex justify-between">
								<Button className="text-sm font-semibold italic md:text-lg">₱ {item.price.toLocaleString()}</Button>
								<span>
									<Heart className="text-primary" />
								</span>
							</div>
						</div>

						<div className="flex flex-col justify-between px-6 py-5">
							<div className="flex flex-col items-center space-y-1 pb-4 text-center">
								<h1 className="text-2xl font-medium text-black md:text-3xl">{item.title}</h1>
								<p className="flex items-center justify-center gap-2 text-sm text-primary md:text-base">
									<FaLocationDot size={15} />
									{item.location}
								</p>
							</div>

							<Separator />

							<ul className="grid grid-cols-2 gap-y-3 py-6 text-sm md:text-base">
								<li className="flex items-center gap-2 text-[#7C8893]">
									<BsFillGridFill className="text-primary" size={18} />
									{item.squareFeet.toLocaleString()} Sq Ft
								</li>

								<li className="flex items-center justify-end gap-2 text-[#7C8893]">
									<FaBed className="text-primary" size={18} />
									{item.bed} Bedrooms
								</li>

								<li className="flex items-center gap-2 text-[#7C8893]">
									<FaCar className="text-primary" size={18} />
									{item.garages} Garages
								</li>

								<li className="flex items-center justify-end gap-2 text-[#7C8893]">
									<FaBath className="text-primary" size={18} />
									{item.bath} Bathrooms
								</li>
							</ul>

							<Separator />

							<div className="flex items-center justify-between pt-5 text-sm text-[#7C8893] md:text-base">
								<span className="flex items-center gap-2">
									<FaUser className="text-primary" />
									{item.user}
								</span>
								<span className="flex items-center gap-2">
									<Clock className="text-primary" />
									{item.time}
								</span>
							</div>
						</div>

						<button className="flex w-full items-center justify-center gap-2 bg-[#2B2B2B] py-4 text-lg text-white transition hover:bg-primary md:py-5">
							View <MoveRight />
						</button>
					</div>
				))}
			</div>
			<div className="pt-15">
				<PaginationProperty />
			</div>
		</section>
	);
};

export default PropertyCard;
