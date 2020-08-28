import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'dart:async';
import 'package:intl/intl.dart';
import 'dart:math';

class TimeDispay extends StatelessWidget {
  TimeDispay({ Key key, Color this.color, Duration this.duration, this.onClear }) : super(key: key);
  Duration duration = new Duration();
  Color color = Colors.green;
  final ValueChanged<Duration> onClear;
  void _onClicked() {
    onClear(duration);
  }

  @override
  Widget build(BuildContext context) {
    return new Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        new Padding(
          padding: new EdgeInsets.all(8),
          child: new Text(duration.toString(), style: new TextStyle(color: color),),
        ),
        new IconButton(
          icon: new Icon(Icons.clear),
          onPressed: _onClicked
        )
      ],
    );
  }
}
///////////////////////////////////////

class Lesson14 extends StatefulWidget {
  @override
  TimeCounterState createState() => new TimeCounterState();
}

class TimeCounterState extends State<Lesson14> {

  Stopwatch _watch;
  Timer _timer;
  Duration _duration;

  void _onStart() {
    setState(() {
      _watch = new Stopwatch();
      _timer = new Timer.periodic(new Duration(milliseconds: 200), _onTimeOut);
    });
    _watch.start();
  }
  void _onStop() {
    _timer.cancel();
    _watch.stop();
  }
  void _onTimeOut(Timer timer) {
    if (!_watch.isRunning) return;
    setState(() {
      _duration = _watch.elapsed;
    });
  }
  void _onClear(Duration value) {
    setState(() {
      _duration = new Duration();
    });
  }


  @override
  void initState() {
    _duration = new Duration();
  }

  @override
  Widget build(BuildContext context) {
    return new Container(
      padding: new EdgeInsets.all(16),
      child: new Center(
        child: new Column(
          children: <Widget>[
            new TimeDispay(
              color: Colors.red,
              duration: _duration,
              onClear: _onClear,
            ),
            new Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                new Padding(
                  padding: new EdgeInsets.all(12),
                  child: new RaisedButton(
                    onPressed: _onStart,
                    child: new Text('Start'),
                  ),
                ),
                new Padding(
                  padding: new EdgeInsets.all(12),
                  child: new RaisedButton(
                    onPressed: _onStop,
                    child: new Text('Stop'),
                  ),
                ),

              ],
            )
          ],
        ),
      ),
    );
  }
}