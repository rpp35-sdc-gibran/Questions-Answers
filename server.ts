require('dotenv').config();
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import { router as questions } from './routes/questions.route';
import { router as answers } from './routes/answers.route';
import { router as editAnswers } from './routes/editAnswers.route';

const port = 8000;
const app = express();

//MIDDLEWARE
app.use(compression());

// app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//ROUTES
app.use('/qa/questions', questions);
app.use('/qa/questions/:question_id/answers', answers);
app.use('/qa/answers/:answer_id', editAnswers);

app.get('/', (req: express.Request, res: express.Response) => {
   res.status(200).json({
      status: 'success',
      data: {
         name: 'Questions Answers API',
         version: '1.0.0',
      },
   });
});

//START SERVER
app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
