import classes from "./Pagination.module.scss";

export default function Pagination({
  onLoadMore,
  itemCount,
  totalCount,
}: {
  onLoadMore: () => void;
  totalCount: number;
  itemCount: number;
}) {
  return (
    <nav className={classes.pagination}>
      <button className={`${classes["pagination-btn"]} button`} onClick={onLoadMore}>
        Load More
      </button>
      {itemCount && totalCount && (
        <div className={classes["pagination-page-count"]}>
          {itemCount} out of {totalCount}
        </div>
      )}
    </nav>
  );
}
