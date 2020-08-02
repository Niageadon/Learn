enum PhysicsType {
  theoretical,
  experimental,
  both
}
class Physicist {
  String firstName;
  String lastName;
  PhysicsType type;

  Physicist._internal(this.firstName, this.lastName, this.type);
  static var physicsCount = 0;
  static Physicist newPhysicist(
  String firstName,
  String lastName,
  PhysicsType type) {
    physicsCount++;
    return Physicist._internal(firstName, lastName, type);
  }
}
void main() {
  final emmy = Physicist.newPhysicist('albert', 'bobo', PhysicsType.theoretical);
  final emmy1 = Physicist.newPhysicist('albert', 'bobo', PhysicsType.theoretical);
  final emmy2 = Physicist.newPhysicist('albert', 'bobo', PhysicsType.theoretical);
  print(Physicist.physicsCount);
}
