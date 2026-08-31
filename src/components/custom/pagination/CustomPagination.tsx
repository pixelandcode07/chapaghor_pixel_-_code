"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 4) {
      pages.push("ellipsis");
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    if (currentPage < totalPages - 3) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    onPageChange(page);
  };

  return (
    <Pagination className="pt-[15px] md:pt-[20px] xl:pt-[36px] 1xl:pt-[41px] 3xl:pt-[56px]">
      <PaginationContent className="gap-[10px] md:gap-[12px] xl:gap-[14px] ">
        {/* First Page */}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to first page"
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(1);
            }}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E5E5E5] bg-white p-0 text-[#555555] shadow-none transition-all hover:bg-[#F8F8F8] md:h-[42px] md:w-[42px] xl:h-[48px] xl:w-[48px] xl:rounded-[12px]"
          >
            <ChevronsLeft className="h-[17px] w-[17px] md:h-[20px] md:w-[20px] xl:h-[22px] xl:w-[22px]" />
          </PaginationLink>
        </PaginationItem>

        {/* Previous Page */}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to previous page"
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(currentPage - 1);
            }}
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E5E5E5] bg-white p-0 text-[#555555] shadow-none transition-all hover:bg-[#F8F8F8] md:h-[42px] md:w-[42px] xl:h-[48px] xl:w-[48px] xl:rounded-[12px] ${
              currentPage === 1
                ? "pointer-events-none opacity-40"
                : ""
            }`}
          >
            <ChevronLeft className="h-[17px] w-[17px] md:h-[20px] md:w-[20px] xl:h-[22px] xl:w-[22px]" />
          </PaginationLink>
        </PaginationItem>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis className="h-[34px] w-[34px] md:h-[42px] md:w-[42px] xl:h-[48px] xl:w-[48px]" />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={(event) => {
                  event.preventDefault();
                  handlePageChange(page);
                }}
                className={`flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-transparent p-0 text-[13px] font-medium shadow-none transition-all md:h-[42px] md:w-[42px] md:text-[15px] xl:h-[48px] xl:w-[48px] xl:rounded-[12px] xl:text-[17px] ${
                  currentPage === page
                    ? "bg-[#FF7628] text-white hover:bg-[#FF7628] hover:text-white"
                    : "bg-white text-[#555555] hover:bg-[#F8F8F8]"
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next Page */}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to next page"
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(currentPage + 1);
            }}
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E5E5E5] bg-white p-0 text-[#555555] shadow-none transition-all hover:bg-[#F8F8F8] md:h-[42px] md:w-[42px] xl:h-[48px] xl:w-[48px] xl:rounded-[12px] ${
              currentPage === totalPages
                ? "pointer-events-none opacity-40"
                : ""
            }`}
          >
            <ChevronRight className="h-[17px] w-[17px] md:h-[20px] md:w-[20px] xl:h-[22px] xl:w-[22px]" />
          </PaginationLink>
        </PaginationItem>

        {/* Last Page */}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to last page"
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(totalPages);
            }}
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#E5E5E5] bg-white p-0 text-[#555555] shadow-none transition-all hover:bg-[#F8F8F8] md:h-[42px] md:w-[42px] xl:h-[48px] xl:w-[48px] xl:rounded-[12px] ${
              currentPage === totalPages
                ? "pointer-events-none opacity-40"
                : ""
            }`}
          >
            <ChevronsRight className="h-[17px] w-[17px] md:h-[20px] md:w-[20px] xl:h-[22px] xl:w-[22px]" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}