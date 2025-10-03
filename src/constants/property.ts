import image1 from '@/assets/homepage/property.jpg';

interface Property {
	id: number;
	title: string;
	place: string;
	price: string;
	type: 'For Sale' | 'For Rent';
	image: string;
}

const generateProperties = (count: number, type: 'For Sale' | 'For Rent'): Property[] =>
	Array.from({ length: count }, (_, i) => ({
		id: i + 1 + (type === 'For Rent' ? 100 : 0),
		title: `House ${type} - Manila #${i + 1}`,
		place: 'Manila, Philippines',
		price: type === 'For Sale' ? 'PHP 2,000,000.00' : 'PHP 25,000 / month',
		type,
		image: image1,
	}));

export const properties: Property[] = [...generateProperties(15, 'For Sale'), ...generateProperties(15, 'For Rent')];

export type { Property };
