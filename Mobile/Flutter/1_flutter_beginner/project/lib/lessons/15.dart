import 'package:flutter/material.dart';
import 'dart:async';
class Lesson15 extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<Lesson15> {
  String _value = '';
  Future _selectDate() async {
    DateTime picked = await showDatePicker(
        context: context,
        initialDate: new DateTime.now(),
        firstDate: new DateTime(2020),
        lastDate: new DateTime(2021)
    );
    if(picked != null) setState(() {
      _value = picked.toString();
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
                new RaisedButton(onPressed: _selectDate)
              ],
            ),
          )
      ),
    );
  }
}