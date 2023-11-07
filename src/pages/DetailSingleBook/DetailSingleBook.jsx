import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const DetailSingleBook = () => {
    const book = useLoaderData()
    console.log('single', book);
    return (

        <section className="w-[90%] mx-auto mt-16">

            <div className="m-4 mx-auto lg:max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
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
                                onClick={() => document.getElementById('my_modal_5').showModal()}
                                className="btn bg-bg-secondary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base  capitalize hover:bg-[#ff6137]">Borrowed</button>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
                        <img className="block h-auto max-w-full rounded-md shadow-lg max-h-96" src={book?.img} alt="Shop image" />
                    </div>
                </div>
            </div>

            {/* modal body */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">

                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>



                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </section>
    );
};

export default DetailSingleBook;