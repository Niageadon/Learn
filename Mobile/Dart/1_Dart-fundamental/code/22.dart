Function applyMultiplier(num multiplier) {
  return (num value) {
    return value * multiplier;
  };
}
Function countingCounter() {
  var counter = 0;
  final incrementCounter = () {
    counter ++;
    return counter;
  };
  return incrementCounter;
}
void main() {
  var triple = applyMultiplier(3);
  print(triple(4));
  print(triple(3.5));
  var nums = [1, 2, 3];
  nums.forEach((element) {
    var tripled = triple(element);
    print(tripled);
  });
  var counter1 = countingCounter();
  var counter2 = countingCounter();
  print([counter1(), counter1()]);
  print([counter2(), counter2()]);
}
