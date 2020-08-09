import 'package:flutter/material.dart';

class Lesson10 extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<Lesson10> {
  String _value = '';
  void _onChange(String value) {
    setState(() => {
      _value = 'change-$value'
    });
  }
  void _onSubmit(String value) {
    setState(() => {
      _value = 'submit-$value'
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
                new TextField(
                  decoration: new InputDecoration(
                    labelText: 'hey',
                    hintText: 'hint',
                    icon: new Icon(Icons.android),
                  ),
                  autocorrect: true,
                  autofocus: true,
                  keyboardType: TextInputType.number,
                  onChanged: _onChange,
                  onSubmitted: _onSubmit,
                )
              ],
            ),
          )
      ),
    );
  }
}