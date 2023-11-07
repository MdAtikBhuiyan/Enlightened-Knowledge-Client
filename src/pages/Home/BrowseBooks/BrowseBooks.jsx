import { Link } from 'react-router-dom';
import book1 from '../../../assets/images/browse-1.jpg';
import book2 from '../../../assets/images/browse-2.jpg';
import book3 from '../../../assets/images/browse-3.jpg';

const BrowseBooks = () => {
    return (
        <div className='mt-20'>
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center bg-green-gradient py-20 px-10 md:px-0">
                <div className='md:w-2/5 mb-10 md:mb-0'>
                    <h3 className='text-2xl md:text-4xl text-white font-title capitalize mb-6'> Explore & read millions of <br /> books online for free </h3>
                    <Link to='/register'>
                        <button className="btn bg-white text-title-color border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base capitalize">Register Now</button>
                    </Link>
                </div>
                <div className='flex'>
                    <img src={book1} className='z-0 w-[150px] md:w-[200px] max-h-80 relative -mr-24 hover:z-20 hover:shadow-lg hover:scale-[1.1] transition-all' alt="" />
                    <img src={book2} className='z-10 w-[150px] md:w-[200px] max-h-80 hover:shadow-lg hover:scale-[1.1] transition-all' alt="" />
                    <img src={book3} className='z-0 w-[150px] md:w-[200px] max-h-80 relative -ml-24 hover:z-20 hover:shadow-lg hover:scale-[1.1] transition-all' alt="" />
                </div>
            </div>
        </div>
    );
};

export default BrowseBooks;