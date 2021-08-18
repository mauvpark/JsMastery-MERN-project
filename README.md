# MERN Study project

This project has copyright by *JavaScript Mastery*(https://github.com/adrianhajdin/project_mern_memories).
This repository is made for studying MERN.

## Check before use
1. Put id/password to Mongo db connection url(server/index.js).

## Checkout JsMastery's MERN Videos here👇
https://youtu.be/ngc9gnGgUdA

## Useful sites
1. GitHub Code (feel free to give it a star ⭐): https://github.com/adrianhajdin/proje...
2. HTTP status codes: https://www.restapitutorial.com/https...
3. MongoDB Atlas: https://www.mongodb.com/cloud/atlas
4. MemDev: https://mem.dev/
5. Styles Files: https://gist.github.com/adrianhajdin/...
6. Image: http://bit.ly/memories_image
7. Background: https://www.svgbackgrounds.com/
8. Chrome JSON Formatter: https://github.com/callumlocke/json-formatter
9. Heroku: https://heroku.com
10. netlify: https://www.netlify.com/

## Debug
1. body-parser deprecated. 
- solution: Thus use 'express' as a substitute for body-parser(server/index.js).
3. client/api/index.js function createPost() changed to return a value.
4. [err_http_headers_sent]: cannot set headers after they are sent to the client.
- solution: mongoose PostMessage save() should send an failed or succeeded response. If not this error happens.
5. PostMessage 409 error: it happens because of react-file-base64. This lib convert image to object not a string.
- solution: selectedFile should send a string as 'selectedFile.base64'(server/controllers/posts.js/createPost()).
6. How to un-track .env which has already been committed. 
- solution: https://stackoverflow.com/a/1139797/13540044

## Tips
1. padding string: `&nbsp;`
