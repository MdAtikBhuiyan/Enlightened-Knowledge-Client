import { useLocation } from "react-router-dom";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { useEffect, useState } from "react";
import AllBooksCard from "./AllBooksCard/AllBooksCard";

const books =
    [
        {
            "img": "https://i.ibb.co/gzLR0Lp/friction-1.jpg",
            "name": "Fourth Wing",
            "author": "Rebecca Yarros",
            "category": "fiction",
            "rating": 4,
            "release": "02 May 2023",
            "publisher": "Recorded Books, Inc.",
            "series": "The Empyrean",
            "description": "An Instant New York Times Bestseller A Goodreads Most Anticipated Book \"Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy.\"—Booklist, starred review \"Fourth Wing will have your heart pounding from beginning to end ... A fantasy like you've never read before.\"?#1 New York Times bestselling author Jennifer L. Armentrout Enter the brutal and elite world of a war college for dragon riders from USA Today bestselling author Rebecca Yarros. Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders. But when you're smaller than everyone else and your body is brittle, death is only a heartbeat away ... because dragons don't bond to \"fragile\" humans. They incinerate them. With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother's daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant. She'll need every edge her wits can give her just to see the next sunrise. Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret. Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: graduate or die."
        },
        {
            "img": "https://i.ibb.co/YR2qT9P/friction-2.jpg",
            "name": "What the River Knows",
            "author": "Isabel Ibañez",
            "category": "fiction",
            "rating": 5,
            "release": "31 October 2023",
            "publisher": "Wednesday Books",
            "series": "The Secrets of the Nile",
            "language": "english",
            "description": "Bolivian-Argentinian Inez Olivera belongs to the glittering upper society of nineteenth century Buenos Aires, and like the rest of the world, the town is steeped in old world magic that’s been largely left behind or forgotten. Inez has everything a girl might want, except for the one thing she yearns the most: her globetrotting parents—who frequently leave her behind. When she receives word of their tragic deaths, Inez inherits their massive fortune and a mysterious guardian, an archeologist in partnership with his Egyptian brother-in-law. Yearning for answers, Inez sails to Cairo, bringing her sketch pads and an ancient golden ring her father sent to her for safekeeping before he died. But upon her arrival, the old world magic tethered to the ring pulls her down a path where she soon discovers there’s more to her parent’s disappearance than what her guardian led her to believe. With her guardian’s infuriatingly handsome assistant thwarting her at every turn, Inez must rely on ancient magic to uncover the truth about her parent’s disappearance—or risk becoming a pawn in a larger game that will kill her."
        },
        {
            "img": "https://i.ibb.co/q0rdz5B/fiction-3.jpg",
            "name": "It Starts with Us",
            "author": "Colleen Hoover",
            "category": "fiction",
            "rating": 4.5,
            "release": "18 October 2022",
            "publisher": "Atria Books",
            "series": "It Ends with Us",
            "language": "english",
            "description": "Before It Ends with Us, it started with Atlas. Colleen Hoover tells fan favorite Atlas's side of the story and shares what comes next in this long-anticipated sequel to the \"glorious and touching\" (USA TODAY) #1 New York Times bestseller It Ends with Us. Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date. But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter's life. Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the \"gripping, pulse-pounding\" (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas's past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband, it proves that \"no one delivers an emotional read like Colleen Hoover\" (Anna Todd, New York Times bestselling author)."
        },
        {
            "img": "https://i.ibb.co/1rGSHG7/fiction-4.jpg",
            "name": "It Ends with Us",
            "author": "Colleen Hoover",
            "category": "fiction",
            "rating": 5,
            "release": "02 August 2016",
            "publisher": "Atria Books",
            "series": "It Ends with Us",
            "language": "english",
            "description": "From the #1 New York Times bestselling author of It Starts with Us and All Your Perfects, a \"brave and heartbreaking novel that digs its claws into you and doesn't let go, long after you've finished it\" (Anna Todd, New York Times bestselling author) about a workaholic with a too-good-to-be-true romance can't stop thinking about her first love—soon to be a major motion picture starring Blake Lively and Justin Baldoni. Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business. And when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life seems too good to be true. Ryle is assertive, stubborn, maybe even a little arrogant."
        },
        {
            "img": "https://i.ibb.co/2Y7hgqt/thriller-1.jpg",
            "name": "Verity",
            "author": "Colleen Hoover",
            "category": "thriller",
            "rating": 5,
            "release": "05 October 2021",
            "publisher": "Grand Central Publishing",
            "series": "n/a",
            "language": "english",
            "description": "Whose truth is the lie? Stay up all night reading the sensational psychological thriller that has readers obsessed, from the #1 New York Times bestselling author of Too Late and It Ends With Us. #1 New York Times Bestseller · USA Today Bestseller · Globe and Mail Bestseller · publishers Weekly Bestseller Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. Lowen arrives at the Crawford home, ready to sort through years of Verity’s notes and outlines, hoping to find enough material to get her started. What Lowen doesn’t expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of the night her family was forever altered. Lowen decides to keep the manuscript hidden from Jeremy, knowing its contents could devastate the already grieving father. But as Lowen’s feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife’s words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue loving her."
        },
        {
            "img": "https://i.ibb.co/FVPm99x/thriller-2.jpg",
            "name": "The Guest List",
            "author": "Lucy Foley",
            "category": "thriller",
            "rating": 4.5,
            "release": "02 June 2020",
            "publisher": "HarperAudio",
            "series": "n/a",
            "language": "english",
            "description": "On an island off the coast of Ireland, guests gather to celebrate two people joining their lives together as one. The groom: handsome and charming, a rising television star. The bride: smart and ambitious, a magazine publisher. It's a wedding for a magazine, or for a celebrity: the designer dress, the remote location, the luxe party favors, the boutique whiskey. The cell phone service may be spotty and the waves may be rough, but every detail has been expertly planned and will be expertly executed. But perfection is for plans, and people are all too human. As the champagne is popped and the festivities begin, resentments and petty jealousies begin to mingle with the reminiscences and well wishes. The groomsmen begin the drinking game from their school days. The bridesmaid not-so-accidentally ruins her dress. The bride's oldest (male) friend gives an uncomfortably caring toast. And then someone turns up dead. Who didn't wish the happy couple well? And perhaps more important, why?"
        }
    ]


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
    const pathName = `home${location.pathname}`
    let title = location.pathname == '/allBook' ? "Explore our all books" : pathName;

    const a = 'a';

    const [category, setCategory] = useState('all')
    const handleSelectOption = (e) => {
        console.log(e.target.value);
        setCategory(e.target.value)
    }

    const [booksItem, setBooks] = useState();

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])  


    return (
        <div>
            <CommonBanner title={title} />


            <div className="w-[90%] mx-auto text-center mt-16">
                {
                    location.pathname == '/allBook' && <>
                        <select
                            onChange={handleSelectOption}
                            defaultValue={''}
                            className="select select-bordered border-bg-primary w-full max-w-xs focus:outline-none focus:border-bg-secondary">
                            <option value='' disabled selected className="font-bold">Select Books Category</option>
                            <option value='all'>All Category</option>
                            {
                                booksTypes.map(book => (
                                    <option key={book.id} className="mt-4">{book.title}</option>
                                ))
                            }
                        </select>
                    </>
                }
            </div>
            <div className="w-[90%] mx-auto flex flex-wrap justify-center items-center gap-6 mt-16">

                {
                    books?.map(book => <AllBooksCard key={book.name} book={book} path={location?.pathname} />)
                }
            </div>


        </div>
    );
};

export default AllCategoryBook;