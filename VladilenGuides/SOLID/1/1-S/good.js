// Single Responsibility Principle

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
}

class NewsPrinter {
	constructor(news) {
		this.news = news
	}
	
	html() {
		return `
			<div>
				<h1>${this.news.title}</h1>
				<p>${this.news.text}</p>
			</div>
		`
	}
	json() {
		return JSON.stringify({
			title: this.news.title,
			text: this.news.text
		}, null, 4)
	}
}

const news = new News({title: 'У username проблемы с доступов в bobo-casino', text: 'Для доступа нужно только...'})
const printer = new NewsPrinter(news)
console.log(printer.json())
