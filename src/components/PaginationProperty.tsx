import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

const PaginationProperty = () => {
	return (
		<div>
			<Pagination>
				<PaginationContent className="gap-5">
					<PaginationItem>
						<PaginationPrevious href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white" />
					</PaginationItem>

					<PaginationItem>
						<PaginationLink href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white">
							1
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationLink href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white">
							2
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationLink href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white">
							3
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>

					<PaginationItem>
						<PaginationNext href="#" className="text-md bg-[#F5F5F5] hover:bg-primary hover:text-white" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default PaginationProperty;
