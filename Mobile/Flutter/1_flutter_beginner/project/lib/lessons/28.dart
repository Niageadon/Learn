import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;

class Lesson28 extends StatefulWidget {
  @override
  _State createState() => new _State();
}


class _State extends State<Lesson28> {
  Map _counties = new Map();
  void _fetchData() async {
    print('in-fn');
    var url = 'https://country.io/names.json';
    var response = await http.get(url);
    print(response);
    if(response.statusCode == 200) {
      setState(() {
        _counties = json.decode(response.body);
        print('loaded-$_counties');
      });
    }
  }


  @override
  void initState() {
    _fetchData();
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
                new Text('Counties', style: new TextStyle(
                  fontWeight: FontWeight.bold
                )),
                //new RaisedButton(onPressed: _fetchData, child: new Text('load countries')),
                new Expanded(child: new ListView.builder(
                  itemCount: _counties.length,
                  itemBuilder: (BuildContext context, int index) {
                    String key = _counties.keys.elementAt(index);
                    return new Row(children: <Widget>[
                      new Text('$key :'),
                      new Text(_counties[key])
                    ],);
                  },
                ))
              ],
            ),
          )
      ),
    );
  }
}