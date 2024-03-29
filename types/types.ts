import { CheckoutFetchByTokenQuery, ProductOrderField } from "./../generated/api";
import { ApolloError } from "@apollo/client/errors";

export interface CartCtx {
  data: CheckoutFetchByTokenQuery | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

export type Props = {
  children: React.ReactNode;
};

export type SearchBarProps = {
  onSetKeyword: (val: string) => void;
  onShowSearchField: () => void;
  isDisplayed: boolean;
};

export type ThumbnailProps = {
  media: { url: string }[] | null | undefined;
  alt: string;
  onSelectedImage: (url: string) => void;
};

export interface SrButtonProps extends Props {
  text: string;
}

export interface ToolBarProps {
  sortBy: string;
  numberOfProductsToDisplay: number;
  onSortBy: (val: string) => void;
  onSetNumberOfProductsToDisplay: (val: number) => void;
}

export interface ProductsProps {
  keyword: string;
  numberOfProductsToDisplay: number;
  sortBy: ProductOrderField | string;
}

export interface ProductDescription {
  id: string;
  data: {
    text: string;
    type: string;
  };
}
