import img from '@/assets/newdevelopments/img.png';

export interface PropertyDetails {
	id: string;
	squareFeet: number;
	bed: number;
	user: string;
	garages: number;
	bath: number;
	time: string;
	image: string;
	location: string;
	title: string;
	price: number;
}

export const property: PropertyDetails[] = [
	{
		id: '1',
		squareFeet: 1000,
		bed: 5,
		user: 'John Smith',
		garages: 1,
		bath: 3,
		time: '2 days ago',
		image: img,
		price: 2500000,
		location: 'Quezon City, Manila 1234',
		title: '17 Quaker Road, Manila',
	},
	{
		id: '2',
		squareFeet: 1000,
		bed: 5,
		user: 'John Smith',
		garages: 1,
		bath: 3,
		time: '2 days ago',
		image: img,
		price: 2500000,
		location: 'Quezon City, Manila 1234',
		title: '17 Quaker Road, Manila',
	},
	{
		id: '3',
		squareFeet: 1000,
		bed: 5,
		user: 'John Smith',
		garages: 1,
		bath: 3,
		time: '2 days ago',
		image: img,
		price: 2500000,
		location: 'Quezon City, Manila 1234',
		title: '17 Quaker Road, Manila',
	},
	{
		id: '4',
		squareFeet: 1000,
		bed: 5,
		user: 'John Smith',
		garages: 1,
		bath: 3,
		price: 2500000,
		time: '2 days ago',
		image: img,
		location: 'Quezon City, Manila 1234',
		title: '17 Quaker Road, Manila',
	},
	{
		id: '5',
		squareFeet: 1000,
		bed: 5,
		user: 'John Smith',
		garages: 1,
		bath: 3,
		price: 2500000,
		time: '2 days ago',
		image: img,
		location: 'Quezon City, Manila 1234',
		title: '17 Quaker Road, Manila',
	},
	{
		id: '6',
		squareFeet: 1000,
		bed: 5,
		user: 'John Smith',
		garages: 1,
		bath: 3,
		price: 2500000,
		time: '2 days ago',
		image: img,
		location: 'Quezon City, Manila 1234',
		title: '17 Quaker Road, Manila',
	},
];
