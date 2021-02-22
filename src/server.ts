import express, { request, response } from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json({ message: 'Hellow my brow, you are in NLW4!' });
});

app.post('/users', (req, res) => {
  res.json({ message: 'You are in post' });
});

app.listen(3333, () => console.log('Server is running!!!'));
