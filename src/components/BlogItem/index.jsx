import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";



const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="/blog 1.jpeg"
          className="w-full transition-all group-hover:scale-105"
          alt="blog image"
        />

        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[12px] font-[500] gap-1">
          <IoMdTime className="text-[15px]"/>5 April 2025
        </span>
      </div>

      <div className="info py-4">
        <h2 className="text-[11px] font-[600] text-black">
          <Link to='/' className="link">Panchvastra: The Essence of Tradition in Contemporary Fashion</Link>
        </h2>
        <p className="text-[10px] font-[500] text-[rgba(0,0,0,0.8)] mb-1">Panchvastra is a fusion of tradition and modern elegance, celebrating the artistry of handcrafted lehengas, intricate embroidery, and luxurious fabrics. Inspired by heritage yet designed for contemporary fashion lovers, it brings timeless grace, regal aesthetics, and cultural richness to every ensemble, making every occasion truly unforgettable...</p>

        <Link className='link font-[500] text-[11px] flex items-center gap-1'>Read More
        <MdKeyboardArrowRight/></Link>
      </div>
    </div>
  );
};

export default BlogItem;
