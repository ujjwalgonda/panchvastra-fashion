import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgdER6CkALd2HaXgCEGu0cuFCJjABn_NxBHT5cxyWl7lFkAyEnnt-EcfrS4_4Sbz8RrBGBQmCjhAa_3-3NDMqMpQd5_mxLFPMvTfmm0EIi-5-N45hFUy8GIy_3MCWBF6y3bsctW_hcHDwTwMCCxiwECKFNdy-5p5RHTB5eBgUhGXexQ3byXbm54hKm-reM=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhd2l7phVmNbEpHXMnuSNOn0Bo4iz4ulsr-__4Nes4ZPrgo2cCn_9qn628Sy_bBJsU93o-NCe4Bw80PabwEnwRz2iOnP9bCNQFIUbD7qfhtom5Hseli9yQ-LWvQPMUVmHRNUT5SRokZ0JIccwLLXAtLUDQPNhJg13Ge5ebbq7-2HAfkYjTOpi4bz60-XCI=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh8ySCJnwnzeRwwMn68ZeJ6Wg1JMIjB9yyQruZu5g2MIu4uMeFeBO6U85op1YsS-aWYGkwduccVrNjFjqbkmC1H-YShpUmEpXWjqu66cZ_pdz0H_mIQM1SnoJbt-c-lOp8B0XLJFnYt8pvbRK-eKmmvyK09YQxmJF_atzF6_ektK7zMSTMnxLkZ3pLruVQ=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEguVzR1-d_0n7b974dNA5xcnh_Zf6P4XAP29h0woApP-_9Gdb7ZqNa1chOXJnGNv3AOc_E310buxV2VDkNodg7kxMC2blGQAwoemEgN1UhfSWjwivTBqSrG2Yw-woi5YY0Jw4kIoBJpkpMc2nkPqUkZB8Nqav7Gn-FSfLcRBNwoPSfoc_-xZWWC3JiyE1w=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mrXaOW0xFSXIZAwX3L-CwXk-590YwUr7OBeTyQmngIZyf9rMz4G6ypDBKjasT-PfDbiFItzwpzIFA4A2X8R2aVqXLmciXBGxHNMJXC5xKRUwx8rTZLQ-73SwSQTOYjX8Ro5gcOq7HFxIVYoMxspFzQDyeTSVebgI5ip2R1wMnRt6UJhlTNtDcGWyEGY/s2256/1000169718.png" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiywpt4WR6vPZ1bk2XJecIOWwqjIRjUxiippqF3ckIXe7eAHtwn9k5pFgvMNRcRNTzVQryjYFfmpioZa4UsCaNmFutaUaXLT9pqNkz_8cghWf-sAmi_JScbTA8pOCogr5CTuaDxSKi-3Y7vZt5vuNUdJbhgfEAkRDKg95zreAfHJLmuSO8LppSWUAsgGt4=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
      </Swiper>
  )
}

export default HomeSlider
