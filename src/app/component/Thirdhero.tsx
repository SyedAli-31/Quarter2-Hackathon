import React from "react";
import Link from "next/link";
import Image from "next/image";
const Thirdhero = () => {
  return (
    <div>
      <section>
        <div className="container px-5 mx-auto md:ml-20">
          <div className="flex flex-wrap -m-4">
            <div className="md:w-[305px] md:h-[375px] p-4">
              <Image
                src="/Parent1.png"
                alt="content"
                width={370}
                height={375}
                className="md:w-[305px] md:h-[375px] object-cover object-center mb-6"
              />
              <div className="mt-5 text-start text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">
                    The Dandy chair
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">
                    £250
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-[305px] md:h-[375px] p-4">
              <Image
                src="/Parent2.png"
                alt="content"
                width={370}
                height={375}
                className="md:w-[305px] md:h-[375px] object-cover object-center mb-6"
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
            <div className="md:w-[305px] md:h-[375px] p-4">
              <Image
                src="/parent3.png"
                alt="content"
                width={370}
                height={375}
                className="md:w-[305px] md:h-[375px] object-cover object-center mb-6"
              />
              <div className="mt-5 text-start text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">
                    The Silky Vase
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">
                    £125
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-[305px] md:h-[375px] p-4">
              <Image
                src="/parent4.png"
                alt="content"
                width={370}
                height={375}
                className="md:w-[305px] md:h-[375px] object-cover object-center mb-6"
              />
              <div className="mt-5 text-start text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">
                    The Lucy Lamp
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline  ">
                    £399
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Center the button */}
      <div className="flex justify-center mt-[10px] md:mt-[150px]">
        <button className="w-[370px] md:w-[170px] md:ml-0 ml-2 bg-gray-100 text-[#2A254B] px-6 py-3 rounded-lg shadow hover:bg-red-400 mt-[60px] md:mt-auto ">
          <Link href="/AllProducts">View Collection</Link>
        </button>
      </div>
    </div>
  );
};

export default Thirdhero;
