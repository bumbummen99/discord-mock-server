import {NextFunction, Request, Response} from 'express';

export class InteractionController {
  commandsCallback(req: Request, res: Response, next: NextFunction) {
    res.sendStatus(204);
  }

  interactionCallback(req: Request, res: Response, next: NextFunction) {
    res.sendStatus(204);
  }
}
