import Image from "next/image";
import React from "react";

export default function TheVision() {
  return (
    <section className="text-browny-500 body-font min-h-[70vh] mb-20">
      <div className=" ">
        <div className="container px-24 py-24 flex flex-wrap items-center bg-browny-400 md:w-3/4">
          <div className="md:w-full md:pr-16 lg:pr-0 pr-0">
            <div>
              <h1 className="font-kaushan font-medium text-xl text-browny-500">
                The
              </h1>
              <h1 className="font-serif font-medium text-xl text-browny-500">
                bao vision
              </h1>
              <p className="leading-relaxed mt-4 w-full text-sm sm:w-3/4">
                Traditional finance doesn’t work. For too long it’s been serving
                the wealthy suits while erecting barriers of entry for everyone
                else. They own the data, restrict the tools, and change the
                rules to always be in their favor. It’s time to not only give
                that power back to the people, but to create even more powerful
                tools that the old cumbersome system could never dream of.
              </p>
            </div>
            <div className="ml-12 md:w-3/4 my-4 w-full">
              <p className="leading-relaxed text-sm">
                At Bao Finance, we’re building a community composed of brilliant
                minds all seeking control of their own finances and building a
                new system that works for everyone. Synthetic assets allow us to
                create financial instruments and markets never seen before. If
                the data exists, so too can a marketplace for it - the
                possibilities are endless.
              </p>
              <button className="button-clippath mr-12 inline-flex items-center bg-browny-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-browny-200 rounded text-base mt-4 md:mt-0">
                Mainnet
              </button>
            </div>
          </div>
        </div>
        <div className="lg:relative hidden border h-72 w-72 bg-gray-300 -right-[55vw] -top-[20vh] z-10 shadow-lg">
          <Image alt="img" src="/wallet.png" height={400} width={350} />
        </div>
      </div>
    </section>
  );
}
