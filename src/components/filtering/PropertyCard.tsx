import React from 'react';
import type { PropertyDetails } from '@/constants/housePropertyData';
import { Heart, Clock, MoveRight } from 'lucide-react';
import { FaUser } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { Button } from '@/components';
import { Separator } from '@/components/ui/separator';
import PaginationProperty from '@/components/PaginationProperty';

interface PropertyCardProps {
	title?: string;
	data: PropertyDetails[];
	noOfHouse: string;
	icon?: {
		bed?: React.ReactNode;
		bath?: React.ReactNode;
		unit?: React.ReactNode;
		garage?: React.ReactNode;
	};
	showDetails?: boolean;
	type?: 'commercial';
}

const PropertyCard: React.FC<PropertyCardProps> = ({
	title,
	data,
	noOfHouse,
	icon,
	showDetails = true,
	type = 'commercial',
}) => {
	return (
		<section className="mt-20 px-5 md:px-20">
			<div className="flex flex-col items-center space-y-4 md:space-y-6">
				<h1 className="text-2xl font-medium text-primary md:text-3xl">{title}</h1>
				<h3 className="text-center text-4xl font-semibold text-black md:text-5xl">{noOfHouse}</h3>
			</div>

			<div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
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

								{type === 'commercial' && (
									<li className="flex items-center justify-end gap-2 text-[#7C8893]">
										{icon?.unit}
										{item.unit} Units
									</li>
								)}

								{showDetails && (
									<>
										<li className="flex items-center justify-end gap-2 text-[#7C8893]">
											{icon?.bed}
											{item.bed} Bedrooms
										</li>

										<li className="flex items-center gap-2 text-[#7C8893]">
											{icon?.garage}
											{item.garages} Garages
										</li>

										<li className="flex items-center justify-end gap-2 text-[#7C8893]">
											{item.unit !== undefined ? (
												<>
													{icon?.unit}
													{item.unit} Units
												</>
											) : (
												<>
													{icon?.bed}
													{item.bath} Bathrooms
												</>
											)}
										</li>
									</>
								)}
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
