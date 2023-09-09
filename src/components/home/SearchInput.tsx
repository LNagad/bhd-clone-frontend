"use client";

import { CloseMarkSVG } from "@/ui";
import { useState } from "react";

const SearchInput = () => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        onChange={handleChange}
        value={input}
        placeholder="¿Qué estás buscando?"
        className="placeholder:text-gray-500 shadow-xl shadow-gray-200 px-7 py-4 rounded-3xl w-[90%]
        active:outline-none focus:outline-none "
      />

      {input.length > 0 && (
        <button
          onClick={() => setInput("")}
          className="absolute right-10 top-0 bottom-0"
        >
          <CloseMarkSVG fill="#878682" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
