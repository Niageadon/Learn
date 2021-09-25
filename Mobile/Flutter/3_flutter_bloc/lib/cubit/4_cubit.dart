import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutterblock/cubit/9_internet-connection.cubit.dart';

class CounterState {
  int value;
  bool wasIncremented;

  CounterState({ @required this.value, this.wasIncremented });
}

class CounterCubit extends Cubit<CounterState> {
  final InternetConnectionCubit internetConnectionCubit;
  StreamSubscription internetConnectionStream;

  CounterCubit({ @required this.internetConnectionCubit }): super(CounterState(value: 0)) {
    internetConnectionStream = internetConnectionCubit.stream.listen((internetConnectionState) {
      increment();
    });
  }

  void increment() {
    print(state.value);
    return emit(CounterState(value: state.value + 1, wasIncremented: true));
  }
  void decrement() => emit(CounterState(value: state.value - 1, wasIncremented: false));

  @override
  Future<void> close() {
    internetConnectionStream.cancel();
    return super.close();
  }
}