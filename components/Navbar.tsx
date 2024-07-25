import React from "react";
import { appleImg, searchImg } from "../utils";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Image src={appleImg} alt="Apple" width={14} height={18} />
        <div className="">
          {["Phones", "Macbooks", "Tablets"].map((nav) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>

        <div className="">
          <Image src={searchImg} alt="Search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
