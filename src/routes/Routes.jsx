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
import ReadBook from "../pages/ReadBook/ReadBook";
import PrivateRoute from "./PrivateRoute";
import Review from "../pages/Home/Review/Review";

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
                element: <PrivateRoute>
                    <AllCategoryBook />
                </PrivateRoute>
            },
            {
                path: '/addBook',
                element: <PrivateRoute>
                    <AddBook />
                </PrivateRoute>
            },
            {
                path: '/updateBook',
                element: <PrivateRoute>
                    <AddBook />
                </PrivateRoute>
            },
            {
                path: '/category/:book/:id',
                element: <PrivateRoute>
                    <DetailSingleBook />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleBook/${params.id}`)
            },
            {
                path: '/borrowedBook',
                element: <PrivateRoute>
                    <BorrowedBook />
                </PrivateRoute>
            },
            {
                path: '/readBook',
                element: <PrivateRoute>
                    <ReadBook />
                </PrivateRoute>
            },
            {
                path: '/review',
                element: <Review />
            }
        ]
    },
]);

export default router;