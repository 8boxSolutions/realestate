import { useState } from 'react';

import { Button, Checkbox, Label, Popover, PopoverContent, PopoverTrigger } from '@/components';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type BedCountPopoverProps = {
	className?: string;
};

const BedCountPopover = ({ className }: BedCountPopoverProps) => {
	const [open, setOpen] = useState(false);
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					className={cn(
						'w-full justify-between bg-muted !px-5 py-6 text-xl text-foreground shadow-sm hover:bg-muted',
						className
					)}
				>
					Bed <ChevronDownIcon className="size-6" />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="space-y-6">
				<header className="flex items-center justify-between">
					<p className="text-xl">Bed</p>
					<ChevronUpIcon className="cursor-pointer" onClick={() => setOpen(false)} />
				</header>

				<main className="space-y-3 px-2">
					<div className="flex items-center gap-4">
						<Checkbox id="1" />
						<Label className="text-base" htmlFor="1">
							1 Bedroom
						</Label>
					</div>
					<div className="flex items-center gap-4">
						<Checkbox id="2" />
						<Label className="text-base" htmlFor="2">
							2 Bedroom
						</Label>
					</div>
					<div className="flex items-center gap-4">
						<Checkbox id="3" />
						<Label className="text-base" htmlFor="3">
							3 Bedroom
						</Label>
					</div>
					<div className="flex items-center gap-4">
						<Checkbox id="4" />
						<Label className="text-base" htmlFor="4">
							4 Bedroom
						</Label>
					</div>
					<div className="flex items-center gap-4">
						<Checkbox id="5+" />
						<Label className="text-base" htmlFor="5+">
							5+ Bedroom
						</Label>
					</div>
				</main>

				<footer className="flex items-center justify-between">
					<Button className="" variant="destructive">
						Cancel
					</Button>
					<Button>Apply</Button>
				</footer>
			</PopoverContent>
		</Popover>
	);
};

export default BedCountPopover;
