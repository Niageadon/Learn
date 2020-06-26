export default class Excel {
	$el: object
	components: any[]

	constructor(selector: string, options: Options) {
		this.$el = document.querySelector(selector);
		this.components = options?.components ?? []
	}
}

interface Options {
	components: any[]
}
