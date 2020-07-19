/// <reference path='namespaced.form.ts'/>

namespace Form {
	class MyForm {
		private type: FormType = 'inline'
		private state: FormState = 'active'
		constructor(public email: string) {

		}
		getInfo() {
			return {
				type: this.type,
				state: this.state
			}
		}
	}

	const form = new Form('user@gmail.com')
}
