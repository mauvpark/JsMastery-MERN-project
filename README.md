# MERN Study project

This project has copyright by *JavaScript Mastery*(https://github.com/adrianhajdin/project_mern_memories).
This repository is made for studying MERN.

## _Check before use_
### client
1. src/api/index.js: API URL
2. src/components/Auth/Auth.js: <GoogleLogin clientId />

### server
1. server/index.js: Put id/password to Mongo db CONNECTION_URL / PORT
2. server/controllers/user.js: signin / signup function token(JWT_SECRET_CODE)
3. server/middleware/auth.js: JWT_SECRET_CODE

## _Checkout JsMastery's MERN Videos here👇_
https://youtu.be/ngc9gnGgUdA

## _Useful Sites_
1. GitHub Code (feel free to give it a star ⭐): https://github.com/adrianhajdin/proje...
2. HTTP status codes: https://www.restapitutorial.com/https...
3. MongoDB Atlas: https://www.mongodb.com/cloud/atlas
4. MemDev: https://mem.dev/
5. Styles Files: https://gist.github.com/adrianhajdin/...
6. Image: http://bit.ly/memories_image
7. Background: https://www.svgbackgrounds.com/
8. Chrome JSON Formatter: https://github.com/callumlocke/json-formatter
9. Heroku: https://heroku.com
10. Netlify: https://www.netlify.com/

## _Debug_
### PART 1,2,3
1. body-parser deprecated. 
- solution: Thus use 'express' as a substitute for body-parser(server/index.js).
3. client/api/index.js function createPost() changed to return a value.
4. [err_http_headers_sent]: cannot set headers after they are sent to the client.
- solution: mongoose PostMessage save() should send an failed or succeeded response. If not this error happens.
5. PostMessage 409 error: it happens because of react-file-base64. This lib convert image to object not a string.
- solution: selectedFile should send a string as 'selectedFile.base64'(server/controllers/posts.js/createPost()).
6. How to un-track .env which has already been committed. 
- solution: https://stackoverflow.com/a/1139797/13540044
7. Pop up closed by user / Google login failed:
- solution: https://stackoverflow.com/a/57433031
### PART 4
8. TextField `onKeyPress event.keyCode` deprecated(Material ui core v4). use `event.key` e.g. `event.key === "Enter"`
9.  Material-ui-chip-input install error: this module does not support *material ui core v4*.
- solution 1: use *material ui core v5 beta* and use https://www.npmjs.com/package/@jansedlon/material-ui-chip-input.
- solution 2: I made simple input chip. use it as workaround for just test.
```javascript
const [onChangeTag, setOnChangeTag] = useState("");
const [tags, setTags] = useState([]);
const tagRef = useRef(null);

const handleDelete = (tagToDelete) => {
	// ? Delete all tags
	setTags([]);
};

return(
	<TextField
		name="Search Tags"
		label="Search Tags"
		variant="outlined"
		fullWidth
		style={{
			margin: "10px 0 0",
			overflow: "auto",
		}}
		inputRef={tagRef}
		InputProps={{
			startAdornment:
				tags.length !== 0 &&
				tags.map((tag) => (
					<Chip
						key={tag}
						style={{ margin: "10px 0" }}
						onDelete={() =>
							handleDelete(tag)
						}
						label={tag}
						variant="outlined"
					/>
				)),
			onChange: (event) => {
				setOnChangeTag(event.target.value);
			},
			onKeyPress: (event) => {
				if (event.key === "Enter") {
					setTags([...tags, onChangeTag]);
					setOnChangeTag("");
					tagRef.current.value = "";
				}
			},
		}}
	/>
)
```
10. If PostDetails Component's style is collapsed:
- solution: https://github.com/adrianhajdin/project_mern_memories/blob/PART_4/client/src/components/Posts/Post/styles.js
11. PostDetails undefined:
solution: Give a question mark to 'post' variable. e.g. `<Typography>{post?.title}</Typography>`

## _Tips_
### PART 1,2,3
1. padding string: `&nbsp;`
2. How to change states all at once function:
```javascript
const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const [formData, setFormData] = useState(initialState);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
```
3. how to access CRA(create-react-app) .env: 
```javascript
process.env.REACT_APP_****
``` 
- Docs: https://create-react-app.dev/docs/adding-custom-environment-variables/
5. JSON WEB TOKEN(JWT) flow:
e.g. Wants to like a post: Click the like a button => auth middleware (next) => like controller
### PART 4
6. *Query* -> /posts?page=1 -> page = 1 (To search data) / *Params* -> /posts/:id -> id = 123 (To get specific resources)
