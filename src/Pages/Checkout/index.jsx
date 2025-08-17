import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";


const Checkout = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details</h1>

            <form className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name *"
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    className="w-full"
                    label="Email *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Street Address *</h6>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="House No. and Street Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Apartment, suite, unit, etc. (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Town / City *"
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="State / Country *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] mb-3">Postcode / ZIP *</h6>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Zip Code *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Phone Number *"
                    variant="outlined"
                    size="small"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="Email Address *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightcol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-4">Your Order</h2>

            <div className="flex items-center justify-between py-3 border-t border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal</span>
            </div>

            <div className="mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[13px]">Blue Sequins Embroidered Lehenga...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>

                  <span className="text-[14px] font-[500]">₹5995</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[13px]">Blue Sequins Embroidered Lehenga...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>

                  <span className="text-[14px] font-[500]">₹5995</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[13px]">Blue Sequins Embroidered Lehenga...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>

                  <span className="text-[14px] font-[500]">₹5995</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[13px]">Blue Sequins Embroidered Lehenga...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>

                  <span className="text-[14px] font-[500]">₹5995</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[13px]">Blue Sequins Embroidered Lehenga...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>

                  <span className="text-[14px] font-[500]">₹5995</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[13px]">Blue Sequins Embroidered Lehenga...</h4>
                    <span className="text-[13px]">Qty : 1</span>
                  </div>

                  <span className="text-[14px] font-[500]">₹5995</span>
                </div>
              </div>
            </div>


            <Button className="btn-org btn-lg w-full flex gap-2 items-center"><BsFillBagCheckFill className="text-[20px] mb-1"/>
            Checkout</Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
