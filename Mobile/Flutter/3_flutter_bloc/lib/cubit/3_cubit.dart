import 'package:bloc/bloc.dart';
import 'package:flutter/cupertino.dart';

class CounterState {
  int value;

  CounterState({ @required this.value});
}

class CounterCubit extends Cubit<CounterState> {
  CounterCubit(): super(CounterState(value: 0));

  void increment() {
    print(state.value);
    return emit(CounterState(value: state.value + 1));
  }
  void decrement() => emit(CounterState(value: state.value - 1));
}