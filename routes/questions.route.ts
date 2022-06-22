import { Request, Response, Router } from 'express';
import * as controller from '../controllers/questions.controller';
const router = Router();

router.get('/', (req: Request, res: Response) => {
   console.log('req in questions route:', req);
   controller.getQuestions(req, res);
});

export { router };
