import { pool } from '../database/db';

interface QuestionQuery {
   product_id: string;
   page: string;
   count: string;
}

const get = (query: QuestionQuery) => {
   let product_id: number = parseInt(query.product_id);
   // let dbQuery = `SELECT * FROM questions WHERE product_id=${product_id}`;
   let dbQuery = `SELECT * FROM questions LEFT JOIN answers ON (questions.id = answers.question_id) WHERE questions.product_id=${product_id}`;

   let secondQuery = `SELECT * from answers where answers.question_id=questions.id`;
   let results = pool.query(dbQuery);
   return results;
};

export { get };
