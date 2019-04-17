import React from 'react';

import ErrorBoundary from 'src/components/ErrorBoundary';

class ErrorBoundaryContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch (error, info) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: info,
    });
  }

  render () {
    if (this.state.hasError) {
      console.log(`Error happened:\n${this.state.error.error}\n${this.state.error.info}`);

      return (<ErrorBoundary error={this.state.error} errorInfo={this.state.errorInfo} />);
    }

    return this.props.children;
  }
}

export default ErrorBoundaryContainer;
