import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider";
import ProductDetailsComponent from "../../components/ProductDetails";
import { Rating } from "@mui/material";

const ProductDetails = () => {
  
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>

            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Amazing blue sequins embroidered lehenga choli with dupatta
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[30%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[70%] pr-10">
           <ProductDetailsComponent />
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[15px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Descriptions
            </span>

            <span
              className={`link text-[15px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>

            <span
              className={`link text-[15px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Specifications
            </span>
            <span
              className={`link text-[15px] cursor-pointer font-[500] ${
                activeTab === 3 && "text-primary"
              }`}
              onClick={() => setActiveTab(3)}
            >
              Review
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                The Blue Sequins Embroidered Lehenga Choli with Dupatta is an
                intricately crafted ensemble that blends traditional
                craftsmanship with contemporary aesthetics, making it suitable
                for festive occasions, weddings, and formal cultural events.
              </p>
              <h4>Lehenga (Skirt):</h4>
              <p>
                Constructed from high-quality fabric such as georgette or
                silk-blend, the lehenga features elaborate sequin embroidery
                arranged in symmetrical floral and geometric motifs. A concealed
                side zipper or drawstring closure ensures a secure and
                adjustable fit. The hemline may be accentuated with a broad
                embroidered border for added visual appeal.
              </p>

              <h4>Choli (Blouse):</h4>
              <p>
                The matching choli is tailored in a complementary fabric, often
                featuring a fitted bodice with short or elbow-length sleeves.
                The back closure is typically with hooks or a concealed zip, and
                some versions may include padding for enhanced structure.
              </p>

              <h4>Dupatta:</h4>
              <p>
                The ensemble is completed with a lightweight dupatta, crafted
                from net or chiffon, which is bordered with sequin work or
                embroidered lace. The dupatta provides an ethereal touch to the
                attire, offering versatility in draping styles.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-500">
                  <thead class="text-xs text-gray-600 uppercase bg-gray-100">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Package Details
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Top Fabric
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Bottom Fabric
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Bottom Color
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-500">
                  <thead class="text-xs text-gray-600 uppercase bg-gray-100">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Package Details
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Top Fabric
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Bottom Fabric
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Bottom Color
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                      <td class="px-6 py-4 font-[500]">Silver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answers</h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://thumbs.dreamstime.com/b/vertical-portrait-happy-young-business-lady-indian-ethnicity-standing-confident-pose-looking-camera-profile-picture-339154738.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Payal Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-04-07</h5>
                        <p className="mt-0 mb-0">
                          "I recently wore a stunning lehenga from Panchvastra
                          by Payal Verma and was absolutely blown away by the
                          craftsmanship, quality, and attention to detail. The
                          embroidery, the fabric, the fit—everything was
                          flawless. It felt like it was made just for me. I
                          received so many compliments, and I truly felt regal
                          wearing it. Payal Verma’s designs beautifully merge
                          tradition with a modern touch, creating pieces that
                          are both timeless and statement-making. I can’t wait
                          to shop again!" – A Happy Client
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={2} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://thumbs.dreamstime.com/b/vertical-portrait-happy-young-business-lady-indian-ethnicity-standing-confident-pose-looking-camera-profile-picture-339154738.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Payal Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-04-07</h5>
                        <p className="mt-0 mb-0">
                          "I recently wore a stunning lehenga from Panchvastra
                          by Payal Verma and was absolutely blown away by the
                          craftsmanship, quality, and attention to detail. The
                          embroidery, the fabric, the fit—everything was
                          flawless. It felt like it was made just for me. I
                          received so many compliments, and I truly felt regal
                          wearing it. Payal Verma’s designs beautifully merge
                          tradition with a modern touch, creating pieces that
                          are both timeless and statement-making. I can’t wait
                          to shop again!" – A Happy Client
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={2} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://thumbs.dreamstime.com/b/vertical-portrait-happy-young-business-lady-indian-ethnicity-standing-confident-pose-looking-camera-profile-picture-339154738.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Payal Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-04-07</h5>
                        <p className="mt-0 mb-0">
                          "I recently wore a stunning lehenga from Panchvastra
                          by Payal Verma and was absolutely blown away by the
                          craftsmanship, quality, and attention to detail. The
                          embroidery, the fabric, the fit—everything was
                          flawless. It felt like it was made just for me. I
                          received so many compliments, and I truly felt regal
                          wearing it. Payal Verma’s designs beautifully merge
                          tradition with a modern touch, creating pieces that
                          are both timeless and statement-making. I can’t wait
                          to shop again!" – A Happy Client
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={2} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://thumbs.dreamstime.com/b/vertical-portrait-happy-young-business-lady-indian-ethnicity-standing-confident-pose-looking-camera-profile-picture-339154738.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Payal Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-04-07</h5>
                        <p className="mt-0 mb-0">
                          "I recently wore a stunning lehenga from Panchvastra
                          by Payal Verma and was absolutely blown away by the
                          craftsmanship, quality, and attention to detail. The
                          embroidery, the fabric, the fit—everything was
                          flawless. It felt like it was made just for me. I
                          received so many compliments, and I truly felt regal
                          wearing it. Payal Verma’s designs beautifully merge
                          tradition with a modern touch, creating pieces that
                          are both timeless and statement-making. I can’t wait
                          to shop again!" – A Happy Client
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={2} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://thumbs.dreamstime.com/b/vertical-portrait-happy-young-business-lady-indian-ethnicity-standing-confident-pose-looking-camera-profile-picture-339154738.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Payal Verma</h4>
                        <h5 className="text-[13px] mb-0">2025-04-07</h5>
                        <p className="mt-0 mb-0">
                          "I recently wore a stunning lehenga from Panchvastra
                          by Payal Verma and was absolutely blown away by the
                          craftsmanship, quality, and attention to detail. The
                          embroidery, the fabric, the fit—everything was
                          flawless. It felt like it was made just for me. I
                          received so many compliments, and I truly felt regal
                          wearing it. Payal Verma’s designs beautifully merge
                          tradition with a modern touch, creating pieces that
                          are both timeless and statement-making. I can’t wait
                          to shop again!" – A Happy Client
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={2} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#f1f1f1] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>

                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      className="w-full mb-5"
                      multiline
                      rows={5}
                    />

<br /><br />
                    <Rating name="size-small" defaultValue={4}/>


                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-10">
        <h2 className="flex text-[20px] font-[600] pb-0">Similar Items</h2>
          <p className="flex text-[12px] font-[500">Panchvastra Presents: Timeless Elegance, Redefined
          </p>
          <ProductsSlider items={5} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
