import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

const PaginationFavorite = () => {
	return (
		<div>
			<Pagination>
				<PaginationContent className="gap-5">
					{/* Previous button */}
					<PaginationItem>
						<PaginationPrevious href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white" />
					</PaginationItem>

					{/* Page 1 */}
					<PaginationItem>
						<PaginationLink href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white">
							1
						</PaginationLink>
					</PaginationItem>

					{/* Page 2 */}
					<PaginationItem>
						<PaginationLink href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white">
							2
						</PaginationLink>
					</PaginationItem>

					{/* Page 3 */}
					<PaginationItem>
						<PaginationLink href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white">
							3
						</PaginationLink>
					</PaginationItem>

					{/* Ellipsis */}
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>

					{/* Next button */}
					<PaginationItem>
						<PaginationNext href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default PaginationFavorite;
