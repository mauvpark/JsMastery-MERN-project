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

## _Useful sites_
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

## _Tips_
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
