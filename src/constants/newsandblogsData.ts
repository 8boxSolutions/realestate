import blog1 from '@/assets/homepage/newsAndblogs/blog-1.jpg';
import blog2 from '@/assets/homepage/newsAndblogs/blog-2.jpg';
import blog3 from '@/assets/homepage/newsAndblogs/blog-3.jpg';

interface newAndblogsProperty {
	id: number;
	name: string;
	image: string;
	tag: string;
	title: string;
	date: string;
}

export const properties: newAndblogsProperty[] = [
	{
		id: 1,
		image: blog1,
		name: 'John Smith',
		tag: 'Apartment',
		title: 'Top 5 Tips Every First-Time Homebuyer Should Know',
		date: 'July 20, 2025',
	},
	{
		id: 2,
		image: blog2,
		name: 'David Cruz',
		tag: 'Apartment',
		title: 'Why Location Matters When Choosing Your Next Property',
		date: 'May 03, 2025',
	},
	{
		id: 3,
		image: blog3,
		name: 'Ann White',
		tag: 'Apartment',
		title: 'Is Now the Best Time to Invest in Real Estate?',
		date: 'April 17, 2025',
	},
];
