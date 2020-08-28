import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Authenticator extends StatefulWidget {
  Authenticator({Key key, this.onAuthenticated});
  final ValueChanged<bool> onAuthenticated;

  @override
  _State createState() => new _State(onAuthenticated: onAuthenticated);
}


class _State extends State<Authenticator> {
  _State({Key key, this.onAuthenticated});
  TextEditingController _user;
  TextEditingController _password;
  final ValueChanged<bool> onAuthenticated;
  void _onPressed() {
    if (_user.text != 'user' || _password.text != 'qwerty') {
      onAuthenticated(false);
    } else {
      onAuthenticated(true);
    }
  }

  @override
  void initState() {
    _password = new TextEditingController();
    _user = new TextEditingController();
  }

  @override
  Widget build(BuildContext context) {
    return new Card(
      child: new Padding(
        padding: new EdgeInsets.all(16),
        child: new Column(
          children: <Widget>[
            new TextField(
              controller: _user,
              decoration: new InputDecoration(
                labelText: 'Username'
              ),
            ),
            new TextField(
              controller: _password,
              decoration: new InputDecoration(
                labelText: 'Password'
              ),
              obscureText: true,
            ),
            new Padding(
              padding: new EdgeInsets.all(8),
              child: new RaisedButton(
                onPressed: _onPressed,
                child: new Text('Login'),
              ),
            )
          ],
        ),
      ),
    );
  }
}

