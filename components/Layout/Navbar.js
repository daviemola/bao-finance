import React from "react";
import Logo from "../Icons/Logo";

export default function Navbar() {
  return (
    <header className="text-browny-500 body-font">
      <div className="mx-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-browny-500 mb-4 md:mb-0">
            <Logo />
            <span className="ml-3 text-3xl font-kaushan">Bao Finance</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-browny-500">Developers</a>
            <a className="mr-5 hover:text-browny-500">Franchises</a>
            <a className="mr-5 hover:text-browny-500">Governance</a>
            <a className="mr-5 hover:text-browny-500">Community</a>
            <a className="mr-5 hover:text-browny-500">About</a>
          </nav>
          <button className="button-clippath mr-12 inline-flex items-center bg-browny-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-browny-200 rounded text-base mt-4 md:mt-0">
            Mainnet
          </button>
        </div>
      </div>
    </header>
  );
}
