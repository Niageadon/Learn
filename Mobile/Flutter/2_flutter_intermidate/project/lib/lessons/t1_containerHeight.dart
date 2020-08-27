import 'dart:math';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;

class T1 extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class _State extends State<T1> {



  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
      ),
      body: new Container(
        child: new Column(
          children: <Widget>[
            Container(
              height: MediaQuery.of(context).size.height * 0.6,
              color: Colors.red,
            ),
            Container(
              height: MediaQuery.of(context).size.height * 0.4,
              color: Colors.lightBlueAccent,
            )
          ],
        ),
      ),
    );
  }
}