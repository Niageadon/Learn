import 'package:flutter/material.dart';
import 'dart:async';
class Lesson16 extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<Lesson16> {
  int _value = 0;
  void _add() => setState(() => {
    _value++
  });
  void _remove() => setState(() => {
    _value--
  });

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
        actions: <Widget>[
          new IconButton(icon: new Icon(Icons.add), onPressed: _add),
          new IconButton(icon: new Icon(Icons.remove), onPressed: _remove)
        ],
      ),
      body: new Container(
          padding: new EdgeInsets.all(32.0),
          child: new Center(
            child: new Column(
              children: <Widget>[
                new Text(
                  _value.toString(),
                  style: new TextStyle(fontWeight: FontWeight.bold, fontSize: 40),
                ),
              ],
            ),
          )
      ),
    );
  }
}