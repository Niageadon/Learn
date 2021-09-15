import 'package:bloc/bloc.dart';

enum CounterEventEnum {
  INCREMENT,
  DECREMENT
}

class CounterBlock extends Bloc<CounterEventEnum, int> {
  CounterBlock(): super(0);

  @override
  Stream<int> mapEventToState(CounterEventEnum event) async* {
    switch (event) {
      case CounterEventEnum.INCREMENT: {
        yield state + 1;
        break;
      }
      case CounterEventEnum.DECREMENT: {
        yield state - 1;
        break;
      }
    }
  }
}