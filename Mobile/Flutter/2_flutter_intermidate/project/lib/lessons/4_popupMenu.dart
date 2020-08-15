import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Lesson4 extends StatefulWidget {
  @override
  _State createState() => new _State();
}

enum Animals {
  Cat, Dog, Bird, Lizard, Boba
}
class _State extends State<Lesson4> {
  Animals _selected = Animals.Boba;
  String _value = 'make selection';
  List<PopupMenuEntry<Animals>> _items = new List<PopupMenuEntry<Animals>>();
  String _getDisplay(Animals animal) {
    int index = animal.toString().indexOf('.');
    index++;
    return animal.toString().substring(index);
  }
  void _onSelect(Animals animal) {
    setState(() {
      _selected = animal;
      _value = 'you selected $animal';
    });
  }

  @override
  void initState() {
    for (Animals animal in Animals.values) {
      _items.add(new PopupMenuItem(
        child: new Text(_getDisplay(animal)),
        value: animal,
      ));
    }
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
            child: new Row(
              children: <Widget>[
                new Container(
                  padding: new EdgeInsets.all(5),
                  child: new Text(_value),
                ),
                new PopupMenuButton<Animals>(
                  child: new Icon(Icons.input),
                  initialValue: Animals.Boba,
                  onSelected: _onSelect,
                  itemBuilder: (BuildContext context) {
                    return _items;
                  }
                )
              ],
            )
          )
      ),
    );
  }
}