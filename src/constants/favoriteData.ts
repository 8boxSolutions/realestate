import img1 from '@/assets/favorites/img1.jpg';
import img2 from '@/assets/favorites/img2.jpg';
import img3 from '@/assets/favorites/img3.jpg';

interface favoriteProperties {
	id: number;
	title: string;
	location: string;
	price: number;
	image: string;
	beds: number;
	bath: number;
	area: number;
	garages: number;
	type: 'For Sale' | 'For Rent';
}

export const favorities: favoriteProperties[] = [
	{
		id: 1,
		title: 'Sample 01',
		location: 'Quezon City, Manila 1234',
		price: 65000000,
		image: img1,
		beds: 3,
		bath: 1,
		area: 120,
		garages: 0,
		type: 'For Sale',
	},
	{
		id: 2,
		title: 'Sample 02',
		location: 'Quezon City, Manila 1234',
		price: 65000000,
		image: img2,
		beds: 3,
		bath: 1,
		area: 120,
		garages: 0,
		type: 'For Sale',
	},
	{
		id: 3,
		title: 'Sample 03',
		location: 'Quezon City, Manila 1234',
		price: 65000000,
		image: img3,
		beds: 3,
		bath: 1,
		area: 120,
		garages: 0,
		type: 'For Sale',
	},

	{
		id: 4,
		title: 'Sample 01',
		location: 'Quezon City, Manila 1234',
		price: 65000,
		image: img1,
		beds: 3,
		bath: 1,
		area: 120,
		garages: 0,
		type: 'For Rent',
	},
	{
		id: 5,
		title: 'Sample 02',
		location: 'Quezon City, Manila 1234',
		price: 65000,
		image: img2,
		beds: 3,
		bath: 1,
		area: 120,
		garages: 0,
		type: 'For Rent',
	},

	{
		id: 6,
		title: 'Sample 03',
		location: 'Quezon City, Manila 1234',
		price: 65000,
		image: img3,
		beds: 3,
		bath: 1,
		area: 120,
		garages: 0,
		type: 'For Rent',
	},
];
