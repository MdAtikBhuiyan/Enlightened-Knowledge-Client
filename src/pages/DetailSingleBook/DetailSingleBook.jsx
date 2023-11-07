import { useContext, useRef } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const DetailSingleBook = () => {
    const book = useLoaderData()
    // console.log('single', book);


    const { user } = useContext(AuthContext)

    const modalRef = useRef(null);

    const date = new Date();

    // Get the year, month, and day from the date object
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to the month since it's zero-based
    const day = date.getDate().toString().padStart(2, '0');
    // Create the date string in "YYYY-MM-DD" format
    const formattedDate = `${year}-${month}-${day}`;

    const handleBookRequirung = (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const borrow_date = form.borrow_date.value;
        const return_date = form.return_date.value;

        const data = { userName, userEmail, borrow_date, return_date }

        console.log(data);

        if (modalRef.current) {
            modalRef.current.close();
        }

    }
    return (

        <section className="w-[90%] mx-auto mt-16">

            <div className="m-4 mx-auto lg:max-w-screen-lg rounded-md border bg-white border-gray-100 text-gray-600 shadow-md">
                <div className="relative flex h-full flex-col md:flex-row">
                    <div className="relative p-8 md:w-4/6">
                        <div className="flex flex-col md:flex-row">
                            <h2 className="mb-2 text-4xl font-title font-black text-title-primary">{book?.name}</h2>
                            <span className="ml-2 text-xs uppercase text-title-secondary">{book?.category}</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end">
                            <p className="mt-2 text-xl font-black text-title-primary">Author: {book?.author}</p>
                            {/* <span className="ml-2 text-xs uppercase">258 Sales</span> */}
                        </div>
                        <p className="mt-2 text-md text-title-primary">Available: {book?.quantity} pieces </p>
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
                            <button className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize">Read </button>
                            <button
                                // onClick={() => document.getElementById('my_modal_5').showModal()}
                                onClick={() => modalRef.current.showModal()}
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