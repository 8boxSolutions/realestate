import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const BookSearch = () => {
	return (
		<div className="flex w-full items-center">
			<div className="relative w-full">
				<Input
					placeholder="Search"
					className="w-full rounded-full border border-primary px-4 py-2 placeholder:text-primary"
				/>
				<div className="absolute top-2 right-2">
					<Search className="icon text-primary" />
				</div>
			</div>
		</div>
	);
};

export default BookSearch;
