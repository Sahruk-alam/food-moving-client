import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews=use(reviewsPromise)
    console.log(reviews)
    return (
      <div className='my-10'>
        <div>
            <h3 className="text-center font-bold text-3xl">Reviews</h3>
            <p className='px-3 my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum deserunt fugiat reprehenderit alias praesentium, magni nulla dignissimos! Cum doloribus vel omnis sequi vero molestiae pariatur quam! Quis assumenda quae temporibus.</p>
        </div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            reviews.map((review) => (
                <SwiperSlide key={review.id}>
          <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>
            ))
        }
      </Swiper>
      </div>
    
    );
};

export default Reviews;