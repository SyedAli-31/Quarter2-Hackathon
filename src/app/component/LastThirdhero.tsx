import React from "react";
import Image from "next/image";

const LastThirdhero = () => {
  return (
    <div>
      <section>
        <div className="container px-5 mx-auto">
          <div className="grid md:mr-0 text-[#22202E]  grid-cols-2 md:grid-cols-4 gap-4">
            {/* Product 1 */}
            <div className="p-2">
              <Image
                src="/Parent1.png"
                alt="The Dandy chair"
                width={305}
                height={375}
                className="w-full h-[180px] md:w-[305px] md:h-[375px] object-cover object-center mb-4"
              />
              <div className="text-start text-[#22202E] text-[16px] md:text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline">
                    The Dandy chair
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline">
                    £250
                  </a>
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="p-2">
              <Image
                src="/Parent2.png"
                alt="Rustic Vase Set"
                width={305}
                height={375}
                className="w-full h-[180px] md:w-[305px] md:h-[375px] object-cover object-center mb-4"
              />
              <div className="text-start text-[#22202E] text-[16px] md:text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline">
                    Rustic Vase Set
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline">
                    £155
                  </a>
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="p-2">
              <Image
                src="/parent3.png"
                alt="The Silky Vase"
                width={305}
                height={375}
                className="w-full h-[180px] md:w-[305px] md:h-[375px] object-cover object-center mb-4"
              />
              <div className="text-start text-[#22202E] text-[16px] md:text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline">
                    The Silky Vase
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline">
                    £125
                  </a>
                </p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="p-2">
              <Image
                src="/parent4.png"
                alt="The Lucy Lamp"
                width={305}
                height={375}
                className="w-full h-[180px] md:w-[305px] md:h-[375px] object-cover object-center mb-4"
              />
              <div className="text-start text-[#22202E] text-[16px] md:text-[20px] font-normal">
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline">
                    The Lucy Lamp
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:text-blue-500 hover:underline">
                    £399
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LastThirdhero;
