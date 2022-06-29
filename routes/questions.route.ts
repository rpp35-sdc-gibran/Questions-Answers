import { Request, Response, Router } from 'express';
import * as controller from '../controllers/questions.controller';
const router = Router();

router.get('/', (req: Request, res: Response) => {
   controller.getQuestions(req, res);
});

router.post('/', (req: Request, res: Response) => {
   controller.postQuestion(req, res);
});

//mark question as helpful
router.put('/:question_id/helpful', (req: Request, res: Response) => {
   controller.editQuestionHelpful(req, res);
});

//report a question
router.put('/:question_id/report', (req: Request, res: Response) => {
   controller.editQuestionReport(req, res);
});

export { router };
