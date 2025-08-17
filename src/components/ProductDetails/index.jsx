import React, { useState } from "react";
import Button from "@mui/material/Button";
import QtyBox from "../QtyBox";
import Rating from "@mui/material/Rating";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);

  return (
    <>
      <h1 className="text-[20px] text-gray-700 font-[500] mb-2">
        Panchvastra Fashion
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-[12px] text-gray-400 font-[500] gap-3">
          Blue Sequins Embroidered Lehenga Choli With Dupatta
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
      </div>
      <div className="flex items-center gap-3 mt-3">
        <span className="price text-gray-700 text-[18px] font-[600]">
          ₹4795
        </span>
        <span className="oldPrice line-through text-gray-500 text-[13px] font-[500]">
          ₹5995
        </span>
        <span className="discount text-green-600 text-[13px] font-[500]">
          21% OFF
        </span>
        <span className="text-[10px]">
          Available In Stock:{" "}
          <span className="text-green-600 text-[10px] font-[700]">1 Item</span>
        </span>
      </div>
      <div className="flex items-center justify-start mt-3">
        <span className="text-gray-600 text-[10px] font-[500] bg-slate-100">
          &nbsp; Contains:
        </span>
        <span className="text-gray-600 text-[10px] font-[500] bg-slate-100">
          &nbsp; Blouse, Dupatta, Lehenga &nbsp;
        </span>
      </div>
      <p className="mt-3 pr-10 mb-5">
        Embroidery, Scalloped hem lehenga, Dupatta with scalloped border &
        tassels, Blouse: Hook
      </p>
      <div className="flex items-center gap-3">
        <span className="text-[14px]">Size: </span>
        <div className="flex items-center gap-1 actions">
          <Button
            className={`${productActionIndex === 0 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(0)}
          >
            36
          </Button>
          <Button
            className={`${productActionIndex === 1 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(1)}
          >
            38
          </Button>
          <Button
            className={`${productActionIndex === 2 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(2)}
          >
            40
          </Button>
          <Button
            className={`${productActionIndex === 3 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(3)}
          >
            42
          </Button>
          <Button
            className={`${productActionIndex === 4 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(4)}
          >
            44
          </Button>
          <Button
            className={`${productActionIndex === 5 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(5)}
          >
            46
          </Button>
          <Button
            className={`${productActionIndex === 6 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(6)}
          >
            48
          </Button>
          <Button
            className={`${productActionIndex === 7 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(7)}
          >
            50
          </Button>
          <Button
            className={`${productActionIndex === 8 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(8)}
          >
            52
          </Button>
          <Button
            className={`${productActionIndex === 9 ? "!bg-primary !text-white" : ""
              }`}
            onClick={() => setProductActionIndex(9)}
          >
            54
          </Button>
        </div>
      </div>

      <p className="text-[11px] mt-4 mb-2 text-[#000]">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>

      <span className="flex items-center gap-2 text-[13px] font-[500] link cursor-pointer mt-5">
          Size Guide
        </span>


      <div className="flex items-center gap-4 py-4">
        <div className="qtyBoxWrapper w-[70px] ">
          <QtyBox />
        </div>

        <Button className="btn-org flex gap-2">
          <MdOutlineShoppingCart className="text-[20px]" />
          Add to cart
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <span className="flex items-center gap-2 text-[15px] font-[500] link cursor-pointer">
          <FaRegHeart className="text-[18px]" />
          Add to Wishlist
        </span>

        <span className="flex items-center gap-2 text-[15px] font-[500] link cursor-pointer">
          <IoGitCompareOutline className="text-[18px]" />
          Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
