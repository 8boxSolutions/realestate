import { Link, useLocation } from 'react-router-dom';

const navItems = [
	{ label: 'Home', href: '/property-home'},
	{ label: 'Messages', href: '/property-messages'},
	{ label: 'Leads & Transactions', href: '/property-leads-transactions' },
	{ label: 'Listings', href: '/property-listings' },
	{ label: 'Performance', href: '/property-performance'},
];

const PropertyNavigation = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			<nav className="items-center space-x-4 font-medium lg:flex">
				{navItems.map(({ label, href}) => {
					const isActive = currentPath === href;

					return (
						<Link
							key={label}
							to={href}
							className={`rounded-lg p-2 duration-700 ease-in-out hover:bg-primary hover:text-white hover:transition ${isActive ? 'bg-primary text-white' : 'text-black'}`}
						>
							{label}
						</Link>
					);
				})}
			</nav>
		</>
	);
};

export default PropertyNavigation;
