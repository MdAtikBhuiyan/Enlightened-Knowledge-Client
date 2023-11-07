
const DetailSingleBook = () => {
    const { image, title, price, rating, details, type, brandName } = ''
    return (

        <section className="w-[90%] mx-auto mt-16">

            <div className="m-4 mx-auto lg:max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
                <div className="relative flex h-full flex-col md:flex-row">
                    <div className="relative p-8 md:w-4/6">
                        <div className="flex flex-col md:flex-row">
                            <h2 className="mb-2 text-2xl font-title font-black text-title-primary">Tailby</h2>
                            <span className="ml-2 text-xs uppercase text-title-secondary">Tailwind</span>
                        </div>
                        <p className="mt-3 font-sans text-base tracking-normal text-title-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.</p>
                        <div className="flex flex-col md:flex-row md:items-end">
                            <p className="mt-6 text-4xl font-black text-title-primary">$70<sup className="align-super text-sm">00</sup></p>
                            <span className="ml-2 text-xs uppercase">258 Sales</span>
                        </div>
                        <div className="mt-8 gap-4 flex flex-col sm:flex-row">
                            <button className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize">Read </button>
                            <button className="btn bg-bg-secondary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base  capitalize hover:bg-[#ff6137]">Borrowed</button>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
                        <img className="block h-auto max-w-full rounded-md shadow-lg" src="/images/4PQXlbagb4MqcadNmeo0D.png" alt="Shop image" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default DetailSingleBook;