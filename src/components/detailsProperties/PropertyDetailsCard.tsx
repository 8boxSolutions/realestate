import { useNavigate } from 'react-router-dom';

import type { Details } from '@/constants/propertyDetails';
import { MdKeyboardArrowLeft } from 'react-icons/md';

// COMPONENT UI
import GalleryPropertyDetails from './GalleryPropertyDetails';
import ContactAgent from './ContactAgent';
import DescriptionDetails from './DescriptionDetails';
import AmenitiesSection from './AmenitiesSection';
import AvailableUnit from './AvailableUnit';
import Location from './Location';
import Faq from './Faq';

type AmenityIcons = {
	totalArea?: string;
	bedRooms?: string;
	bathrooms?: string;
	floor?: string;
	constructionYear?: string;
	elevator?: string;
	parking?: string;
	wifi?: string;
	TV?: string;
};

type props = {
	dataDetails?: Details;
	breadCrumb: string;
	icons?: AmenityIcons;
	showAvailable?: boolean;
	type?: string;
};
const PropertiesDetailsCard: React.FC<props> = ({ dataDetails, breadCrumb, icons, showAvailable, type }) => {
	const navigate = useNavigate();
	return (
		<section className="w-full p-10">
			<div className="flex cursor-pointer items-center justify-end hover:text-primary">
				<MdKeyboardArrowLeft size={30} onClick={() => navigate(-1)} />
				<span className="text-xl underline underline-offset-1">Back</span>
			</div>

			<h1 className="text-3xl font-medium text-primary">
				{breadCrumb}
				{dataDetails?.place}
			</h1>

			<div className="flex justify-between pt-5">
				<div className="space-y-2">
					<h2 className="text-5xl font-bold">{dataDetails?.title}</h2>
					<span className="text-xl">{dataDetails?.location}</span>
				</div>
				<div className="flex flex-col items-end space-y-2">
					<span className="text-5xl font-bold">₱{dataDetails?.price.toLocaleString()}</span>
					<span className="text-xl">{dataDetails?.sqt.toLocaleString()}/sq.ft</span>
				</div>
			</div>
			<GalleryPropertyDetails gallery={dataDetails} />

			<div className="flex flex-col gap-10 pt-20 md:flex-row">
				<div className="space-y-10">
					<DescriptionDetails desc={dataDetails} />
					<AmenitiesSection amenitiesIcons={icons} dataDetails={dataDetails} type={type} />
				</div>
				<ContactAgent />
			</div>
			{showAvailable && <AvailableUnit />}

			<Location />
			<Faq />
		</section>
	);
};

export default PropertiesDetailsCard;
