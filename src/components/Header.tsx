import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Navigation from './navigation/Navigation';
import NavDropDown from './navigation/NavDropDown';
import LogoLink from './LogoLink';

interface HeaderWrapperProps {
	className?: string;
	children?: ReactNode;
}

const navLogin = [
	{
		label: 'Login/Register',
		href: '/login-Register',
		dropdown: 'login',
	},
];

const loginAndRegisterDropdown = [
	{ label: 'Client', href: '/login-client' },
	{ label: 'Property', href: '/login-property' },
];

const dropdownData: Record<string, { label: string; href: string }[]> = {
	login: loginAndRegisterDropdown,
};

const HeaderWrapper = ({ className, children }: HeaderWrapperProps) => {
	return (
		<div className="rounded-full border-b bg-white shadow-sm">
			<div className={cn('flex h-20 items-center justify-between px-4', className)}>{children}</div>
		</div>
	);
};

const Header: React.FC = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div className="z-50 p-10">
			<HeaderWrapper className="flex items-center justify-between">
				<LogoLink />
				<Navigation />
				<div className="hidden items-center space-x-6 lg:flex">
					{navLogin.map(({ label, href, dropdown }) => {
						const isActive = currentPath === href;

						if (dropdown) {
							return (
								<NavDropDown
									key={label}
									label={label}
									items={dropdownData[dropdown]}
									active={isActive}
									rounded="full"
								/>
							);
						}

						return (
							<Link
								key={label}
								to={href}
								className={`duration-700 ease-in-out hover:rounded-full hover:bg-primary hover:text-white hover:transition ${isActive ? 'bg-primary text-white' : 'text-black'}`}
							>
								{label}
							</Link>
						);
					})}

					<Button variant="secondary" className="text-md w-max rounded-full px-6 py-2 text-lg font-medium text-white">
						List Your Property
					</Button>
				</div>
			</HeaderWrapper>
		</div>
	);
};

export default Header;
