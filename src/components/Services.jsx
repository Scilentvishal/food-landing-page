import Image from 'next/image';

export default function Services() {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#FEF5F5]">
        <div className="container px-5 md:py-24 py-10 mx-auto max-w-7xl">
          <div className="flex flex-col text-center w-full mb-20">
            <span className="text-[#FE6A6A] text-xs">What we Serve</span>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              fruit and vegetable delivered to your home
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/icon.png"
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Free shipping
                </h2>
                <p className="leading-relaxed mt-5 text-xs">
                  Enjoy Order in a hand using the fresness of groceries
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/Group 1737.png"
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  15 days returns
                </h2>
                <p className="leading-relaxed mt-5 text-xs">
                  Order in a handy way using the freshness of the groceries.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/Group 1736.png"
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Secure checkout
                </h2>
                <p className="leading-relaxed mt-5 text-xs">
                  If you get rotten items - return immediately to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
