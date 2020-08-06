import 'package:flutter/material.dart';
void main() {
  runApp(new MaterialApp(
    home: new MyApp(),
  ));
}
class MyApp extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<MyApp> {
  String _value = 'my val';
  void _onClick() {
    setState(() {
      _value = 'bobas';
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
                new RaisedButton(onPressed: _onClick)
              ],
            ),
          )
      ),
    );
  }
}