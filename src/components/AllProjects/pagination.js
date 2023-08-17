import React from 'react';
import styled from 'styled-components/macro';

const Center = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: var(--projects);
padding-bottom: 3rem;
`;

const PagBtn = styled.button`
  width: 40px;
  height: 40px; 
  margin: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? 'var(--fontColor)' : 'var(--defaultBtn)')};
  color: ${(props) => (props.isActive ? 'var(--defaultBtn)' : 'var(--fontColor)')};
  font-family: 'GT Walsheim Pro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--demoBtn);
    color: var(--skills);
  }
`;

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Center>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <PagBtn
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          isActive={currentPage === pageNumber}>
          {pageNumber}
        </PagBtn>
      ))}
    </Center>
  );
};
