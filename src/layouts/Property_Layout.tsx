import { Outlet } from 'react-router-dom';
import PropertyHeader from '@/pages/property-pages/property-header';

const PropertyLayout = () => {
	return (
		<div className="flex min-h-screen flex-col">
			{' '}
			<PropertyHeader />
			<main className="flex-grow">
				<Outlet />
			</main>
		</div>
	);
};

export default PropertyLayout;