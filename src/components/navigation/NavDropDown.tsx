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
const NavDropDown: React.FC<NavDropDownProps> = ({ label, items, active }) => {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger
					className={`rounded-lg p-2 hover:bg-primary hover:text-white ${
						active ? 'bg-primary text-white' : 'text-black'
					}`}
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
