import React from "react";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Logo from "../Icons/Logo";
import Twitter from "../Icons/Twitter";

export default function Footer() {
  return (
    <footer className="text-browny-500 body-font pt-12 bg-browny-150">
      <div className="flex justify-center">
        <div>
          <div>
            <a className="flex title-font font-medium items-center text-browny-500 mb-4 md:mb-0">
              <Logo />
              <span className="ml-3 text-3xl font-kaushan">Bao Finance</span>
            </a>
          </div>
          <div className="flex gap-2 items-center justify-center mt-12">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-browny-500 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-blue-900">First Link</a>
              </li>
              <li>
                <a className="text-blue-900">Second Link</a>
              </li>
              <li>
                <a className="text-blue-900">Third Link</a>
              </li>
              <li>
                <a className="text-blue-900">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-browny-500 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-blue-900">First Link</a>
              </li>
              <li>
                <a className="text-blue-900">Second Link</a>
              </li>
              <li>
                <a className="text-blue-900">Third Link</a>
              </li>
              <li>
                <a className="text-blue-900">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-browny-500 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-blue-900">First Link</a>
              </li>
              <li>
                <a className="text-blue-900">Second Link</a>
              </li>
              <li>
                <a className="text-blue-900">Third Link</a>
              </li>
              <li>
                <a className="text-blue-900">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-browny-500 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-blue-900">First Link</a>
              </li>
              <li>
                <a className="text-blue-900">Second Link</a>
              </li>
              <li>
                <a className="text-blue-900">Third Link</a>
              </li>
              <li>
                <a className="text-blue-900">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-browny-500 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-blue-900">First Link</a>
              </li>
              <li>
                <a className="text-blue-900">Second Link</a>
              </li>
              <li>
                <a className="text-blue-900">Third Link</a>
              </li>
              <li>
                <a className="text-blue-900">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-browny-300 flex justify-center">
        <div className="container my-6 flex justify-center items-center">
          <p className="text-browny-500 text-sm text-center">
            Copyright © 2022 bao-finance. All Rights Reserved. Designed By Hadi
            Designers
          </p>
        </div>
      </div>
    </footer>
  );
}
