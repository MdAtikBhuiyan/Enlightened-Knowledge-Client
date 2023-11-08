import { useContext, useEffect, useRef, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { data } from "autoprefixer";

const DetailSingleBook = () => {

    // get single book for show detaild
    const book = useLoaderData()
    // console.log('single', book);
    const { _id, ...restInfo } = book;

    const { user } = useContext(AuthContext)

    const modalRef = useRef(null);

    const date = new Date();

    // Get the year, month, and day from the date object
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to the month since it's zero-based
    const day = date.getDate().toString().padStart(2, '0');
    // Create the date string in "YYYY-MM-DD" format
    const formattedDate = `${year}-${month}-${day}`;


    // handle book quanity 
    const [bookQuantity, setBookQuantity] = useState(parseInt(book?.quantity))

    // console.log("qqq", typeof bookQuantity, bookQuantity);

    const [alreayBorrowed, setAlreadyBorrowed] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/borrowBook?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log("already boroo", data);
                setAlreadyBorrowed(data)
            })


    }, [user?.email, bookQuantity])
    // console.log("set already borroed", alreayBorrowed);

    // useEffect(() => {
    //     const is_exist = alreayBorrowed?.find(book => book.bookId == _id)
    //     console.log("is_exist", is_exist);
    // }, [_id, alreayBorrowed])

    const handleBookRequirung = (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const borrow_date = form.borrow_date.value;
        const return_date = form.return_date.value;

        // without mongodb _id
        const borrowData = { userName, userEmail, borrow_date, return_date, bookId: book?._id, ...restInfo }

        // console.log(data);

        // if same borrowed book already exist for this user then doesn't borrowed

        const is_exist = alreayBorrowed?.find(book => book.bookId == _id)
        if (is_exist) {
            Swal.fire({
                icon: 'error',
                title: 'Opps... Failed !!',
                text: `Same Book already borrowed`,
                confirmButtonText: "Continue"
                // showConfirmButton: false,
                // timer: 2000
            })
        }
        else {

            fetch(`http://localhost:5000/borrowBook`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(borrowData)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.insertedId) {

                        // book quantity decrease
                        const remaining = bookQuantity - 1;
                        fetch(`http://localhost:5000/updateBookQuantity/${book?._id}`, {
                            method: 'PATCH',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({ remaining })
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log("decrease", data);
                                if (data.modifiedCount > 0) {
                                    setBookQuantity(remaining)
                                }
                            })

                        // showing message
                        Swal.fire({
                            icon: 'success',
                            title: 'Book borrowing successfully',
                            text: "Do you want to continue",
                            confirmButtonText: "Yes"
                            // showConfirmButton: false,
                            // timer: 2000
                        })
                    }

                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Opps... Failed !!',
                        text: `${err.message}`,
                        confirmButtonText: "Continue"
                        // showConfirmButton: false,
                        // timer: 2000
                    })
                })

        }

        if (modalRef.current) {
            modalRef.current.close();
        }

        // clear return date field
        form.return_date.value = ''

    }


    return (

        <section className="w-[90%] mx-auto mt-16">

            <div className="m-4 mx-auto lg:max-w-screen-lg rounded-md border bg-white border-gray-100 text-gray-600 shadow-md">
                <div className="relative flex h-full flex-col md:flex-row">
                    <div className="relative p-8 md:w-4/6">
                        <div className="flex flex-col md:flex-row">
                            <h2 className="mb-2 text-4xl font-title font-black text-title-primary">{book?.name}</h2>
                            <span className="ml-2 text-sm uppercase text-title-secondary">{book?.category}</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end">
                            <p className="mt-2 text-xl font-black text-title-primary">Author: {book?.author}</p>
                            {/* <span className="ml-2 text-xs uppercase">258 Sales</span> */}
                        </div>
                        <p className="mt-2 text-md text-title-primary">Available: {bookQuantity} pieces </p>
                        <p className="mt-6 mb-4 font-sans text-base tracking-normal text-title-primary">{book?.description.slice(0, 300)}...</p>

                        <Rating
                            className='text-bg-secondary text-lg'
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            fractions={2}
                            initialRating={book?.rating}
                            readonly
                        />

                        <div className="mt-8 gap-4 flex flex-col sm:flex-row">
                            <Link to={`/readBook`} state={book}>
                                <button
                                    className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize">Read </button>
                            </Link>
                            <button
                                // onClick={() => document.getElementById('my_modal_5').showModal()}
                                onClick={() => modalRef.current.showModal()}
                                disabled={bookQuantity == 0}
                                className="btn bg-bg-secondary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base  capitalize hover:bg-[#ff6137]">Borrowed</button>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
                        <img className="block h-auto max-w-full rounded-md shadow-lg max-h-96" src={book?.img} alt="Shop image" />
                    </div>
                </div>
            </div>

            {/* modal body */}
            <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-bg-secondary">

                    <h2 className="text-center text-2xl text-white mt-4 font-bold">Recuring Book</h2>
                    <div>
                        <form onSubmit={handleBookRequirung} className="">

                            <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                                <div>
                                    <label className="text-white text-base font-bold">
                                        Name:
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        defaultValue={user?.displayName}
                                        required
                                        readOnly
                                        className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-1 px-2 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-base font-bold">
                                        Email:
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        readOnly
                                        defaultValue={user?.email}
                                        className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-1 px-2 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-base font-bold">
                                        borrow Date:
                                    </label>
                                    <input
                                        name="borrow_date"
                                        type="text"
                                        required
                                        defaultValue={formattedDate}
                                        readOnly
                                        className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-1 px-2 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-base font-bold">
                                        Return Date:
                                    </label>
                                    <input
                                        name="return_date"
                                        type="date"
                                        required
                                        placeholder="Book Category"
                                        className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-1 px-2 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                    />
                                </div>

                            </div>

                            <div className="w-full mt-8">
                                <button
                                    type="submit"
                                    className="btn w-full bg-bg-primary text-white rounded-none border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize"
                                >

                                    Submit

                                </button>
                            </div>
                        </form>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
                {/* <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form> */}
            </dialog>

        </section>
    );
};

export default DetailSingleBook;