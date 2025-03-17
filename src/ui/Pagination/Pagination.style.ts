import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -70px;
  padding-bottom: 40px;
  gap: 10px;
  width: 100%;
  @media (max-width: 650px) {
    margin-top: 0px;
    padding-bottom: 20px;
  }
`;

export const PaginationButton = styled.button<{ isActive?: boolean }>`
  padding: 3px 10px;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? '#F17900' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#393939')};
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#f79c40' : '#f0f0f0')};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  font-family: Lexend Deca;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
`;

export const ArrowButton = styled(PaginationButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
