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
          <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiKB5BUHJPEjrT5b6Y8KpzKpRFAR9EEA1yjxe18ygZRBKHiPayeT0oiyyye_xxRPejXczfBD17dFfxidGHkWceLxge5YjFN3HnrBBCd0oojYYl6RAaMopqIAqh2Cyn6JtSu62PIur1qpBB9utAe8KB-1lnThbNOUTr1A20MyQS2W-HdfyzybVpjqx_ezuY=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgdER6CkALd2HaXgCEGu0cuFCJjABn_NxBHT5cxyWl7lFkAyEnnt-EcfrS4_4Sbz8RrBGBQmCjhAa_3-3NDMqMpQd5_mxLFPMvTfmm0EIi-5-N45hFUy8GIy_3MCWBF6y3bsctW_hcHDwTwMCCxiwECKFNdy-5p5RHTB5eBgUhGXexQ3byXbm54hKm-reM=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjMaEiRRfnYcOKH27H5erY7v49PCTTFga_8E6oMLXXiupGVeUNz2m-kkIEA-ffWht9zLOvpdq0c-DPvTct6kE52G2DvvmCYat8Cqszwb0jN4bbdtQbalTppH9aoapaGV2hs6sTwLlXCziDnLvf5pgWYC_7mSR_rjkynnfTnCin9NhlHUAk_6KC2wHXJVKM=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhd2l7phVmNbEpHXMnuSNOn0Bo4iz4ulsr-__4Nes4ZPrgo2cCn_9qn628Sy_bBJsU93o-NCe4Bw80PabwEnwRz2iOnP9bCNQFIUbD7qfhtom5Hseli9yQ-LWvQPMUVmHRNUT5SRokZ0JIccwLLXAtLUDQPNhJg13Ge5ebbq7-2HAfkYjTOpi4bz60-XCI=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgWX5HKisTFKwCrnDpxM9RfZDkW-V3NimDO7Se8EN2iIZCNmAWROfgYx0VvXgxOJe2gnjI0R5hIDUR-Ag5fUQuvqgkYPpnVoa1eAWxjp4nmx9dX-fGKJu7rNhiAFYlCNgNp18Ffp9nbEhGvSsNA6Z0FgQTkMZjcI1SKCBtzFu8OAcZd04k3Qvz56Vv3F8E=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh8ySCJnwnzeRwwMn68ZeJ6Wg1JMIjB9yyQruZu5g2MIu4uMeFeBO6U85op1YsS-aWYGkwduccVrNjFjqbkmC1H-YShpUmEpXWjqu66cZ_pdz0H_mIQM1SnoJbt-c-lOp8B0XLJFnYt8pvbRK-eKmmvyK09YQxmJF_atzF6_ektK7zMSTMnxLkZ3pLruVQ=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjrRyqN8cou8yMjuLk1War-wrhOxzOPbVH1tA9mAwndkF4VUIqWtzNtc_ibvy6t9w9n-aXW9mJ3Flnqt_NT6wot6eu1s6DM0zHnaAD4EjIIoDXPVSrpLHP7LORqsJxw26eVXIcsz5AmMhVVq0PYmtS-DP3BPbjmmaNf_YN6wqKSvSQh8cAOn559PgpGx7U=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEguVzR1-d_0n7b974dNA5xcnh_Zf6P4XAP29h0woApP-_9Gdb7ZqNa1chOXJnGNv3AOc_E310buxV2VDkNodg7kxMC2blGQAwoemEgN1UhfSWjwivTBqSrG2Yw-woi5YY0Jw4kIoBJpkpMc2nkPqUkZB8Nqav7Gn-FSfLcRBNwoPSfoc_-xZWWC3JiyE1w=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjYDI3WuyakdOf_Ty7ioPwRQk-6tXRBujErHNITjOXlgKlaayz4t95zA9ckqDewgygyFqHkp5zNQC0hE-ap9PH-YZm1slG7AR1acExJgPkgVGdDMpZ0gN5eWCcmBYuNPRBev0pDmfVt-JRp67MBrR3mAGRglWPJ7FBBytzWKdqqhm6IR-MClY3GNeNPfBA=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiywpt4WR6vPZ1bk2XJecIOWwqjIRjUxiippqF3ckIXe7eAHtwn9k5pFgvMNRcRNTzVQryjYFfmpioZa4UsCaNmFutaUaXLT9pqNkz_8cghWf-sAmi_JScbTA8pOCogr5CTuaDxSKi-3Y7vZt5vuNUdJbhgfEAkRDKg95zreAfHJLmuSO8LppSWUAsgGt4=s16000" alt="Banner Slide" className='w-full'/>
        </SwiperSlide>
      </Swiper>
  )
}

export default HomeSlider
