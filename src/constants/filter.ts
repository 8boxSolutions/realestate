export interface filterCategory {
	category: string;
	type: 'checkbox' | 'radio';
	items: string[];
}

export const features: filterCategory[] = [
	{
		category: 'Security',
		type: 'checkbox',
		items: ['Security', 'Guardhouse', 'CCTV', 'Concierge', 'Alarm', '24 hours security'],
	},
	{
		category: 'Recreational Facilities',
		type: 'checkbox',
		items: ['Roof garden', 'Swimming pool', 'Gym', 'Tennis court', 'Playground', 'Multipurpose room'],
	},
	{
		category: 'Outdoor Spaces',
		type: 'checkbox',
		items: ['Terrace', 'Balcony', 'Garden', 'Grill', 'Green area', 'Yard'],
	},
	{
		category: 'Services',
		type: 'checkbox',
		items: ['Garage', 'Air conditioning', 'Water', 'Internet', 'Intercom', 'Electricity'],
	},
	{
		category: 'Features',
		type: 'checkbox',
		items: [
			'Built-in wardrobe',
			'Panoramic view',
			'Access for people with disabilities',
			'Library',
			'Lift',
			'Furnished',
		],
	},
	{
		category: 'Living Spaces',
		type: 'checkbox',
		items: ['Equipped kitchen', 'Laundry room', 'Storage room', 'Service room', 'Cellar', 'Office room'],
	},
	{
		category: 'PUBLISHED DATE',
		type: 'radio',
		items: ['Any Time', 'Last week', 'Last 24 hours', 'Last month'],
	},
];
