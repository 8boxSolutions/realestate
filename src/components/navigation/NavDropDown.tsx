import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

interface NavDropDownProps {
	label: string;
	items: { label: string; href: string }[];
	active?: boolean;
}
interface NavDropDownProps {
	label: string;
	items: { label: string; href: string }[];
	active?: boolean;
	rounded?: 'lg' | 'full';
}

const NavDropDown: React.FC<NavDropDownProps> = ({ label, items, active, rounded = 'lg' }) => {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger
					className={`p-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white ${
						active ? 'bg-primary text-white' : 'text-black'
					} ${rounded === 'full' ? 'rounded-full p-3' : 'rounded-lg'}`}
				>
					{label}
				</DropdownMenuTrigger>

				<DropdownMenuContent
					side="bottom"
					sideOffset={8}
					className="relative -top-3 overflow-visible rounded-md bg-white shadow-lg"
				>
					<DropdownMenuPrimitive.Arrow className="fill-white drop-shadow-md" width={16} height={20} />
					{items.map((item, index) => (
						<DropdownMenuItem key={index} asChild className="text-md flex cursor-pointer p-3">
							<Link to={item.href}>{item.label}</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default NavDropDown;
