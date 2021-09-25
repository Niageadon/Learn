import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutterblock/cubit/4_cubit.dart';
import 'package:flutterblock/cubit/9_internet-connection.cubit.dart';
import 'package:flutterblock/router/index.dart';

void main() {
  runApp(MyApp(
    appRouter: AppRouter(),
    connectivity: Connectivity(),
  ));
}

class MyApp extends StatelessWidget {
  final Connectivity connectivity;
  final AppRouter appRouter;
  const MyApp({this.connectivity, this.appRouter});

  @override
  Widget build(BuildContext context) {

    return MultiBlocProvider(
      providers: [
        BlocProvider<InternetConnectionCubit>(create: (ctx) => InternetConnectionCubit(connectivity: connectivity)),
        BlocProvider<CounterCubit>(create: (ctx) =>
            CounterCubit(internetConnectionCubit: BlocProvider.of<InternetConnectionCubit>(ctx))
        ),
      ],
      child: MaterialApp(
        title: 'Flutter Demo',
        onGenerateRoute: appRouter.onGenerateRoute,
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
      )
    );
  }
}

