import Link from 'next/link';
import styles from './Pagination.module.scss';

const Pagination = (props) => {
  const {info, loadNewPage} = props;
  const prevClassname = info.prev ? '' : styles.disabled;
  const nextClassname = info.next ? '' : styles.disabled;

  return (
    <>
      <div className={styles.pagination}>
        <ul>
          <li>
            <span 
              onClick={() => info.prev ? loadNewPage(info.prev) : null}
              className={prevClassname}
            >
              &lt;
            </span>
          </li>
          <li>
            <span 
              onClick={() => info.next ? loadNewPage(info.next) : null}
              className={nextClassname}
            >
              &gt;
            </span>
          </li>
        </ul>
      </div>
    </>
  );

}

export default Pagination;