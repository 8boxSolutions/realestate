import image1 from '@/assets/homepage/neighborhoodguides/imageNeigbor.jpg';
import image2 from '@/assets/homepage/neighborhoodguides/imageNeigbor-2.jpg';
import image3 from '@/assets/homepage/neighborhoodguides/imageNeigbor-3.jpg';
import image4 from '@/assets/homepage/neighborhoodguides/imageNeigbor-4.jpg';
import image5 from '@/assets/homepage/neighborhoodguides/imageNeigbor-5.jpg';

interface propertyCard {
	title: string;
	count: string;
	image: string;
}
export const properties: propertyCard[] = [
	{
		title: 'Manila',
		count: '28 propeties',
		image: image1,
	},
	{
		title: 'Nearby',
		count: '12 propeties',
		image: image2,
	},
	{
		title: 'Visaya',
		count: '215 propeties',
		image: image3,
	},
	{
		title: 'Luzon',
		count: '359 propeties',
		image: image4,
	},
	{
		title: 'Mindanao',
		count: '589 propeties',
		image: image5,
	},
];
