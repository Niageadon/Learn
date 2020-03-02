class Animal {
	private weight: number;
	public color: string;

	constructor(weight: number, color: string) {
		this.weight = weight;
		this.color = color;
	}
}

class Cat extends Animal{
	constructor(weight: number, color: string) {
		super(weight, color);
	}
	voice() {
		console.log('mew')
	}
}

let biba = new Cat(111, 'red');
biba.voice();

//______________________________________________________
abstract class Component {
	abstract render(): void
	abstract info(): string
}
class VueComponent extends Component{
	render(): void {
		console.log('mounted')
	}
	info(): string {
		return "";
	}

}
