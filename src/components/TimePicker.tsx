import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { FaClock } from 'react-icons/fa';

interface TimePickerProps {
	label: string;
	id: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TimePicker({ label, id, onChange }: TimePickerProps) {
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		onChange?.(e);
	};

	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={id} className="text-sm text-[#23232380]">
				{label}
			</label>

			<div className="relative">
				{/* Input */}
				<Input
					type="time"
					id={id}
					step="1"
					value={value}
					onChange={handleChange}
					className="appearance-none rounded-full border border-gray-300 bg-background px-4 py-2 pr-10 text-sm text-transparent caret-transparent shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
				{!value && (
					<span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-gray-400">
						HH:MM:SS
					</span>
				)}

				{/* Clock icon */}
				<FaClock className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-lg text-red-500" />
			</div>
		</div>
	);
}
