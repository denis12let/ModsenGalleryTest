import { FC } from 'react';
import {
  PaginationContainer,
  PaginationButton,
  ArrowButton,
} from './Pagination.style';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages = 1,
  onPageChange,
}) => {
  const maxButtons = 4;

  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);

  if (endPage - startPage < maxButtons - 1) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  return (
    <PaginationContainer>
      <ArrowButton onClick={() => onPageChange(currentPage - 1)}>
        {currentPage !== 1 && '<'}
      </ArrowButton>

      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <PaginationButton
          key={page}
          onClick={() => onPageChange(page)}
          isActive={page === currentPage}
        >
          {page}
        </PaginationButton>
      ))}

      <ArrowButton onClick={() => onPageChange(currentPage + 1)}>
        {currentPage !== totalPages && '>'}
      </ArrowButton>
    </PaginationContainer>
  );
};
