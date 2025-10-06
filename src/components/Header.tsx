import React, { ReactNode } from 'react';
import Navigation from './navigation/Navigation';
import LogoLink from './LogoLink';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface HeaderWrapperProps {
	className?: string;
	children?: ReactNode;
}

const HeaderWrapper = ({ className, children }: HeaderWrapperProps) => {
	return (
		<div className="rounded-full border-b bg-white shadow-sm">
			<div className={cn('flex h-20 items-center justify-between px-4', className)}>{children}</div>
		</div>
	);
};

const Header: React.FC = () => {
	return (
		<div className="z-50 p-10">
			<HeaderWrapper className="flex items-center justify-between">
				<LogoLink />
				<Navigation />
				<div className="hidden items-center space-x-6 lg:flex">
					<a href="" className="font-medium text-primary underline underline-offset-4">
						Login/Register
					</a>
					<Button variant="secondary" className="text-md w-max rounded-full px-6 py-2 text-lg font-medium text-white">
						List Your Property
					</Button>
				</div>
			</HeaderWrapper>
		</div>
	);
};

export default Header;
