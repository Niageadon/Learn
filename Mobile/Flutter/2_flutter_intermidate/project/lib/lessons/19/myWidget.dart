import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'views/home.dart';
import 'views/second.dart';
import 'views/third.dart';

class MyWidget extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new Card(
      child: new Column(
        children: <Widget>[
          new Text('navigate'),
          new RaisedButton(
            onPressed: () => {Navigator.of(context).pushNamed('/')},
            child: new Text('click')
          )
        ],
      ),
    );
  }
}


