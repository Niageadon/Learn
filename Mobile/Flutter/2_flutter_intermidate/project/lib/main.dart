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
import './lessons/15/index.dart';
import './lessons/16_routing/index.dart';
import './lessons/17_noReturnRouting/index.dart';
import './lessons/19/index.dart';
import './lessons/20_globalState/index.dart';
import './lessons/21_componentPush/index.dart';
import './lessons/22_redux/index.dart';
import './lessons/22_redux/store.dart';

void main() {
  runApp(
    new MaterialApp(
        home: new Lesson22(store: store)
    )
  );
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