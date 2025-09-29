import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookPropertyType = () => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full min-w-80">
					<SelectValue placeholder="Property Type" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="for sale">For Sale</SelectItem>
					<SelectItem value="for rent">For Rent</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default BookPropertyType;
