import 'package:flutter/material.dart';
import 'package:flutterblock/2_bloc.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final block = new CounterBlock();

  @override
  void initState() {
    final sub = block.listen(print);
    block.add(CounterEventEnum.INCREMENT);
    block.add(CounterEventEnum.INCREMENT);
    block.add(CounterEventEnum.INCREMENT);
    block.add(CounterEventEnum.INCREMENT);
    print('222');
  }


  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '',
              style: Theme.of(context).textTheme.headline4,
            ),

            ElevatedButton(
              onPressed: () => block.add(CounterEventEnum.INCREMENT),
              child: Text('+'),
            ),
            ElevatedButton(
              onPressed: () => block.add(CounterEventEnum.DECREMENT),
              child: Text('-'),
            ),
          ],
        ),
      ),
    );
  }
}
