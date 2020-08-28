import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'authenticator.dart';

class Lesson15 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson15> {
  bool _isAuthenticated;
  void _onAuthenticated(bool value) {
    setState(() {
      _isAuthenticated = value;
    });
  }


  @override
  void initState() {
    _isAuthenticated = false;
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
      ),
      body: new Container(
        child: new Center(
          child: new Column(
            children: <Widget>[
              new Authenticator(onAuthenticated: _onAuthenticated),
              new Text('is auth: ${_isAuthenticated}')
            ],
          )
        )
      ),
    );
  }
}


