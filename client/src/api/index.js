import axios from "axios";

const url = "https://mern-study-project.herokuapp.com/posts"; // ? Change to "heroku-url/posts"

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => {
	return axios.post(url, newPost);
};
export const updatePost = (id, updatedPost) => {
	return axios.patch(`${url}/${id}`, updatedPost);
};
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
