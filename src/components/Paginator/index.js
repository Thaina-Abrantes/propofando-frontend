import ReactPaginate from 'react-paginate';
import styles from './styles.module.scss';

export default function Paginator({ setCurrentPage, totalPages }) {
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className={styles.paginator}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Próximo"
        onPageChange={handlePageClick}
        previousLabel
        pageRangeDisplayed={2}
        pageCount={totalPages || 1}
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
