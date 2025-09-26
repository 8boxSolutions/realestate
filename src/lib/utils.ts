import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const convertToCurrency = (amount: number, locale = 'en-PH', currency = 'PHP', includeDecimal = true) => {
	return amount.toLocaleString(locale, { style: 'currency', currency, maximumFractionDigits: includeDecimal ? 2 : 0 });
};
