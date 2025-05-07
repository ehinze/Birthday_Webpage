import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
  "/Landingpage/photo-8.jpg",
  "/Landingpage/photo-9.jpg",
  "/Landingpage/photo-1.jpg",
  "/Landingpage/photo-2.jpg",
  "/Landingpage/photo-3.jpg",
  "/Landingpage/photo-4.jpg",
  "/Landingpage/photo-5.jpg",
  "/Landingpage/photo-6.jpg",
  "/Landingpage/photo-7.jpg",
 
 
];

export default function LandingPage() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="relative h-screen w-full">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt={`Slide ${i}`} className="h-screen w-full object-cover" />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold">Happy Birthday, Sis! 🎉</h1>
        <p className="text-xl mt-4 max-w-xl">
          You are my sunshine, my laughing partner, my built-in best friend, my forever shayla, my achalugo.Today we celebrate the most amazing, strong, funny, and loving sister ever.
          Here's a little surprise I made just for you 💖
        </p>
      </div>
    </div>
  );
}