import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';
const app = express();
const port = 8080;

app.use(express.json());

// Clients can GET a list of notes
app.get('/api/notes', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('derp.json', { encoding: 'utf8' }));
    res.json(Object.values(data.notes));
  } catch (err) {
    console.log('error');
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Client can GET a note with ID
app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('data.json', { encoding: 'utf8' }));
    const findRecord = req.params.id;
    const matchingID = data.notes[findRecord];

    if (findRecord <= 0 || !Number.isInteger(Number(findRecord))) {
      res.status(400).json({ error: 'Id must be a positive integer' });
    } else if (!matchingID) {
      res.status(404).json({ error: `Cannot find note with id ${findRecord}` });
    } else {
      res.status(200).json({ matchingID });
    }
  } catch (err) {

    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Client can POST a new note
app.post('/api/notes', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('data.json', { encoding: 'utf8' }));
    const newContent = req.body.content;
    if (!newContent) {
      res.status(400).json({ error: 'Content is a required field' });
    } else {
      const newNoteObj = {
        id: data.nextId,
        content: newContent
      };
      data.notes[data.nextId] = newNoteObj;
      await writeFile('data.json', JSON.stringify(data, null, '\t'));
      data.nextId++;
      res.status(201).json(newNoteObj);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Client can DELETE a note by ID
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('data.json', { encoding: 'utf8' }));
    const findRecord = req.params.id;
    const matchingID = data.notes[findRecord];
    if (findRecord <= 0 || !Number.isInteger(Number(findRecord))) {
      res.status(400).json({ error: 'Id must be a positive integer' });
    } else if (!matchingID) {
      res.status(404).json({ error: `Cannot find note with id ${findRecord}` });
    } else {
      delete data.notes[findRecord];

      await writeFile('data.json', JSON.stringify(data, null, '\t'));
      res.status(204).send();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

// Client can replace a note with PUT by ID
app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('data.json', { encoding: 'utf8' }));
    const findRecord = req.params.id;
    const matchingID = data.notes[findRecord];
    const newContent = req.body.content;
    if (findRecord <= 0 || !Number.isInteger(Number(findRecord))) {
      res.status(400).json({ error: 'Id must be a positive integer' });
    } else if (!newContent) {
      res.status(400).json({ error: 'Content is a required field' });
    } else if (!matchingID) {
      res.status(404).json({ error: `Cannot find note with id ${findRecord}` });
    } else {
      const updateNote = {
        id: findRecord,
        content: newContent
      };
      data.notes[findRecord] = updateNote;
      await writeFile('data.json', JSON.stringify(data, null, '\t'));
      res.status(200).json(updateNote);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
