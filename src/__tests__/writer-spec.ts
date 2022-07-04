import { Writer } from '../writer';

describe('Writer', () => {
    describe('#write()', () => {
        it('should write a message', () => {
            const spy = jest.spyOn(global.console, 'log').mockImplementation();;
            const writer = new Writer();
            writer.write('I am being tested!');
            expect(console.log).toBeCalledWith('I am being tested!');
            spy.mockRestore();
        });
        it('should write a default message', () => {
            const spy = jest.spyOn(global.console, 'log').mockImplementation();;
            const writer = new Writer();
            writer.write();
            expect(console.log).toBeCalledWith('Hello World!');
            spy.mockRestore();
        });
    });
});
