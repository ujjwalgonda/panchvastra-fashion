import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8'>
      <div className='container'>
      <Swiper
        slidesPerView={9}
        spaceBetween={10}
       navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>KURTA SETS</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="http://res.cloudinary.com/dgzxuvglc/image/upload/v1731406845/categorys/mzeas5pxciuukcbhbchq.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>SHERWANI</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>JODHPURI</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="http://res.cloudinary.com/dgzxuvglc/image/upload/v1731406403/categorys/fixhaxipnz8y6kng2ifx.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>LEHENGA</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>SAREES</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="http://res.cloudinary.com/dgzxuvglc/image/upload/v1731408335/categorys/cbfmw0j5zwo3apfm3ggq.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>GOWN</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>PUNJABI SUIT</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="http://res.cloudinary.com/dgzxuvglc/image/upload/v1731406403/categorys/fixhaxipnz8y6kng2ifx.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>KAFTAN</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>WEDDING</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="http://res.cloudinary.com/dgzxuvglc/image/upload/v1731405546/categorys/mds7yim7avw7mumxyzus.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>MEN</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>BOYS</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/'>
          <div className='item p-3 bg-transparent rounded-sm text-center'>
            <img src="http://res.cloudinary.com/dgzxuvglc/image/upload/v1731408335/categorys/cbfmw0j5zwo3apfm3ggq.png" className='w-full rounded-full border-[3px] transition-all'/>
            <h3 className='text-[12px] mt-5'>GIRLS</h3>
          </div>
          </Link>
        </SwiperSlide>
      
      </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider
