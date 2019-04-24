const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should greet user by his name', () => {
  const result = generateGreeting('Isaac');
  expect(result).toBe(`Hello Isaac!`);
});


test('should generate greeting for no name', () => {
  const result = generateGreeting();

  expect(result).toBe(`Hello Anonymous!`);
});