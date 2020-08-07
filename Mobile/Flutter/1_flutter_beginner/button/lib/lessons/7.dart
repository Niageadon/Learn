import 'package:flutter/material.dart';

class Lesson7 extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<Lesson7> {
  String _value = 'my val';
  void _onClick(String value) {
    setState(() {
      _value = value;
    });
  }
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
      ),
      body: new Container(
          padding: new EdgeInsets.all(32.0),
          child: new Center(
            child: new Column(
              children: <Widget>[
                new Text(_value),
                new RaisedButton(onPressed: () => _onClick('hey'))
              ],
            ),
          )
      ),
    );
  }
}