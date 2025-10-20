import houseImg1 from '@/assets/imgs/houseImg1.jpg';
import houseImg2 from '@/assets/imgs/houseImg2.jpg';
import houseImg3 from '@/assets/imgs/sampleHouseAndLot.png';
import apartmentImg1 from '@/assets/apartment/apartmant-img.png';
import apartmentimg2 from '@/assets/apartment/apartmant-img2.png';
import commercialImg1 from '@/assets/commercials/commercial-img.png';
import commercialImg2 from '@/assets/commercials/img6.png';
import condoImg1 from '@/assets/condo/condo-img.png';
import condoImg2 from '@/assets/condo/img3.png';
import lotImg1 from '@/assets/lots/lot-img.png';
import lotImg2 from '@/assets/lots/img-5.png';

import { Details } from './propertyDetails';

const baseProperty = {
	totalArea: 100,
	bedRooms: 2,
	bathRooms: 2,
	floor: '3rd',
	constructionYear: 2020,
	elevator: 2,
	parking: true,
	wifi: true,
	cableTV: true,
};

const baseHouse = {
	title: 'Sample House For Sale',
	price: 10000000,
	location: 'Quezon City, Manila 1234',
	sqt: 10000,
	image: [houseImg1, houseImg2, houseImg3],
	description:
		'Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper. Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.',
	property: [baseProperty],
	place: 'MANILA',
};

export const houseProperties: Details[] = Array.from({ length: 6 }, (_, i) => ({
	...baseHouse,
	id: `${i + 1}-house`,
}));

// APARTMENT
const apartment = {
	title: 'Sample House For Sale',
	price: 10000000,
	location: 'Quezon City, Manila 1234',
	sqt: 10000,
	image: [apartmentImg1, houseImg2, apartmentimg2],
	description:
		'Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper. Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.',
	property: [baseProperty],
	place: 'MANILA',
};

export const apartmantProperties: Details[] = Array.from({ length: 6 }, (_, i) => ({
	...apartment,
	id: `${i + 1}-apartment`,
}));

// COMMERCIAL SPACE
const commercialProperty = {
	totalArea: 3000,
	units: 14,
};

const commercial = {
	title: 'Sample House For Sale',
	price: 10000000,
	location: 'Quezon City, Manila 1234',
	sqt: 10000,
	image: [commercialImg1, houseImg2, commercialImg2],
	description:
		'Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper. Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.',
	property: [commercialProperty],
	place: 'MANILA',
};

export const commercialProperties: Details[] = Array.from({ length: 6 }, (_, i) => ({
	...commercial,
	id: `${i + 1}-commercials`,
}));

// CONDO
const condoProperty = {
	totalArea: 100,
	bedRooms: 2,
	bathRooms: 2,
	units: 57,
};

const condo = {
	title: 'Sample House For Sale',
	price: 10000000,
	location: 'Quezon City, Manila 1234',
	sqt: 10000,
	image: [condoImg1, houseImg2, condoImg2],
	description:
		'Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper. Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.',
	property: [condoProperty],
	place: 'MANILA',
};

export const condoProperties: Details[] = Array.from({ length: 6 }, (_, i) => ({
	...condo,
	id: `${i + 1}-condo`,
}));

// LOT
const lotProperty = {
	totalArea: 48000,
};

const lot = {
	title: 'Sample House For Sale',
	price: 10000000,
	location: 'Quezon City, Manila 1234',
	sqt: 10000,
	image: [lotImg1, houseImg2, lotImg2],
	description:
		'Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper. Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.',
	property: [lotProperty],
	place: 'MANILA',
};
export const lotProperties: Details[] = Array.from({ length: 6 }, (_, i) => ({
	...lot,
	id: `${i + 1}-lot`,
}));
