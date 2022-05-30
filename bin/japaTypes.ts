import { ApiClient } from '@japa/api-client';
import { Assert } from '@japa/assert';
import '@japa/runner';

declare module '@japa/runner' {
  interface TestContext {
    // notify TypeScript about custom context properties
    assert: Assert,
    client: ApiClient
  }
  //interface Test<TestData> {
  //  // notify TypeScript about custom test properties
  //}
}
