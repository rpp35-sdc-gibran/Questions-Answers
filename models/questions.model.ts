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
   let product_id: number = parseInt(query.product_id);
   let questionsQuery = `SELECT questions.*, data.answers
   FROM questions
   INNER JOIN (SELECT question_id, array_to_json(array_agg(to_json(answers.*)))
   FROM answers
   GROUP BY question_id) AS data (id, answers) on (questions.id = data.id)
    WHERE questions.product_id = ${product_id}
   `;
   let results = pool.query(questionsQuery);
   console.log('results: ', results);
   return results;
};

const create = (question: Question) => {
   let postQuery = `INSERT INTO questions
   (body, asker_name, asker_email, product_id)
    VALUES ('${question.body}', '${question.name}', '${question.email}', '${question.product_id}')`;
   console.log('postQuery: ', postQuery);
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

// let max_id_of_quesions = `6879307`;
// let test = `create sequence photos_id_seq minvalue 2063760`;
// let test2 = `alter table photos alter id set default nextval('photos_id_seq')`;
// let test3 = `alter sequence photos_id_seq owned by photos.id`;
