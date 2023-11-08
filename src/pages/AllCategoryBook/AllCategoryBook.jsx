import { useLocation } from "react-router-dom";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { useEffect, useState } from "react";
import AllBooksCard from "./AllBooksCard";
import loadingImg from '../../assets/images/loader-animation.gif'
import empty from '../../assets/images/empty.png'


const booksTypes = [
    {
        id: 1,
        title: 'Fiction',

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
        title: 'thriller',

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
        title: 'romance',

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
        title: 'history',

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
        title: 'comedy',

        banner: []
    },
    {
        id: 6,
        title: 'horror',

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

const AllCategoryBook = () => {

    const location = useLocation();

    // for common banner title 
    const pathName = `home${location.pathname}`
    let title = location.pathname == '/allBook' ? "Explore our all books" : pathName;

    const [loading, setLoading] = useState(true)

    // filter and all data get by send query
    const [allBooks, setAllBooks] = useState(null)

    // for select categories filter
    const handleSelectOption = (e) => {
        console.log(e.target.value);
        setLoading(true)

        const category = e.target?.value.toLowerCase();
        console.log('select', category);
        fetch(`http://localhost:5000/allBooks?category=${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log('aaa', data);
                const availableQuantity = data?.filter(book => book.quantity > 0)
                // console.log(availableQuantity);
                setAllBooks(availableQuantity)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        setLoading(true)
        const category = location.pathname == '/allBook' ? '' : location.pathname.split('/')[2];
        // console.log('cat', category);
        fetch(`http://localhost:5000/allBooks?category=${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (location.pathname == '/allBook') {
                    // console.log('aaa,', data);
                    const availableQuantity = data?.filter(book => book.quantity > 0)
                    setAllBooks(availableQuantity)
                }
                else {
                    setAllBooks(data);
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [location.pathname])


    return (
        <div>
            <CommonBanner title={title} />


            <div className="w-[90%] mx-auto text-center mt-16">
                {
                    location.pathname == '/allBook' && <>
                        <select
                            onChange={handleSelectOption}
                            defaultValue={'default'}
                            className="select select-bordered border-bg-primary w-full max-w-xs focus:outline-none focus:border-bg-secondary">
                            <option value='default' disabled selected className="font-bold">Select Books Category</option>
                            <option value=''>All Category</option>
                            {
                                booksTypes.map(book => (
                                    <option key={book.id} className="mt-4 capitalize">{book.title}</option>
                                ))
                            }
                        </select>
                    </>
                }
            </div>
            <div className="w-[90%] mx-auto flex flex-wrap justify-center items-center gap-6 mt-16">

                {


                    loading ?

                        <div>
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>

                        :

                        allBooks.length ?
                            allBooks?.map(book => <AllBooksCard key={book._id} book={book} path={location?.pathname} />)
                            :
                            <div className="flex flex-col items-center justify-center">
                                <img className="w-40" src={empty} alt="" />
                                <h3 className="text-4xl text-title-primary italic font-bold">Books Coming soon.....</h3>
                            </div>

                }

            </div>


        </div>
    );
};

export default AllCategoryBook;