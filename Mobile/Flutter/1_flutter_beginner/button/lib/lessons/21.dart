import 'package:flutter/material.dart';
import 'dart:async';
class Lesson21 extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<Lesson21> {
  void _showBottomNotify() {
    showModalBottomSheet<void>(
      context: context,
      builder: (BuildContext context) {
        return new Container(
          padding: new EdgeInsets.all(15.0),
          child: new Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              new Text(
                'notify-text', 
                style: new TextStyle(
                  color: Colors.red, 
                  fontWeight: FontWeight.bold),
              ),
              new RaisedButton(
                onPressed: () => Navigator.pop(context),
                child: new Text('close-notify'),
              )
            ],
          ),
        );
      }
    );
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
      ),
      body: new Container(
          padding: new EdgeInsets.all(32.0),
          child: new Center(
            child: new Column(
              children: <Widget>[
                new RaisedButton(onPressed: _showBottomNotify, child: new Text('show-notify'),)
              ],
            ),
          )
      ),
    );
  }
}