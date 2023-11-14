import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const UseAxiosSecure = () => {

    useEffect(() => {

    }, [])

    return (
        <div>

        </div>
    );
};

export default UseAxiosSecure;