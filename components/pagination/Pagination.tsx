import { Maybe } from "@generated/api";
import React from "react";

export default function Pagination({
  onFetchMoreProducts,
}: {
  onFetchMoreProducts: (val: {}) => void;
}) {
  return (
    <nav>
      <a onClick={onFetchMoreProducts}>Load More</a>
    </nav>
  );
}
