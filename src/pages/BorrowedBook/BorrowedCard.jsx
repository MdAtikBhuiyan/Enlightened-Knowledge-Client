import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const BorrowedCard = ({ book, borrowedBooks, setBorrowedBooks }) => {

    // console.log(book);

    // for updating quantity fetching all books collection data
    const [quantityBook, setQuantityBook] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/singleBook/${book?.bookId}`)
            .then(res => res.json())
            .then(data => {
                // console.log("data single", data);
                setQuantityBook(data)
            })
            .catch(err => {
                console.log(err);
            })

    }, [book?.bookId])

    const { _id, borrow_date, return_date, category, name, img } = book;



    const handleReturnBook = () => {
        // quantity 
        const bookQuantity = parseInt(quantityBook?.quantity);
        const remaining = bookQuantity + 1;

        fetch(`http://localhost:5000/updateBookQuantity/${quantityBook?._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ remaining })
        })
            .then(res => res.json())
            .then(data => {

                // console.log("increase", data);
                if (data.modifiedCount > 0) {

                    // delete data
                    fetch(`http://localhost:5000/borrowBook/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log('delete data', data);
                            const remainingBooks = borrowedBooks?.filter(book => book._id != _id)
                            setBorrowedBooks(remainingBooks)
                        })

                    // show message
                    Swal.fire({
                        icon: 'success',
                        title: 'Book return successfully',
                        text: "Do you want to continue",
                        confirmButtonText: "Yes"
                        // showConfirmButton: false,
                        // timer: 2000
                    })
                }
            })

    }

    return (
        <div className="w-full max-w-xs border border-gray-200 rounded-lg shadow ">

            <img className="max-h-60 mx-auto mt-2" src={img} alt="product image" />

            <div className="px-5 pb-5 text-center mt-4">

                <h5 className="text-2xl font-semibold tracking-tight text-title-primary">{name}</h5>
                <p className="text-title-secondary italic">{category}</p>

                <div className="flex flex-wrap items-center justify-center mt-2.5 mb-8">
                    <div>
                        <p className="bg-bg-secondary text-white px-2 py-1 text-sm">Borrowed Date</p>
                        <p className="text-text-secondary text-sm font-bold">{borrow_date}</p>
                    </div>
                    <div>
                        <p className="bg-bg-primary text-white px-2 py-1 text-sm">Return Date</p>
                        <p className="text-text-secondary text-sm font-bold">{return_date}</p>
                    </div>
                </div>

                <button
                    onClick={handleReturnBook}
                    className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize mb-2">Return Book</button>

            </div>

        </div >
    );
};

export default BorrowedCard;