import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const AllBooksCard = ({ book, path }) => {

    // console.log(path);

    return (
        <div className="border border-gray-200 shadow">
            <div className="max-w-[240px] max-h-[250px] overflow-hidden mx-auto mb-4">
                <img className="w-full h-full" src={book?.img} alt="book image" />
            </div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-lg font-bold text-text-primary">{book?.name}</h5>
                </a>

                <Rating
                    className='text-bg-primary text-sm'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar />}
                    fractions={2}
                    initialRating={book?.rating}
                    readonly
                />
                <div className="text-text-secondary text-sm capitalize mb-4">
                    <p>Author: {book?.author}</p>
                    <p>category: {book?.category}</p>
                </div>

                {
                    path == '/allBook' ?
                        <Link to={`/updateBook`} state={book}>
                            <button
                                className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 font-bold text-sm hover:bg-[#58932d] capitalize">Update</button>
                        </Link>
                        :
                        <Link to={`/category/${book?.category}/${book?._id}`}>
                            <button

                                className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 font-bold text-sm hover:bg-[#58932d] capitalize">Details</button>
                        </Link>
                }
            </div>
        </div >
    );
};

export default AllBooksCard;






