import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';
import './store.dart';
class Lesson22 extends StatelessWidget {
  Lesson22({Key key, this.store});
  final Store<int> store;

  @override
  Widget build(BuildContext context) {
    return new StoreProvider<int>(
      store: store,
      child: new MaterialApp(
        title: 'redux',
        home: new Scaffold(
          appBar: new AppBar(
            title: new Text('redux app'),
          ),
          body: new Container(
            child: new Column(
              children: <Widget>[
                new StoreConnector(
                  builder: (context, count) {
                    return new Text(count, style: new TextStyle(
                      fontSize: 20,
                    ));
                  },
                  converter: (store) => store.state.toString()
                )
              ],
            ),
          ),
        ),
      )
    );
  }
}




