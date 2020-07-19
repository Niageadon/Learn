function Component(config: ComponentDecorator) {
	return <T extends {new(...args: any[]): object}>(Constructor: T) => {
		return class extends Constructor {
			constructor(...args: any[]) {
				super(...args)
				const el = document.querySelector(config.selector)!
				el.innerHTML = config.template
			}
		}
	}
}
function Bind(_: any, _1: any, descriptor: PropertyDescriptor): PropertyDescriptor {
	const original = descriptor.value
	return {
		configurable: true,
		enumerable: true,
		get(): any {
			return original.bind(this)
		}
	}
}

@Component({
	selector: '#card',
	template: `
		<div class="card">
			<div class="card-content">
				<span class="card-title">card title</span>	
			</div>
		</div>
	`
})
class CardComponent {
	constructor(public name: string) {
	}
	@Bind
	logName() {
		console.log(123, this.name)
	}
}

interface ComponentDecorator {
	selector: string
	template: string
}
const card = new CardComponent('my card')
const btn = document.querySelector('#btn')!
btn.addEventListener('click', card.logName)


///////////////////////////////////////////////

type validatorType = 'required'|'email'
interface ValidatorConfig {
	[prop: string]: {
		[validateProp: string]: validatorType
	}
}
const validators: ValidatorConfig = {}
function Required(target: any, propName: string) {
	validators[target.constructor.name] = {
		...validators[target.constructor.name],
		[propName]: 'required'
	}
}
function validate(obj: any): boolean {
	const objConfig = validators[obj.constructor.name]
	if(!objConfig) {
		return true
	}
	let isValid = true
	Object.keys(objConfig).forEach(key => {
		if(objConfig[key] === 'required') {
			isValid = isValid && !!obj[key]
		}
	})
	return isValid
}

class Form {
	@Required
	public email: string|void
	constructor(email?: string) {
		this.email = email
	}
}
const form = new Form('bb@gmail.com')
if(validate(form)) {
	console.log('form is valid')
} else {
	console.log('validation failed')
}
