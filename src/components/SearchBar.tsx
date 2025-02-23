"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setSearchQuery } from "@/redux/jobSlice";

// interface SearchBarProps {
//   search: string,
//   setSearch: (quest: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
const SearchBar: React.FC = () => {

  // Access the search query from Redux state
  const search = useSelector((state: RootState) => state.jobs.searchQuery);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // Dispatch the action to update the search query in Redux
  dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input 
      type="text"
      placeholder="Search jobs..." 
      // className="border-2 border-red-200 p-3 rounded-lg"
      className="w-full h-20 lg:w-1/2 p-2 border bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-md"
      value={search}
      onChange={handleSearchChange} 
    />
  );
};

export default SearchBar