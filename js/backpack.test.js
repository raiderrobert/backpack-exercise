const Backpack = require('./backpack').Backpack;


test('empty contents should be empty', () => {
  let b = new Backpack();
  expect(b.get_contents()).toStrictEqual([]);
});

test('default size check', () => {
  let b = new Backpack();
  expect(b.size).toStrictEqual(10);

  b = new Backpack(5);
  expect(b.size).toStrictEqual(5);
});


test('add item', () => {
  let b = new Backpack();
  b.add('ax');
  expect(b.get_contents()).toStrictEqual(['ax']);
});

test('remove item', () => {
  let b = new Backpack();
  b.add('ax');
  expect(b.get_contents()).toStrictEqual(['ax']);
  b.remove('ax');
  expect(b.get_contents()).toStrictEqual([]);
});


test('verify alphabetical results', () => {
  let b = new Backpack();
  b.add('ax');
  b.add('stick');
  b.add('Food');
  b.add('food');
  expect(b.get_contents()).toStrictEqual(['ax', 'Food', 'food', 'stick']);
});


test('verify get_counters', () => {
  let b = new Backpack();
  b.add('ax');
  b.add('stick');
  b.add('Food');
  b.add('food');
  b.add('food');
  b.add('ax');
  expect(b.get_counts()).toStrictEqual({'ax': 2, 'stick': 1, 'Food': 1, 'food': 2});
});


test('verify most_popular', () => {
  let b = new Backpack();
  b.add('ax');
  b.add('stick');
  b.add('Food');
  b.add('food');
  b.add('food');
  b.add('ax');
  expect(b.most_popular()).toStrictEqual({'food': 2});
});

test('verify size enforcement', () => {
  let b = new Backpack(5);
  b.add('ax');
  b.add('stick');
  b.add('Food');
  b.add('food');
  b.add('food');
  b.add('food');
  expect(b.most_popular()).toStrictEqual({'food': 3});
  expect(b.get_counts()).toStrictEqual({'stick': 1, 'Food': 1, 'food': 3});
});


test('verify bag size of 1', () => {
  let b = new Backpack(1);
  b.add('ax');
  b.add('stick');
  b.add('Food');
  b.add('food');
  b.add('food');
  b.add('food');
  expect(b.most_popular()).toStrictEqual({'food': 1});
  expect(b.get_counts()).toStrictEqual({'food': 1});
});