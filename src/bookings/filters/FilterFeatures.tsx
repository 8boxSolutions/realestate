import type { filterCategory } from '@/constants/filter';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface featuresProps {
	feature: filterCategory;
	showDivider?: boolean;
}
const FilterFeatures: React.FC<featuresProps> = ({ feature, showDivider }) => {
	return (
		<div>
			<h1 className="my-3 text-[1.1rem] font-normal text-black">{feature.category}</h1>
			{feature.type === 'checkbox' && (
				<div className="grid grid-cols-2 space-y-2 text-black">
					{feature.items.map((item, index) => (
						<Label key={index} className="text-md font-normal">
							<Checkbox className="size-6" /> {item}
						</Label>
					))}
				</div>
			)}

			{feature.type === 'radio' && (
				<RadioGroup>
					<div className="grid grid-cols-2 space-y-2 text-black">
						{feature.items.map((item, index) => (
							<Label key={index} className="text-md font-normal">
								<RadioGroupItem className="size-6" value={item} /> {item}
							</Label>
						))}
					</div>
				</RadioGroup>
			)}
			{showDivider && <Separator className="my-4" />}
		</div>
	);
};

export default FilterFeatures;
