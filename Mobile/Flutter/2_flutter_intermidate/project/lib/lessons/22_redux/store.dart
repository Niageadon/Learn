import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';
// --preview-dart-2

// Actions
enum Actions {
  Increment,
  Decrement
}

// Reducer
int reducer(int state, dynamic action) {
  switch (action) {
    case Actions.Increment: state++; break;
    case Actions.Decrement: state--; break;
  }
  return state;
}

final store = new Store<int>(reducer, initialState: 0);
