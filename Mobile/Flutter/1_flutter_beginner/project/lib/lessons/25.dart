import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Lesson25 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson25> {
  String _value = '';
  void _setValue(String value) => setState(() => {
    _value = value
  });
  TextEditingController _user = new TextEditingController();
  TextEditingController _pass = new TextEditingController();


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
                new Text('pls login'),
                new Row(
                  children: <Widget>[
                    new Text('Username:  '),
                    new Expanded(child: new TextField(controller: _user))
                  ],
                ),
                new Row(
                  children: <Widget>[
                    new Text('Password:  '),
                    new Expanded(child: new TextField(
                      controller: _pass,
                      obscureText: true,
                    ))
                  ],
                ),
                new Padding(
                  padding: new EdgeInsets.all(16),
                  child: new RaisedButton(
                    onPressed: () => print('login ${_user.text}'),
                    child: new Text('click me'),
                  ),)
              ],
            ),
          )
      ),
    );
  }
}