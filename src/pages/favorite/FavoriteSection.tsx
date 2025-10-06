import bed from '@/assets/favorites/bedrooms.svg';
import bath from '@/assets/favorites/shower.svg';
import area from '@/assets/favorites/area.svg';
import garages from '@/assets/favorites/garages.svg';
import PaginationFavorite from '../../components/PaginationProperty';
import { IoEyeSharp } from 'react-icons/io5';
import { IoIosCall } from 'react-icons/io';
import { useState } from 'react';
import { favorities } from '@/constants/favoriteData';
import { Button } from '@/components';
import { GoHeartFill } from 'react-icons/go';
import { Separator } from '@/components';

const FavoriteSection = () => {
	const [active, setActive] = useState<string>('For Rent');
	const button = [
		{
			key: 'For Sale',
			label: 'For Sale',
		},
		{
			key: 'For Rent',
			label: 'For Rent',
		},
	];

	const filteredFavorite = favorities.filter((item) => item.type === active);
	return (
		<div className="px-4 pt-10 pb-15 sm:px-8 lg:px-20">
			{/* Header Section */}
			<div className="flex flex-col items-center space-y-5 text-center">
				<h1 className="text-5xl font-semibold text-primary">Favorite</h1>
				<p className="max-w-xl text-sm text-black sm:text-base">
					Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
				</p>
			</div>

			{/* Buttons */}
			<div className="mt-10 flex flex-wrap gap-4 sm:gap-7">
				{button.map((btn) => (
					<Button
						key={btn.key}
						variant={active === btn.key ? 'default' : 'outline'}
						onClick={() => setActive(btn.key)}
						className="rounded-full px-6 py-3 text-sm sm:px-9 sm:py-6 sm:text-base"
					>
						(7) {btn.label}
					</Button>
				))}
			</div>

			{/* Cards Section */}
			<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
				{filteredFavorite.map((item) => (
					<div key={item.id} className="flex flex-col">
						<div className="relative">
							<img
								src={item.image}
								alt={item.title}
								className="h-56 w-full rounded-t-2xl object-cover sm:h-72 lg:h-80"
							/>
							<div className="absolute top-4 right-0 left-0 flex justify-between px-4 sm:top-6 sm:px-5">
								<Button className="bg-[#2B2B2B] px-5 py-3 text-xs sm:px-7 sm:py-5 sm:text-lg">{item.type}</Button>
								<Button className="w-8 rounded-full bg-white sm:w-9">
									<GoHeartFill className="size-4 text-primary sm:size-5" />
								</Button>
							</div>
						</div>

						<div className="h-auto rounded-b-2xl bg-white p-4 shadow-2xl sm:p-5">
							<div className="mb-2 flex flex-col space-y-1 text-black">
								<h2 className="text-lg font-bold sm:text-2xl">{item.title}</h2>
								<p className="text-sm text-[#7A7474] sm:text-base">{item.location}</p>
								<h3 className="text-base font-bold sm:text-lg">₱{item.price.toLocaleString()}</h3>
							</div>

							<Separator />

							<ul className="mt-3 flex flex-wrap gap-6 xl:gap-15">
								<li className="flex flex-col">
									<span className="flex items-center gap-2">
										<img src={bed} alt="bed" className="size-4 sm:size-5" />
										{item.beds}
									</span>
									Bedrooms
								</li>

								<li className="flex flex-col">
									<span className="flex items-center gap-2">
										<img src={bath} alt="bath" className="size-4 sm:size-5" />
										{item.bath}
									</span>
									Bathrooms
								</li>

								<li className="flex flex-col">
									<span className="flex items-center gap-2">
										<img src={area} alt="area" className="size-4 sm:size-5" />
										{item.area}
									</span>
									Total area
								</li>

								<li className="flex flex-col">
									<span className="flex items-center gap-2">
										<img src={garages} alt="garages" className="size-4 sm:size-5" />
										{item.garages}
									</span>
									Garages
								</li>
							</ul>

							<div className="mt-5 mb-2 flex flex-col justify-between gap-3 sm:flex-row sm:gap-0">
								<Button
									variant="outline"
									className="sm:text-md flex items-center justify-center gap-2 text-sm text-primary"
								>
									<IoEyeSharp className="size-5 sm:size-6" />
									Unit Details
								</Button>
								<Button className="sm:text-md flex items-center justify-center gap-2 text-sm">
									<IoIosCall className="size-5 sm:size-6" />
									Contact
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-15 flex w-full justify-center">
				<PaginationFavorite />
			</div>
		</div>
	);
};

export default FavoriteSection;
