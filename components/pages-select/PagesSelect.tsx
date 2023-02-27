import { useState } from "react";

export default function SortingElement() {
  const [numberOfPages, setNumberOfPages] = useState("");
  return (
    <>
      <select
        className="select"
        onChange={(e: React.ChangeEvent<{ value: string }>) => setNumberOfPages(e.target.value)}
        title="select"
        value={numberOfPages}>
        <option value="" disabled>
          PRODUCTS PER PAGE
        </option>
        <option value="NAME">10</option>
        <option value="PRICE">20</option>
        <option value="PRICE">30</option>
      </select>
    </>
  );
}
