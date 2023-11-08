import React from 'react';
import { useLocation } from 'react-router-dom';

const ReadBook = () => {

    const { state } = useLocation()
    console.log(state);

    return (
        <section className="w-[90%] mx-auto mt-16">

            <div className="m-4 mx-auto lg:max-w-screen-lg rounded-md border bg-white border-gray-100 text-gray-600 shadow-md">
                <div className="relative flex h-full flex-col justify-center items-center md:flex-row">
                    <div className="relative p-8 md:w-4/6">
                        <div className="flex flex-col md:flex-row">
                            <h2 className="mb-2 text-4xl font-title font-black text-title-primary">{state?.name}</h2>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end">
                            <p className="mt-2 text-xl font-black text-title-primary">Author: {state?.author}</p>
                            {/* <span className="ml-2 text-xs uppercase">258 Sales</span> */}
                        </div>
                        <p className="mt-6 mb-4 font-sans text-base tracking-normal text-title-primary">{state?.description}</p>



                        <div className="mt-8 gap-4 flex flex-col sm:flex-row">
                            <button className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize">Read as pdf </button>

                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default ReadBook;