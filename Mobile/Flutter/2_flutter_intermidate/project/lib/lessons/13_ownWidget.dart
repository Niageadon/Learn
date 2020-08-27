import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'dart:async';
import 'package:intl/intl.dart';
import 'dart:math';

class Lesson13 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson13> {
  String _value = 'time';
  Timer _timer;

  void _onTimer(Timer timer) {
    var now = new DateTime.now();
    var formatter = new DateFormat('hh:mm:ss');
    String formatted = formatter.format(now);
    setState(() {
      _value = formatted;
    });
  }


  @override
  void initState() {
    _timer = new Timer.periodic(new Duration(seconds: 1), _onTimer);
  }

  @override
  Widget build(BuildContext context) {
    return new Text(_value, style: new TextStyle(
        fontSize: 32
    ));
  }
}