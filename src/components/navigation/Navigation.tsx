import { Heart, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavDropDown from './NavDropDown';

const navItems = [
	{ label: 'Buy', href: '/buy', dropdown: 'buy' },
	{ label: 'Rent', href: '/rent', dropdown: 'rent' },
	{ label: 'New Developments', href: '/new-developments' },
	{ label: 'Foreclosures', href: '/foreclosures' },
	{ label: 'Resources', href: '/resources', dropdown: 'resources' },
];

const buyDropDown = [
	{ label: 'House And lot for Sale ', href: '/house-and-lot/buy' },
	{ label: 'Condo For Sale', href: '/condo-for-sale' },
	{ label: 'Apartments For Sale', href: '/apartments-for-sale' },
	{ label: 'Lots For Sale', href: '/lots-for-sale' },
	{ label: 'Commercial Units For Sale', href: '/commercial-unit-for-sale' },
	{ label: 'All Properties For Sale', href: '/all-properties-for-sale' },
];

const rentDropDown = [
	{ label: 'House And lot for Sale ', href: '/house-and-lot/buy' },
	{ label: 'Condo For Sale', href: '/condo-for-sale' },
	{ label: 'Apartments For Sale', href: '/apartments-for-sale' },
	{ label: 'Lots For Sale', href: '/lots-for-sale' },
	{ label: 'Commercial Units For Sale', href: '/commercial-unit-for-sale' },
	{ label: 'All Properties For Sale', href: '/all-properties-for-sale' },
];

const resourcesDropDown = [
	{ label: 'Journal ', href: '/journal' },
	{ label: 'Loan Calculator', href: '/loan-calculator' },
	{ label: 'Property Guides', href: '/property-guides' },
];

const dropdownData: Record<string, { label: string; href: string }[]> = {
	buy: buyDropDown,
	rent: rentDropDown,
	resources: resourcesDropDown,
};

const Navigation = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const navigate = useNavigate();

	return (
		<>
			<nav className="items-center space-x-4 font-medium lg:flex">
				{navItems.map(({ label, href, dropdown }) => {
					const isActive = currentPath === href;

					if (dropdown) {
						return <NavDropDown key={label} label={label} items={dropdownData[dropdown]} active={isActive} />;
					}

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
				<div className="flex items-center gap-2">
					<button>
						<Search />
					</button>
					<button className="cursor-pointer" onClick={() => navigate('/favorite')}>
						<Heart />
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
