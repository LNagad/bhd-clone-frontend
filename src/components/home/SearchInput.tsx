'use client';

import { useState } from 'react';
import { CloseMarkSVG } from '@/ui';

const SearchInput = () => {
  const [input, setInput] = useState('');

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
        className="placeholder:text-gray-500 shadow-xl shadow-gray-200 rounded-3xl w-[90%]
        active:outline-none focus:outline-none px-7 py-4 sm:px-9 py-6 sm:text-lg"
      />

      {input.length > 0 && (
        <button
          onClick={() => setInput('')}
          className="absolute right-10 sm:right-14 top-0 bottom-0"
        >
          <CloseMarkSVG className="sm:text-xl" fill="#878682" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
