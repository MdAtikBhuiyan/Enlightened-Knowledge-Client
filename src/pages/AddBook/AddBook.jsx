
import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import addImg from '../../assets/images/addData.png'

const AddBook = () => {

    const { state } = useLocation()

    const [updateProduct, setUpdateProduct] = useState(null)
    useEffect(() => {
        setUpdateProduct(state)
    }, [state])
    console.log("object", updateProduct);


    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        const img = form.img.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const addData = { img, name, quantity, author, category, rating, description }
        // console.log(addData);

        fetch(`https://asn-library-management-server-11.vercel.app/addBooks`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Book added successfully',
                        text: "Do you want to continue",
                        confirmButtonText: "Yes"
                        // showConfirmButton: false,
                        // timer: 2000
                    })
                }
                // form clear
                form.reset()
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

    // update book info
    const handleUpdateProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        const img = form.img.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updateInfo = { img, name, quantity, author, category, rating, description };

        fetch(`https://asn-library-management-server-11.vercel.app/updateBook/${updateProduct._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Book updated successfully',
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

    return (
        <div className='w-[90%] mx-auto mt-16'>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
                <div className={`justify-self-center ${updateProduct && 'order-2'}`}>
                    <img src={addImg} className='w-full h-full' alt="" />
                </div>
                <section className={`p-4 py-8 md:py-16 md:px-16 shadow-md ${updateProduct ? 'bg-bg-secondary' : 'bg-bg-primary'}`}>
                    <img src={logo} className='w-1/6 mx-auto mb-8' alt="" />
                    <h1 className="text-center text-2xl md:text-4xl font-semibold text-white font-londrina mb-8">
                        {
                            updateProduct ? "Update Product" : 'Add New Book'
                        }
                    </h1>

                    <form onSubmit={updateProduct ? handleUpdateProduct : handleAddProduct} className="">
                        <div>
                            <label className="text-white text-base font-bold">
                                Image URL:
                            </label>
                            <input
                                name="img"
                                defaultValue={updateProduct?.img}
                                required
                                type="text"
                                placeholder="Image URl"
                                className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
                            <div>
                                <label className="text-white text-base font-bold">
                                    Name:
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={updateProduct?.name}
                                    required
                                    placeholder="Book Name"
                                    className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Book Quantity:
                                </label>
                                <input
                                    name="quantity"
                                    type="number"
                                    required
                                    defaultValue={updateProduct?.quantity}
                                    placeholder="Quantity"
                                    className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Author:
                                </label>
                                <input
                                    name="author"
                                    type="text"
                                    required
                                    defaultValue={updateProduct?.author}
                                    placeholder="Author Name"
                                    className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Book Category:
                                </label>
                                <input
                                    name="category"
                                    type="text"
                                    required
                                    defaultValue={updateProduct?.category}
                                    placeholder="Book Category"
                                    className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                />
                            </div>

                            <div>
                                <label className="text-white text-base font-bold">
                                    Description:
                                </label>
                                <input
                                    name="description"
                                    type="text"
                                    required
                                    defaultValue={updateProduct?.description}
                                    placeholder="Details"
                                    className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                />
                            </div>
                            <div>
                                <label className="text-white text-base font-bold">
                                    Rating:
                                </label>
                                <input
                                    name="rating"
                                    type="text"
                                    required
                                    defaultValue={updateProduct?.rating}
                                    placeholder="rating"
                                    className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                />
                            </div>
                        </div>

                        <div className="w-full mt-12">
                            <button
                                type="submit"
                                className={` ${updateProduct ? 'bg-bg-primary' : 'bg-bg-secondary'} text-white w-full cursor-pointer py-2 px-4 text-base font-bold transition ${updateProduct ? 'hover:bg-[#58932d]' : 'hover:bg-[#ff6137]'}`}>
                                {updateProduct ?
                                    "Update Book"
                                    :
                                    "Add Book"
                                }
                            </button>
                        </div>
                    </form>
                </section>

            </div>

        </div>
    );
};

export default AddBook;

