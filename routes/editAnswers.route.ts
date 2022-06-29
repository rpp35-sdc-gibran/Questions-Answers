import { Request, Response, Router } from 'express';
import * as controller from '../controllers/answers.controller';
const router = Router({ mergeParams: true });

router.put('/helpful', (req: Request, res: Response) => {
   controller.editAnswerHelpful(req, res);
});

router.put('/report', (req: Request, res: Response) => {
   controller.editAnswerReport(req, res);
});

export { router };
