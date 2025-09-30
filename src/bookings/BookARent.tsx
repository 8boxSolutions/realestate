import BookCategories from './BookCategories';
import BookPropertyType from './BookPropertyType';
import BookLocation from './BookLocation';
import BookFilter from './BookFilter';
import BookSearch from './BookSearch';

const BookARent = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex w-full items-center space-x-4 rounded-2xl bg-white p-6 shadow-lg md:h-20">
				<div className="">
					<BookCategories />
				</div>
				<div>
					<BookPropertyType />
				</div>

				<div>
					<BookLocation />
				</div>
				<div>
					<BookFilter />
				</div>
				<div>
					<BookSearch />
				</div>
			</div>
		</div>
	);
};

export default BookARent;
