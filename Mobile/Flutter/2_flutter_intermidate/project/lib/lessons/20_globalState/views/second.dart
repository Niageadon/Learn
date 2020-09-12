import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../myWidget.dart';
import '../code/globalState.dart';

class Second extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class _State extends State<Second> {

  GlobalState _store = GlobalState.instance;

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
            new Text('hello ${_store.get('name')}'),
            new Row(
              children: <Widget>[
                new RaisedButton(
                  onPressed: () {Navigator.of(context).pop();},
                  child: new Text('prev'),
                ),
                new RaisedButton(
                  onPressed: () {Navigator.of(context).pushNamedAndRemoveUntil(
                    '/third',
                    (Route<dynamic> route) => false
                  );},
                  child: new Text('next'),
                ),
                new MyWidget()
              ],
            )
          ],
        )

    );
  }
}


