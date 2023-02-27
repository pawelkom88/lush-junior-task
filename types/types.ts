export type Props = {
  children: React.ReactNode;
};

export type SearchBarProps = {
  onSetKeyword: (val: string) => void;
  onShowSearchField: () => void;
  isDisplayed: boolean;
};

export interface ProductDescription {
  id: string;
  data: {
    text: string;
    type: string;
  };
}

export type ThumbnailProps = {
  media: { url: string }[] | null | undefined;
  alt: string;
  onSelectedImage: (url: string) => void;
};

export interface SrButtonProps extends Props {
  text: string;
}
