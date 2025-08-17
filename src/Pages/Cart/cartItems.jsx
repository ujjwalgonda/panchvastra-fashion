import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";


const CartItems = (props) => {
  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setCartItems] = useState(props.size);
  const openSize = Boolean(sizeanchorEl);

  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyanchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if(value!==null){
      setCartItems(value)
    }
  };


  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if(value!==null){
      setSelectedQty(value)
    }
  };

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

                <div className="flex items-center gap-4 mt-2">
                  <div className="relative">
                    <span
                      className="flex items-center justify-center bg-[#f1f1f1] text-[10px] font-[600] py-1 px-2 rounded-md cursor-pointer"
                      onClick={handleClickSize}
                    >
                      Size: {selectedSize} <GoTriangleDown />
                    </span>

                    <Menu
                      id="size-menu"
                      anchorEl={sizeanchorEl}
                      open={openSize}
                      onClose={()=>handleCloseSize(null)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={()=>handleCloseSize('36-XS')}>36 - XS</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('38-S')}>38 - S</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('40-M')}>40 - M</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('42-L')}>42 - L</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('44-XL')}>44 - XL</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('46-XXL')}>46 - XXL</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('48-3XL')}>48 - 3XL</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('50-4XL')}>50 - 4XL</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('52-5XL')}>52 - 5XL</MenuItem>
                    </Menu>
                  </div>

                  <div className="relative">
                    <span className="flex items-center justify-center bg-[#f1f1f1] text-[10px] font-[600] py-1 px-2 rounded-md cursor-pointer"
                    onClick={handleClickQty}
                    >
                      Qty: {selectedQty} <GoTriangleDown />
                    </span>

                    <Menu
                      id="size-menu"
                      anchorEl={qtyanchorEl}
                      open={openQty}
                      onClose={()=>handleCloseQty(null)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={()=>handleCloseQty(1)}>1</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(2)}>2</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(3)}>3</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(4)}>4</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(5)}>5</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(6)}>6</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(7)}>7</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(8)}>8</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(9)}>9</MenuItem>
                    </Menu>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-2">
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
              </div>
            </div>
  )
}

export default CartItems;
