import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'views/home.dart';
import 'views/second.dart';
import 'views/third.dart';

class Lesson17 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson17> {


  @override
  void initState() {
  }

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: "Nav",
      routes: <String, WidgetBuilder>{
        '/': (BuildContext context) => new Home(),
        '/second': (BuildContext context) => new Second(),
        '/third': (BuildContext context) => new Third(),
      },
      home: null,
    );
  }
}


