import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Second extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class _State extends State<Second> {


  @override
  void initState() {
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        body: Column(
          children: <Widget>[
            new Text('second'),
            new Row(
              children: <Widget>[
                new RaisedButton(
                  onPressed: () {Navigator.of(context).pushNamed('/');},
                  child: new Text('prev'),
                ),
                new RaisedButton(
                  onPressed: () {Navigator.of(context).pushNamed('/third');},
                  child: new Text('next'),
                )
              ],
            )
          ],
        )

    );
  }
}


