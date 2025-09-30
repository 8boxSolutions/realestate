import apartment from '@/assets/homepage/Apartments Sold.svg';
import constuction from '@/assets/homepage/constuction.svg';
import hotlocation from '@/assets/homepage/HotLocation.svg';
import houserented from '@/assets/homepage/houseRented.svg';

interface statsProperty {
	icon: string;
	number: string;
	label: string;
}
export const properties: statsProperty[] = [
	{
		icon: constuction,
		number: '260+',
		label: 'Total Construction',
	},
	{
		icon: houserented,
		number: '110+',
		label: 'Houses Rented',
	},
	{
		icon: apartment,
		number: '190+',
		label: 'Apartments',
	},
	{
		icon: hotlocation,
		number: '560+',
		label: 'Hot Locations',
	},
];
