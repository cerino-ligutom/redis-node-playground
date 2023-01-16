import express from 'express';
import Redis from 'ioredis';

const app = express();

const client = new Redis('redis://redis');

app.listen(8080, async () => {
	console.log('Server started on port 8080');

	const myObj = {
		name: 'John Doe',
	};

	await client.setex('test', 10, JSON.stringify(myObj));

	const data = await client.get('test');
	const parsed = data ? JSON.parse(data) : null;

	console.log({
		raw: data,
		parsed,
		rawType: typeof data,
		parsedType: typeof parsed,
	});
});
