import {isValid} from './index';
import {expectInAnyOrderNested} from "../_utils/expectInAnyOrder";

let startAt;
describe('threeSum', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('({}[[]]{()})[]', () => {
		const result = isValid('({}[[]]{()})[]');
		const answer = true;
		expect(result).toStrictEqual(answer)
	})

	test('[[[]]]]', () => {
		const result = isValid('[[[]]]]');
		const answer = false;
		expect(result).toStrictEqual(answer)
	})

	test('()()', () => {
		const result = isValid('()()');
		const answer = true;
		expect(result).toStrictEqual(answer)
	})

	test('(}{)', () => {
		const result = isValid('(}{)');
		const answer = false;
		expect(result).toStrictEqual(answer)
	})

})