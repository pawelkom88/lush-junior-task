import { NameOfSortingCriteriasArray } from "@root/constants/constants";

export default function ProductSortSelect({
  onSortBy,
  sortBy,
}: {
  sortBy: string;
  onSortBy: (val: string) => void;
}) {
  return (
    <>
      Sort by:
      <select
      
        className="select"
        onChange={(e: React.ChangeEvent<{ value: string }>) => onSortBy(e.target.value)}
        title="Sort by"
        value={sortBy}>
        {NameOfSortingCriteriasArray.map(sortedBy => {
          return (
            <option key={sortedBy} value={sortedBy}>
              {sortedBy}
            </option>
          );
        })}
      </select>
    </>
  );
}
