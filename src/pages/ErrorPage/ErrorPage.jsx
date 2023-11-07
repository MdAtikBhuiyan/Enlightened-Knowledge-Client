import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../assets/images/error-page.png'

const ErrorPage = () => {

    const error = useRouteError();

    // console.log(location.pathname);


    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center">

            <img src={errorImg} className="max-w-sm" alt="" />

            <div className="space-y-3">

                <p className="text-4xl uppercase italic text-red-600 font-semibold font-londrina">
                    {
                        error.status === 404 ? 'Page Not Found' : `${error.statusText}`
                    }
                </p>

                <p className="text-lg text-red-500 italic">{error.data}</p>
                <div>
                    <Link to='/'>
                        <button className="btn my-4 bg-bg-primary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize">Go to home</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;