import React from "react";

const LastThirdhero = () => {
  return (
    <div>
      <section>
        <div className="container px-5 mx-auto">
          <div className="grid md:mr-0 mr-14 grid-cols-2 md:grid-cols-4 gap-4">
            {/* Product 1 */}
            <div className="p-2">
              <img
                className="w-full h-[180px] md:w-[305px] md:h-[375px] object-cover object-center mb-4"
                src="/parent1.png"
                alt="The Dandy chair"
              />
              <div className="text-start text-[16px] md:text-[20px] font-normal">
                <p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                  >
                    The Dandy chair
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                  >
                    £250
                  </a>
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="p-2">
              <img
                className="w-full h-[180px] md:w-[305px] md:h-[375px] object-cover object-center mb-4"
                src="/parent2.png"
                alt="Rustic Vase Set"
              />
              <div className="text-start text-[16px] md:text-[20px] font-normal">
                <p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                  >
                    Rustic Vase Set
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                  >
                    £155
                  </a>
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="p-2">
              <img
                className="w-full h-[180px] md:w-[305px] md:h-[375px] object-cover object-center mb-4"
                src="/parent3.png"
                alt="The Silky Vase"
              />
              <div className="text-start text-[16px] md:text-[20px] font-normal">
                <p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                  >
                    The Silky Vase
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                  >
                    £125
                  </a>
                </p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="p-2">
              <img
                className="w-full h-[180px] md:w-[305px] md:h-[375px] object-cover object-center mb-4"
                src="/parent4.png"
                alt="The Lucy Lamp"
              />
              <div className="text-start text-[16px] md:text-[20px] font-normal">
                <p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                  >
                    The Lucy Lamp
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-blue-500 hover:underline"
                  >
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
