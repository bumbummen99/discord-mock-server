import { DataStore } from '../../DataStore';
import { MockGateway } from '../../gateway/MockGateway';

export class ChannelController {
  private gateway: MockGateway;
  private store: DataStore;

  constructor(gateway: MockGateway, store: DataStore) {
    this.gateway = gateway;
    this.store = store;
  }

  public getMessage() {
    return {};
  }

  public createMessage() {
    return;
  }
}
