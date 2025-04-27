import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-[#d3d6dc] py-5">
      <ul className="flex justify-evenly">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/timer">Timer</Link>
        </li>
        <li>
          <Link href="/animate">Animate</Link>
        </li>
        <li>
          <Link href="/composition">Composition</Link>
        </li>
        <li>
          <Link href="/">E</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
