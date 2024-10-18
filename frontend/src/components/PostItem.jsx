import React from "react";
import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor";

const PostItem = ({
	postId,
	thumbnail,
	category,
	title,
	description,
	authorId
}) => {
	return (
		<article className="bg-white shadow-md backdrop:blur-md p-4 rounded-xl">
			<div>
				<img
					src={thumbnail} className="rounded-md"
					alt={title}
				/>
			</div>
			<div className="mt-4">
				<Link to={`/posts/${postId}`}>
					<h1 className="text-xl font-bold">{title}</h1>
				</Link>
			</div>
			<p>{description}</p>
			<div>
				<PostAuthor />
				<Link to={`/posts/category/${category}`}>{category}</Link>
			</div>
		</article>
	);
};

export default PostItem;
