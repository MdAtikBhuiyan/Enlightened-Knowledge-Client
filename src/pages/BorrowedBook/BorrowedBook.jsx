import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BorrowedCard from "./BorrowedCard";
import empty from '../../assets/images/empty.png'

const BorrowedBook = () => {

    const { user } = useContext(AuthContext);

    const [borrowedBooks, setBorrowedBooks] = useState(null)

    useEffect(() => {
        fetch()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBorrowedBooks(data)
            })

    }, [])

    return (
        <div className='my-16 w-[90%] mx-auto'>

            {
                borrowedBooks?.length ?
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                        {borrowedBooks?.map(product => <BorrowedCard
                            key={product._id}
                            product={product}
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