interface program {
	readonly programId: number,
	readonly assignId: number,
	progress: number,
	entity?: [],
	activities?: object[],
	notifications?: {
		first?: {
			title: string,
			text: string
		}
		finish: {
			title: string,
			text: string,
			url?: string
		}
	}
}

let learnProgram: program = {
	programId: 11,
	assignId: 1,
	progress: 0,
	notifications: {
		finish: {
			title: 'gc',
			text: 'try another one',
			url: 'google.com'
		}
	}
};
learnProgram.notifications.first = {
	title: 'hello',
	text: 'try this course'
};
