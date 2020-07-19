class News {
	constructor({title, text}) {
		this.title = title;
		this.text = text;
		this.edited = false;
	}
	
	update(text) {
		this.text = text;
		this.edited = true;
	}
	
	toHTML() {
		return `
			<div>
				<h1>${this.title}</h1>
				<p>${this.text}</p>
			</div>
		`
	}
	
	toJson() {
		return JSON.stringify({
			title: this.title,
			text: this.text
		}, null, 4)
	}
	
}

const news = new News({title: 'У username проблемы с доступов в bobo-casino', text: 'Для доступа нужно только...'})
console.log(news.toJson())
