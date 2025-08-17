import React, { useContext } from "react";
import { GiTigerHead } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegHandRock } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiOutlineChat } from "react-icons/hi";
import Button from "@mui/material/Button";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

import { IoCloseSharp } from "react-icons/io5";
import Drawer from "@mui/material/Drawer";
import CartPanel from "../CartPanel";
import { MyContext } from "../../App";

const Footer = () => {

const context = useContext(MyContext)


  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container">
          <div className="flex items-center justify-center gap-7 py-8 pb-8">
            <div className="col1 flex items-center justify-center flex-col group w-[15%]">
              <GiTigerHead className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3">MADE IN BHARAT</h3>
              <p className="text-[13px] font-[500]">परंपरा की बुनाई</p>
            </div>

            <div className="col1 flex items-center justify-center flex-col group w-[15%]">
              <RiSecurePaymentFill className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3">SECURE PAYMENTS</h3>
              <p className="text-[13px] font-[500]">
                तेज़, आसान और सुरक्षित भुगतान
              </p>
            </div>

            <div className="col1 flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-x-3" />
              <h3 className="text-[16px] font-[600] mt-3">FREE SHIPPING</h3>
              <p className="text-[13px] font-[500]">
                हर ऑर्डर पर खुशियों की डिलीवरी
              </p>
            </div>

            <div className="col1 flex items-center justify-center flex-col group w-[15%]">
              <FaRegHandRock className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3">
                EMPOWERING WEAVERS
              </h3>
              <p className="text-[13px] font-[500]">हमारे बुनकर, हमारी शान</p>
            </div>

            <div className="col1 flex items-center justify-center flex-col group w-[15%]">
              <BsPatchCheck className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-2" />
              <h3 className="text-[16px] font-[600] mt-3">ASSURED QUALITY</h3>
              <p className="text-[13px] font-[500]">हर धागे में आत्मनिर्भरता</p>
            </div>
          </div>

          <br />

          <hr />

          <div className="footer flex py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">CONTACT</h2>
              <p className="text-[13px] font-[400] pb-2">
                Lorem ipsum, dolor sit amet elit. Cum, officiis.amet elit. Cum,
                officiis.
              </p>

              <Link
                className="link text-[13px]"
                to="mailto:panchvastra@gmail.com"
              >
                panchvastra@gmail.com
              </Link>

              <span className="text-[14px] font-[400] block w-full mt-3 mb-5">
                (+91) 7905680759
              </span>

              <div className="flex items-center gap-2">
                <HiOutlineChat className="text-[35px] text-primary" />
                <span className="text-[13px] font-[600]">
                  Online Chat <br /> get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">OUR POLICIES</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Shipping Details
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      FAQs
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Return, Exchange and Refund Policy
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Cookie Policy
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Careers{" "}
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">QUICK LINKS</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      About Us{" "}
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Blogs
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Brand Story{" "}
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Store Locator{" "}
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Payment Options{" "}
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Helpdesk
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Give Us Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2 w-[35%] flex pl-8 flex-col">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to our Newsletter
              </h2>
              <p className="text-[13px]">
                Stay updated with the latest trends, exclusive offers, and more
                – subscribe to our newsletter today!
              </p>

              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-md mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />

                <Button className="btn-org"> SUBSCRIBE</Button>
              </form>

              <FormControlLabel className="mt-3"
                control={<Checkbox />}
                label="I agree to receive newsletters, exclusive offers, and updates on the latest trends, products, and promotions."
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#4483fa] transition-all"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#d13c3c] transition-all"
              >
                <AiOutlineYoutube className="text-[20px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#d338b1] transition-all"
              >
                <FiInstagram className="text-[18px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#39ce40] transition-all"
              >
                <IoLogoWhatsapp className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
          </ul>


          <p className="text-[13px] text-center mb-0">© 2025 Panchvastra. All Rights Reserved.
          </p>
          <div className="flex items-center">
            <img src="/visa.svg" alt="image" />
            <img src="/master-card.svg" alt="image" />
            <img src="/paypal.svg" alt="image" />
            <img src="/american-express.svg" alt="image" />
          </div>
        </div>
      </div>








      {/* Cart Panel*/}
      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleCartPanel(false)}
        anchor={"right"}
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-4 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
          <h4>Shopping Cart (1)</h4>
          <IoCloseSharp
            className="text-[20px] cursor-pointer"
            onClick={context.toggleCartPanel(false)}
          />
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
