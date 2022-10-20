import Image from "next/image";
import React from "react";
import fish1 from "../public/assets/pngegg(18) 1.png";
import phone1 from "../public/assets/phone1.png";
import googlePlay from "../public/assets/google-play-svgrepo-com (1).svg";
import appStore from "../public/assets/google-play-svgrepo-com.svg";
import rectangle1 from "../public/assets/Rectangle 68.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full py-8 md:py-14 lg:py-24 relative px-4 md:px-0">
        <div className="flex flex-col w-full md:w-1/2 gap-4 md:gap-6 lg:gap-10 pl-0 md:pl-8 lg:pl-[4rem] xl:pl-[7.5rem] h-fit pr-0 md:pr-2">
          <p className="font-semibold text-2xl md:text-3xl lg:text-5xl">
            Kirim berbagai jenis ikan dengan mudah
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s
          </p>
          <div className="flex h-16 gap-6">
            <Image src={googlePlay} alt="Google Playstore logo" />
            <Image src={appStore} alt="Google Playstore logo" />
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold text-red-600">
                1.9k+
              </p>
              <p className="text-gray-500">Active Users</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold text-red-600">
                20+
              </p>
              <p className="text-gray-500">New Features</p>
            </div>
          </div>
        </div>
        <div className="md:flex right-0 hidden absolute justify-end items-center">
          <div className="h-fit flex relative">
            <div className="absolute z-30 w-40 lg:w-52 xl:w-60 -top-4 lg:-top-5 right-[14.5rem] lg:right-[19.5rem] xl:right-[21rem]">
              <Image src={fish1} alt="Rectangle red" />
            </div>
            <div className="absolute w-36 lg:w-[13rem] xl:w-[15rem] -top-10 lg:-top-[4.5rem] xl:-top-[5.5rem] right-16 lg:right-24 z-30">
              <Image src={phone1} alt="Phone 1" />
            </div>
            <div className="md:w-[20rem] lg:w-[26.5rem] xl:w-[29rem]">
              <Image src={rectangle1} alt="Rectangle red" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
