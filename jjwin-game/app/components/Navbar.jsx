"use client"; // Important because we are using a click event

import { DownloadCloud, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" text-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-6">
        <div className="text-2xl font-bold">
          <Link href="/">JJ WIN</Link>
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
        <div>
          <Search />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col bg-zinc-900 md:hidden p-4 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
