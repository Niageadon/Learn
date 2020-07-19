let clickCount: number = 0;
import * as _ from 'lodash'
const getClicksCount = ():number => clickCount;
window.addEventListener('click', () => {
	clickCount++;

	console.log(getClicksCount())
});
