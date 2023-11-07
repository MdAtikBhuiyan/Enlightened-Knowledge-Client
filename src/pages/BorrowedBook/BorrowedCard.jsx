

const BorrowedCard = () => {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-200 py-4">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-contain bg-center bg-no-repeat py-4 rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${image})` }} title="Woman holding a mug">
            </div>
            {/* <img src={image} className='p-4 h-1/2' alt="" /> */}
            <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-lg text-title-secondary flex items-center">
                        {"brandName"}
                    </p>
                    <div className="text-title-primary font-bold text-2xl mb-2">{"title"}</div>
                    <p className="text-text-primary text-base">{"details"}</p>
                </div>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-title-secondary font-bold capitalize">Category: {"type"}</p>
                    <p className="text-2xl text-title-secondary font-bold">${"price"}</p>
                </div>
                <button
                    // onClick={handleDelete}
                    className="btn bg-red-500 w-fit text-white rounded-full border-0 h-fit min-h-fit px-6 py-1 font-bold text-base hover:bg-title-secondary capitalize mt-4">Delete</button>
            </div>
        </div>
    );
};

export default BorrowedCard;