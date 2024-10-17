import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return <footer className="bg-indigo-950 text-white mt-20">
			<ul className="flex justify-between p-4">
				<li className="bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-white/20">
					<Link to="/posts/categories/Agriculture" className="text-white">
						Agriculture
					</Link>
				</li>
				<li className="bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-white/20">
					<Link to="/posts/categories/Technology" className="text-white">
						Technology
					</Link>
				</li>
				<li className="bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-white/20">
					<Link to="/posts/categories/Health" className="text-white">
						Health
					</Link>
				</li>
				<li className="bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-white/20">
					<Link to="/posts/categories/Sports" className="text-white">
						Sports
					</Link>
				</li>
				<li className="bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-white/20">
					<Link to="/posts/categories/Education" className="text-white">
						Education
					</Link>
				</li>
				<li className="bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-white/20">
					<Link to="/posts/categories/Lifestyle" className="text-white">
						Lifestyle
					</Link>
				</li>
				<li className="bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-white/20">
					<Link to="/posts/categories/Entertainment" className="text-white">
						Entertainment
					</Link>
				</li>
				<li className="bg-white/10 pl-4 pr-4 pt-2 pb-2 rounded-md hover:bg-white/20">
					<Link to="/posts/categories/Travel" className="text-white">
						Travel
					</Link>
				</li>
			</ul>
			<div className="text-white flex items-center justify-center pb-2 pt-2 border-t-[1px]">
				&copy; 2024 MBlog. All rights reserved.
			</div>
		</footer>;
};

export default Footer;
