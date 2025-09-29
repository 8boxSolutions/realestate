import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const BookSearch = () => {
	return (
		<div className="flex items-center gap-2">
			<div className="relative">
				<Input placeholder="Search" className="rounded-full border border-primary py-6 placeholder:text-primary" />
				<div className="absolute top-3 right-2">
					<Search className="icon text-primary" />
				</div>
			</div>
		</div>
	);
};

export default BookSearch;
