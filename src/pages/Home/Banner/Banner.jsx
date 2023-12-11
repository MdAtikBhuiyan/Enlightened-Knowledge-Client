// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BannerSlide from '../../../components/BannerSlide/BannerSlide';


const Banner = ({ banners }) => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"

            >

                {
                    banners?.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <BannerSlide bannerInfo={banner} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Banner;