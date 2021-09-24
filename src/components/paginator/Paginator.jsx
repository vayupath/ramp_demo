import React from 'react';
import { ReactComponent as Last } from '../../assets/forward-double.svg';
import { ReactComponent as Next } from '../../assets/next.svg';
import { ReactComponent as Previous } from '../../assets/previous.svg';
import { ReactComponent as First } from '../../assets/rewind-double.svg';
import { PagContainer, Page } from './PaginatorStyles';

function Paginator(props) {
  const { selectedPage, itemsPerPage, totalItems, setPage } = props;
  console.log(props);

  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  let pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <Page
        selected={selectedPage === i}
        key={i}
        className='mx-2 p-1'
        onClick={() => {
          setPage(i);
        }}
      >
        {i}
      </Page>
    );
  }

  return (
    <>
      {numberOfPages > 1 ? (
        <PagContainer className='my-5'>
          <First
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setPage(1);
            }}
            className='mx-2'
          />
          <Previous
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (selectedPage === 1) {
                return;
              }
              setPage(selectedPage - 1);
            }}
            className='mx-2'
          />
          {pages}
          <Next
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (selectedPage === numberOfPages) {
                return;
              }
              setPage(selectedPage + 1);
            }}
            className='mx-2'
          />
          <Last
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setPage(numberOfPages);
            }}
            className='mx-2'
          />
        </PagContainer>
      ) : null}
    </>
  );
}

export default Paginator;
