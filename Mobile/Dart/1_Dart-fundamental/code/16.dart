enum Month {
  january,
  february,
  march,
  april,
}
enum Semester {
  fall,
  spring,
  summer
}
void main() {
  final month = Month.april;
  print(month.index);
  print(Month.values);

  Semester semester;
  switch(month) {
    case Month.april:
    case Month.february:
    case Month.january:
    case Month.march:
      semester = Semester.fall;
      break;
  }
  print(semester);
}
