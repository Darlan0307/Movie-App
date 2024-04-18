import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMovie } from "@/context/MovieProvider";

const SectionPagination = () => {
  const { currentPage, totalPage, handleCurrentPage } = useMovie();

  return (
    <Pagination>
      <PaginationContent className="flex flex-wrap justify-center">
        <PaginationItem onClick={() => handleCurrentPage(currentPage - 1)}>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={() => handleCurrentPage(1)}>
              1
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={() => handleCurrentPage(2)}>
              2
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage != totalPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage != totalPage && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handleCurrentPage(totalPage)}
            >
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem onClick={() => handleCurrentPage(currentPage + 1)}>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default SectionPagination;
