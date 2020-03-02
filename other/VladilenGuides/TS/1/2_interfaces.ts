interface program {
	readonly programId: number,
	readonly assignId: number,
	progress: number,
	entity?: [],
	activities?: object[],
	notifications?: {
		finish: {
			title: string,
			text: string,
			url?: string
		}
	}
}

let course: program = {
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

const course1 = {} as program;

//_________________________________________________
interface welcomeProgram extends program {
	notifications: {
		finish: {
			title: string,
			text: string,
		},
		start: {
			title: string,
			text: string,
			url?: string
		}
	},
	showNotification: (notification: object) => void
}
const course2: welcomeProgram = {
	programId: 12,
	assignId: 2,
	progress: 0,
	notifications: {
		start: {
			title: 'hello',
			text: 'click "about"',
			url: 'google.com'
		},
		finish: {
			title: 'great work',
			text: 'try another one'
		},
	},
	showNotification(notif = this.notifications): void {
		console.log(this.notifications.start.title);
		console.log(this.notifications.start.text);
	}
}
course2.showNotification({});
