"use client";

import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center place-content-center p-6 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
          <h1 className="text-xl font-bold">
            <Link href="/">JobChaser</Link> 
          </h1>
          <Navbar />
        </header>
      );
}

export default Header