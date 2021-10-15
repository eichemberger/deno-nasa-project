import { assertEquals, assertNotEquals } from '../test_deps.ts';

Deno.test({
  name: 'example test',

  fn() {
    assertEquals('deno', 'deno');
    assertNotEquals(
      {
        runtime: 'deno',
      },
      {
        runtime: 'node',
      }
    );
  },
});

Deno.test('short example test', () => {
  assertEquals('deno', 'deno');
  assertNotEquals(
    {
      runtime: 'deno',
    },
    {
      runtime: 'node',
    }
  );
});
