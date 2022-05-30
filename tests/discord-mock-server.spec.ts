import {test} from '@japa/runner';
import {MockDiscordServer} from './../src/Server';

test.group('Maths.add', group => {
  const mockServer: MockDiscordServer = new MockDiscordServer();

  group.setup(async () => {
    await mockServer.start();
  });

  group.teardown(async () => {
    await mockServer.stop();
  });

  test('It does serve the gateway', async ({assert, client}) => {
    // Test logic goes here
    const response = await client
      .get('https://localhost:3000/v9/gateway/bot')
      .trustLocalhost();
    assert.equal(response.status(), 200);
  });
});
