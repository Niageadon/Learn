import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;

class Lesson1 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson1> {
  String _value = '';
  void _onClick() => setState(() => _value = new DateTime.now().toString());

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
                new Text(_value),
                new IconButton(
                    icon: new Icon(Icons.timer),
                    onPressed: _onClick,
                    tooltip: 'click me',
                )
              ],
            ),
          )
      ),
    );
  }
}