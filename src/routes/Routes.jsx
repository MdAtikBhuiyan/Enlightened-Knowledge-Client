import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import AllCategoryBook from "../pages/AllCategoryBook/AllCategoryBook";
import AddBook from "../pages/AddBook/AddBook";
import DetailSingleBook from "../pages/DetailSingleBook/DetailSingleBook";
import BorrowedBook from "../pages/BorrowedBook/BorrowedBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/category/:id',
                element: <AllCategoryBook />
            },
            {
                path: '/allBook',
                element: <AllCategoryBook />
            },
            {
                path: '/addBook',
                element: <AddBook />
            },
            {
                path: '/updateBook',
                element: <AddBook />
            },
            {
                path: '/category/:book/:id',
                element: <DetailSingleBook />,
                loader: ({ params }) => fetch(`http://localhost:5000/singleBook/${params.id}`)
            },
            {
                path: '/borrowedBook',
                element: <BorrowedBook />
            }
        ]
    },
]);

export default router;