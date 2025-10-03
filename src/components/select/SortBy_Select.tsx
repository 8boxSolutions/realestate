import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components';
import { cn } from '@/lib/utils';

type SortBySelectProps = {
	className?: string;
};

const SortBySelect = ({ className }: SortBySelectProps) => {
	return (
		<Select>
			<SelectTrigger
				className={cn(
					'w-full justify-between border-none bg-muted px-5 !py-6 text-xl text-foreground shadow-sm',
					className
				)}
				iconClassName="size-6 text-foreground"
			>
				<SelectValue className="text-xl placeholder:!text-foreground" placeholder="Sort By" />
			</SelectTrigger>
			<SelectContent className="border-none shadow-2xl">
				<SelectItem className="text-xl text-foreground" value="Popular">
					Popular
				</SelectItem>
				<SelectItem className="text-xl text-foreground" value="Newest">
					Newest
				</SelectItem>
				<SelectItem className="text-xl text-foreground" value="LowToHigh">
					Price (Low to High)
				</SelectItem>
				<SelectItem className="text-xl text-foreground" value="HighToLow">
					Price (High to Low)
				</SelectItem>
			</SelectContent>
		</Select>
	);
};

export default SortBySelect;
