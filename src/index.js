const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
