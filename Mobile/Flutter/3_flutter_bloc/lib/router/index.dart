import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutterblock/cubit/4_cubit.dart';
import 'package:flutterblock/screens/home.screen.dart';
import 'package:flutterblock/screens/second.screen.dart';
import 'package:flutterblock/screens/third.screen.dart';

class AppRouter {
  final CounterCubit _counterCubit = CounterCubit();

  Route onGenerateRoute(RouteSettings routeSettings) {
    switch (routeSettings.name) {
      case '/': {
        return MaterialPageRoute(
          builder: (_) => BlocProvider.value(
            value: _counterCubit,
            child: HomeScreen(
              title: 'Flutter Demo Home Page',
              color: Colors.grey,
            ),
          ),
        );
      }
      case '/second': {
        return MaterialPageRoute(
          builder: (_) => BlocProvider.value(
            value: _counterCubit,
            child: SecondScreen(
              title: 'Flutter Demo Home Page',
              color: Colors.grey,
            ),
          ),
        );
      }
      case '/third': {
        return MaterialPageRoute(
          builder: (_) => BlocProvider.value(
            value: _counterCubit,
            child: ThirdScreen(
              title: 'Flutter Demo Home Page',
              color: Colors.grey,
            ),
          ),
        );
      }
    }
  }

  void dispose() {
    _counterCubit.close();
  }
}