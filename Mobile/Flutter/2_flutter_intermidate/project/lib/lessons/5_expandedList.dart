import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Lesson5 extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class MyItem {
  bool isExpanded;
  final String header;
  final Widget body;
  MyItem(this.isExpanded, this.header, this.body);
}
class _State extends State<Lesson5> {
  List<MyItem> _items = new List<MyItem>();

  ExpansionPanel _createItem(MyItem item) {
    return new ExpansionPanel(
      headerBuilder: (BuildContext context, bool isExpanded) {
        return new Container(
          padding: new EdgeInsets.all(5),
          child: new Text('Header ${item.header}'),
        );
      },
      body: item.body,
      isExpanded: item.isExpanded
    );
  }

  @override
  void initState() {
    for (int i = 0; i < 10; i++) {
      _items.add(new MyItem(
          false,
          'item $i',
          new Container(
            padding: new EdgeInsets.all(10),
            child: new Text('hey'),
          )
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
          child: new ListView(
            children: <Widget>[
              new ExpansionPanelList(
                expansionCallback: (int index, bool isExpanded) {
                  setState(() {
                    _items[index].isExpanded = ! _items[index].isExpanded;
                  });
                },
                children: _items.map(_createItem).toList(),
              )
            ],
          )
      ),
    );
  }


}