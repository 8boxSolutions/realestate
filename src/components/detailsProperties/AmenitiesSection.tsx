import React from 'react';
import type { Details } from '@/constants/propertyDetails';
import { Separator } from '@/components/ui/separator';
type AmenityIcons = {
	totalArea?: string;
	bedRooms?: string;
	bathrooms?: string;
	floor?: string;
	constructionYear?: string;
	elevator?: string;
	parking?: string;
	wifi?: string;
	TV?: string;
	units?: string;
};

type Props = {
	dataDetails?: Details;
	amenitiesIcons?: AmenityIcons;
	type?: string;
};

type AmenityConfigItem<T> = {
	key: keyof T;
	label: string;
	icon?: keyof AmenityIcons;
	unit?: string;
	isBoolean?: boolean;
};

const leftColumnConfig: AmenityConfigItem<Details['property'][number]>[] = [
	{ key: 'totalArea', label: 'Total area', icon: 'totalArea' },
	{ key: 'bedRooms', label: 'Bedrooms', icon: 'bedRooms' },
	{ key: 'bathRooms', label: 'Bathrooms', icon: 'bathrooms' },
	{ key: 'floor', label: 'Floor', icon: 'floor' },
	{ key: 'constructionYear', label: 'Construction year', icon: 'constructionYear' },
];

const rightColumnConfig: AmenityConfigItem<Details['property'][number]>[] = [
	{ key: 'elevator', label: 'Elevator', icon: 'elevator' },
	{ key: 'parking', label: 'Parking', icon: 'parking', isBoolean: true },
	{ key: 'wifi', label: 'Wi-Fi', icon: 'wifi', isBoolean: true },
	{ key: 'cableTV', label: 'Cable TV', icon: 'TV', isBoolean: true },
];

const commercialConfig: AmenityConfigItem<Details['property'][number]>[] = [
	{ key: 'totalArea', label: 'Total area', icon: 'totalArea', unit: 'sq.ft' },
	{ key: 'units', label: 'Unit', icon: 'units' },
];

const condoConfig: AmenityConfigItem<Details['property'][number]>[] = [
	{ key: 'totalArea', label: 'Total area', icon: 'totalArea', unit: 'sq.ft' },
	{ key: 'bedRooms', label: 'Bedrooms', icon: 'bedRooms' },
	{ key: 'bathRooms', label: 'Bathrooms', icon: 'bathrooms' },
	{ key: 'units', label: 'Unit', icon: 'units' },
];

const lotConfig: AmenityConfigItem<Details['property'][number]>[] = [
	{ key: 'totalArea', label: 'Total area', icon: 'totalArea', unit: 'sq.ft' },
];

const AmenitiesSection: React.FC<Props> = ({ amenitiesIcons, dataDetails, type }) => {
	return (
		<section className="space-y-6">
			<h1 className="text-3xl font-semibold text-primary">Property details</h1>
			<div className="grid grid-cols-1 gap-6 text-lg font-medium md:grid-cols-2">
				{dataDetails?.property.map((item, index) => (
					<>
						<React.Fragment key={index}>
							{/* HOUSE AND APARTMENT */}
							{(type === 'house' || type === 'apartment') && (
								<>
									{/* LEFT COLUMN */}
									<div>
										{leftColumnConfig.map(({ key, label, icon, unit }) => (
											<ul key={key.toString()} className="space-y-2">
												<li className="flex items-center justify-between">
													<div className="flex items-center gap-3">
														{icon && <img src={amenitiesIcons?.[icon]} alt={label} />} <span>{label}</span>
													</div>
													<span className="text-primary">
														{item[key]} {unit}
													</span>
												</li>
												<Separator />
											</ul>
										))}
									</div>

									{/* LEFT COLUMN */}
									<div>
										{rightColumnConfig.map(({ key, label, icon, isBoolean }) => (
											<ul key={key.toString()} className="space-y-2">
												<li className="flex items-center justify-between">
													<div className="flex items-center gap-3">
														{icon && <img src={amenitiesIcons?.[icon]} alt={label} />} <span>{label}</span>
													</div>
													<span className="text-primary"> {isBoolean ? (item[key] ? 'Yes' : 'No') : item[key]}</span>
												</li>
												<Separator />
											</ul>
										))}
									</div>
								</>
							)}

							{/* COMMERCIAL */}
							{type === 'commercial' && (
								<div>
									{commercialConfig.map(({ key, label, icon, unit }) => (
										<ul key={key.toString()} className="space-y-2">
											<li className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													{icon && <img src={amenitiesIcons?.[icon]} alt={label} />} <span>{label}</span>
												</div>
												<span className="text-primary">
													{item[key]} {unit}
												</span>
											</li>
											<Separator />
										</ul>
									))}
								</div>
							)}

							{/* LOT */}
							{type === 'condo' && (
								<div>
									{condoConfig.map(({ key, label, icon, unit }) => (
										<ul key={key.toString()} className="space-y-2">
											<li className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													{icon && <img src={amenitiesIcons?.[icon]} alt={label} />} <span>{label}</span>
												</div>
												<span className="text-primary">
													{item[key]} {unit}
												</span>
											</li>
											<Separator />
										</ul>
									))}
								</div>
							)}

							{type === 'lot' && (
								<div>
									{lotConfig.map(({ key, label, icon, unit }) => (
										<ul key={key.toString()} className="space-y-2">
											<li className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													{icon && <img src={amenitiesIcons?.[icon]} alt={label} />} <span>{label}</span>
												</div>
												<span className="text-primary">
													{item[key]} {unit}
												</span>
											</li>
											<Separator />
										</ul>
									))}
								</div>
							)}
						</React.Fragment>
					</>
				))}
			</div>
		</section>
	);
};

export default AmenitiesSection;
