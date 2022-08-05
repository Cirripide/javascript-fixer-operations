import JsOperation from '../index';
const operation = new JsOperation();

test('Addition', () => {
    expect(operation.addition(0.3, 0.1)).toBe(0.4);
});

test('Subtraction', () => {
    expect(operation.subtraction(0.3, 0.1)).toBe(0.2);
});

test('Multiplication', () => {
    expect(operation.multiplication(0.07, 100)).toBe(7);
});

test('Division', () => {
    expect(operation.division(5.3, 0.1)).toBe(53);
});
