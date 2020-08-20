import 'package:flutter/material.dart';

class Lesson14 extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<Lesson14> {
  double _value = 0.0;
  void _setValue(double value) {
    setState(() => {
      _value = value
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
                new Text(_value.toString()),
                new Slider(value: _value, onChanged: _setValue)
              ],
            ),
          )
      ),
    );
  }
}