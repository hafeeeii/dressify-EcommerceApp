"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";
import { Hero } from "@/lib/utils/types";
import Link from "next/link";

const Hero = ({ heroImg }: { heroImg: Hero[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % heroImg?.length);
  };
  const prevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? heroImg.length - 1 : prevImage - 1
    );
  };
  useEffect(() => {
    const intervel = setInterval(nextSlide, 20000);
    return () => {
      clearInterval(intervel);
    };
  }, []);

  return (
    <header className=" lg:h-[100vh] h-[75vh]  w-full overflow-hidden">
      <div className="h-full w-full relative ">
        {heroImg?.map((data: Hero, index) => (
          <div
            key={index}
            className={` h-full w-full   opacity-0 transition-opacity duration-1000   ${
              currentImage === index ? "opacity-100 " : ""
            }`}
          >
            <Image
              src={data?.attributes?.img?.data?.attributes?.url}
              alt="banner img"
              fill
              className=" object-[60%] object-cover static  "
              quality={99}
            />
          </div>
        ))}

        {heroImg && (
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="absolute  lg:top-[20%]  lg:left-[10%] top-[40%] left-[6%]  lg:w-[40vw] w-[60vw] flex flex-col  lg:text-center items-start  sm:items-center gap-3  "
            key={heroImg[currentImage]?.id}
          >
            <div className="lg:text-6xl text-3xl  font-medium capitalize ">
              <h2>{heroImg[currentImage]?.attributes?.title}</h2>
            </div>

            <span className="opacity-70 mt-2  text-sm lg:text-md ">
              {" "}
              So soft, you don&#39;t want to take it of
            </span>

            <Link
              href="/products"
              className=" text-center bg-black text-white sm:w-[40%] w-[70%] p-3 rounded-full my-5 uppercase text-xs font-bold"
            >
              <button>Shop Now</button>
            </Link>
          </motion.div>
        )}

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-gray-200  lg:flex items-center justify-center mr-4 hover:bg-black hover:text-white duration-500 hidden"
          onClick={nextSlide}
        >
          <AiOutlineArrowRight />
        </button>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2  w-16 h-16  rounded-full bg-gray-200  lg:flex items-center justify-center ml-4  hover:bg-black hover:text-white duration-500 hidden"
          onClick={prevSlide}
        >
          <AiOutlineArrowLeft />
        </button>
      </div>
    </header>
  );
};

export default Hero;
