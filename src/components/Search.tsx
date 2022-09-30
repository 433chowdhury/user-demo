import React from "react";
import { search } from "../assets/icons";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ value, setValue }: Props) {
  return (
    <div className="px-48 pt-16 flex justify-center">
      <div className="relative">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for users..."
          className="outline-none rounded-full focus:bg-neutral-200/70 transition-colors duration-300 bg-neutral-200/40 px-10 pr-20 py-5 flex-1 text-neutral-600 text-xl tracking-widest placeholder:tracking-normal"
        />
        <img
          src={search}
          alt="search"
          className="absolute right-8 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default Search;
