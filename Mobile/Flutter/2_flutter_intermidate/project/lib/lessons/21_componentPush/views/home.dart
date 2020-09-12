import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import './second.dart';
class Home extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class _State extends State<Home> {

  void _onPressed() {
    Navigator.push(context,
      new MaterialPageRoute(
        builder: (BuildContext context) => new Second('biba')
      )
    );
  }

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
                onPressed: _onPressed,
                child: new Text('next'),
              )
            ],
          )
        ],
      )

    );
  }
}


