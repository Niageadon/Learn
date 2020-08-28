import 'package:flutter/material.dart';
import './lessons/1.dart';
import './lessons/2.dart';
import './lessons/3_progressIndicator.dart';
import './lessons/4_popupMenu.dart';
import './lessons/5_expandedList.dart';
import './lessons/6_tabBarView.dart';
import './lessons/7_stepWidget.dart';
import './lessons/8_gridView.dart';
import './lessons/9_charts.dart';
import './lessons/10_charts.dart';
import './lessons/11_charts.dart';
import './lessons/12_ownWidget.dart';
import './lessons/13_ownWidget.dart';
import './lessons/14_ownWidget.dart';

void main() {
  runApp(new MaterialApp(
    home: new Wrapper(),
    //home: FlutterDemo(storage: CounterStorage()),
  ));
}

class Wrapper extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
      ),
      body: new Container(
        child: new Container(
          child: new Lesson14(),
        )
      ),
    );
  }
}