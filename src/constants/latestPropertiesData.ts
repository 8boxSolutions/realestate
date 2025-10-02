import img1 from '@/assets/homepage/latestproperties/img1.jpg';
import img2 from '@/assets/homepage/latestproperties/img2.jpg';
import img3 from '@/assets/homepage/latestproperties/img3.jpg';
import img4 from '@/assets/homepage/latestproperties/img4.jpg';

interface latestProperties {
	id: number;
	status?: 'New Listing' | 'Popular' | 'Discounted Price';
	price: number;
	title: string;
	location: string;
	bed: number;
	bath: number;
	image: string;
}

export const properties: latestProperties[] = [
	{
		id: 1,
		status: 'Popular',
		price: 500000,
		title: 'Tranquil Haven in the Woods',
		location: '103 Wright CourtBurien, WA 98168',
		bed: 4,
		bath: 3,
		image: img2,
	},
	{
		id: 2,
		status: 'New Listing',
		price: 500000,
		title: 'Serene Retreat by the Lake',
		location: '1964 Jehovah Drive, VA 22408',
		bed: 4,
		bath: 3,
		image: img2,
	},
	{
		id: 3,
		status: 'Discounted Price',
		price: 500000,
		title: 'Charming Cottage in the Meadow',
		location: '1508 Centennial Farm RoadHarlan, 51537',
		bed: 4,
		bath: 4,
		image: img3,
	},

	{
		id: 4,
		status: 'Popular',
		price: 500000,
		title: 'Grand Estate on the Hilltop',
		location: '103 Wright CourtBurien, WA 98168',
		bed: 4,
		bath: 3,
		image: img4,
	},
];
