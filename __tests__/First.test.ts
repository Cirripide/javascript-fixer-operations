import { JsOperation } from '../index';
const operation = new JsOperation();

test('First test', () => {
    expect(operation.addition([0.3, 0.1])).toBe(0.4);
});
