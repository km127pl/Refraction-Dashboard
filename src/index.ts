import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.get('/', (req, res) => {
	res.json({ message: 'Hello World!' });
});

app.listen(process.env.PORT, () => {
	console.log('Server is running on port 3000');
});
