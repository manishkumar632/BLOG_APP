import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./input.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import CategoryPosts from "./pages/CategoryPosts";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([
	{
        path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
            { path: "/", element: <Home /> },
			{ path: "posts/:id", element: <PostDetail /> },
			{ path: "register", element: <Register /> },
			{ path: "login", element: <Login /> },
			{ path: "profile/:id", element: <UserProfile /> },
			{ path: "create", element: <CreatePost /> },
			{ path: "posts/:id/edit", element: <EditPost /> },
			{ path: "logout", element: <Logout /> },
			{ path: "myposts/:id", element: <Dashboard /> },
			{ path: "posts/categories/:category", element: <CategoryPosts /> },

        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
