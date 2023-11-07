import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/images/logo.png'
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

    const { logIn, googleSignIn } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate()

    const handleLogin = (e) => {

        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // clear error message befor click
        setErrorMessage('')

        // login at firebase with email and password
        if (email && password) {
            logIn(email, password)
                .then(res => {
                    // console.log(res.user);
                    toast.success("Login successfully")
                    navigate('/')
                })
                .catch(err => {
                    setErrorMessage(err.message)
                })
        }

    }

    const handleGoogleSignIn = () => {
        // clear error message before click
        setErrorMessage('')

        // login at firebase with email and password
        googleSignIn()
            .then(res => {
                // console.log(res.user);
                toast.success("Login successfully")
                navigate('/')
            })
            .catch(err => {
                setErrorMessage(err.message)
            })
    }

    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="relative mx-auto max-w-[600px] overflow-hidden bg-bg-primary py-16 px-14 text-center sm:px-12 md:px-[60px]"
                            >
                                <div className="mb-10 text-center md:mb-12">
                                    <img src={logo} className="w-1/6 mx-auto object-cover" alt="" />
                                    <h2 className="text-white text-2xl md:text-3xl font-bold font-londrina mt-6">Sign in your account</h2>
                                </div>

                                <form onSubmit={handleLogin}>

                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="border-[#E9EDF4] w-full border bg-[#FCFDFE] py-2 px-4 text-base text-body-color placeholder-[#8c8c8d] outline-none focus:border-red-300"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="submit"
                                            value="Sign In"
                                            className="bg-bg-secondary text-white w-full cursor-pointer py-2 px-4 text-base font-bold transition hover:bg-[#ff6137]"
                                        />
                                    </div>
                                </form>

                                <p className="text-red-600 text-base text-center italic mb-6">{errorMessage}</p>

                                <p className="mb-4 text-base text-white">Connect With</p>

                                <div className="mb-8 flex justify-center">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="btn hover:bg-transparent bg-transparent border-0">
                                        <FcGoogle className="text-5xl" />
                                    </button>
                                </div>

                                <p className="text-sm text-black">
                                    <span className="pr-2">Do not have an account?</span>
                                    <Link to='/register' className="text-white text-base font-bold hover:underline">
                                        Sign up
                                    </Link>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;