import React from "react";
import MovieHero from "../Components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";
import CastCarousal from "../Components/HeroCarousal/CastCarousal.component";
import launchRazorPay from "./Razorpay.page";


const Movie = () => {
    return (
        <>
        
            <MovieHero />
        <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as 
                    Shanh-Chi,Who must  confront the past he thought he left behind when he is drawn into the web 
                    of the mysterious Ten Rings organization.
                    The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.
                </p>
            </div>
            <div className="my-8">
                <hr/>
            </div>

         <div className="flex flex-col items-start gap-3">
         <h1 className="font-bold">Applicable Offers</h1>

<div className="bg-yellow-200 border-yellow-800 border-dashed border-2 rounded p-3 w-96 pt-2">
   
    <div className="flex items-start gap-2">
    <BiCameraMovie size={40}/>
        <div flex flex-col items-start>
        <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
        <p className="text-gray-600">Get Rs.65* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
    </div>
    </div>
</div>
        <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Book Tickets
        </button>
         </div>
         <div className="flex flex-col items-start gap-3">
             <h1 className="font-bold text-gray-900">Cast</h1>
             
         </div>
        </div>

        </>
    );
};

export default Movie;
