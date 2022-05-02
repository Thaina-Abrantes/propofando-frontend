import ReactPaginate from 'react-paginate';
import { useStores } from 'stores';
import styles from './styles.module.scss';

export default function PaginatorUsers() {
  const {
    studentAdminStore: {
      setCurrentPage,
      totalPages,
      currentPage,
    },

  } = useStores();

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className={styles.paginator}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={currentPage === totalPages ? '' : 'Próximo'}
        onPageChange={handlePageClick}
        previousLabel={totalPages === 1 || currentPage === 1 ? '' : 'Anterior'}
        pageRangeDisplayed={2}
        pageCount={totalPages}
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
