"use client"; // Important because we are using a click event

import { DownloadIcon, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className=" text-white">
      <nav className="max-w-6xl mx-auto sm:flex items-center justify-between px-4 py-4">
        <div className="sm:text-4xl text-2xl font-bold text-[#087c04]">
          <p>JJWINGAME.CC</p>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="w-full sm:w-auto flex items-center justify-center">
          <button>
            <a
              href="https://www.jjwin.game/?dl=$blac6z$PKR$2"
              className="inline-flex items-center justify-center bg-[#087c04] text-[#ffffff] text-lg font-semibold px-8 py-3 rounded-xl shadow-md transition mt-5 gap-2 w-full"
            >
              DOWNLOAD <DownloadIcon />
            </a>{" "}
          </button>
        </div>
      </nav>
    </header>
  );
}
