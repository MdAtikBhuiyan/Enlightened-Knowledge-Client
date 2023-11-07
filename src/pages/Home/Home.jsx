
import Banner from './Banner/Banner';
import bannerImg1 from '../../assets/images/banner-1.jpg';
import bannerImg2 from '../../assets/images/banner-2.jpg';
import bannerImg3 from '../../assets/images/banner-3.jpg';
import BookCategory from './BookCategory/BookCategory';
import BrowseBooks from './BrowseBooks/BrowseBooks';
import Review from './Review/Review';

const banners = [
    { id: 1, title: "Your Library's Digital Maestro", description: 'Elevate library operations with Elightren. Seamlessly manage resources, engage patrons, and unlock powerful analytics. The professionals choice for modern library management excellence.', image: bannerImg1 },
    { id: 2, title: "Transforming Libraries Digitally", description: 'Elightren empowers libraries with cutting-edge digital solutions. Effortlessly manage catalogs, enhance user experiences, and harness data insights. Embrace the future of library management.', image: bannerImg2 },
    { id: 3, title: "The Library's Ultimate Powerhouse", description: 'Experience library management at its best with Elightren. Unleash unmatched capabilities in cataloging, circulation, and analytics. Your pathway to library excellence.', image: bannerImg3 },
]

const Home = () => {

    return (
        <div>
            <Banner banners={banners} />
            <BookCategory />
            <BrowseBooks />
            <Review />
        </div>
    );
};

export default Home;