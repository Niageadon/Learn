class Actor {
  String name;
  var filmography = <String>[];

  String toSting() {
    var actor = '$name\n';
    for(var film in filmography) {
      actor += '- $film\n';
    }
    return actor;
  }
}
void main() {
  var person = Actor();
  person.name = 'bobo';
  person.filmography.add('green mile');
  print(person);
}
