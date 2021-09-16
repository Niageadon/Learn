import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutterblock/cubit/4_cubit.dart';
import 'package:flutterblock/screens/home.screen.dart';
import 'package:flutterblock/screens/second.screen.dart';
import 'package:flutterblock/screens/third.screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final counterBloc = CounterCubit();

    return BlocProvider<CounterCubit>(
      create: (ctx) => CounterCubit(),
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        routes: {
          '/': (ctx) => BlocProvider.value(
            value: counterBloc,
            child: HomeScreen(
              title: 'Flutter Demo Home Page',
              color: Colors.grey,
            ),
          ),
          '/second': (ctx) => BlocProvider.value(
            value: counterBloc,
            child: SecondScreen(
              title: 'Flutter Demo Home Page',
              color: Colors.grey,
            ),
          ),
          '/third': (ctx) => BlocProvider.value(
            value: counterBloc,
            child: ThirdScreen(
              title: 'Flutter Demo Home Page',
              color: Colors.grey,
            ),
          ),
        },
      )
    );
  }
}

