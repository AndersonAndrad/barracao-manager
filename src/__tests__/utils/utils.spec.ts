import { generateHash } from '../../shared/utils/base64.utils';

describe('Utils', () => {
  test('Base64', () => {
    const hash: string = generateHash();
    expect(typeof hash).toEqual('string');
  });
});
