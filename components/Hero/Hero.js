import React from "react";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";

export default function Hero() {
  return (
    <section className="text-browny-500 body-font">
      <div className="mx-0 sm:mx-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-kaushan sm:text-4xl text-3xl mb-4 font-medium text-browny-500">
              Deliciously
            </h1>
            <h1 className="sm:text-4xl text-3xl font-serif mb-4 font-medium text-browny-500">
              Wrapped Finance!
            </h1>
            <p className="mb-8 leading-relaxed sm:w-3/4">
              Bao (包) stands for a treasure or package. Something wonderful
              that is wrapped up in another layer. Bao buns, or in Chinese Baozi
              (包子) are delicious wrapped dumplings.
            </p>
            <div className="sm:w-10/12 w-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">Bao Finance</p>
                </div>
                <div></div>
                <div className="flex gap-2">
                  <Facebook />
                  <Twitter />
                  <Instagram />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center mx-4">
                  <svg
                    width="8"
                    height="60"
                    viewBox="0 0 8 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64645 59.3535C3.84171 59.5488 4.15829 59.5488 4.35356 59.3535L7.53554 56.1716C7.7308 55.9763 7.7308 55.6597 7.53554 55.4645C7.34027 55.2692 7.02369 55.2692 6.82843 55.4645L4 58.2929L1.17158 55.4645C0.976313 55.2692 0.659731 55.2692 0.464469 55.4645C0.269206 55.6597 0.269206 55.9763 0.464469 56.1716L3.64645 59.3535ZM3.5 2.18557e-08L3.5 59L4.5 59L4.5 -2.18557e-08L3.5 2.18557e-08Z"
                      fill="#59251B"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-8 leading-relaxed">
                    These bao buns are the tradition of taking something good
                    that exists, and wrapping it up into being a new treasure.
                    Bao Finance aims to do this by being a new protocol that
                    adds features to existing DeFi systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="button-clippath mr-12 inline-flex items-center bg-browny-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-browny-200 rounded text-base mt-4 md:mt-0">
                Mainnet
              </button>
              <button className="button-clippath inline-flex items-center bg-browny-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-browny-200 rounded text-base mt-4 md:mt-0">
                Mainnet
              </button>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="wallethome.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
