import { Request, Response } from 'express';
import * as model from '../models/questions.model';

interface Query {
   product_id: string;
   page: string;
   count: string;
}

//list questions route
const getQuestions = async (req: Request, res: Response) => {
   const query = req.query as unknown as Query;
   try {
      let results = await model.get(query);
      res.status(201).send(results.rows);
   } catch (err) {
      console.log('err:', err);
      res.status(401).send('Bad request.');
   }
};

//post request handler

export { getQuestions };
