import React from "react";
import CastSlider from "react-slick";// as per documemtation


//component
import {NextArrow,PrevArrow} from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css"; // as per documemtation
import "slick-carousel/slick/slick-theme.css"; // as per documemtation

const CastCarousal = () => {

        const settingsLg = {
            arrows:true,
            autoplay:true,
            centerMode:true,
            slidesToScroll:1,
            slidesToShow:1,
            centerPadding:"300px",
            infinite:true,

            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }

        const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

        const images = [
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/arya-11987-18-09-2017-03-39-59.jpg",
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shriya-saran-2156-18-09-2017-04-10-24.jpg",
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ajith-kumar-88-24-03-2017-17-48-56.jpg",
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shaam-5076-24-03-2017-12-31-17.jpg",
            "https://in.bmscdn.com/iedb/artist/images/website/poster/large/sundar-c.-2287-24-03-2017-15-43-56.jpg"

        ]

    return (
        <>
        <div className="lg:hidden">
        <CastSlider {...settings}>
        {
            images.map((image) => (
                <div className="w-10 h-10 md:h-80  py-3">
                    <img src={image} alt="testing" className="w-full h-full rounded-lg" />
                </div>
        ))
        }


        </CastSlider>
        </div>
        <div className="hidden lg:block">
        <CastSlider {...settingsLg}>
        {
            images.map((image) => (
                <div className="w-10 h-96 px-2 py-3">
                    <img src={image} alt="testing" className="w-full h-full rounded-full" />
                </div>
        ))
        }


        </CastSlider>
        </div>

        </>
      );
};


export default CastCarousal;