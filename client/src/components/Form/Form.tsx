import React, { SetStateAction, useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

interface TypePostData {
	title: string;
	message: string;
	tags: Array<string>;
	selectedFile: string;
}

const Form = ({
	currentId,
	setCurrentId,
}: {
	currentId: string;
	setCurrentId: React.Dispatch<SetStateAction<string | null>>;
}) => {
	const post = useSelector((state: any) =>
		currentId ? state.posts.find((p: any) => p._id === currentId) : null
	);
	const [postData, setPostData] = useState<TypePostData>({
		title: "",
		message: "",
		tags: [],
		selectedFile: "",
	});
	const classes = useStyles();
	const dispatch = useDispatch();
	const local_profile: any = localStorage.getItem("profile");
	const user = JSON.parse(local_profile);

	useEffect(() => {
		if (post) setPostData(post);
	}, [post]);

	const handleSubmit = (e: React.ChangeEvent<any>) => {
		e.preventDefault();

		if (currentId) {
			dispatch(
				updatePost(currentId, { ...postData, name: user?.result?.name })
			);
		} else {
			dispatch(createPost({ ...postData, name: user?.result?.name }));
		}

		clear();
	};

	const clear = () => {
		setCurrentId(null);
		setPostData({
			title: "",
			message: "",
			tags: [],
			selectedFile: "",
		});
	};

	if (!user?.result?.name) {
		return (
			<Paper className={classes.paper}>
				<Typography variant="h6" align="center">
					Please Sign In to create your own memories and like
					other&apos;s memories
				</Typography>
			</Paper>
		);
	}

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">
					{currentId ? "Editing" : "Creating"} a Memory
				</Typography>
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={(e) =>
						setPostData({ ...postData, title: e.target.value })
					}
				/>
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={postData.message}
					onChange={(e) =>
						setPostData({ ...postData, message: e.target.value })
					}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.tags}
					onChange={(e) =>
						setPostData({
							...postData,
							tags: e.target.value.split(","),
						})
					}
				/>
				<div className={classes.fileInput}>
					<FileBase64
						type="file"
						multiple={false}
						onDone={(imgFormat: any) =>
							setPostData({
								...postData,
								selectedFile: imgFormat.base64,
							})
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
