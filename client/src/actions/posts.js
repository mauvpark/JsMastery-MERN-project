import {
	FETCH_POST,
	FETCH_ALL,
	FETCH_BY_SEARCH,
	START_LOADING,
	END_LOADING,
	CREATE,
	UPDATE,
	DELETE,
	LIKE,
	COMMENT,
} from "../constants/actionTypes";
import * as api from "../api";

// Action Creators: Redux thunk
export const getPost = (id) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const { data } = await api.fetchPost(id);
		dispatch({ type: FETCH_POST, payload: data });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}
};

export const getPosts = (page) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const { data } = await api.fetchPosts(page);
		dispatch({ type: FETCH_ALL, payload: data });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const {
			data: { data },
		} = await api.fetchPostBySearch(searchQuery);
		dispatch({ type: END_LOADING });

		dispatch({ type: FETCH_BY_SEARCH, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createPost = (post, history) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const { data } = await api.createPost(post);
		history.push(`/posts/${data._id}`);
		dispatch({ type: END_LOADING });
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);

		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);

		dispatch({ type: LIKE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const commentPost =
	(value, id, setComments, commentsRef) => async (dispatch) => {
		try {
			const { data } = await api.commentPost(value, id);

			dispatch({ type: COMMENT, payload: data });

			setComments(data.comments);

			commentsRef.current.scrollIntoView({ behavior: "smooth" });
		} catch (error) {
			console.log(error);
		}
	};
