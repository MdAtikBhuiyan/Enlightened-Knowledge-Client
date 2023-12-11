// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";

import img1 from '../../../assets/images/review-user-1.jpg';
import img2 from '../../../assets/images/review-user-2.jpg';
import img3 from '../../../assets/images/review-user-3.jpg';
import img4 from '../../../assets/images/review-user-4.jpg';
import img5 from '../../../assets/images/review-user-5.jpg';

const userReviews = [
    {
        id: 1,
        userName: "JaneDoe",
        reviewText: "Elightren Library Management System is a fantastic tool for organizing our library. It's user-friendly and has helped streamline our operations. Highly recommended!",
        rating: 5,
        userImg: img1
    },
    {
        id: 2,
        userName: "JohnSmith",
        reviewText: "I've used several library management systems, and Elightren is one of the best. It's robust, efficient, and the support team is always responsive. I give it a 4-star rating.",
        rating: 4,
        userImg: img2
    },
    {
        id: 3,
        userName: "AliceJohnson",
        reviewText: "The Elightren Library Management System has made our library more organized and accessible to our patrons. It's easy to use, and the customizable features are a plus. I'm giving it a solid 5 stars!",
        rating: 5,
        userImg: img3
    },
    {
        id: 4,
        userName: "BobWilliams",
        reviewText: "Elightren's system is quite efficient and has improved our library operations. The only drawback is the pricing, but if budget is not a concern, it's an excellent choice. I'd rate it 4 stars.",
        rating: 4,
        userImg: img4
    },
    {
        id: 5,
        userName: "EmilyBrown",
        reviewText: "I found Elightren Library Management System to be a great tool for smaller libraries. It's cost-effective and easy to implement. The user interface could be more intuitive, but overall, it deserves a 3-star rating.",
        rating: 3,
        userImg: img5
    }
];


const Review = () => {
    return (
        <div className='w-[90%] mx-auto mt-16'>

            <div className="text-center space-y-4" >
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary font-title capitalize">What our client say </h2>
                <p className='text-base text-text-secondary px-4 lg:w-3/5 mx-auto'>Our clients speak highly of their experiences with us. They appreciate the quality of service we provide, noting our commitment to their success. They describe our team as knowledgeable, responsive, and always ready to go the extra mile. Their words reflect their satisfaction, emphasizing the value we bring to their projects. </p>
            </div >

            <div className='lg:w-4/5 mx-auto mt-12'>
                <Swiper
                    
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="max-h-96"
                >
                    {
                        userReviews?.map(review => (
                            <SwiperSlide key={review?.id}>
                                <div className="mb-12 md:mb-0 text-center py-8 px-4 xl:py-10 lg:px-6 shadow-lg bg-bg-primary border-b-4 border-t-4 border-transparent hover:border-bg-secondary transition-all">
                                    <div className="mb-6 flex justify-center">
                                        <img
                                            src={review?.userImg}
                                            className="w-24 h-24 object-cover rounded-full shadow-lg dark:shadow-black/30" />
                                    </div>
                                    <h5 className="mb-4 text-xl md:text-2xl font-bold text-white font-title">{review?.userName}</h5>

                                    <p className="mb-4 mx-auto text-[#ffffffef] text-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="inline-block h-7 w-7 pr-2"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                        </svg>
                                        {review?.reviewText?.slice(0,120)}...
                                    </p>
                                    <Rating
                                        className='text-bg-secondary text-lg'
                                        emptySymbol={<FaRegStar />}
                                        fullSymbol={<FaStar />}
                                        fractions={2}
                                        initialRating={review?.rating}
                                        readonly
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>


        </div>
    );
};

export default Review;