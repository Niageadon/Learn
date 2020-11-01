// Liskov Substitution Principle

class Person {
	accessToCompanySecrets() {
		return true
	}
}

class Director extends Person{
}
class HR extends Person{
}
class Worker extends Person{
	accessToCompanySecrets() {
		return false
	}
}

const bobs = new Worker()
console.log(bobs.accessToCompanySecrets())
