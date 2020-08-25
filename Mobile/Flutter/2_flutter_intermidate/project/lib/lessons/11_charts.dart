import 'dart:math';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;

class Lesson11 extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class Sales {
  int year;
  int sales;
  charts.Color color;
  Sales(this.year, this.sales, this.color);
}

class _State extends State<Lesson11> {
  List<Sales> _data;
  List<charts.Series<Sales, int>> _chartData;
  void _makeData() {
    _chartData = new List<charts.Series<Sales, int>>();
    _data = <Sales>[
      new Sales(0, 100, charts.MaterialPalette.blue.shadeDefault),
      new Sales(1, 120, charts.MaterialPalette.red.shadeDefault),
      new Sales(2, 110, charts.MaterialPalette.yellow.shadeDefault),
      new Sales(3, 190, charts.MaterialPalette.pink.shadeDefault),
    ];
    _chartData.add(new charts.Series(
        id: 'Sales',
        data: _data,
        colorFn: (Sales sales, _) => sales.color,
        domainFn: (Sales sales, _) => sales.year,
        measureFn: (Sales sales, _) => sales.sales
    ));
  }

  @override
  void initState() {
    _makeData();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
      ),
      body: new Center(
        child: new Column(
          children: <Widget>[
            new Text('Sales'),
            new Expanded(
              child: new charts.PieChart(
                _chartData,
                animate: true,
                animationDuration: new Duration(seconds: 5),
              )
            )
          ],
        ),
      ),
    );
  }
}