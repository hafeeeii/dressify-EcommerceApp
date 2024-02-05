import React from "react";
import { MdScale } from "react-icons/md";
import { colors } from "@/lib/data";
import AddToCart from "./components/ProductActions/AddToCart";
import BuyBtn from "./components/ProductActions/BuyBtn";
import TabbedPanel from "./components/ProductActions/TabbedPanel";
import FeaturedProduct from "@/components/FeaturedProduct";
import ImgMagnifier from "./components/ProductInfoActions/ImgMagnifier";
import { useFetch } from "@/lib/hooks/useFetch";
import { Product } from "@/lib/utils/types";
import Image from "next/image";
import SubHeading from "@/components/SubHeading";

const Detail = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const newId: number = parseInt(params?.id);
  const data = await useFetch(`/products/${newId}?populate=*`);
  const detailData: Product = data?.data;

  const productImg = detailData?.attributes?.img?.data?.attributes?.url;
  const productImg2 = detailData?.attributes?.img2?.data?.attributes?.url;

  return (
    <div className="min-h-screen  w-full p-2 flex flex-col  justify-center items-center ">
      {detailData && (
        <>
          <div className="flex lg:gap-6 lg:flex-row flex-col items-center justify-center">
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="md:min-h-[70vh] min-h-[63vh] mb-2">
                <ImgMagnifier src={productImg} width={400} height={400} />
              </div>
              <div className="">
                <Image src={productImg2} alt="img" width={100} height={100} />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-2xl  py-3">
                {detailData?.attributes?.title}
              </h2>
              <h3 className="text-xl font-bold">{`$${detailData?.attributes?.price}`}</h3>
              <h6 className="text-red-600">17 sold in last 24 hours</h6>

              <p>
                {detailData?.attributes?.description
                  ? detailData?.attributes?.description
                  : "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasmollitia quidem quo. Suscipit rerum aliquam distinctio, placequaerat nam assumenda numquam, officia atque odit debitis a eumsunt fugiat aliquid. lorem1000"}
              </p>
              <h6>13 people are viewing this right now</h6>
              <h5>color:Black</h5>
              <div>
                {colors?.map((color, index) => (
                  <button
                    key={index}
                    className=" btn-xs btn-circle mr-4 my-2 tooltip tooltip-top shadow-md hover:scale-110 duration-500 active:scale-100"
                    style={{
                      backgroundColor: color,
                    }}
                    data-tip={color}
                  ></button>
                ))}
              </div>
              <h5>Size:L</h5>
              <ul className="flex flex-row flex-wrap gap-2 mb-4">
                <li className=" p-1 px-5 rounded-lg primary-btn font-medium ">
                  S
                </li>
                <li className=" p-1 px-5 rounded-lg primary-btn font-medium">
                  L
                </li>
                <li className=" p-1 px-5 rounded-lg primary-btn font-medium">
                  M
                </li>
                <li className=" p-1 px-5 rounded-lg primary-btn font-medium">
                  XL
                </li>
              </ul>
              <div className="flex flex-row flex-wrap gap-2">
                <div className="btn primary-btn">
                  <MdScale />
                  <button>Size Guide</button>
                </div>
                <div className="btn primary-btn">
                  <MdScale />
                  <button>Compare Color</button>
                </div>
                <div className="btn primary-btn">
                  <MdScale />
                  <button>Ask A Question</button>
                </div>
                <div className="btn primary-btn">
                  <MdScale />
                  <button>vShare</button>
                </div>
              </div>

              <AddToCart data={detailData} />
              <div className="flex flex-nowrap gap-4">
                <input type="checkbox" />
                <p>
                  I agree with{" "}
                  <a href="/" className="link-hover text-gray-600">
                    Terms & Conditions
                  </a>
                </p>
              </div>
              <BuyBtn />
            </div>
          </div>

          {/* description */}
          <div className="md:px-10 px-4 mt-6">
            <TabbedPanel />
          </div>
          <div>
            <SubHeading
              title="Trending"
              paragraph="Here’s some of our most popular products people are in love with."
            />
            <FeaturedProduct type="trending" />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
