import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../code/globalState.dart';

class Home extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class _State extends State<Home> {

  TextEditingController _name;
  GlobalState _store = GlobalState.instance;

  void _onPressed() {
    _store.set('name', _name.text);
    Navigator.of(context).pushNamed('/second');
  }

  @override
  void initState() {
    _name = new TextEditingController();
    _store.set('name', 'ff');
    _name.text = _store.get('name');
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
          new Text('home'),
          new Column(
            children: <Widget>[
               new TextField(
                controller: _name,
                decoration: new InputDecoration(
                  labelText: 'Enter ur name',

                ),
              ),

              new RaisedButton(
                onPressed: _onPressed,
                child: new Text('next'),
              )
            ],
          )
        ],
      )

    );
  }
}


