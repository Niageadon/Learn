import 'package:flutter/material.dart';

class Lesson8 extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<Lesson8> {
  String _value = 'my val';
  void _onClick() {
    setState(() {
      _value = DateTime.now().toString();
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
                new FlatButton(child: new Text('click me'),onPressed: () => _onClick())
              ],
            ),
          )
      ),
    );
  }
}