import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Home from "../pages/Home/Home";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='overflow-hidden'>
                <Outlet />
            </div>
            <Footer />


            {/* react tostify container */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    );
};

export default MainLayout;