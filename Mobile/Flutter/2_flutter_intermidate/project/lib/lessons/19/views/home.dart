import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class _State extends State<Home> {


  @override
  void initState() {
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
      ),
      body: Column(
        children: <Widget>[
          new Text('home'),
          new Row(
            children: <Widget>[
              new RaisedButton(
                onPressed: () {Navigator.of(context).pushNamedAndRemoveUntil(
                  '/second',
                  (Route<dynamic> route) => false
                );},
                child: new Text('next'),
              )
            ],
          )
        ],
      )

    );
  }
}


