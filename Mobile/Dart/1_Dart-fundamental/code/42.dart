enum BloodType {
  warn,
  cold
}
abstract class Animal {
  BloodType bloodType;
  bool hasMilk;
}
class Human extends Animal {
  BloodType bloodType = BloodType.warn;
  bool hasMilk = true;
}
void main() {
}
