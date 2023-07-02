import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto max-w-7xl">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <Image src="/img/logo1.png" alt="" width={100} height={50} />
              <p class="text-gray-500 text-sm mt-5 md:text-left text-center">
                Fast delivery, which is active all over the world, serves with
                many transportation vehicles.
              </p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link href="/" class="text-gray-600 hover:text-gray-800">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" class="text-gray-600 hover:text-gray-800">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" class="text-gray-600 hover:text-gray-800">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/" class="text-gray-600 hover:text-gray-800">
                    Locations Map
                  </Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Services
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link href="/" class="text-gray-600 hover:text-gray-800">
                    Order tracking
                  </Link>
                </li>
                <li>
                  <Link href="/" class="text-gray-600 hover:text-gray-800">
                    Wish List
                  </Link>
                </li>
                <li>
                  <Link href="/" class="text-gray-600 hover:text-gray-800">
                    My account
                  </Link>
                </li>
                <li>
                  <Link href="/" class="text-gray-600 hover:text-gray-800">
                    Terms & Conditions
                  </Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Get in Touch
              </h2>

              <p>
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
