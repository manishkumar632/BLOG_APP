import React, { useState } from "react";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
	{
		id: 1,
		title: "Post 1",
		thumbnail: require("../images/blog1.jpg"),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, nulla vel fermentum viverra, lectus neque placerat massa, a ultricies lectus lectus vitae velit. Sed vel orci vel sapien finibus finibus. Sed id ex vel neque eleifend placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		createdAt: new Date(),
		category: "Technology",
		author: "John Doe",
		authorId: 1
	},
	{
		id: 2,
		title: "Post 2",
		thumbnail: require("../images/blog2.jpg"),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, nulla vel fermentum viverra, lectus neque placerat massa, a ultricies lectus lectus vitae velit. Sed vel orci vel sapien finibus finibus. Sed id ex vel neque eleifend placerat. Pellentesque habit.",
		createdAt: new Date(),
		category: "Lifestyle",
		author: "Jane Smith",
		authorId: 2
	},
	{
		id: 3,
		title: "Post 2",
		thumbnail: require("../images/blog3.jpg"),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, nulla vel fermentum viverra, lectus neque placerat massa, a ultricies lectus lectus vitae velit. Sed vel orci vel sapien finibus finibus. Sed id ex vel neque eleifend placerat. Pellentesque habit.",
		createdAt: new Date(),
		category: "Lifestyle",
		author: "Jane Smith",
		authorId: 2
	},
	{
		id: 4,
		title: "Post 2",
		thumbnail: require("../images/blog4.jpg"),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, nulla vel fermentum viverra, lectus neque placerat massa, a ultricies lectus lectus vitae velit. Sed vel orci vel sapien finibus finibus. Sed id ex vel neque eleifend placerat. Pellentesque habit.",
		createdAt: new Date(),
		category: "Lifestyle",
		author: "Jane Smith",
		authorId: 2
	},
	{
		id: 5,
		title: "Post 2",
		thumbnail: require("../images/blog5.jpg"),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, nulla vel fermentum viverra, lectus neque placerat massa, a ultricies lectus lectus vitae velit. Sed vel orci vel sapien finibus finibus. Sed id ex vel neque eleifend placerat. Pellentesque habit.",
		createdAt: new Date(),
		category: "Lifestyle",
		author: "Jane Smith",
		authorId: 2
	},
	{
		id: 6,
		title: "Post 2",
		thumbnail: require("../images/blog6.jpg"),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, nulla vel fermentum viverra, lectus neque placerat massa, a ultricies lectus lectus vitae velit. Sed vel orci vel sapien finibus finibus. Sed id ex vel neque eleifend placerat. Pellentesque habit.",
		createdAt: new Date(),
		category: "Lifestyle",
		author: "Jane Smith",
		authorId: 2
	},
	{
		id: 7,
		title: "Post 2",
		thumbnail: require("../images/blog7.jpg"),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, nulla vel fermentum viverra, lectus neque placerat massa, a ultricies lectus lectus vitae velit. Sed vel orci vel sapien finibus finibus. Sed id ex vel neque eleifend placerat. Pellentesque habit.",
		createdAt: new Date(),
		category: "Lifestyle",
		author: "Jane Smith",
		authorId: 2
	},
];

const Posts = () => {
	const [posts, setPosts] = useState(DUMMY_POSTS);
	return (
		<section className="p-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-md">
				{posts.map(
					({ id, thumbnail, category, title, content, authorId }) =>
						<PostItem
							key={id}
							postId={id}
							thumbnail={thumbnail}
							category={category}
							title={title}
							description={content}
							authorId={authorId}
						/>
				)}
			</div>
		</section>
	);
};

export default Posts;
