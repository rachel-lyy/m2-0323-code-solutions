import express from 'express';
const app = express();
const port = 8080;
var nextId = 1;
var grades = {};

app.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const x in grades) {
    allGrades.push(grades[x]);
  }
  res.json(allGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).send(grades[nextId]);
  nextId++;
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
