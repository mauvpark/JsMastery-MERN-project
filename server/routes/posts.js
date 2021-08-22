import express from "express";
// ? nodejs에서는 react와 달리 말미에 확장자를 붙여줘야 함.
import {
	getPostsBySearch,
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost,
	likePost,
	commentPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// http://localhost:5000/posts

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.patch("/:id/commentPost", auth, commentPost);

export default router;
