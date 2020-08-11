import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;

class Lesson2 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson2> {
  int counter = 0;
  List<Widget> _list = new List<Widget>();
  void _onClick() {
    Widget child = _newItem(counter);
    setState(() {
      _list.add(child);
    });
  }
  Widget _newItem(int i) {
    Key key = new Key('item_$i');
    Container child = new Container(
      key: key,
      padding: new EdgeInsets.all(10),
      child: new Chip(
        label: new Text('$i Name'),
        deleteIconColor: Colors.red,
        deleteButtonTooltipMessage: 'Delete',
        onDeleted: () => _removeItem(key),
        avatar: new CircleAvatar(
          backgroundColor: Colors.grey.shade800,
          child: new Text(i.toString()),
          ),
      ),
    );
    counter++;
    return child;
  }
  void _removeItem(Key key) {
    for (int i = 0; i < _list.length; i++) {
      Widget child = _list.elementAt(i);
      if (child.key == key) {
        setState(() {
          _list.removeAt(i);
          print('remove ${key.toString()}');
        });
      }
    }
  }

  @override
  void initState() {
    for (int i = 0; i < 5; i++) {
      Widget child = _newItem(i);
      _list.add(child);
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
      ),
      floatingActionButton: new FloatingActionButton(
        onPressed: _onClick,
        child: new Icon(Icons.add),
      ),
      body: new Container(
          padding: new EdgeInsets.all(32.0),
          child: new Center(
            child: new Column(
              children: _list
            ),
          )
      ),
    );
  }
}