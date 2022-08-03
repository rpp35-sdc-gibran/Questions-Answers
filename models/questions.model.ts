import { pool } from '../database/db';
import { v4 as uuidv4 } from 'uuid';

interface QuestionQuery {
   product_id: string;
   page: string;
   count: string;
}
interface Question {
   body: string;
   name: string;
   email: string;
   product_id: string;
}

const get = (query: QuestionQuery) => {
   console.log('here in get questions model');
   let product_id: number = parseInt(query.product_id);
   let questionsQuery = `SELECT * from questions where product_id = ${query.product_id}`;
   console.log('pool in get questions model: ', pool);
   let results = pool.query(questionsQuery);
   console.log('results in get questiosn model: ', results);
   return results;
};

const create = (question: Question) => {
   let postQuery = `INSERT INTO questions
   (body, asker_name, asker_email, product_id)
    VALUES ('${question.body}', '${question.name}', '${question.email}', '${question.product_id}')`;
   let results = pool.query(postQuery);
   return results;
};

const editHelpful = (id: string) => {
   let editQuery = `UPDATE questions SET helpful = helpful + 1 WHERE id = ${id}`;
   let results = pool.query(editQuery);
   return results;
};

const editReport = (id: string) => {
   let editQuery = `UPDATE questions SET reported = true WHERE id = ${id}`;
   let results = pool.query(editQuery);
   return results;
};

export { get, create, editHelpful, editReport };

// let questionsQuery = `SELECT questions.*, data.answers
// FROM questions
// INNER JOIN (SELECT question_id, array_to_json(array_agg(to_json(answers.*)))
// FROM answers
// GROUP BY question_id) AS data (id, answers) on (questions.id = data.id)
//  WHERE questions.product_id = ${product_id}
// `;
