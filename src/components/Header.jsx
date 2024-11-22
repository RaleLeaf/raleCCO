import React from "react";


function Header() {
  return (
    <div className="w-full z-5">
      <header className="bg-[#f4f2f2] flex justify-between items-center w-[100vw] p-6 h-2 sm:h-[2vw] md:h-[3vw] lg:h-[4vw] xl:h-[4vw] 2xl:h-[5vw] ">
        <div>
          <img src="/logo.png" alt="Logo"  className="w-[20vw] sm:w-[8vw] md:w-[9vw] lg:w-[9vw] xl:w-[9vw] 2xl:w-[10vw]" />
        </div>

        <div className="flex items-center space-x-8">
          <a className="cursor-pointer font-bold text-[1.35rem] p-4 tracking-wider no-underline text-black hover:text-gray-600 hover:scale-105 sm:text-[1.15rem] md:text-[1.20rem] lg:text-[1.25rem] xl:text-[1.30rem] 2xl:text-[1.35rem]">
            SHIRT CATALOG
          </a>
          <a className="cursor-pointer font-bold text-[1.35rem] p-4 tracking-wider no-underline text-black hover:text-gray-600 hover:scale-105 sm:text-[1.15rem] md:text-[1.20rem] lg:text-[1.25rem] xl:text-[1.30rem] 2xl:text-[1.35rem]">
            SHOP
          </a>
          <a className="cursor-pointer font-bold text-[1.35rem] p-4 tracking-wider no-underline text-black hover:text-gray-600 hover:scale-105 sm:text-[1.15rem] md:text-[1.20rem] lg:text-[1.25rem] xl:text-[1.30rem] 2xl:text-[1.35rem]">
            ABOUT
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="material-symbols-outlined text-[3rem] font-extrabold cursor-pointer sm:text-[2rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.85rem] 2xl:text-[3rem] sm:p-1.2 md:p-1.4 lg:p-1.6 xl:p-1.8m xl:p-2">
            search
          </span>
          <span className="material-symbols-outlined text-[3rem] font-extrabold cursor-pointer sm:text-[2rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.85rem] 2xl:text-[3rem] sm:p-1.2 md:p-1.4 lg:p-1.6 xl:p-1.8m xl:p-2">
            shopping_bag
          </span>
          <span className="material-symbols-outlined text-[3rem] font-extrabold cursor-pointer sm:text-[2rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.85rem] 2xl:text-[3rem] sm:p-1.2 md:p-1.4 lg:p-1.6 xl:p-1.8m xl:p-2 pr-0">
            more_vert
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header;
