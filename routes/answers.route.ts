import { Request, Response, Router } from 'express';
import * as controller from '../controllers/answers.controller';
const router = Router({ mergeParams: true });

router.get('/', (req: Request, res: Response) => {
   controller.getAnswers(req, res);
});

router.post('/', (req: Request, res: Response) => {
   controller.postAnswers(req, res);
   // controller.postAnswers()
});
export { router };
