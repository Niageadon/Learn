import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'dart:math';

class Lesson8 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class Area {
  int index;
  String name;
  Color color;

  Area({this.index: -1, this.name: 'Area', this.color: Colors.lightBlueAccent});
}
class _State extends State<Lesson8> {
  int _location;
  List<Area> _areas;

  void _onPressed(int index) {
    setState(() {
      _areas[index].color = (index == _location)? Colors.green: Colors.red;
    });
  }
  Widget _generate(int index) {
    return new GridTile(
        child: new Container(
          padding: new EdgeInsets.all(5),
          child: new RaisedButton(
            onPressed: () => _onPressed(index),
            color: _areas[index].color,
            child: new Text(_areas[index].name, textAlign: TextAlign.center,),
          ),
        )
    );
  }

  @override
  void initState() {
    _areas = new List<Area>();
    for (int i = 0; i < 16; i++) {
      _areas.add(new Area(index: i, name: 'Area $i'));
    }
    var rng = new Random();
    _location = rng.nextInt(_areas.length);
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
          child: new GridView.count(
            crossAxisCount: 4,
            children: new List<Widget>.generate(16, _generate),
          ),
        ),
      ),
    );
  }
}