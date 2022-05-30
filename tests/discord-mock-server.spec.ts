import { test } from '@japa/runner';
import { MockDiscordServer } from './../src/Server';

test.group('Maths.add', group => {
  const mockServer: MockDiscordServer = new MockDiscordServer();

  group.setup(async () => {
    await mockServer.start();
  });

  group.teardown(async () => {
    await mockServer.stop();
  });

  test('It does serve the gateway', async ({ client }) => {
    // Test logic goes here
    const response = await client
      .get('https://localhost:3000/v9/gateway/bot')
      .trustLocalhost();

    response.assertStatus(200);
  });

  test('It allows for commands to be registered', async ({ client }) => {
    // Test logic goes here
    const response = await client
      .post(
        'https://localhost:3000/v9/applications/12345/guilds/54321/commands'
      )
      .trustLocalhost();

    response.assertStatus(204);

    // Test logic goes here
    const response2 = await client
      .put('https://localhost:3000/v9/applications/12345/guilds/54321/commands')
      .trustLocalhost();

    response2.assertStatus(204);
  });
});
