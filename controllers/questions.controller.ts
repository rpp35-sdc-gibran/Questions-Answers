import { Request, Response } from 'express';
import * as model from '../models/questions.model';
import { PostQuery, DatabaseQueryQuestions, Params } from '../global.d';

//list questions route
const getQuestions = async (req: Request, res: Response) => {
   const query = req.query as unknown as DatabaseQueryQuestions;
   try {
      let results = await model.get(query);
      res.status(200).send(results.rows);
   } catch (err) {
      res.status(401).send(err);
   }
};

//post request handler
const postQuestion = async (req: Request, res: Response) => {
   const body = req.body as unknown as PostQuery;
   try {
      let results = await model.create(body);
      res.status(200).send('Question has been successfully created!');
   } catch (err) {
      res.status(401).send(err);
   }
};

const editQuestionHelpful = async (req: Request, res: Response) => {
   const params = req.params as unknown as Params;
   try {
      let response = await model.editHelpful(params.question_id);
      res.status(204).send('Success.');
   } catch (err) {
      console.log('err:', err);
      res.status(401).send(err);
   }
};

const editQuestionReport = async (req: Request, res: Response) => {
   const params = req.params as unknown as Params;
   try {
      let response = await model.editReport(params.question_id);
      res.status(204).send('Success.');
   } catch (err) {
      console.log('err:', err);
      res.status(401).send(err);
   }
};

export { getQuestions, postQuestion, editQuestionHelpful, editQuestionReport };
