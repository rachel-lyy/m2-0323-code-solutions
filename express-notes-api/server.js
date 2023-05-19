import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';
const app = express();
const port = 8080;

async function getFiles() {
  try {
    const filePath = new URL('data.json', import.meta.url);
    const content = await readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Error');
  }
}

async function processFiles(url, content) {
  try {
    await writeFile('data.json', content);
    console.log(content);
  } catch (error) {
    console.error('Error');
  }
}

app.use(express.json());

// Clients can GET a list of notes
app.get('/api/notes', async (req, res) => {
  var data = JSON.parse(await getFiles('data.json'));
  try {
    res.json(Object.values(data.notes));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Client can GET a note with ID
app.get('/api/notes/:id', async (req, res) => {
  var data = JSON.parse(await getFiles('data.json'));
  const findRecord = req.params.id;
  const matchingID = data.notes[findRecord];

  if (findRecord <= 0 || !Number.isInteger(Number(findRecord))) {
    res.status(400).json({ error: 'id must be a positive interger' });
  } else if (!data.notes[findRecord]) {
    res.status(404).json({ error: `cannot find note with id ${findRecord}` });
  } else {
    res.status(200).json({ matchingID });
  }
});

// Client can POST a new note
app.post('/api/notes', async (req, res) => {
  var data = JSON.parse(await getFiles('data.json'));
  const newContent = req.body.content;
  if (!newContent) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    try {
      const newNoteObj = {
        id: data.nextId,
        content: newContent
      };
      data.notes[data.nextId] = newNoteObj;
      processFiles('data.json', JSON.stringify(data, null, '\t'));
      data.nextId++;
      res.status(201).json(newNoteObj);
    } catch (error) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
});

// Client can DELETE a note by ID
app.delete('/api/notes/:id', async (req, res) => {
  var data = JSON.parse(await getFiles('data.json'));
  const findRecord = req.params.id;
  const matchingID = data.notes[findRecord];

  if (findRecord <= 0 || !Number.isInteger(Number(findRecord))) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!matchingID) {
    res.status(404).json({ error: `cannot find note with id ${findRecord}` });
  } else {
    delete data.notes[findRecord];
    processFiles('data.json', JSON.stringify(data, null, '\t'));
    res.status(204).send();
  }
});

// Client can replace a note PUT by ID
app.put('/api/notes/:id', async (req, res) => {
  var data = JSON.parse(await getFiles('data.json'));
  const findRecord = req.params.id;
  const matchingID = data.notes[findRecord];
  const newContent = req.body.content;

  if (findRecord <= 0 || !Number.isInteger(Number(findRecord))) {
    res.status(404).json({ error: 'id must use a positive interger' });
  } else if (!newContent) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!matchingID) {
    res.status(404).json({ error: `cannot find note with id ${findRecord}` });
  } else {
    try {
      const updateNote = {
        id: findRecord,
        content: newContent
      };
      data.notes[findRecord] = updateNote;
      processFiles('data.json', JSON.stringify(data, null, '\t'));
      res.status(201).json(updateNote);
    } catch {
      res.status(500).json({ error: 'an unexpected error occured' });
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
