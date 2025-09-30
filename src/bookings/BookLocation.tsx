import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const bookLocation = [
	{ value: 'all', label: 'All' },
	{ value: 'luzon', label: 'Luzon' },
	{ value: 'visaya', label: 'Visaya' },
	{ value: 'mindanao', label: 'Mindanao' },
];

const BookLocation = () => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-full min-w-80">
					<SelectValue placeholder="Location" />
				</SelectTrigger>
				<SelectContent>
					{bookLocation.map((location) => (
						<SelectItem key={location.value} value={location.value}>
							{location.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default BookLocation;
