import React, { useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";


function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch(!showSearch); // Toggle the visibility
  };

  const handleShirtCatalogClick = () => {
    if (location.pathname === "/components/frontPage") {
      scroller.scrollTo("shirtCatalog", {
        smooth: true,
        duration: 500,
        offset: -150,
      });
    } else {
      navigate("/components/frontPage");
      setTimeout(() => {
        scroller.scrollTo("shirtCatalog", {
          smooth: true,
          duration: 500,
          offset: -150,
        });
      }, 500);
    }
  };

  const handleShirtCatalogClick2 = () => {
    if (location.pathname === "/components/frontPage") {
      scroller.scrollTo("Footer", {
        smooth: true,
        duration: 500, // Animation duration in milliseconds
        offset: 0, // Adjust as needed to account for any fixed headers
      });
    } else {
      navigate("/components/frontPage");
      setTimeout(() => {
        scroller.scrollTo("Footer", {
          smooth: true,
          duration: 500,
          offset: 0,
        });
      }, 500); // Delay to allow page navigation to complete
    }
  };
  
  
  
  return (
    <div className="w-full z-50">
      <header className="bg-[#f4f2f2] flex justify-between items-center w-[100vw] p-6 h-2 sm:h-[2vw] md:h-[3vw] lg:h-[4vw] xl:h-[4vw] 2xl:h-[5vw] ">
        <Link to="/components/frontPage" className="cursor-pointer hover:scale-105 z-50">
          <img src="/logo.png" alt="Logo"  className="w-[20vw] sm:w-[8vw] md:w-[9vw] lg:w-[9vw] xl:w-[9vw] 2xl:w-[10vw]" />
        </Link>

        <div className="flex items-center space-x-8 z-50" >
            <button onClick={handleShirtCatalogClick} className="cursor-pointer font-bold text-[1.35rem] p-4 tracking-wider no-underline text-black hover:text-gray-600 hover:scale-105 sm:text-[1.15rem] md:text-[1.20rem] lg:text-[1.25rem] xl:text-[1.30rem] 2xl:text-[1.35rem]">
              SHIRT CATALOG
            </button>
          <Link to="/components/shopPage" className="cursor-pointer font-bold text-[1.35rem] p-4 tracking-wider no-underline text-black hover:text-gray-600 hover:scale-105 sm:text-[1.15rem] md:text-[1.20rem] lg:text-[1.25rem] xl:text-[1.30rem] 2xl:text-[1.35rem]">
            SHOP
          </Link>
          <button onClick={handleShirtCatalogClick2} className="cursor-pointer font-bold text-[1.35rem] p-4 tracking-wider no-underline text-black hover:text-gray-600 hover:scale-105 sm:text-[1.15rem] md:text-[1.20rem] lg:text-[1.25rem] xl:text-[1.30rem] 2xl:text-[1.35rem]">
            ABOUT
          </button>
        </div>

        <div className="flex items-center space-x-4 z-50">
        <span onClick={toggleSearchBar} className="material-symbols-outlined text-[3rem] font-extrabold cursor-pointer hover:scale-105">
            search
        </span>
        <div className="relative">
           
            {showSearch && (
              <div
                className="absolute bg-white border border-gray-300 shadow-sm rounded-md p-1 w-[300px] z-50"
                style={{ top: "50%", right: "4.5vw", transform: "translateY(-50%)" }}
              >
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search..."
                />
              </div>
            )}
          </div>

          <Link to="/components/checkoutPage">
            <span className="material-symbols-outlined text-[3rem] font-extrabold cursor-pointer hover:scale-105 sm:text-[2rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.85rem] 2xl:text-[3rem] sm:p-1.2 md:p-1.4 lg:p-1.6 xl:p-1.8m xl:p-2">
              shopping_bag
            </span>
          </Link>
          <span className="material-symbols-outlined text-[3rem] font-extrabold cursor-pointer hover:scale-105 sm:text-[2rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[2.85rem] 2xl:text-[3rem] sm:p-1.2 md:p-1.4 lg:p-1.6 xl:p-1.8m xl:p-2 pr-0">
            more_vert
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header;