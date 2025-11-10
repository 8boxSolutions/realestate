import { FaHouseChimney, FaHotel } from 'react-icons/fa6';
import { MdApartment } from 'react-icons/md';
import { IoStorefrontSharp } from 'react-icons/io5';
import { LuLandPlot } from 'react-icons/lu';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { MdRealEstateAgent } from 'react-icons/md';
import { GiModernCity } from 'react-icons/gi';
import { IconType } from 'react-icons';

interface PropertyType {
	id: number;
	label: string;
	text: string;
	icon: IconType; // Type is ReactElement (not IconType)
}

interface propertyUpload {
	label: string;
	text?: string;
}

export const property: PropertyType[] = [
	{
		id: 1,
		label: 'House & Lot',
		text: 'A standalone residential home with its own land and space.',
		icon: FaHouseChimney,
	},
	{
		id: 2,
		label: 'Condominium',
		text: 'A private residential unit within a condominium building.',
		icon: FaHotel,
	},
	{
		id: 3,
		label: 'Apartment',
		text: 'A rental unit located in a multi-family or apartment building.',
		icon: MdApartment,
	},

	{
		id: 4,
		label: 'Townhouse',
		text: 'A multi-level residential property sharing walls with neighboring units.',
		icon: GiModernCity,
	},

	{
		id: 5,
		label: 'Commercial',
		text: 'Property intended for shops, offices, or other business use.',
		icon: IoStorefrontSharp,
	},

	{
		id: 6,
		label: 'Lot / Land',
		text: 'Vacant land available for sale, lease, or development.',
		icon: LuLandPlot,
	},
	{
		id: 7,
		label: 'Industrial ',
		text: 'Facilities such as warehouses, factories, or industrial sites.',
		icon: BsFillBuildingsFill,
	},
	{
		id: 8,
		label: 'Others  ',
		text: 'Select this option if your property type does not fall under any of the listed categories.',
		icon: MdRealEstateAgent,
	},
];

export const uploadProperty: propertyUpload[] = [
	{
		label: 'Exterior and frontage',
		text: ' (house/building façade, lot view)',
	},
	{
		label: 'Living and common areas ',
		text: ' (living room, dining area, open spaces)',
	},
	{
		label: 'Bedrooms and bathrooms/Amenities',
	},
	{
		label: 'Special features',
		text: '(BBQ area, pool, garage)',
	},
];

export const propertyTips: propertyUpload[] = [
	{
		label: 'Use natural light for brighter, more inviting photos',
	},
	{
		label: 'Capture wide angles to show full spaces',
	},
	{
		label: 'Highlight unique features or renovations',
	},
	{
		label: 'Keep spaces clean and uncluttered',
	},
];
