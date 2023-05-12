import express from 'express';
const app = express();
const port = 8080;
var allGrades = [];
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  for (const x in grades) {
    allGrades.push(grades[x]);
  }
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  const findRecord = req.params.id;
  delete grades[findRecord];
  res.status(204).json(grades);
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
