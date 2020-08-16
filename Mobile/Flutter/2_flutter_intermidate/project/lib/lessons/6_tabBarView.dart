import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Lesson6 extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class Choice {
  final String title;
  final IconData icon;

  const Choice({this.title, this.icon});
}
class _State extends State<Lesson6> with SingleTickerProviderStateMixin {

  TabController _controller;
  List<Choice> _items = const <Choice> [
    const Choice(title: 'car', icon: Icons.directions_car),
    const Choice(title: 'bicycle', icon: Icons.directions_bike),
    const Choice(title: 'boat', icon: Icons.directions_boat),
    const Choice(title: 'bus', icon: Icons.directions_bus),
    const Choice(title: 'train', icon: Icons.directions_railway),
    const Choice(title: 'walk', icon: Icons.directions_walk),
  ];


  @override
  void initState() {
    _controller = new TabController(length: _items.length, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
        bottom: new PreferredSize(
          preferredSize: const Size.fromHeight(48),
          child: new Theme(
            data: Theme.of(context).copyWith(accentColor: Colors.white),
            child: new Container(
              height: 48,
              alignment: Alignment.center,
              child: new TabPageSelector(controller: _controller),
            )
          ),
        ),
      ),
      body: new TabBarView(
        controller: _controller,
        children: _items.map((Choice item){
          return new Container(
            padding: new EdgeInsets.all(25),
            child: new Center(
              child: new Column(
                children: <Widget>[
                  new Text(item.title),
                  new Icon(item.icon, size: 120)
                ],
              ),
            ),
          );
        }).toList()
      ),
    );
  }


}