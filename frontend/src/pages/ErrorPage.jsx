import React from "react";
import { Link } from "react-router-dom";
import Page_Not_Found from "../images/page_not_found.svg";

const ErrorPage = () => {
	return <section className="flex items-center justify-center inset-0 absolute">
			<div className="flex flex-col justify-center items-center">
			<div>
				<img src={Page_Not_Found} width={500} alt="Page Not Found" />
				</div>
				<Link to="/">
					<button className="bg-blue-500 text-white p-4 rounded-md">Go back to Homepage</button>
				</Link>
			</div>
		</section>;
};

export default ErrorPage;
