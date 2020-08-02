void printIfBanana(String fruit) {
  if(fruit == 'banana') {
    print('Banana!');
  }
}
bool isBanana(String fruit) {
  return fruit == 'banana';
}
bool withinTolerance({ int value, int min = 0, int max }) {
  return min <= value && value <= max;
}
String fullName(String first, String last, [String title]) {
  return '${title == null ? '' : '$title '}$first $last';
}
void main() {
  var fruit = 'apple';
  printIfBanana(fruit);
  print(isBanana(fruit));
  print(withinTolerance(min: 1, max: 10, value: 11));
  print(withinTolerance(max: 10, value: 5));
  print(fullName('bobo', 'bibo'));
  var fn = fullName;
  print(fn('bobo', 'bibo', 'professor'));
}
