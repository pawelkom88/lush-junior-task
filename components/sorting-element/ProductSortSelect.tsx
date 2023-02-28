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
        <option value="NAME">Name</option>
        <option value="PRICE">Price</option>
        <option value="RATING">Rating</option>
      </select>
    </>
  );
}
