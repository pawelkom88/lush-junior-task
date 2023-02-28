import { NameOfSortingCriteriasArray } from "@root/constants/constants";

export default function ProductSortSelect({
  onSortBy,
  value,
}: {
  value: string;
  onSortBy: (val: string) => void;
}) {
  return (
    <>
      Sort by:
      <select
        className="select"
        onChange={(e: React.ChangeEvent<{ value: string }>) => onSortBy(e.target.value)}
        title="select"
        value={value}>
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
