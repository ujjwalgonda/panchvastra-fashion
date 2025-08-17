import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import { Button } from '@mui/material';


const MyListItems = (props) => {
  // const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  // const [selectedSize, setCartItems] = useState(props.size);
  // const openSize = Boolean(sizeanchorEl);

  // const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  // const [selectedQty, setSelectedQty] = useState(props.qty);
  // const openQty = Boolean(qtyanchorEl);

  // const handleClickSize = (event) => {
  //   setSizeAnchorEl(event.currentTarget);
  // };
  // const handleCloseSize = (value) => {
  //   setSizeAnchorEl(null);
  //   if(value!==null){
  //     setCartItems(value)
  //   }
  // };


  // const handleClickQty = (event) => {
  //   setQtyAnchorEl(event.currentTarget);
  // };
  // const handleCloseQty = (value) => {
  //   setQtyAnchorEl(null);
  //   if(value!==null){
  //     setSelectedQty(value)
  //   }
  // };

  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[10%] rounded-md overflow-hidden">
                <Link to="/product/7845" className="group">
                  <img
                    src="https://assets0.mirraw.com/images/12640627/GC_1385_%281%29_zoom.jpg?1719830119"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[90%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
                <span className="text-[13px]">Panchvastra</span>
                <h3 className="text-[13px]">
                  <Link className="link">
                    Blue Sequins Embroidered Lehenga Choli With Dupatta
                  </Link>
                </h3>

                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />

                <div className="flex items-center gap-3 mt-2 mb-2">
                  <span className="price text-gray-700 text-[12px] font-[600]">
                    ₹4795
                  </span>
                  <span className="oldPrice line-through text-gray-500 text-[12px] font-[500]">
                    ₹5995
                  </span>
                  <span className="discount text-green-600 text-[12px] font-[500]">
                    21% OFF
                  </span>
                </div>


                <Button className='btn-org btn-sm'>Add to Cart</Button>
              </div>
            </div>
  )
}

export default MyListItems;
