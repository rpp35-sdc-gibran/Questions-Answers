declare namespace Express {
   export interface Request {
      user: any;
   }
   export interface Response {
      user: any;
   }
}

export interface Params {
   question_id: string;
}

export interface AnswerParams {
   answer_id: string;
}

export interface QueryRequest {
   page: string;
   count: string;
}

export interface DatabaseQueryQuestions extends QueryRequest {
   product_id: string;
}

export interface DatabaseQueryAnswers extends QueryRequest {
   question_id: string;
}

export interface PostQuery {
   body: string;
   name: string;
   email: string;
   product_id: string;
}

export interface AnswersPostQuery {
   body: string;
   name: string;
   email: string;
   photos: any;
   question_id: string;
}

export interface PhotoQuery {
   answer_id: string;
   url: string;
}
