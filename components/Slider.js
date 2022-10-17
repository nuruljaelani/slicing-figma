import React from 'react'
import ava1 from "../public/assets/avatar.png";
import ava2 from "../public/assets/Rectangle 728.svg";
import ava3 from "../public/assets/Rectangle 729.svg";
import ava4 from "../public/assets/Rectangle 729.png";
import stars1 from "../public/assets/Frame 260.png";
import stars2 from "../public/assets/Frame 260 (1).png";
import Slider from "react-slick";
import Image from 'next/image';

const SliderComp  = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          infinite: true
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings} className="flex flex-col md:flex-row h-full">
        <div className="flex flex-col bg-white rounded-lg lg:rounded-xl xl:rounded-2xl border p-4 lg:p-6 space-y-6 w-full md:w-1/3">
          <div className="flex items-start justify-between">
            <Image src={ava1} alt="Avatar 1" />
            <div className="w-20 md:w-28 lg:w-32">
              <Image src={stars1} alt="Stars 1" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-base lg:text-lg">
              Floyd Miles
            </p>
            <p className="text-gray-500 text-xs lg:text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt
              nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white h-[18.6rem] md:h-[20.6rem] xl:h-[19.6rem] rounded-lg lg:rounded-xl xl:rounded-2xl border p-4 lg:p-6 space-y-6 w-full md:w-1/3">
          <div className="flex items-start justify-between">
            <Image src={ava2} alt="Avatar 1" />
            <div className="w-20 md:w-28 lg:w-32">
              <Image src={stars2} alt="Stars 1" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-base lg:text-lg">
              Ronald Richards
            </p>
            <p className="text-gray-500 text-xs lg:text-sm">
              ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-lg lg:rounded-xl xl:rounded-2xl border p-4 lg:p-6 space-y-6 w-full md:w-1/3">
          <div className="flex items-start justify-center">
            <Image src={ava3} alt="Avatar 1" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-base lg:text-lg">
              Savannah Nguyen
            </p>
            <p className="text-gray-500 text-xs lg:text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt
              nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-lg lg:rounded-xl xl:rounded-2xl border p-4 lg:p-6 space-y-6 w-full md:w-1/3">
          <div className="flex items-start justify-center">
            <Image src={ava4} alt="Avatar 1" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-base lg:text-lg">
            Floyd Miles
            </p>
            <p className="text-gray-500 text-xs lg:text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt
              nostrud amet.
            </p>
          </div>
        </div>
      </Slider>
    </>
  )
}

export default SliderComp