import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// ? Query -> /posts?page=1 -> page = 1 (To search data)
// ? Params -> /posts/:id -> id = 123 (To get specific resources)

export const getPost = async (req, res) => {
	const { id } = req.params;

	try {
		const post = await PostMessage.findById(id);

		res.status(200).json(post);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getPosts = async (req, res) => {
	const { page } = req.query;

	try {
		const LIMIT = 8;
		const startIndex = (Number(page) - 1) * LIMIT; // ? get the starting index of every page.
		const total = await PostMessage.countDocuments({});

		const posts = await PostMessage.find()
			.sort({ _id: -1 })
			.limit(LIMIT)
			.skip(startIndex);

		res.status(200).json({
			data: posts,
			currentPage: Number(page),
			numberOfPage: Math.ceil(total / LIMIT),
		});
	} catch (error) {
		res.status(404).json({ message: error });
	}
};

export const getPostsBySearch = async (req, res) => {
	const { searchQuery, tags } = req.query;
	try {
		const title = new RegExp(searchQuery, "i"); // ? Test test TEST -> test

		const posts = await PostMessage.find({
			$or: [{ title }, { tags: { $in: tags.split(",") } }],
		});

		res.json({ data: posts });
	} catch (error) {
		res.status(404).json({ message: error });
	}
};

export const createPost = async (req, res) => {
	const post = req.body;

	const newPostMessage = new PostMessage({
		...post,
		creator: req.userId,
		createdAt: new Date().toISOString(),
	});

	newPostMessage
		.save()
		.then((result) => {
			return res.status(201).json(newPostMessage);
		})
		.catch((error) => {
			return res.status(409).json({ message: error });
		});
};

export const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const { title, message, selectedFile, creator, tags } = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No post with that id");

	try {
		const updatePost = await PostMessage.findByIdAndUpdate(
			_id,
			{
				title,
				message,
				selectedFile: selectedFile,
				creator,
				tags,
				_id,
			},
			{
				new: true,
			}
		);

		return res.status(200).json(updatePost);
	} catch (error) {
		return res.status(409).json({ message: error });
	}
};

export const deletePost = async (req, res) => {
	const { id: _id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No post with that id");

	await PostMessage.findByIdAndRemove(_id);

	res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
	const { id: _id } = req.params;

	if (!req.userId) return res.json({ message: "Unauthenticated" });

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No post with that id");

	const post = await PostMessage.findById(_id);

	const index = post.likes.findIndex((id) => id === String(req.userId));

	if (index === -1) {
		post.likes.push(req.userId);
	} else {
		post.likes = post.likes.filter((id) => id !== String(req.userId));
	}

	const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
		new: true,
	});

	res.json(updatedPost);
};
