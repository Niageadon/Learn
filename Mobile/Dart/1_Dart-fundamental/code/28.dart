void main() {
  var list = List<String>(4);
  list[0] = 'a';
  list[1] = 'b';
  list[2] = 'c';
  list[3] = 'd';
  print(list);
  List<String> desserts = [
    'cheesecake',
    if (false) 'onion'
  ];
  desserts.add('pie');
  print(desserts);
}
