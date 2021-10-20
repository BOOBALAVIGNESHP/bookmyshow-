import React from "react";
import { BsShare } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";

import launchRazorPay from "../../pages/Razorpay.page";
const MovieHero = () => {
    return (
        <>
        <div className="md:hidden" style={{height: "calc(180vw)"}}>
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
            alt="poster" />
        </div>

        
        <div className="hidden md:block lg:hidden" >
        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
            alt="poster" />
            
        </div>


        <div className="relative hidden lg:block" style={{height: "40rem"}}>
            <div className="absolute h-full w-full z-10"
            style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
            />
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
            alt="poster" className="w-full h-full"/>




           
            

           <div className="flex flex-container">
           <div className="absolute z-30 w-64 h-96 top-20 left-20">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
            alt="poster" className="h-full w-full rounded-xl" />
            
            <div className="absolute z-40 flex-container top-5 lg:ml-80 w-100 h-96 flex flex-col items-start">
                <div className="items-center h-full w-full">
                <h className="text-white font-bold text-3xl">Shang-Chi and the Legend of Ten Rings</h>
                
                
                <div className="flex flex-container w-64 h-24 row-flex right-20">
                    <div className="text-pink-600 text-3xl"><BsFillSuitHeartFill/><p className="text-white text-3xl font-bold">90%</p><p className="text-white text-xs pb-5">56.23K ratings</p></div>
                </div>
                
                <div className="flex-container bg-gray-800 w-45 h-23 rounded-xl justify-contents pb-5 pl-5">
                    <div className="w-full h-full">
                    <p className="text-white text-2xl left-10">Add Your rating and review</p>
                    <p className="text-white text-xl left-10">Your ratings matter</p>
                    </div>
                    <div className="self-end pt-1">
                    <button className="bg-white rounded font-bold self-end">Rate now</button>
                    </div>
                </div>
                <div className="pt-2">
                <div className="flex-container bg-white w-96 h-8 justify-end rounded">
                <p className="pl-3 pt-1 h-full w-full font-bold">2DX,4DX,4DX 3D,MX 4D,3D,IMAX 2D,IMAX 3D</p>
                </div>
                <div className="pt-2">
                <div className="flex-container bg-white w-88 h-8 justify-end rounded">
                <p className="pl-3 pt-1 font-bold w-full h-full">TAMIL,ENGLISH,HINDI,TELUGU,MALAYALAM</p>
                </div>
                </div>
                <div className="pt-2">
                <div className="flex-container w-88 h-8 ">
                <p className="pl-3 pt-1 text-white font-bold w-full h-full">2h12m * Action,Action,Fantasy * UA 3 Sep,2021 </p>
                </div>
                </div>
                <div className="pt-1 w-32 h-16 align-center">
                    <button onClick={launchRazorPay} className="text-white font-bold rounded bg-pink-600 w-full h-full">Book Tickets</button>
                </div>
                </div>
                </div>

                <div className="absolute z-40 flex justify-end top-5 left-80 w-96 h-100 ">   
                        <div className="absolute container flex right-5 justify-around bg-gray-500 w-40 h-30">
                        <div className="text-gray-100"><BsShare size={40}/></div><p className="text-white text-2xl">Share</p>
                        </div>                
                </div>
            </div>
            </div>
           </div>
                        
        </div>
        </>
    );
};

export default MovieHero;


