import React from 'react';
import type { Details } from '@/constants/propertyDetails';
import { CiCamera, CiHeart } from 'react-icons/ci';

type Props = {
	gallery?: Details;
};

const GalleryPropertyDetails: React.FC<Props> = ({ gallery }) => {
	console.log(gallery?.image);
	return (
		<div className="grid grid-cols-3 gap-2 pt-5">
			<div className="relative col-span-2 row-span-2">
				<img src={gallery?.image[0]} alt="Main" className="h-full w-full rounded-lg object-cover" />
				<CiHeart className="absolute top-5 left-10 text-4xl text-primary" />
			</div>

			{gallery?.image.slice(1, 4).map((item, index) => (
				<div key={index} className="relative overflow-hidden rounded-lg">
					<img
						src={item}
						alt={`Thumbnail ${index + 1}`}
						className={`h-full w-full object-cover ${index === 1 ? 'filter blur-sm brightness-75' : ''}`}
					/>

					{index === 1 && (
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center text-white">
							<CiCamera className="text-4xl" />
							<span className="text-2xl font-bold">Show all</span>
							<span className="text-md opacity-90">{gallery?.image.length} photos</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default GalleryPropertyDetails;
