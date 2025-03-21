"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) {
      router.push("/welcome");
      return;
    }
    router.push(`/${search}`);
    setSearch("");
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl dark:text-black/90 rounded-xl
        outline-none"
        placeholder="Search for anything!"
      />
      <button className="p-2 bg-slate-300 text-black dark:text-white dark:bg-black text-xl rounded-xl ml-2 font-bold">
        Go!
      </button>
    </form>
  );
};
export default Search;
