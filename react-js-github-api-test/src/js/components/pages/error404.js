import * as React from 'react';
import PageTemplate from '../common/pageTemplate';

class Error404 extends React.Component {
  render() {
    const window = this.props;
    return (
        <PageTemplate>
          <section>
            <h1>WOOOPS! Resource not found at: {window.location.pathname}</h1>
          </section>
        </PageTemplate>
    );
  }
}

export default Error404;
