import SortByIcon from "@root/public/icons/SortByIcon";

export default function SortingElement({
  onSortBy,
  value,
}: {
  value: string;
  onSortBy: (val: string) => void;
}) {
  return (
    <>
      <SortByIcon />
      <select
        className="select"
        onChange={(e: React.ChangeEvent<{ value: string }>) => onSortBy(e.target.value)}
        title="select"
        value={value}>
        <option value="" disabled>
          SORT BY
        </option>
        <option value="NAME">Name</option>
        <option value="PRICE">Price</option>
        <option value="RATING">Rating</option>
      </select>
    </>
  );
}
