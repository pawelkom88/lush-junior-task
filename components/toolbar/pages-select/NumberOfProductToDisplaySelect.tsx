import { productsPerPageOptions } from "@root/constants/constants";

export default function NumberOfProductToDisplaySelect({
  numberOfProductsToDisplay,
  onSetNumberOfProductsToDisplay,
}: {
  numberOfProductsToDisplay: number;
  onSetNumberOfProductsToDisplay: (val: number) => void;
}) {
  return (
    <>
      <label htmlFor="products">Products per page:</label>
      <select
        id="products"
        className="select"
        onChange={(e: React.ChangeEvent<{ value: string }>) =>
          onSetNumberOfProductsToDisplay(+e.target.value)
        }
        title="Products per page"
        value={numberOfProductsToDisplay}>
        {productsPerPageOptions.map(number => {
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
