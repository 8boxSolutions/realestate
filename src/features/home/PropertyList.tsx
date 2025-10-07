import { useState } from 'react';
import { properties } from '@/constants/property';
import { Button } from '@/components/ui/button';
import PropertyCollection from '@/components/PropertyCollection';

const PropertyList = () => {
	const [active, setActive] = useState<string>('All');
	const [fade, setFade] = useState<boolean>(true);

	const button = [
		{ key: 'All', label: 'All' },
		{ key: 'For Sale', label: 'For Sale' },
		{ key: 'For Rent', label: 'For Rent' },
	];

	const filteredProperties = active === 'All' ? properties : properties.filter((item) => item.type === active);

	const handleClick = (key: string) => {
		setFade(false);
		setTimeout(() => {
			setActive(key);
			setFade(true);
		}, 300);
	};

	return (
		<section className="mt-10 flex flex-col space-y-8 p-4 sm:p-15">
			<div className="flex flex-wrap justify-center gap-2 sm:gap-10">
				{button.map((btn) => (
					<Button
						key={btn.key}
						onClick={() => handleClick(btn.key)}
						className={`sm:text-md rounded-full px-4 py-2 text-sm sm:px-8 sm:py-3 ${
							active === btn.key ? 'bg-primary text-white' : ''
						}`}
					>
						{btn.label}
					</Button>
				))}
			</div>

			<PropertyCollection
				data={filteredProperties}
				title="POPULAR PROPERTIES IN THE PHILIPPINES"
				text="Leo morbi faucibus mattis pharetra tellus velit"
				fade={fade}
			/>
		</section>
	);
};

export default PropertyList;
