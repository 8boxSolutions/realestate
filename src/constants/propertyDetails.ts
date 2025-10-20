export type propertySpecs = {
	totalArea: number;
	bedRooms?: number;
	bathRooms?: number;
	floor?: string;
	constructionYear?: number;
	elevator?: number;
	parking?: boolean;
	wifi?: boolean;
	cableTV?: boolean;
	units?: number;
};

export interface Details {
	id: string;
	title: string;
	price: number;
	location: string;
	sqt: number;
	image: string[];
	description: string;
	property: propertySpecs[];
	place: string;
}
