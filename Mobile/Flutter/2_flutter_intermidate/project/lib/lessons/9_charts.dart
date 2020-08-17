import 'dart:math';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;

class Lesson9 extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class Sales {
  String year;
  int sales;
  Sales(this.year, this.sales);
}

class _State extends State<Lesson9> {
  List<Sales> _data;
  List<charts.Series<Sales, String>> _chartData;
  void _makeData() {
    _data = new List<Sales>();
    _chartData = new List<charts.Series<Sales, String>>();
    final rnd = new Random();
    for (int i = 2000; i < 2020; i++) {
      _data.add(new Sales(i.toString(), rnd.nextInt(1000)));
      _chartData.add(new charts.Series(
        id: 'sales',
        colorFn: (_, __) => charts.MaterialPalette.green.shadeDefault,
        data: _data,
        domainFn: (Sales sales, _) => sales.year,
        measureFn: (Sales sales, _) => sales.sales,
        fillPatternFn: (_, __) => charts.FillPatternType.solid,
        displayName: 'sales'
      ));
    }
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
      body: new Container(
        padding: new EdgeInsets.all(32),
        child: new Center(
          child: new Column(
            children: <Widget>[
              new Text('sales data'),
              new Expanded(child: new charts.BarChart(_chartData))
            ],
          ),
        ),
      ),
    );
  }
}