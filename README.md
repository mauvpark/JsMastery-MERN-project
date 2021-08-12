# MERN Study project

This project has copyright by *JavaScript Mastery*(https://github.com/adrianhajdin/project_mern_memories).
This repository is made for studying MERN.

## Check before use
1. Put id/password to Mongo db connection url(server/index.js).

## Debug
1. body-parser deprecated. Thus used express substitute for body-parser(server/index.js).
2. client/api/index.js function createPost() changed to return a value.
3. mongoose PostMessage save() should send an failed or succeeded response. If not this error happens.
- Error message: [err_http_headers_sent]: cannot set headers after they are sent to the client.
