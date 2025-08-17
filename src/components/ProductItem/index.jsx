import React, { useContext } from "react";
import "../ProductItem/style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const ProductItem = () => {
  const context = useContext(MyContext);

  return (
    <div className="productItem shadow-lg rounded-md px-1 overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="group imgWrapper w-[100%] overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[430px] overflow-hidden">
            <img
              src="https://assets0.mirraw.com/images/12640622/GC_1363_%281%29_zoom.jpg?1719830126"
              className="w-full"
            />

            <img
              src="https://assets0.mirraw.com/images/12640627/GC_1385_%281%29_zoom.jpg?1719830119"
              className="w-full transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group" onClick={()=>context.setOpenProductDetailsModal(true)}>
            <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>

          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
            <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>

          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
            <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-3">
        <h6 className="text-[15px] !font-[400]">
          <Link to="/" className="link transition-all">
            Panchvastra
          </Link>
        </h6>
        <h3 className="text-[11px] title mt-1 font-[500] mb-1 text-[#000]">
          <Link to="/" className="link transition-all">
            Pink Digital Print Anarkali Set
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={2} size="small" readOnly />

        <div className="flex items-center gap-3">
          <span className="price text-gray-700 text-[13px] font-[600]">
            ₹4795
          </span>
          <span className="oldPrice line-through text-gray-500 text-[13px] font-[500]">
            ₹5995
          </span>
          <span className="discount text-green-600 text-[13px] font-[700]">
            21% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
