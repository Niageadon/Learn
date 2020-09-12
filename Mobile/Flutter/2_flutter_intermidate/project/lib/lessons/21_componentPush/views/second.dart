import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Second extends StatefulWidget {
  Second(this.name);
  String name;

  @override
  _State createState() => new _State(name);
}

class _State extends State<Second> {
  _State(this.name);
  String name;

  @override
  void initState() {
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(
          title: new Text('appbar-title'),
          backgroundColor: Colors.blueGrey,
        ),
        body: Column(
          children: <Widget>[
            new Text('second'),
            new Text('hello- ${name}'),
            new Row(
              children: <Widget>[
                new RaisedButton(
                  onPressed: () {Navigator.of(context).pushNamed('/');},
                  child: new Text('prev'),
                ),
                new RaisedButton(
                  onPressed: () {Navigator.of(context).pushNamed('/third');},
                  child: new Text('next'),
                )
              ],
            )
          ],
        )

    );
  }
}


