import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { features } from '@/constants/filter';
import { Button } from '@/components/ui/button';
import filterIcon from '@/assets/homepage/Vector.svg';
import ForeclosedPropertySelect from './filters/ForeclosedPropertySelect';
import FilterBathrooms from './filters/FilterBathrooms';
import FilterArea from './filters/FilterArea';
import FilterFeatures from './filters/FilterFeatures';

const BookFilter = () => {
	return (
		<div className="flex items-center">
			<Dialog>
				<DialogTrigger asChild>
					<button>
						<img src={filterIcon} alt="Filter" className="lg:size-30" />
					</button>
				</DialogTrigger>
				<DialogContent>
					<div className="scrollbar-hide h-180 w-full overflow-y-auto">
						<DialogHeader>
							<DialogTitle className="my-5 text-black">Filter by:</DialogTitle>
						</DialogHeader>
						<div>
							<div className="flex flex-col space-y-2">
								<h1 className="text-[1.1rem] font-normal text-black">FORECLOSED PROPERTIES</h1>
								<ForeclosedPropertySelect />
							</div>

							<Separator className="my-5" />

							<div className="flex flex-col space-y-2">
								<h1 className="text-[1.1rem] font-normal text-black">BATHROOMS</h1>
								<FilterBathrooms />
							</div>
							<Separator className="my-5" />

							<FilterArea />

							<Separator className="my-5" />

							<div>
								<h1 className="text-[1.1rem] font-normal text-black">FEATURES</h1>
								{features.map((feat, index) => (
									<FilterFeatures key={index} feature={feat} showDivider={index !== features.length - 1} />
								))}
							</div>
							<Separator className="my-5" />
						</div>
						<DialogFooter>
							<div className="flex w-full justify-center gap-10">
								<DialogClose>
									<Button variant="outline" className="border border-primary bg-primary/10 text-primary">
										Cancel
									</Button>
								</DialogClose>
								<Button>Apply</Button>
							</div>
						</DialogFooter>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default BookFilter;
