import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutterblock/cubit/4_cubit.dart';

class SecondScreen extends StatefulWidget {
  SecondScreen({Key key, this.title, this.color}) : super(key: key);

  final String title;
  final MaterialColor color;

  @override
  _SecondScreenState createState() => _SecondScreenState();
}

class _SecondScreenState extends State<SecondScreen> {

  @override
  void initState() {
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: BlocListener<CounterCubit, CounterState>(
          listener: (ctx, state) {
            state.wasIncremented
                ? ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                    content: Text('counter was incremented')
                )
            )
                : ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                    content: Text('counter was decremented')
                )
            );
          },
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                BlocBuilder<CounterCubit, CounterState>(builder: (_, state) {
                  return Text(state.value.toString());
                }),
                ElevatedButton(
                  onPressed: () => BlocProvider.of<CounterCubit>(context).increment(),
                  child: Text('+'),
                ),
                ElevatedButton(
                  onPressed: () => BlocProvider.of<CounterCubit>(context).decrement(),
                  child: Text('-'),
                ),
              ],
            ),
          ),
        )
    );
  }
}
