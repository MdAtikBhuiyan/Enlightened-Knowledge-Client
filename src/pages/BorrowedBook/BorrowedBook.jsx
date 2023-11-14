import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BorrowedCard from "./BorrowedCard";
import empty from '../../assets/images/empty.png'

const BorrowedBook = () => {

    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(true)

    const [borrowedBooks, setBorrowedBooks] = useState(null)

    useEffect(() => {
        fetch(`https://asn-library-management-server-11.vercel.app/borrowBook?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBorrowedBooks(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })

    }, [user?.email])


    // // jwt token
    // useEffect(() => {
    //     const url = 'https://asn-library-management-server-11.vercel.app/jwt'

    //     fetch(url, { credentials: 'include' })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })

    // }, [])

    return (
        <div className='mt-16 w-[90%] mx-auto'>

            {
                loading ?
                    <div className="flex h-[70vh] items-center justify-center -mt-10">
                        <span className="loading loading-spinner w-14 text-title-primary"></span>
                    </div>
                    :

                    borrowedBooks?.length ?
                        <div className='flex flex-wrap justify-center items-center gap-6'>

                            {borrowedBooks?.map(book => <BorrowedCard
                                key={book._id}
                                book={book}
                                borrowedBooks={borrowedBooks}
                                setBorrowedBooks={setBorrowedBooks}
                            />)}

                        </div>
                        :

                        <div className='flex items-center flex-col'>
                            <img src={empty} className='max-h-40' alt="" />
                            <h2 className='capitalize font-bold text-3xl text-bg-secondary italic text-center'>
                                No Borrowed Books
                            </h2>
                        </div>

            }


        </div>
    );
};

export default BorrowedBook;