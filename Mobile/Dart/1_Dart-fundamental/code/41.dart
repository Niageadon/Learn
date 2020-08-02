class Person {
  String name;
  Person(String name) {
    this.name = name;
  }
}
class Student extends Person {
  bool isTech;
  Student(name, isTech) :super(name) {
    this.isTech = isTech;
  }
}
void main() {
  var bob = new Student('bob', true);
  var bib = new Person('bib');
  print(bob.name);
  print(bib.name);
}
