import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components';
import { cn } from '@/lib/utils';

type PropertyTypeSelectProps = {
	className?: string;
};

const PropertyTypeSelect = ({ className }: PropertyTypeSelectProps) => {
	return (
		<Select>
			<SelectTrigger
				className={cn(
					'w-full justify-between border-none bg-muted px-5 !py-6 text-xl text-foreground shadow-sm',
					className
				)}
				iconClassName="size-6 text-foreground"
			>
				<SelectValue className="text-xl placeholder:!text-foreground" placeholder="Property Type" />
			</SelectTrigger>
			<SelectContent className="border-none shadow-2xl">
				<SelectItem className="text-xl text-foreground" value="For Sale">
					For Sale
				</SelectItem>
				<SelectItem className="text-xl text-foreground" value="For Rent">
					For Rent
				</SelectItem>
			</SelectContent>
		</Select>
	);
};

export default PropertyTypeSelect;
