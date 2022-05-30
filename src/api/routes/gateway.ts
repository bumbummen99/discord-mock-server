import {MockGateway} from '../../gateway/MockGateway';
import {GatewayController} from '../controllers/gateway';
import {Router} from 'express';

export function gatewayRoutes(gateway: MockGateway) {
  const gatewayRouter = Router();
  const gatewayController = new GatewayController(gateway);

  gatewayRouter.get('/gateway/bot', (req, res, next) => {
    gatewayController.getGatewayBot(req, res, next);
  });
  return gatewayRouter;
}
