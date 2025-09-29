import type { filterCategory } from '@/constants/filter';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface featuresProps {
	feature: filterCategory;
}
const FilterFeatures: React.FC<featuresProps> = ({ feature }) => {
	return (
		<div>
			<h1 className="text-[1.1rem] font-normal text-black">{feature.category}</h1>

			{feature.type === 'checkbox' && (
				<div className="grid grid-cols-2 space-y-2 text-black">
					{feature.items.map((item, index) => (
						<Label key={index} className="text-md">
							<Checkbox className="size-6" /> {item}
						</Label>
					))}
				</div>
			)}

			{feature.type === 'radio' && (
				<div className="grid grid-cols-2 space-y-2 text-black">
					{feature.items.map((item, index) => (
						<Label key={index} className="text-md">
							<Checkbox className="size-6" /> {item}
						</Label>
					))}
				</div>
			)}
		</div>
	);
};

export default FilterFeatures;
