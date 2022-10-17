import React from "react";
import img from "../public/assets/JBG Logo 1.png";
import facebook from "../public/assets/Group 111.svg";
import twitter from "../public/assets/Group 112.svg";
import instagram from "../public/assets/Group 113.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="py-10 md:py-4 max-w-5xl mx-auto flex flex-col md:flex-row justify-between px-4 md:px-8 xl:px-0">
        <div className="flex flex-col gap-4 w-1/3">
          <div className="w-fit">
            <Image src={img} alt="JB Logo" />
          </div>
          <p className="text-gray-500">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex gap-2 w-fit">
            <div className="w-fit">
              <Image src={facebook} alt="" />
            </div>
            <div className="w-fit">
              <Image src={twitter} alt="" />
            </div>
            <div className="w-fit">
              <Image src={instagram} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="font-semibold text-base md:text-lg xl:text-xl">Menu Bantuan</p>
          <div className="flex flex-col text-gray-500 gap-4">
            <p>Keunggulan</p>
            <p>Fitur Aplikasi</p>
            <p>Testimoni</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="font-semibold text-base md:text-lg xl:text-xl">Informasi Kontak</p>
          <div className="flex flex-col text-gray-500 gap-4">
            <p>0812-9797-1227</p>
            <p>0812-9797-1227</p>
            <p>Jbgtranshiping@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-4 md:py-6 lg:py-8 xl:py-10">
        <p className="text-gray-500">All rights reserved@2022</p>
      </div>
    </>
  );
};

export default Footer;
