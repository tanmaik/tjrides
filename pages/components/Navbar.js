import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

function Navbar() {
  return (
    <div
      className="w-full flex p-10
  "
    >
      <Image src={logo} width={40}></Image>
      <h2 className="p-2 text-2xl">tjrides</h2>
    </div>
  );
}

export default Navbar;
