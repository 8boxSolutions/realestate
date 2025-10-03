import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type PriceRangePopoverProps = {
	className?: string;
};

const PriceRangePopover = ({ className }: PriceRangePopoverProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className={cn(
						'w-full justify-between bg-muted !px-5 py-6 text-xl text-foreground shadow-sm hover:bg-muted',
						className
					)}
				>
					Price Range <ChevronDownIcon className="size-6" />
				</Button>
			</PopoverTrigger>

			<PopoverContent>
				<header>
					<p className="text-xl">
						Bed <ChevronUpIcon />
					</p>
				</header>
			</PopoverContent>
		</Popover>
	);
};

export default PriceRangePopover;
