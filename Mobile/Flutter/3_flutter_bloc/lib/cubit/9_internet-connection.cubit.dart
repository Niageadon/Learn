import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutterblock/constants/connection-type.enu.dart';

@immutable
class InternetConnectionState {}

class InternetConnected extends InternetConnectionState {
  final InternetConnectionType connectionType;

  InternetConnected({ this.connectionType });
}
class InternetDisconnected extends InternetConnectionState {}
class InternetLoading extends InternetConnectionState {}

class InternetConnectionCubit extends Cubit<InternetConnectionState> {
  final Connectivity connectivity;
  StreamSubscription connectivityStreamSubscription;
  InternetConnectionCubit({ @required this.connectivity }): super(InternetLoading()) {
    connectivityStreamSubscription = connectivity.onConnectivityChanged.listen((event) {
      switch (event) {
        case ConnectivityResult.wifi: {
          emitInternetConnected(InternetConnectionType.WIFI);
          break;
        }
        case ConnectivityResult.mobile: {
          emitInternetConnected(InternetConnectionType.MOBILE);
          break;
        }
        case ConnectivityResult.none: {
          emitInternetDisconnected();
          break;
        }
      }
    });
  }

  void emitInternetConnected(InternetConnectionType type) => emit(InternetConnected(connectionType: type));
  void emitInternetDisconnected() => emit(InternetDisconnected());

  @override
  Future<void> close() {
    connectivityStreamSubscription.cancel();
    return super.close();
  }
}