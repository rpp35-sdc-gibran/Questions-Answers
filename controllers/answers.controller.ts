import { Request, Response } from 'express';
import * as model from '../models/answers.model';
import {
   Params,
   AnswerParams,
   QueryRequest,
   DatabaseQueryAnswers,
   AnswersPostQuery,
} from '../global.d'; //import all typescript interfaces/types

//list answers route
const getAnswers = async (req: Request, res: Response) => {
   const params = req.params as unknown as Params;
   try {
      let query = req.query as unknown as QueryRequest;
      let dataObject = {} as DatabaseQueryAnswers;
      dataObject.question_id = params.question_id;
      dataObject.page = query.page;
      dataObject.count = query.count;
      let answers = await model.get(dataObject);
      if (answers.rows.length) {
         res.status(200).send(answers.rows);
      } else {
         let singleAnswer = await model.getAnswersOnly(dataObject.question_id);
         res.status(200).send(singleAnswer.rows);
      }
   } catch (err) {
      res.status(400).send(err);
   }
};

//post request handler
const postAnswers = async (req: Request, res: Response) => {
   const params = req.params as unknown as Params;
   try {
      let body = req.body;
      let dataQuery = {} as AnswersPostQuery;
      dataQuery = { ...body };
      dataQuery.question_id = params.question_id;
      let response = await model.createAnswer(dataQuery);
      let photoData = {
         answer_id: response.rows[0].id,
         url: dataQuery.photos[0],
      };
      let photoResponse = await model.createPhoto(photoData);
      res.status(201).send('Answer was successfully created!');
   } catch (err) {
      res.status(401).send(err);
   }
};

const editAnswerHelpful = async (req: Request, res: Response) => {
   const params = req.params as unknown as AnswerParams;
   try {
      let response = await model.editHelpful(params.answer_id);
      res.status(204).send('Success.');
   } catch (err) {
      res.status(401).send(err);
   }
};

const editAnswerReport = async (req: Request, res: Response) => {
   const params = req.params as unknown as AnswerParams;
   try {
      let response = await model.editReport(params.answer_id);
      res.status(204).send('Success.');
   } catch (err) {
      res.status(401).send(err);
   }
};

export { getAnswers, postAnswers, editAnswerHelpful, editAnswerReport };
