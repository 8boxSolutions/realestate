import { useState } from 'react';

import {
	Button,
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
	Input,
	Label,
	RadioGroup,
	RadioGroupItem,
	ScrollArea,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Separator,
} from '@/components';
import { cn } from '@/lib/utils';
import { DialogTitle } from '@radix-ui/react-dialog';
import { SlidersHorizontalIcon } from 'lucide-react';

const securityOptions = ['Security', 'Concierge', 'Guardhouse', 'Alarm', 'CCTV', '24 hours security'];
const recreationalOptions = ['Roof garden', 'Tennis court', 'Swimming pool', 'Playground', 'Gym', 'Multipurpose room'];
const featureOptions = [
	'Built-in wardrobe',
	'Library',
	'Panoramic view',
	'Lift',
	'Access for people with disabilities',
	'Furnished',
];
const livingOptions = ['Equipped kitchen', 'Service room', 'Laundry room', 'Cellar', 'Storage room', 'Office room'];

type MoreFilterDialogProps = {
	className?: string;
};

const MoreFilterDialog = ({ className }: MoreFilterDialogProps) => {
	const [bathroom, setBathroom] = useState<string | null>(null);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={cn(
						'w-full justify-between bg-muted !px-5 py-6 text-xl text-foreground shadow-sm hover:bg-muted',
						className
					)}
				>
					More <SlidersHorizontalIcon className="size-6" />
				</Button>
			</DialogTrigger>

			<DialogContent className="h-11/12 pt-8" aria-describedby={undefined}>
				<DialogHeader className="pb-4">
					<DialogTitle className="text-base">Filter By:</DialogTitle>
				</DialogHeader>

				<ScrollArea className="max-h-7/12 px-3">
					<div className="flex flex-col gap-4">
						<section className="space-y-2">
							<h4>FORECLOSED PROPERTIES</h4>
							<Select>
								<SelectTrigger
									className="w-full justify-between border-none bg-muted px-5 !py-6 text-xl text-foreground shadow-sm"
									iconClassName="size-6 !text-foreground"
								>
									<SelectValue className="placeholder:text-foreground" placeholder="Select" />
								</SelectTrigger>

								<SelectContent>
									<SelectItem className="text-xl text-foreground" value="include">
										Include
									</SelectItem>

									<SelectItem className="text-xl text-foreground" value="exclude">
										Exclude
									</SelectItem>

									<SelectItem className="text-xl text-foreground" value="only">
										Only
									</SelectItem>
								</SelectContent>
							</Select>
						</section>

						<Separator />

						<section>
							<h4>BATHROOMS</h4>
							<div className="flex justify-evenly py-4">
								{Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
									<Button
										className={cn('p-6 text-base', bathroom === String(num) && 'bg-primary/50')}
										key={num}
										variant="outline"
										onClick={() => setBathroom(String(num))}
									>
										{num === 5 ? '5+' : num}
									</Button>
								))}
							</div>
						</section>

						<Separator />

						<section>
							<h4>FLOOR AREA (sqm)</h4>

							<div className="flex gap-4 py-4">
								<div>
									<Label className="ml-4 w-fit translate-y-1/2 transform bg-background px-1" htmlFor="floor-area-min">
										Min
									</Label>
									<Input className="py-5" placeholder="Minimum" id="floor-area-min" />
								</div>

								<div>
									<Label className="ml-4 w-fit translate-y-1/2 transform bg-background px-1" htmlFor="floor-area-max">
										Max
									</Label>
									<Input className="py-5" placeholder="Maximum" id="floor-area-max" />
								</div>
							</div>
						</section>

						<Separator />

						<section>
							<h4>LAND AREA (sqm)</h4>

							<div className="flex gap-4 py-4">
								<div>
									<Label className="ml-4 w-fit translate-y-1/2 transform bg-background px-1" htmlFor="land-area-min">
										Min
									</Label>
									<Input className="py-5" placeholder="Minimum" id="land-area-min" />
								</div>

								<div>
									<Label className="ml-4 w-fit translate-y-1/2 transform bg-background px-1" htmlFor="land-area-max">
										Max
									</Label>
									<Input className="py-5" placeholder="Maximum" id="land-area-max" />
								</div>
							</div>
						</section>

						<Separator />

						<section>
							<h4>FEATURES</h4>

							<ul className="px-2">
								<li>
									<Label className="text-lg">Security</Label>

									<div className="grid grid-cols-2 gap-2 py-4">
										{securityOptions.map((option) => (
											<div key={option} className="flex items-center space-x-2">
												<input type="checkbox" id={option} name={option} value={option} className="h-4 w-4" />
												<Label htmlFor={option}>{option}</Label>
											</div>
										))}
									</div>
								</li>

								<li>
									<Label className="text-lg">Recreational Facilities</Label>

									<div className="grid grid-cols-2 gap-2 py-4">
										{recreationalOptions.map((option) => (
											<div key={option} className="flex items-center space-x-2">
												<input type="checkbox" id={option} name={option} value={option} className="h-4 w-4" />
												<Label htmlFor={option}>{option}</Label>
											</div>
										))}
									</div>
								</li>

								<li>
									<Label className="text-lg">Features</Label>

									<div className="grid grid-cols-2 gap-2 py-4">
										{featureOptions.map((option) => (
											<div key={option} className="flex items-center space-x-2">
												<input type="checkbox" id={option} name={option} value={option} className="h-4 w-4" />
												<Label htmlFor={option}>{option}</Label>
											</div>
										))}
									</div>
								</li>

								<li>
									<Label className="text-lg">Living spaces</Label>

									<div className="grid grid-cols-2 gap-2 py-4">
										{livingOptions.map((option) => (
											<div key={option} className="flex items-center space-x-2">
												<input type="checkbox" id={option} name={option} value={option} className="h-4 w-4" />
												<Label htmlFor={option}>{option}</Label>
											</div>
										))}
									</div>
								</li>
							</ul>
						</section>

						<Separator />

						<section className="">
							<h4>PUBLISHED DATE</h4>

							<RadioGroup className="mt-4 grid grid-cols-2 gap-2">
								<div className="flex items-center space-x-2">
									<RadioGroupItem
										className="size-6 border-primary"
										indicatorClassName="size-5"
										value="Any time"
										id="Any time"
									/>
									<Label className="text-lg" htmlFor="Any time">
										Any time
									</Label>
								</div>

								<div className="flex items-center space-x-2">
									<RadioGroupItem
										className="size-6 border-primary"
										indicatorClassName="size-5"
										value="Last 24 hours"
										id="Last 24 hours"
									/>
									<Label className="text-lg" htmlFor="Last 24 hours">
										Last 24 hours
									</Label>
								</div>

								<div className="flex items-center space-x-2">
									<RadioGroupItem
										className="size-6 border-primary"
										indicatorClassName="size-5"
										value="Last week"
										id="Last week"
									/>
									<Label className="text-lg" htmlFor="Last week">
										Last week
									</Label>
								</div>

								<div className="flex items-center space-x-2">
									<RadioGroupItem
										className="size-6 border-primary"
										indicatorClassName="size-5"
										value="Last month"
										id="Last month"
									/>
									<Label className="text-lg" htmlFor="Last month">
										Last month
									</Label>
								</div>
							</RadioGroup>
						</section>
					</div>
				</ScrollArea>

				<Separator />

				<DialogFooter>
					<Button variant={'destructive'}>Cancel</Button>
					<Button>Apply</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default MoreFilterDialog;
