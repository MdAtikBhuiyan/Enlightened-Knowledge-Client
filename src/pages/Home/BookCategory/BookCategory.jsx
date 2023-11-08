
import frictionImg from '../../../assets/images/friction.jpg';
import thrillerImg from '../../../assets/images/thriller.jpg';
import romanceImg from '../../../assets/images/romance.jpg';
import historyImg from '../../../assets/images/history.jpg';
import comedyImg from '../../../assets/images/comedy.jpg';
import horrorImg from '../../../assets/images/horror.jpg';
import { useNavigate } from 'react-router-dom';


const booksTypes = [
    {
        id: 1,
       category: 'Fiction',
        image: frictionImg,
        banner: [
            {
                text: 'Taste the Feeling',
                img: 'https://i.ibb.co/XSv1h17/coke-banner-1.png',
            },
            {
                text: 'Open Happiness',
                img: 'https://i.ibb.co/BL8Nz78/coke-banner-2.png',
            },
            {
                text: 'Share a Coke',
                img: 'https://i.ibb.co/VVFzFpy/coke-banner-3.png'
            },
        ]
    },
    {
        id: 2,
       category: 'thriller',
        image: thrillerImg,
        banner: [
            {
                text: 'Good Food, Good Life',
                img: 'https://i.ibb.co/3kZyhnV/nestle-1.png',
            },
            {
                text: '"Nestlé. Good Life, Good Food.',
                img: 'https://i.ibb.co/RTCjVy6/nestle-2.png',
            },
            {
                text: 'Nestlé. More Taste, Less Waste',
                img: 'https://i.ibb.co/YcVCrhD/nestle-3.png'
            },
        ],

    },
    {
        id: 3,
       category: 'romance',
        image: romanceImg,
        banner: [
            {
                text: 'For the Love of It"',
                img: 'https://i.ibb.co/dGss6cZ/pepsi-banner-1.png',
            },
            {
                text: 'Pepsi Generations',
                img: 'https://i.ibb.co/Pt0CpKw/pepsi-banner-3.png'
            },
            {
                text: 'Live For Now',
                img: 'https://i.ibb.co/PcKvWKz/pepsi-banner-2.jpg',
            },
        ],
    },
    {
        id: 4,
       category: 'history',
        image: historyImg,
        banner: [
            {
                text: 'In taste, we cross borders',
                img: 'https://i.ibb.co/BgQ1dP1/pran-banner-1.png',
            },
            {
                text: 'Pran changes, the country changes',
                img: 'https://i.ibb.co/NFtF1HW/pran-2.png',
            },
            {
                text: 'We are always by your side',
                img: 'https://i.ibb.co/1MQ7sWP/pran-3.png'
            },
        ],

    },
    {
        id: 5,
       category: 'comedy',
        image: comedyImg,
        banner: []
    },
    {
        id: 6,
       category: 'horror',
        image: horrorImg,
        banner: [
            {
                text: 'Im Lovin It',
                img: 'https://i.ibb.co/n7kSrwP/mc-1.png',
            },
            {
                text: 'Did Somebody Say McDonalds',
                img: 'https://i.ibb.co/DLkPNMV/mc-2.png',
            },
            {
                text: 'We Love to See You Smile',
                img: 'https://i.ibb.co/vZLdRK9/mc-3.png'
            },
        ],
    },
]

const BookCategory = () => {

    const navigate = useNavigate()
    const handleCategoryClick = (data) => {
        // console.log(data);
        navigate(`/category/${data.category.toLowerCase()}`, { state: data })
    }

    return (
        <div className='mt-16'>

            <div className="text-center space-y-4" >
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary font-title">Explore Our Collection</h2>
            </div >
            <div className='flex flex-wrap gap-4 md:gap-8 justify-center items-center my-10'>
                {
                    booksTypes.map(type => (
                        <div
                            onClick={() => handleCategoryClick(type)}
                            className='border shadow-md text-center group cursor-pointer' key={type.id}>
                            <div className='relative overflow-hidden block'>
                                <img src={type.image} className='h-40 w-40 object-cover' alt="" />
                                <button
                                    onClick={() => handleCategoryClick(type)}
                                    className="opacity-0 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize transition-all group-hover:opacity-100 group-hover:top-1/2 group-hover:left-1/2">Explore</button>
                            </div>

                            <div className='p-4'>
                                <h3 className='text-xl md:text-2xl text-title-color font-title capitalize'>{type.category}</h3>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    );
};

export default BookCategory;