import { useLocation } from "react-router-dom";
import banner from '../../assets/images/category-banner.jpg'

const CommonBanner = ({ title }) => {
    // const location = useLocation()
    // console.log(location);
    // console.log(title);
    return (
        <div className="h-[50vh] bg-no-repeat w-full bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="h-full flex justify-center items-center">
                <h2 className="text-bg-secondary text-3xl drop-shadow-sm italic font-bold">{title}</h2>
            </div>
        </div>
    );
};

export default CommonBanner;