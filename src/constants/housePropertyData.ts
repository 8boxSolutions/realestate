import img1 from '@/assets/newdevelopments/img.png';
import img2 from '@/assets/foreclosures/img1.png';
import img3 from '@/assets/condo/img3.png';
import img4 from '@/assets/apartment/img4.png';
import img5 from '@/assets/lots/img-5.png';
import img6 from '@/assets/commercials/img6.png';
import img7 from '@/assets/imgs/sampleHouseAndLot.png';

export interface PropertyDetails {
	id: string;
	squareFeet: number;
	bed?: number;
	user: string;
	garages?: number;
	bath?: number;
	unit?: number;
	time: string;
	image: string;
	location: string;
	title: string;
	price: number;
}

export const propertiesDevelopments: PropertyDetails[] = Array.from({ length: 6 }, (_, i) => ({
	id: `${i + 1}-development`.toString(),
	squareFeet: 1000,
	bed: 5,
	user: 'John Smith',
	garages: 1,
	bath: 3,
	price: 2500000,
	time: '2 days ago',
	image: img1,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila #${i + 1}`,
}));

export const propertiesForeclosures: PropertyDetails[] = Array.from({ length: 6 }, (_, i) => ({
	id: `${i + 1}-foreclosures`.toString(),
	squareFeet: 1000,
	bed: 5,
	user: 'John Smith',
	garages: 1,
	bath: 3,
	price: 2500000,
	time: '2 days ago',
	image: img2,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila `,
}));

export const propertiesCondoForSale: PropertyDetails[] = Array.from({ length: 6 }, (_, i) => ({
	id: `${i + 1}-condo`.toString(),
	squareFeet: 1000,
	unit: 4,
	user: 'John Smith',
	garages: 1,
	bath: 3,
	price: 2500000,
	time: '2 days ago',
	image: img3,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila `,
}));

export const propertiesApartmentForSale: PropertyDetails[] = Array.from({ length: 6 }, (_, i) => ({
	id: `${i + 1}-apartment`.toString(),
	squareFeet: 1000,
	bed: 5,
	user: 'John Smith',
	garages: 2,
	bath: 3,
	price: 2500000,
	time: '2 days ago',
	image: img4,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila `,
}));

export const propertiesLotsForSale: PropertyDetails[] = Array.from({ length: 6 }, (_, i) => ({
	id: `${i + 1}-lot`.toString(),
	squareFeet: 480000,
	user: 'John Smith',
	price: 2500000,
	time: '2 days ago',
	image: img5,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila `,
}));

export const propertiesCommercialsForSale: PropertyDetails[] = Array.from({ length: 6 }, (_, i) => ({
	id: `${i + 1}-commercials `.toString(),
	squareFeet: 480000,
	unit: 14,
	user: 'John Smith',
	price: 2500000,
	time: '2 days ago',
	image: img6,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila `,
}));

export const propertiesHouseAndLotForSale: PropertyDetails[] = Array.from({ length: 6 }, (_, i) => ({
	id: `${i + 1}-house`,
	squareFeet: 1000,
	bed: 5,
	user: 'John Smith',
	garages: 1,
	bath: 3,
	price: 2500000,
	time: '2 days ago',
	image: img7,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila `,
}));

// ALL PROPERTIES

export const propertiesCondoAll: PropertyDetails[] = Array.from({ length: 3 }, (_, i) => ({
	id: (i + 1).toString(),
	squareFeet: 1000,
	unit: 4,
	user: 'John Smith',
	garages: 1,
	bath: 3,
	price: 2500000,
	time: '2 days ago',
	image: img3,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila #${i + 1}`,
}));

export const propertiesApartmentAll: PropertyDetails[] = Array.from({ length: 3 }, (_, i) => ({
	id: (i + 1).toString(),
	squareFeet: 1000,
	bed: 5,
	user: 'John Smith',
	garages: 2,
	bath: 3,
	price: 2500000,
	time: '2 days ago',
	image: img4,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila #${i + 1}`,
}));

export const propertiesLotsAll: PropertyDetails[] = Array.from({ length: 3 }, (_, i) => ({
	id: (i + 1).toString(),
	squareFeet: 480000,
	user: 'John Smith',
	price: 2500000,
	time: '2 days ago',
	image: img5,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila #${i + 1}`,
}));

export const propertiesCommercialsAll: PropertyDetails[] = Array.from({ length: 3 }, (_, i) => ({
	id: (i + 1).toString(),
	squareFeet: 480000,
	unit: 14,
	user: 'John Smith',
	price: 2500000,
	time: '2 days ago',
	image: img6,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila #${i + 1}`,
}));

export const propertiesHouseAndLotAll: PropertyDetails[] = Array.from({ length: 3 }, (_, i) => ({
	id: (i + 1).toString(),
	squareFeet: 1000,
	bed: 5,
	user: 'John Smith',
	garages: 1,
	bath: 3,
	price: 2500000,
	time: '2 days ago',
	image: img7,
	location: 'Quezon City, Manila 1234',
	title: `17 Quaker Road, Manila #${i + 1}`,
}));
