import 'package:flutter/material.dart';
import 'dart:async';
enum Answers {YES, NO, MAYBE}


class Lesson24 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson24> {
  String _value = '';
  void _setValue(String value) => setState(() => {
    _value = value
  });
  Future _showDialog() async {
    var answer = await showDialog(
        context: context,
        child: new SimpleDialog(
          title: new Text('Do u boba?'),
          children: <Widget>[
            new SimpleDialogOption(
              child: new Text('yes'),
              onPressed: () => Navigator.pop(context, Answers.YES),
            ),
            new SimpleDialogOption(
              child: new Text('no'),
              onPressed: () => Navigator.pop(context, Answers.NO),
            ),
            new SimpleDialogOption(
              child: new Text('mb'),
              onPressed: () => Navigator.pop(context, Answers.MAYBE),
            ),
          ],
        )
    );
    return answer;
  }
  Future _askUser() async {
    switch(
      await _showDialog()
    ) {
      case Answers.YES:
        _setValue('YES');
        break;
      case Answers.NO:
        _setValue('NO');
        break;
      case Answers.MAYBE:
        _setValue('MB');
        break;
    }
  }

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
                new RaisedButton(onPressed: _askUser, child: new Text('show-alert'),)
              ],
            ),
          )
      ),
    );
  }
}