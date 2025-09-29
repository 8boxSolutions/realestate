import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookCategories = () => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full min-w-80">
					<SelectValue placeholder="Category" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All</SelectItem>
					<SelectItem value="apartment">Apartment</SelectItem>
					<SelectItem value="commercial space">Commercial Space</SelectItem>
					<SelectItem value="condominium">Condominium</SelectItem>
					<SelectItem value="house and lot">House and Lot</SelectItem>
					<SelectItem value="lot">Lot</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default BookCategories;
