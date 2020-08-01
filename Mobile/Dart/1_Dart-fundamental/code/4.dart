void main() {

  // Challenge Time! Variables and Types

  /*
   * Create a variable to hold a number of apples that relies on type inference.
   * Then create a variable oranges that is explicitly typed as int. Use the
   * greater than operator to compare the number of apples to the number of
   * oranges to produce a bool variable.
   *
   * Hint: the greater than operator in Dart is >.
   */
  var appleCounter = 10;
  int orangeCounter = 15;
  bool isApplesMore = appleCounter > orangeCounter;
  print(isApplesMore);

  /*
   * Create a variable speed set to 100.0, then re-assign the value to 110.0.
   * Create an immutable value acceleration and set it's value to 9.8.
   */
  double speed = 100.0;
  speed = 110.0;
  const acceleration = 9.8;
}
