import 'package:flutter/material.dart';

class Lesson3 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson3> {
  double _value = 0.0;
  void _onChange(double value) {
    setState(() {
      _value = value;
    });
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
                new Slider(value: _value, onChanged: _onChange),
                new Container(
                  padding: new EdgeInsets.all(32),
                  child: new LinearProgressIndicator(
                    value: _value,
                    valueColor: new AlwaysStoppedAnimation<Color>(Colors.green),
                  ),
                ),
                new Container(
                  padding: new EdgeInsets.all(32),
                  child: new CircularProgressIndicator(
                    value: _value,
                    valueColor: new AlwaysStoppedAnimation<Color>(Colors.green),
                  ),
                ),

              ],
            )
          )
      ),
    );
  }
}