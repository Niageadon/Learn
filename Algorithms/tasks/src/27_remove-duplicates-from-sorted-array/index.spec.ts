import {removeDuplicates} from './index';
import {expectInAnyOrder} from "../_utils/expectInAnyOrder";

let startAt;
describe('removeDuplicates', () => {
	beforeAll(() => {
		startAt = +new Date();
	})

	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})
})
