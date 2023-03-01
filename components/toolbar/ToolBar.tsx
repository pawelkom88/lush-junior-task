import NumberOfProductToDisplaySelect from "@components/pages-select/NumberOfProductToDisplaySelect";
import ProductSortSelect from "@components/sorting-element/ProductSortSelect";
import { ToolBarProps } from "types/types";
import classes from "./ToolBar.module.scss";

export default function ToolBar({
  sortBy,
  onSortBy,
  numberOfProductsToDisplay,
  onSetNumberOfProductsToDisplay,
}: ToolBarProps) {
  return (
    <div className={classes["select-wrapper"]}>
      <ProductSortSelect sortBy={sortBy} onSortBy={onSortBy} />
      <NumberOfProductToDisplaySelect
        numberOfProductsToDisplay={numberOfProductsToDisplay}
        onSetNumberOfProductsToDisplay={onSetNumberOfProductsToDisplay}
      />
    </div>
  );
}
