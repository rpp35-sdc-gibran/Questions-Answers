import http from 'k6/http';
import { sleep, check } from 'k6';

// export const options = {
//    stages: [
//       { duration: '30s', target: 20 },
//       { duration: '1m30s', target: 10 },
//     //   { duration: '20s', target: 0 },
//    ],
// };

export default function () {
   const req1 = {
      method: 'GET',
      url: 'http://localhost:8080/qa/questions?product_id=2836',
   };
   const req2 = {
      method: 'GET',
      url: 'http://localhost:8080/qa/questions/252166/answers?page=1&count=5',
   };
   const req3 = {
      method: 'POST',
      url: 'http://localhost:8080/qa/questions',
      body: {
         body: 'question test',
         name: 'user name',
         email: 'email@email.com',
         product_id: 1,
      },
   };
   const req4 = {
      method: 'POST',
      url: 'http://localhost:8080/qa/questions/1/answers',
      body: {
         body: 'answer test',
         name: 'user name',
         email: 'email@email.com',
         question_id: 1,
         photos: "['https://unsplash.com/photos/Won79_9oUEk']",
      },
   };
   const req5 = {
      method: 'PUT',
      url: 'http://localhost:8080/qa/questions/1/helpful',
   };
   const req6 = {
      method: 'PUT',
      url: 'http://localhost:8080/qa/questions/1/report',
   };
   const req7 = {
      method: 'PUT',
      url: 'http://localhost:8080/qa/answers/1/helpful',
   };
   const req8 = {
      method: 'PUT',
      url: 'http://localhost:8080/qa/answers/1/report',
   };

   const responses = http.batch([req1, req2, req3, req4]);
   check(responses[2], {
      'form status was 200': (res) => res.status === 201,
   });
}

//POST question

//POST answer

//PUT mark question as helpful

//PUT report question

//PUT mark answer as helpful

//PUT report an answer
