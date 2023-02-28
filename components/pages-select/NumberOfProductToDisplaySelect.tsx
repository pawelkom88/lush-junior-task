export default function NumberOfProductToDisplaySelect({
  value,
  onProductToDisplayChange,
}: {
  value: number;
  onProductToDisplayChange: (val: number) => void;
}) {
  return (
    <>
      Products per page:
      <select
        className="select"
        onChange={(e: React.ChangeEvent<{ value: string }>) =>
          onProductToDisplayChange(+e.target.value)
        }
        title="select"
        value={value}>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
    </>
  );
}
