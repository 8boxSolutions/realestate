import { Badge, Button, Card, CardContent, CardHeader, Separator } from '@/components';
import { convertToCurrency } from '@/lib/utils';

import {
	ArrowRightIcon,
	BathIcon,
	BedIcon,
	CarFrontIcon,
	ClockIcon,
	Grid2x2Icon,
	MapPinIcon,
	User2Icon,
} from 'lucide-react';

type HouseAndLotCardProps = {
	data: {
		location: string;
		address: string;
		price: number;
		area: number;
		garages: number;
		bedrooms: number;
		bathrooms: number;
		agent: string;
		postedAgo: string;
		imageUrl: string;
	};
};

const HouseAndLotCard = ({ data }: HouseAndLotCardProps) => {
	return (
		<Card className="relative w-md overflow-hidden rounded-sm py-0">
			<img className="h-72 w-full bg-black object-cover" src={data.imageUrl} alt="House and Lot" />
			<Badge className="absolute top-4 left-4 text-xl italic">{convertToCurrency(data.price)}</Badge>
			<CardContent className="space-y-4 px-6">
				<CardHeader>
					<h3 className="text-center">{data.location}</h3>
					<div className="flex items-center justify-center gap-2">
						<MapPinIcon className="text-primary" /> <h4 className="text-muted-foreground">{data.address}</h4>
					</div>
				</CardHeader>

				<Separator />

				<section className="grid grid-cols-2 gap-4">
					<div className="flex items-center gap-2 text-muted-foreground">
						<Grid2x2Icon className="text-primary" /> {data.area} ft²
					</div>
					<div className="flex items-center gap-2 text-muted-foreground">
						<CarFrontIcon className="text-primary" />{' '}
						{data.garages > 1 ? `${data.garages} Garages` : `${data.garages} Garage`}
					</div>
					<div className="flex items-center gap-2 text-muted-foreground">
						<BedIcon className="text-primary" />{' '}
						{data.bedrooms > 1 ? `${data.bedrooms} Bedrooms` : `${data.bedrooms} Bedroom`}
					</div>
					<div className="flex items-center gap-2 text-muted-foreground">
						<BathIcon className="text-primary" />{' '}
						{data.bathrooms > 1 ? `${data.bathrooms} Bathrooms` : `${data.bathrooms} Bathroom`}
					</div>
				</section>

				<Separator />

				<section className="grid grid-cols-2 gap-4">
					<div className="flex items-center gap-2 text-muted-foreground">
						<User2Icon className="text-primary" /> {data.agent}
					</div>

					<div className="flex items-center gap-2 text-muted-foreground">
						<ClockIcon className="text-primary" /> {data.postedAgo}
					</div>
				</section>
			</CardContent>

			<Button className="rounded-t-none bg-secondary text-lg" size={'lg'}>
				View <ArrowRightIcon />
			</Button>
		</Card>
	);
};

export default HouseAndLotCard;
