'use client'
import React from 'react'
import 'swiper/css'
import BackgroundRadialRight from '../BackgroundRadialRight/BackgroundRadialRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataPaymentMethods } from './PaymentMethods.data'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import CtaDark from '../CtaDark/CtaDark'

function PaymentsMethods() {
    return (
        <div className='relative py-20 md:py-64'>
            <BackgroundRadialRight/>
            <div className='relative w-full overflow-hidden'>
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 7,
                            spaceBetween: 15
                        }
                    }}
                    autoplay={{
                        delay:1,
                        disableOnInteraction: false
                    }}
                    grabCursor={true}
                    loop={true}
                    speed={2000}
                >
                    <div className='absolute flex w-auto'>
                        {dataPaymentMethods.map(({id, image}) => (
                            <SwiperSlide key={id} className='flex items-center slider-horizontal'>
                                <Image src={`/assets/${image}`} alt='Payment Methods'
                                width={200} height={200} className='h-[60px] w-[100px] object-contain'/>
                            </SwiperSlide>

                        ))}
                    </div>
                </Swiper>
            </div>
            <CtaDark/>
        </div>
    )
}

export default PaymentsMethods
