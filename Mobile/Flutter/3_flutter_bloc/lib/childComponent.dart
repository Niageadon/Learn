import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutterblock/3_cubit.dart';


class ChildComponent extends StatelessWidget {

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => BlocProvider.of<CounterCubit>(context).increment(),
      child: Text('+'),
    );
  }
}