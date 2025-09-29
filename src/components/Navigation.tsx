import { Heart, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
	{ label: 'Buy', href: '/buy' },
	{ label: 'Rent', href: '/rent' },
	{ label: 'New Developments', href: '/new-developments' },
	{ label: 'Foreclosures', href: '/foreclosures' },
	{ label: 'Resources', href: '/resources' },
];

const Navigation = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<>
			<nav className="items-center space-x-4 font-medium lg:flex">
				{navItems.map(({ label, href }) => {
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
				<div className="flex items-center gap-2">
					<button>
						<Search />
					</button>
					<button>
						<Heart />
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
