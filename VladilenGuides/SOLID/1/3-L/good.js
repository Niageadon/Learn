// Liskov Substitution Principle

class Person {
}
class CompanyMember extends Person{
}
class CompanyHead extends CompanyMember{
	accessToCompanySecrets() {
		return true
	}
}

class Director extends CompanyHead{
}
class HR extends CompanyHead{
}
class Worker extends CompanyMember{
}

