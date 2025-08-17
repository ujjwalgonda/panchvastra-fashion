import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={0}
            mousewheel={true}
            modules={[Mousewheel, Pagination]}
            className="zoomProductSliderThumbs h-[590px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item overflow-hidden cursor-pointer group ${
                  slideIndex === 0 ? "opacity-1" : "opacity-80"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item overflow-hidden cursor-pointer group ${
                  slideIndex === 1 ? "opacity-1" : "opacity-80"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://assets0.mirraw.com/images/12616913/GC_1451_%281%29_zoom.jpg?1719479441"
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item overflow-hidden cursor-pointer group ${
                  slideIndex === 2 ? "opacity-1" : "opacity-80"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://assets0.mirraw.com/images/12616912/GC_1443_%281%29_zoom.jpg?1719479441"
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item overflow-hidden cursor-pointer group ${
                  slideIndex === 3 ? "opacity-1" : "opacity-80"
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://assets0.mirraw.com/images/13155484/GC_1436_%281%29_zoom.jpg?1742461111"
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item overflow-hidden cursor-pointer group ${
                  slideIndex === 4 ? "opacity-1" : "opacity-80"
                }`}
                onClick={() => goto(4)}
              >
                <img
                  src="https://assets0.mirraw.com/images/12616913/GC_1451_%281%29_zoom.jpg?1719479441"
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item overflow-hidden cursor-pointer group ${
                  slideIndex === 5 ? "opacity-1" : "opacity-80"
                }`}
                onClick={() => goto(5)}
              >
                <img
                  src="https://assets0.mirraw.com/images/12616912/GC_1443_%281%29_zoom.jpg?1719479441"
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-[600px] overflow-hidden">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://assets0.mirraw.com/images/13155483/GC_1431_%281%29_zoom.jpg?1742461111"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://assets0.mirraw.com/images/12616913/GC_1451_%281%29_zoom.jpg?1719479441"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://assets0.mirraw.com/images/12616912/GC_1443_%281%29_zoom.jpg?1719479441"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://assets0.mirraw.com/images/13155484/GC_1436_%281%29_zoom.jpg?1742461111"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://assets0.mirraw.com/images/12616913/GC_1451_%281%29_zoom.jpg?1719479441"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://assets0.mirraw.com/images/12616913/GC_1451_%281%29_zoom.jpg?1719479441"
                }
              />
            </SwiperSlide>
          </Swiper>
          <span className="flex items-center text-[8px] font-[500]">Disclaimer: Slight variation in actual color vs. image is possible due to the screen resolution.</span>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
