import { Link } from "react-router-dom";

const BannerSlide = ({ bannerInfo }) => {

    return (
        <div>
            <div className="relative w-full before:absolute before:left-0 before:right-0 before:top-0 before:z-5 before:h-full before:w-full before:bg-[#121281] before:opacity-30">
                <img src={bannerInfo?.image} alt="" className="h-[75vh] w-full object-cover" />

                <div className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 text-center z-10">
                    <h2 className="text-2xl md:text-4xl xl:text-6xl mb-10 font-bold text-white font-londrina">{bannerInfo?.title}</h2>
                    <p className="md:w-4/5 mx-auto text-white mb-8">{bannerInfo?.description}</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to='/login'>
                            <button className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize">Read Book</button>
                        </Link>
                        <Link to='/register'>
                            <button className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize">Register Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BannerSlide;