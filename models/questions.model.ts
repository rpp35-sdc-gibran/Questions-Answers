import { pool } from '../database/db';

interface QuestionQuery {
   product_id: string;
   page: string;
   count: string;
}

const get = (query: QuestionQuery) => {
   let product_id: number = parseInt(query.product_id);
   // let dbQuery = `SELECT * FROM questions WHERE product_id=${product_id}`;
   // let dbQuery = `SELECT * FROM questions LEFT JOIN answers ON (questions.id = answers.question_id) WHERE questions.product_id=${product_id}`;
   let questionsQuery = `SELECT questions.*, data.items
   FROM questions
   INNER JOIN (SELECT question_id, array_to_json(array_agg(to_json(answers.*)))
   FROM answers
   GROUP BY question_id) AS data (id, items) on (questions.id = data.id)
    WHERE questions.product_id = ${product_id}
   `;

   let results = pool.query(questionsQuery);
   return results;
};

export { get };

//https://stackoverflow.com/questions/15847173/concatenate-multiple-result-rows-of-one-column-into-one-group-by-another-column

let answersQuery = `SELECT answers.*, data.items
   FROM answers
   INNER JOIN (SELECT answer_id, array_to_json(array_agg(to_json(photos.*)))
   FROM photos
   GROUP BY answer_id) AS data (id, items) on (answers.id = data.id)
    WHERE answers.id = 5
   `;
