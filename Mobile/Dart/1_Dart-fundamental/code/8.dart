void main() {
  double height;
  String err;
  print(height);
  print(err);

  var error = err ?? 'error';
  var age;
  err ??= error;
  print(error);
  print(err);
  print(age?.bobo);
}
