import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookLocation = () => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full min-w-80">
					<SelectValue placeholder="Location" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All</SelectItem>
					<SelectItem value="luzon">Luzon</SelectItem>
					<SelectItem value="visayas">Visayas</SelectItem>
					<SelectItem value="mindanao">Mindanao</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default BookLocation;
