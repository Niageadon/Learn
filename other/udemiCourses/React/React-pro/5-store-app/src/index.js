import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {render} from 'react-dom'
import App from './components/app/index'
import ErrorBoundary from './components/error-boundary'

import BookStoreService from './services/bookStore'
import {BookStoreServiceProvider} from './components/bookstore-context/index'
import store from './store'

const bookStoreService = new BookStoreService();
render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookStoreService}>
                <Router>
                    <App/>
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
  document.getElementById('root')
);

