import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" }); // ? Change to "heroku-url/posts"

API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`;
	}

	return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => {
	return API.post("/posts", newPost);
};
export const updatePost = (id, updatedPost) => {
	return API.patch(`/posts/${id}`, updatedPost);
};
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
