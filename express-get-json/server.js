import express from 'express';
const app = express();
const port = 8080;
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
  const allGrades = [];
  for (const x in grades) {
    allGrades.push(grades[x]);
  }
  res.json(allGrades);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
