import { searchList } from '../src/index';
import reservations from '../reservations.json';
describe('testing index file', () => {
    test('User entered firstname should be there', () => {
        expect(searchList(reservations, "IDM")).toBe(3);
    });
});
//# sourceMappingURL=index.test.js.map