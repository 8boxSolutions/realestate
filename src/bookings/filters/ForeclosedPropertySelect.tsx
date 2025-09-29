import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ForeclosedPropertySelect = () => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full min-w-80">
					<SelectValue placeholder="Select" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="include">Include</SelectItem>
					<SelectItem value="exclude">Exclude</SelectItem>
					<SelectItem value="only">Only</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default ForeclosedPropertySelect;
