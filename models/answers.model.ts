import { pool } from '../database/db';
import {
   DatabaseQueryAnswers,
   AnswersPostQuery,
   PhotoQuery,
} from '../global.d';

const get = (answersQuery: DatabaseQueryAnswers) => {
   console.log(answersQuery.question_id);
   let dbQuery = `SELECT answers.*, data.photos
   FROM answers
   INNER JOIN (SELECT answer_id, array_to_json(array_agg(to_json(photos.*)))
   FROM photos
   GROUP BY answer_id) AS data (id, photos) on (answers.id = data.id)
    WHERE answers.question_id = ${answersQuery.question_id}
   `;
   let results = pool.query(dbQuery);
   return results;
};

const createAnswer = (answer: AnswersPostQuery) => {
   let dbQuery = `INSERT INTO answers (body, answerer_name, answerer_email, question_id)
   VALUES ('${answer.body}', '${answer.name}', '${answer.email}', '${answer.question_id}')
    RETURNING id`;
   let results = pool.query(dbQuery);
   return results;
};

const createPhoto = (photo: PhotoQuery) => {
   let dbQuery = `INSERT INTO photos (answer_id, url) VALUES ('${photo.answer_id}', '${photo.url}')`;
   let results = pool.query(dbQuery);
   return results;
};

const editHelpful = (id: string) => {
   let editQuery = `UPDATE answers SET helpful = helpful + 1 WHERE id = ${id}`;
   let results = pool.query(editQuery);
   return results;
};

const editReport = (id: string) => {
   let editQuery = `UPDATE answers SET reported = true WHERE id = ${id}`;
   let results = pool.query(editQuery);
   return results;
};

export { get, createAnswer, createPhoto, editHelpful, editReport };
