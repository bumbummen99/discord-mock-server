import { Router } from 'express';
import { InteractionController } from '../controllers/interaction';

const interactionRouter = Router();
const interactionController = new InteractionController();

interactionRouter.post(
  '/applications/:applicationId/guilds/:guildId/commands',
  interactionController.commandsCallback
);

interactionRouter.post(
  '/interactions/:interactionId/:interactionToken/callback',
  interactionController.interactionCallback
);

export { interactionRouter };
