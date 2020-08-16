import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Lesson7 extends StatefulWidget {
  @override
  _State createState() => new _State();
}

class _State extends State<Lesson7> {
  List<Step> _steps;
  int _current;

  @override
  void initState() {
    _current = 0;
    _steps = <Step>[
      new Step(title: new Text('Step 1'), content: new Text('bobo'), isActive: true),
      new Step(title: new Text('Step 2'), content: new Text('bobo'), isActive: false),
      new Step(title: new Text('Step 3'), content: new Text('bobo'), isActive: false ),
    ];
  }

  void _stepContinue() {
    setState(() {
      _current++;
      if(_current >= _steps.length) {
        _current = _steps.length - 1;
      }
    });
  }
  void _stepCancel() {
    setState(() {
      _current--;
      if(_current < 0) {
        _current = 0;
      }
    });
  }
  void _stepTap(int index) {
    setState(() {
      _current = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('appbar-title'),
        backgroundColor: Colors.blueGrey,
      ),
      body: new Container(
        padding: new EdgeInsets.all(32),
        child: new Center(
          child: new Stepper(
            steps: _steps,
            type: StepperType.vertical,
            currentStep: _current,
            onStepCancel: _stepCancel,
            onStepContinue: _stepContinue,
            onStepTapped: _stepTap,
          ),
        ),
      ),
    );
  }
}