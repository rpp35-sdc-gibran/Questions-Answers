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
   console.log('params:', params);

   try {
      let query = req.query as unknown as QueryRequest;
      let dataObject = {} as DatabaseQueryAnswers;
      dataObject.question_id = params.question_id;
      dataObject.page = query.page;
      dataObject.count = query.count;
      let answers = await model.get(dataObject);
      console.log('answers:', answers);
      if (answers.rows.length) {
         res.status(200).send(answers.rows);
      } else {
         let singleAnswer = await model.getAnswersOnly(dataObject.question_id);
         console.log('singleAnswer:', singleAnswer);
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
      //post answer
      let body = req.body;
      let dataQuery = {} as AnswersPostQuery;
      dataQuery = { ...body };
      dataQuery.question_id = params.question_id;
      let response = await model.createAnswer(dataQuery);
      //then post photo with returned id
      // let photoUrl = JSON.parse(dataQuery.photos);
      let photoData = {
         answer_id: response.rows[0].id,
         url: dataQuery.photos[0],
      };
      let photoResponse = await model.createPhoto(photoData);
      res.status(201).send('Answer was successfully created!');
   } catch (err) {
      console.log('err:', err);
      res.status(401).send(err);
   }
};

const editAnswerHelpful = async (req: Request, res: Response) => {
   const params = req.params as unknown as AnswerParams;
   try {
      let response = await model.editHelpful(params.answer_id);
      res.status(204).send('Success.');
   } catch (err) {
      console.log('err:', err);
      res.status(401).send(err);
   }
};

const editAnswerReport = async (req: Request, res: Response) => {
   const params = req.params as unknown as AnswerParams;
   console.log('params: ', params);
   try {
      let response = await model.editReport(params.answer_id);
      console.log('response: ', response);
      res.status(204).send('Success.');
   } catch (err) {
      console.log('err:', err);
      res.status(401).send(err);
   }
};

export { getAnswers, postAnswers, editAnswerHelpful, editAnswerReport };
