import ReactPaginate from 'react-paginate';
import { useStores } from 'stores';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export default function PaginatorUsers({ itemsPerPage }) {
  const {
    studentAdminStore: {
      dataUsers,
    },
  } = useStores();
  const [currentItems, setCurrentItems] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(dataUsers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataUsers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (((event.selected * itemsPerPage)) % dataUsers.length) + 1;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.paginator}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Próximo"
        onPageChange={handlePageClick}
        previousLabel
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
