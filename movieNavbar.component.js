import React from "react";
import { BiChevronRight,BiChevronLeft,BiSearch,BiChevronDown,BiMenu,BiShareAlt } from "react-icons/bi";


const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All starts Here . . !</h3>
                <span className="text-gray-400 text-xs flex items-center">
                     <BiChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full"/>
            </div>
        </div>
        </>
    )
};

        
const NavLg = () => {
            return(
                <>
                <div className="flex items-center container mx-auto p-4 justify-between">
                    <div className="flex items-center w-1/2 gap-3">
                        <div className="w-18 h-16">
                            <img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="logo" className="w-full h-full rounded-full" />
                        </div>
                        <div className="w-full flex items-center px-4 py-2 bg-white gap-3 rounded">
                            <BiSearch /> 
                            <input type="search" className="w-full focus:outline-none rounded" placeholder="Search for movies,events,sports and activities"/>

                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer gap-3">
                     Coimbatore  <BiChevronDown />
                     </span>
                     <button className="bg-red-600 text-white text-sm rounded px-2 py-1.5 hover:bg-red-600">Sign in</button>
                     <div className="w-8 h-9 text-white cursor-pointer"><BiMenu className="w-full h-full"/></div>
                    </div>
                </div>
                </>
            )
            };

const MovieNavbar = () => {
return (
    <>
    <nav className="absolute inset-x-0 z-29 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-2 rounded-md">
        <div className="md:hidden"> 
                    {
                        <NavSm />
                        
                    }
        </div>
        <div className="hidden lg:hidden md:block"> 
                   {
                       <NavSm />
                   }
        </div>
        <div className="hidden lg:flex"> 
                    {
                        <NavLg />
                    }
        </div>
    </nav>
    </>
)

};


export default MovieNavbar;


