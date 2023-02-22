import { useState } from "react";
// import { useState, Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  //   setKeyword: Dispatch<SetStateAction<string>>;
  onSetKeyword: (val: string) => void;
};

export default function SearchBar({ onSetKeyword }: SearchBarProps) {
  const [value, setValue] = useState<string>("");

  function onSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    onSetKeyword(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Search:
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
}
