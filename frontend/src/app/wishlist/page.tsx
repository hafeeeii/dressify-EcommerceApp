import WishListCard from "@/app/wishlist/components/WishListCard";
import Link from "next/link";
import React from "react";

const page = async () => {
  return (
    <div className=" p-2 min-h-screen w-full flex flex-col items-center mt-10">
      <h2 className="font-medium text-4xl ">WishList</h2>
      <div className="breadcrumbs text-sm mb-10">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">WishList</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-3 flex-wrap ">
        <WishListCard />
      </div>
    </div>
  );
};

export default page;
