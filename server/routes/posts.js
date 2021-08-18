import express from "express";
// ? nodejs에서는 react와 달리 말미에 확장자를 붙여줘야 함.
import {
	getPosts,
	createPost,
	updatePost,
	deletePost,
	likePost,
} from "../controllers/posts.js";

const router = express.Router();

// http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
