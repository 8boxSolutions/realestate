// BookARent.tsx
import BookCategories from './BookCategories';
import BookPropertyType from './BookPropertyType';
import BookLocation from './BookLocation';
import BookFilter from './BookFilter';
import SearchFilter from './SearchFilter';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const BookARent = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center">
			<div className="flex w-full flex-col space-y-4 rounded-2xl bg-white p-4 shadow-lg md:space-x-4 lg:h-20 lg:flex-row lg:items-center lg:space-y-0">
				<BookCategories />
				<BookPropertyType />
				<BookLocation />
				<BookFilter />
				<SearchFilter>
					<div className="flex w-full items-center">
						<div className="relative w-full">
							<Input
								placeholder="Search"
								className="rounded-full border border-primary px-4 py-2 placeholder:text-primary lg:w-auto"
							/>
							<div className="absolute top-2 right-2">
								<Search className="icon text-primary" />
							</div>
						</div>
					</div>
				</SearchFilter>
			</div>
		</div>
	);
};

export default BookARent;
