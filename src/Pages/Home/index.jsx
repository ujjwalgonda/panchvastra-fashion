import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import AdsBannerSlider from "../../components/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import BlogItem from "../../components/BlogItem";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <br />
      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">What's Your Vibe ?</h2>
              <p className="text-[14px] font-[400]">
                wear confidence, express individuality, and redefine style with
                every piece you own.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="FASHION FESTIVAL" />
                <Tab label="GROOM" />
                <Tab label="BRIDAL" />
                <Tab label="PARTY WEAR" />
                <Tab label="WEDDING SEASION" />
                <Tab label="OFFER TIME" />
                <Tab label="LEHENGAS" />
                <Tab label="SAREES" />
                <Tab label="KURTAS" />
                <Tab label="JODHPURI" />
                <Tab label="PLAZZO" />
                <Tab label="DHOTI KURTA" />
                <Tab label="PATHANI" />
                <Tab label="KAFTAN" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={5} />
        </div>
      </section>

      <section className="py-2 pt-0 bg-white">
        <div className="container">
          <h2 className="flex items-center justify-center  text-[20px] font-[600] mb-3">Our Latest Collection</h2>
          <p className="flex items-center justify-center  text-[12px] font-[500] mb-5">Panchvastra Presents: Timeless Elegance, Redefined
          </p>
          <ProductsSlider items={5} />
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-2 pt-0 bg-white">
        <div className="container">
          <h2 className="flex items-center justify-center  text-[20px] font-[600] mb-3">Wedding Closet</h2>
          <p className="flex items-center justify-center  text-[12px] font-[500] mb-5">Spotlight on Elegance: Discover Our Featured Masterpiece
          </p>
          <ProductsSlider items={5} />
        </div>
      </section>

      <section className="py-2 pb-8 pt-0 bg-white blogSection">
        <div className="container">
        <h2 className="flex items-center justify-center  text-[20px] font-[600] mb-3">From The Blog</h2>
        <p className="flex items-center justify-center  text-[12px] font-[500] mb-5">Panchvastra: Weaving Tradition into Timeless Elegance.
</p>
           <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                 navigation={true}
                  modules={[Navigation]}
                  className="blogItem"
                >
                  <SwiperSlide>
                    <BlogItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BlogItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BlogItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BlogItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BlogItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BlogItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BlogItem/>
                    </SwiperSlide>
                    </Swiper>
        </div>
      </section>

    </>
  );
};

export default Home;
