import { Link, NavLink } from "react-router-dom";
import Theme from "../../../Theme/Theme";
import logo from '../../../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const navLinks = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>

        {
            user &&
            <li>
                <NavLink to='/addBook'>Add Book</NavLink>
            </li>
        }
        <li>
            <NavLink to='/allBook'>All Book</NavLink>
        </li>
        {user &&
            <li>
                <NavLink to='/borrowedBook'>Borrowed Book</NavLink>
            </li>
        }

        <li>
            <NavLink to='/review'>User Review</NavLink>
        </li>


    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Log out successfull")
            })
            .catch(err => {
                toast.error("Logout failed", err.message)
            })
    }

    return (
        <div className="sticky top-0 z-20 bg-[#3d7e34] ">
            <div className="navbar items-center w-[80%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="flex flex-col gap-4 dropdown-content mt-3 p-6 shadow bg-base-100 rounded-box w-52 z-20 text-white">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="font-title text-xl md:text-2xl text-title-color font-bold w-full">
                        <Link to='/'>
                            <img className="w-1/6 object-cover" src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 px-1 text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end items-center space-x-3">
                    {
                        user ?
                            <div className="dropdown dropdown-end mt-2">
                                <label tabIndex={1} className="avatar online btn p-0 bg-transparent border-0 hover:bg-transparent">
                                    <div className="w-10 h-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                {/* <label tabIndex={1} className="btn m-1">Click</label> */}
                                <ul tabIndex={1} className="dropdown-content z-[1] flex flex-col flex-wrap py-4 pl-4 pr-6 shadow bg-base-100 rounded-box w-52">
                                    <div className="text-center text-lg font-bold">
                                        <p>{user?.displayName}</p>
                                        <p className="text-xs mb-4">{user?.email}</p>
                                        <button
                                            onClick={handleLogout}
                                            className="btn bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 text-sm hover:bg-[#58932d] capitalize">logout</button>
                                    </div>
                                </ul>
                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn bg-[#58932d] text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 text-base hover:bg-bg-primary capitalize">login</button>
                            </Link>
                    }

                    <Theme />
                </div>
            </div>
        </div>
    );
};

export default Navbar;