import React from "react";
import { FaHotjar } from "react-icons/fa";
import Image1 from "../Icons/Image1";

export default function CrossChain() {
  return (
    <section className="text-browny-500 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-2xl text-xl font-kaushan font-medium text-center title-font text-browny-500 mb-4">
            We&apos;re Building a Crosschain DeFi Ecosystem
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Bao is creating a multinetwork suite of applications that will
            provide services to DeFi users regardless of their preferred chains.
            We’ve already deployed our main project and franchised versions of
            it on xDai, Binance Smart Chain, and Polygon; with more planned in
            the future.
          </p>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-1">
          <div className="p-4">
            <div className="h-full bg-browny-50 border-2 border-browny-500 border-opacity-20  px-8 py-6 rounded-lg overflow-hidden text-center relative">
              <div className="flex justify-center my-4">
                <FaHotjar className="text-3xl" />
              </div>
              <h1 className="font-kaushan sm:text-xl text-base font-medium text-browny-500 mb-3">
                Sythetics
              </h1>
              <p className="leading-relaxed mb-3 my-4 text-xs">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="h-full bg-browny-50 border-2 border-browny-500 border-opacity-20  px-8 py-6 rounded-lg overflow-hidden text-center relative">
              <div className="flex justify-center my-4">
                <Image1 />
              </div>
              <h1 className="font-kaushan sm:text-xl text-base font-medium text-browny-500 mb-3">
                Sythetics
              </h1>
              <p className="leading-relaxed mb-3 my-4 text-xs">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="h-full bg-browny-50 border-2 border-browny-500 border-opacity-20  px-8 py-6 rounded-lg overflow-hidden text-center relative">
              <div className="flex justify-center my-4">
                <FaHotjar className="text-3xl" />
              </div>
              <h1 className="font-kaushan sm:text-xl text-base font-medium text-browny-500 mb-3">
                Sythetics
              </h1>
              <p className="leading-relaxed mb-3 my-4 text-xs">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="h-full bg-browny-50 border-2 border-browny-500 border-opacity-20  px-8 py-6 rounded-lg overflow-hidden text-center relative">
              <div className="flex justify-center my-4">
                <FaHotjar className="text-3xl" />
              </div>
              <h1 className="font-kaushan sm:text-xl text-base font-medium text-browny-500 mb-3">
                Sythetics
              </h1>
              <p className="leading-relaxed mb-3 my-4 text-xs">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
