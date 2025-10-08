import { useState } from 'react';

import { Button } from '@/components';
import { ArrowLeftIcon, ArrowRightIcon, EllipsisIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type PaginationProps = {
	total?: number;
	current?: number;
	onPageChange?: (page: number) => void;
};

const Pagination = ({ total = 1, current, onPageChange }: PaginationProps) => {
	const [page, setPage] = useState(current || 1);

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
		if (onPageChange) {
			onPageChange(newPage);
		}
	};

	const middleNav = () => {
		let start = Math.max(1, page - 2);
		let end = Math.min(total, start + 4);

		// When page is 1, only show current page + 2 ahead
		if (page === 1) {
			end = Math.min(total, page + 2);
			start = page;
		}

		if (page === 2) {
			end = Math.min(total, page + 2);
			start = Math.max(1, page - 1);
		}

		return (
			<div className="flex gap-2">
				{page > 3 && (
					<>
						<Button onClick={() => handlePageChange(1)} className="bg-muted text-primary hover:text-background">
							1
						</Button>

						<Button className="cursor-default bg-muted text-primary hover:bg-muted" size={'icon'}>
							<EllipsisIcon />
						</Button>
					</>
				)}
				{Array.from({ length: end - start + 1 }).map((_, index) => (
					<Button
						size={'icon'}
						key={index}
						onClick={() => handlePageChange(start + index)}
						className={cn(page === start + index ? '' : 'bg-muted text-primary hover:text-background')}
					>
						{start + index}
					</Button>
				))}

				{page < total - 2 && (
					<>
						<Button className="cursor-default bg-muted text-primary hover:bg-muted" size={'icon'}>
							<EllipsisIcon />
						</Button>

						<Button onClick={() => handlePageChange(total)} className="bg-muted text-primary hover:text-background">
							{total}
						</Button>
					</>
				)}
			</div>
		);
	};

	return (
		<nav className="flex items-center gap-2">
			<Button
				size={'icon'}
				disabled={page === 1}
				onClick={() => handlePageChange(page - 1)}
				className={cn(page === 1 && 'bg-muted text-primary hover:text-background')}
			>
				<ArrowLeftIcon />
			</Button>

			{middleNav()}

			<Button
				size={'icon'}
				disabled={page === total}
				onClick={() => handlePageChange(page + 1)}
				className={cn(page === total && 'bg-muted text-primary hover:text-background')}
			>
				<ArrowRightIcon />
			</Button>
		</nav>
	);
};

export default Pagination;
