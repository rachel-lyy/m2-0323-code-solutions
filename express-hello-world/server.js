import express from 'express';
const app = express();
const port = 8080;

app.use((req, res) => {
  console.log(req.method);
  res.send('hola it is me');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
