Function applyMultiplier(num multiplier) {
  return (num value) => value * multiplier;
}
void main() {
  var triple = applyMultiplier(3);
  print(triple(4));
  print(triple(3.5));
}
