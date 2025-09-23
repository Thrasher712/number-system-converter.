const conv = require('../src/utils/conversion');

test('decimal 156 -> binary', () => {
  const r = conv.convertBase('156', 10, 2);
  expect(r.ok).toBe(true);
  expect(r.result).toBe('10011100');
});

test('binary 1011.101 -> decimal', () => {
  const r = conv.convertBase('1011.101', 2, 10);
  expect(r.ok).toBe(true);
  expect(r.result).toBe('11.625');
});

test('hex 1A3 -> decimal', () => {
  const r = conv.convertBase('1A3', 16, 10);
  expect(r.ok).toBe(true);
  expect(r.result).toBe('419');
});

test('negative hex -FF -> decimal', () => {
  const r = conv.convertBase('-FF', 16, 10);
  expect(r.ok).toBe(true);
  expect(r.result).toBe('-255');
});

test('invalid input for base', () => {
  const r = conv.convertBase('2A', 2, 10);
  expect(r.ok).toBe(false);
});
