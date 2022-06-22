import { pool } from '../database/db';

interface QuestionQuery {
   product_id: string;
   page: string;
   count: string;
}

const get = (query: QuestionQuery) => {
   let product_id: number = parseInt(query.product_id);
   let dbQuery = `SELECT * FROM questions WHERE product_id=${product_id}`;
   let results = pool.query(dbQuery);
   return results;
};

export { get };
