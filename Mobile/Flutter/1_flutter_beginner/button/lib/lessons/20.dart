import 'package:flutter/material.dart';
import 'dart:async';
class Lesson20 extends StatefulWidget {
  @override
  _State createState() => new _State();
}
class _State extends State<Lesson20> {
  List<BottomNavigationBarItem> _items;
  String _value = '';
  int _index = 0;
  void _selectNavTab(value) {
    setState(() {
      _index = value;
    });
  }
  @override
  void initState() {
    _items = new List();
    _items.add(new BottomNavigationBarItem(icon: new Icon(Icons.android), title: new Text('boba')));
    _items.add(new BottomNavigationBarItem(icon: new Icon(Icons.accessible), title: new Text('bobi')));
    _items.add(new BottomNavigationBarItem(icon: new Icon(Icons.save), title: new Text('bibo')));
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
                new Text(_index.toString()),
              ],
            ),
          )
      ),
      bottomNavigationBar: new BottomNavigationBar(
        items: _items,
        onTap: _selectNavTab,
        currentIndex: _index,
      ),
    );
  }
}