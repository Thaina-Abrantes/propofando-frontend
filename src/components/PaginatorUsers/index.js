import ReactPaginate from 'react-paginate';
import { useStores } from 'stores';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export default function PaginatorUsers({ dataUsers, itemsPerPage }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(dataUsers);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    dataUsers.slice(itemOffset, endOffset);
    setPageCount(Math.ceil(dataUsers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = ((event.selected + 1) * itemsPerPage) % dataUsers.length;
    setCurrentPage(event.selected + 1);
    setItemOffset(newOffset);
  };
  // const {
  //   studentAdminStore: {
  //     setCurrentPage,
  //     totalPages,
  //     currentPage,
  //   },

  // } = useStores();

  // const handlePageClick = (event) => {
  //   setCurrentPage(event.selected + 1);
  // };

  return (
    <div className={styles.paginator}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={currentPage === dataUsers.length ? '' : 'Próximo'}
        onPageChange={handlePageClick}
        previousLabel={dataUsers.length === 1 || currentPage === 1 ? '' : 'Anterior'}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        containerClassName={styles['container-class-name']}
        pageClassName={styles['page-class-name']}
        pageLinkClassName={styles['page-link-class-name']}
        activeLinkClassName={styles['active-link-class-name']}
        previousClassName={styles['previous-class-name']}
        nextClassName={styles['next-class-name']}
        breakClassName={styles['break-class-name']}
      />
    </div>
  );
}
