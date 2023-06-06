import express from 'express';
import pg from 'pg';
const app = express();
const port = 8080;

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    // sql query
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    // check for missing values
    const { name, course } = req.body;
    const score = Number(req.body.score);
    // check values
    if (!name) {
      res.status(400).json({ error: 'name must be provided' });
    } else if (!course) {
      res.status(400).json({ error: 'course must be provided' });
    } else if (!Number.isInteger(score) || Number(score) < 0 || Number(score) > 100) {
      res.status(400).json({ error: 'score must be a positive integer' });
    } else {
    // sql query
      const sql = `INSERT INTO "grades" ("name", "course", "score")
                 values ($1, $2, $3)`;
      const newGrade = [name, course, score];
      const result = await db.query(sql, newGrade);
      const grade = result.rows[0];
      console.log(grade);
      res.status(201).json('Successfully inserted grade');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || Number(gradeId) <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    const sql = `
      SELECT *
        from "grades"
      WHERE "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(201).json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const { name, course } = req.body;
    const score = Number(req.body.score);
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || Number(gradeId) <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    } else if (!name) {
      res.status(400).json({ error: 'name must be provided' });
    } else if (!course) {
      res.status(400).json({ error: 'course must be provided' });
    } else if (!Number(score) || Number(score) < 0 || Number(score) > 100) {
      res.status(400).json({ error: 'score must be a positive integer' });
    } else {
      const sql = `UPDATE "grades"
        SET "name" = $1,
            "course" = $2,
            "score" = $3
        WHERE "gradeId" = $4`;
      const params = [name, course, score, gradeId];
      const result = await db.query(sql, params);
      const grade = result.rows[0];
      if (grade) {
        res.json(grade);
      } else {
        res
          .status(404)
          .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || Number(gradeId) <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    }
    const sql = `DELETE
        from "grades"
      WHERE "gradeId" = $1
      RETURNING *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    } else {
      res.status(204).json('Deleted successfully');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
