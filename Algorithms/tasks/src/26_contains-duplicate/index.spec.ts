let startAt;
describe('maxProfit', () => {
	beforeAll(() => {
		startAt = +new Date();
	})

	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})
})
