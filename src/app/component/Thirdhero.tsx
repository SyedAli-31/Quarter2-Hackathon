import React from "react";
import Link from "next/link";
const Thirdhero = () => {
  return (
    <div>
      <section>
        <div className="container px-5 mx-auto ml-20">
          <div className="flex flex-wrap -m-4">
            <div className="md:w-[305px] h-[375px] p-4">
              <img
                className="w-[305px] h-[375px] object-cover object-center mb-6"
                src="/parent1.png"
                alt="content"
              />
              <div className="mt-5 text-start text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">The Dandy chair</a>
                </p>
                <p>
                  
                  <a href="#" className="hover:text-blue-500 hover:underline  ">£250</a>
                </p>
              </div>
            </div>
            <div className="md:w-[305px] h-[375px] p-4">
              <img
                className="w-[305px] h-[375px] object-cover object-center mb-6"
                src="/parent2.png"
                alt="content"
              />
              <div className="mt-5 text-start text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">
                    Rustic Vase Set
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">
                    £155
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-[305px] h-[375px] p-4">
              <img
                className="w-[305px] h-[375px] object-cover object-center mb-6"
                src="/parent3.png"
                alt="content"
              />
              <div className="mt-5 text-start text-[20px] font-normal">
                <p ><a href="#" className="hover:text-blue-500 hover:underline  ">The Silky Vase</a></p>
                <p  ><a href="#" className="hover:text-blue-500 hover:underline  ">£125</a></p>
              </div>
            </div>
            <div className="md:w-[305px] h-[375px] p-4">
              <img
                className="w-[305px] h-[375px] object-cover object-center mb-6"
                src="/parent4.png"
                alt="content"
              />
              <div className="mt-5 text-start text-[20px] font-normal">
                <p><a href="#" className="hover:text-blue-500 hover:underline  ">The Lucy Lamp</a></p>
                <p ><a href="#" className="hover:text-blue-500 hover:underline  ">£399</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Center the button */}
      <div className="flex justify-center mt-[150px]">
        <button className="w-[170px] bg-[#F9F9F9] text-[#2A254B]  text-[16px] px-6 py-3 rounded-lg shadow hover:bg-gray-200 flex text-center justify-center">
         <Link href="/AllProducts"> View Collection</Link>
        </button>
      </div>
    </div>
  );
};

export default Thirdhero;
