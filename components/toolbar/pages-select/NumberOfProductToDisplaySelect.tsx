import { NumberOfProductsToDisplayArray } from "@root/constants/constants";

export default function NumberOfProductToDisplaySelect({
  numberOfProductsToDisplay,
  onSetNumberOfProductsToDisplay,
}: {
  numberOfProductsToDisplay: number;
  onSetNumberOfProductsToDisplay: (val: number) => void;
}) {
  return (
    <>
      Products per page:
      <select
        className="select"
        onChange={(e: React.ChangeEvent<{ value: string }>) =>
          onSetNumberOfProductsToDisplay(+e.target.value)
        }
        title="Products per page"
        value={numberOfProductsToDisplay}>
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
