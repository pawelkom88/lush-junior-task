import { NumberOfProductsToDisplayArray } from "@root/constants/constants";

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
        {NumberOfProductsToDisplayArray.map(number => {
          return (
            <option key={number} value={number}>
              {number}
            </option>
          );
        })}
      </select>
    </>
  );
}
