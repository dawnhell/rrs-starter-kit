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

  componentDidCatch (error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render () {
    if (this.state.hasError) {
      return (<ErrorBoundary error={this.state.error} errorInfo={this.state.errorInfo} />);
    }

    return this.props.children;
  }
}

export default ErrorBoundaryContainer;
