// BookARent.tsx
import BookCategories from './BookCategories';
import BookPropertyType from './BookPropertyType';
import BookLocation from './BookLocation';
import BookFilter from './BookFilter';
import BookSearch from './BookSearch';

const BookARent = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center">
			<div className="flex w-full flex-col space-y-4 rounded-2xl bg-white p-4 shadow-lg md:space-x-4 lg:h-20 lg:flex-row lg:items-center lg:space-y-0">
				<BookCategories />
				<BookPropertyType />
				<BookLocation />
				<BookFilter />
				<BookSearch />
			</div>
		</div>
	);
};

export default BookARent;
