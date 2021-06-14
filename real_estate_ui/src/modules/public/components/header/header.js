import React, { useState } from "react";
import MenuBar from "../../../../images/menu.svg";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header>
      <div>
        <div
        //  className="bg-pampas-500"
        >
          <div className="container mx-auto">
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pampas-500 mx-auto">
              <div className="container px-4 flex flex-wrap items-center justify-between mx-auto">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <a
                    className="text-sm text-mirage-500 font-normal text-xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap lg:mx-20 xl:mx-28 "
                    href="#"
                  >
                    Real estate
                  </a>
                  <button
                    className="lg:hidden"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <img src={MenuBar} />
                  </button>
                </div>
                <div
                  className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                  }
                  id="example-navbar-danger"
                >
                  <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                    <li>
                      <a
                        class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-500"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-500"
                        href="#"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-500"
                        href="#"
                      >
                        Our Service
                      </a>
                    </li>
                    <li>
                      <a
                        class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-500 lg:mb-0 mb-2"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <button className="h-10 bg-transparent rounded-lg w-28 sm:mb-4 lg:mb-0 border-2 border-black text-sm lg:ml-24 lg:mr-4">
                        Sign in
                      </button>
                    </li>
                    <li className="py-4 lg:py-0"> 
                      <button className="h-10 bg-blue-500 rounded-lg w-28 sm:mb-4 lg:mb-0 border-0 border-black text-sm text-white	">
                        Sign up
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
