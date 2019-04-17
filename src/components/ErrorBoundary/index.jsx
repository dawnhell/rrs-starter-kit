import React from 'react';

const ErrorBoundary = ({ error, errorInfo }) => (
  <div>
    <h3>Error happened</h3>

    <details style={{ whiteSpace: 'pre-wrap' }}>
      {error.toString()}

      <br />

      {errorInfo.componentStack}
    </details>
  </div>
);

export default ErrorBoundary;
