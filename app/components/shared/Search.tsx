import React, { ChangeEvent, FC } from "react";
import Image from "next/image";

interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({
  value,
  placeholder = "Search",
  onChange,
}) => {
  return (
    <div className="w-full max-w-[288px] h-12 relative">
      <Image
        src="/search.png"
        width={24}
        height={24}
        alt="Search"
        className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none"
      />
      <input
        type="text"
        className="w-full h-full bg-transparent px-0 pl-11 pr-4 font-jost font-semibold text-base placeholder:text-white border border-white rounded-lg focus:outline-2 focus:outline-info focus:outline-offset-2 focus:ring-0 focus:border-white"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
