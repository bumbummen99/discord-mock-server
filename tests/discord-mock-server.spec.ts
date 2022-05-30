import { test } from '@japa/runner';
import { MockDiscordServer } from './../src/Server'

test.group('Maths.add', (group) => {
  let mockServer: MockDiscordServer = new MockDiscordServer()

  group.setup(async () => {
    await mockServer.start()
  })

  group.teardown(async () => {
    await mockServer.stop()
  })

  test('It does serve the gateway', async ({assert, client}) => {
    // Test logic goes here
    const response = await client.get('https://localhost:3000/v9/gateway/bot');
    assert.equal(response.status(), 200);
  });
});