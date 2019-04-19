import React from 'react';

import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';
import ErrorBoundaryContainer from 'src/containers/ErrorBoundary';

import Router from 'src/routes/router';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />

        <ErrorBoundaryContainer>
          <Router />
        </ErrorBoundaryContainer>

        <Footer />
      </div>
    )
  }
}

export default App;
