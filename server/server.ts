require('dotenv').config();
import path from 'path';
import express from 'express';
const port = 8080;
import bodyParser from 'body-parser';
import compression from 'compression';
// import user from './routes/user.route';

const app = express();
//MIDDLEWARE
app.use(compression());

// app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//ROUTES
// app.use('/user', user);

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
