import { Request, Response, Router } from 'express';
import * as controller from '../controllers/answers.controller';
const router = Router();

router.get('/', (req: Request, res: Response) => {});

export { router };
