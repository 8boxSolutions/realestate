import { Badge, Button } from '@/components';
import { XCircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type LocationBadgeProps = {
	loc: string;
	onClick?: () => void;
	onClose?: () => void;
	className?: string;
};

const LocationBadge = ({ loc, onClick, onClose, className }: LocationBadgeProps) => {
	return (
		<Badge
			className={cn(
				'bg-primary/30 py-2 text-foreground',
				onClose ? 'pr-2.5 pl-6' : 'px-6',
				onClick && 'cursor-pointer',
				className
			)}
			onClick={onClick}
			asChild
		>
			<div className="flex items-center gap-1">
				<h4 className="text-lg font-light">{loc}</h4>{' '}
				{onClose && (
					<Button
						variant="ghost"
						size="icon"
						className="!p-0 [&_svg:not([class*='size-'])]:size-5"
						onClick={(e) => {
							e.stopPropagation();
							onClose();
						}}
					>
						<XCircleIcon className="cursor-pointer hover:text-destructive" />
					</Button>
				)}
			</div>
		</Badge>
	);
};

export default LocationBadge;
