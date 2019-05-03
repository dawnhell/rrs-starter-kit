import React from 'react';
import { Provider } from 'react-redux';

import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';
import ErrorBoundaryContainer from 'src/containers/ErrorBoundary';

import Router from 'src/routes/router';
import store from 'src/store';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Header />

        <ErrorBoundaryContainer>
          <Router />
        </ErrorBoundaryContainer>

        <Footer />
      </Provider>
    )
  }
}

export default App;
