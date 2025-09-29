import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { features } from '@/constants/filter';
import filterIcon from '@/assets/homepage/Vector.svg';
import ForeclosedPropertySelect from './filters/ForeclosedPropertySelect';
import FilterBathrooms from './filters/FilterBathrooms';
import FilterArea from './filters/FilterArea';
import FilterFeatures from './filters/filterFeatures';
const BookFilter = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<button>
						<img src={filterIcon} alt="Filter" />
					</button>
				</DialogTrigger>
				<DialogContent>
					<ScrollArea className="h-180 [&::-webkit-scrollbar]:hidden">
						<DialogHeader>
							<DialogTitle className="text-black">Filter by:</DialogTitle>
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
									<FilterFeatures key={index} feature={feat} />
								))}
							</div>
						</div>
					</ScrollArea>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default BookFilter;
