class Actor {
  String name;
  var filmography = <String>[];

  set debut(String val) => filmography.insert(0, val);
  get debut => filmography.first;

  String toString() {
    var actor = '$name\n';
    for(var film in filmography) {
      actor += '- $film\n';
    }
    return actor;
  }
  Actor(String name, List<String> filmography) {
    this.name = name;
    this.filmography = filmography;
  }
}
void main() {
  var person = Actor('bobo', ['green mile']);
  print(person);
}
